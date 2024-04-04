import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendee List</h1>

        <div className="px-3 py-1.5 w-72 border border-white/10  rounded-lg text-sm text-left flex items-center gap-3">
          <Search size={16} className="text-emerald-400" />
          <input
            className="bg-transparent w-full flex-1 outline-none"
            type="text"
            placeholder="Buscar participante"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full ">
          <thead className="border-b border-white/10">
            <tr>
              <th
                style={{ width: "64px" }}
                className="py-3 px-4 text-sm text-left font-semibold"
              >
                <input
                  className="bg-black/20 border border-white/10 size-4 rounded accent-orange-400"
                  type="checkbox"
                />
              </th>
              <th className="py-3 px-4 text-sm text-left font-semibold">
                Code
              </th>
              <th className="py-3 px-4 text-sm text-left font-semibold">
                Name
              </th>
              <th className="py-3 px-4 text-sm text-left font-semibold">
                Registration date
              </th>
              <th className="py-3 px-4 text-sm text-left font-semibold">
                Check-in date
              </th>
              <th
                style={{ width: "64px" }}
                className="py-3 px-4 text-sm text-left font-semibold"
              ></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr
                key={index}
                className="border-b border-white/10 hover:bg-white/5 
                transition-colors duration-200 ease-out
                "
              >
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <input
                    className="bg-black/20 border border-white/10 size-4 rounded checked:bg-orange-400"
                    type="checkbox"
                  />
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">1</td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Joao Victor
                    </span>
                    <span>joaovitor@email.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  20/10/2021
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  20/10/2021
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4  " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                className="py-3 px-4 text-sm text-left text-zinc-300"
                colSpan={3}
              >
                Showing 10 of 20 entries
              </td>
              <td
                className="py-3 px-4 text-sm  text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span className="mr-2">Page 1 of 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4  " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4  " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4  " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4  " />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
