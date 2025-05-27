"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import noice from "@/public/noice.jpg";

export interface TableColumn {
  key: string;
  label: string;
  type?: "text" | "image" | "number";
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  actions?: (row: Record<string, any>) => React.ReactNode;
  loading?: boolean;
}

const ConfigurableTable: React.FC<TableProps> = ({
  columns,
  data,
  actions,
  loading,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#0E0E0E]">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #000302f6 81.09%, #000302f6 100%), url(${noice.src})`,
        }}
        className="bg-cover bg-center bg-no-repeat rounded-3xl"
      >
        <Table className="w-full">
          <TableHeader className="capitalize bg-transparent">
            <TableRow>
              {/* <TableHead className="w-14 text-base text-[#d2d2d5] text-center font-medium border-b border-[#363636]">
                Serial No.
              </TableHead> */}
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className="text-[#d2d2d5] text-left text-base py-5 px-4 font-medium whitespace-nowrap border-b border-[#363636]"
                >
                  {col.label}
                </TableHead>
              ))}
              {actions && (
                <TableHead className="w-20 text-base text-[#d2d2d5] text-center font-medium border-b border-[#363636]">
                  More
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-[#0E0E0E]">
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="text-center py-4 text-[#d2d2d5]"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : data?.length > 0 ? (
              data.map((row, index) => (
                <TableRow
                  key={row.id || index}
                  className="hover:bg-zinc-900 text-[#d2d2d5] text-sm border-b border-[#363636]"
                >
                  {/* <TableCell className="text-center">{index + 1}</TableCell> */}
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      className="text-left text-[#d2d2d5] py-5 px-4"
                    >
                      {col.type === "image" ? (
                        typeof row[col.key] === "string" &&
                        row[col.key] !== "" ? (
                          <Image
                            src={row[col.key]}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : typeof row[col.key]?.src === "string" &&
                          row[col.key].src !== "" ? (
                          <Image
                            src={row[col.key].src}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          "No Image"
                        )
                      ) : (
                        row[col.key] ?? "N/A"
                      )}
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell className="text-center">
                      {actions(row)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ConfigurableTable;
