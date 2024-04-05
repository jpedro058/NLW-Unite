import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "eedbd364-140c-47c5-8fca-004618b49f73",
      title: "My first event",
      slug: "my-first-event",
      details: "This is my first event",
      maximumAttendees: 100,
    },
  });
}

seed().then(() => {
  console.log("Seed completed successfully");
  process.exit(0);
});
