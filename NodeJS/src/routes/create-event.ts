import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/generate-slug";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { BadRequest } from "../_errors/bad_request";

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events",
    {
      schema: {
        summary: "Create a new event",
        tags: ["events"],
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable(),
        }),
        response: {
          201: z.object({
            title: z
              .string({
                invalid_type_error: "Title must be a string",
              })
              .min(4),
            details: z.string().nullable(),
            maximumAttendees: z.number().nullable(),
            slug: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      console.log(request.body);

      const { title, details, maximumAttendees } = request.body;
      const slug = generateSlug(title);

      const eventWithSameSlug = await prisma.event.findFirst({
        where: {
          slug,
        },
      });

      if (eventWithSameSlug) {
        throw new BadRequest("Event with same slug already exists");
      }

      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        },
      });

      return reply.status(201).send(event);
    }
  );
}
