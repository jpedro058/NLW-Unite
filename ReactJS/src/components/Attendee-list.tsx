import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconButton } from "./Icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export function AttendeeList() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(attendees.length / 10);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToPreviousPage() {
    setPage((prev) => prev - 1);
  }

  function goToNextPage() {
    setPage((prev) => prev + 1);
  }

  function goToLastPage() {
    setPage(Math.ceil(attendees.length / 10));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendee List</h1>

        <div className="px-3 py-2 w-72 border border-white/10  rounded-lg text-sm text-left flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm"
            type="text"
            placeholder="Search for Members"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Table>
        <thead className="border-b border-white/10">
          <tr>
            <TableHeader style={{ width: "48px" }}>
              <input
                className="bg-black/20 border border-white/10 size-4 rounded"
                type="checkbox"
              />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Registration date</TableHeader>
            <TableHeader>Check-in date</TableHeader>
            <TableHeader style={{ width: "64px" }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <tr
              key={attendee.id}
              className="border-b border-white/10 hover:bg-white/5 
                transition-colors duration-200 ease-out
                "
            >
              <TableCell>
                <input
                  className="bg-black/20 border border-white/10 size-4 rounded checked:bg-orange-400"
                  type="checkbox"
                />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Showing 10 of {attendees.length} entries
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span className="mr-2">
                  Page {page} of {""}
                  {Math.ceil(attendees.length / 10)}
                </span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === maxPage}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === maxPage}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
