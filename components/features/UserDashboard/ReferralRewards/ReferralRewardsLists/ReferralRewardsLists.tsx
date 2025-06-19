"use client";
import ConfigurableTable, {
  TableColumn,
} from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

const ReferralRewardsLists = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const rawData = [
    {
      email: "test@test.com",
      join_date: "2021-01-01",
      prev_date: "2021-01-01",
    },
    {
      email: "test@test.com",
      join_date: "2021-01-01",
      prev_date: "2021-01-01",
    },
    {
      email: "test@test.com",
      join_date: "2021-01-01",
      prev_date: "2021-01-01",
    },
  ];
  const columns: TableColumn[] = [
    { key: "email", label: "Email", type: "text" },
    { key: "join_date", label: "Join Date", type: "text" },
    { key: "prev_date", label: "Previous Date", type: "text" },
  ];
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };
  const paginatedData = rawData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div>
      <h1 className="text-2xl font-bold pb-4">Referral Log</h1>
      <ConfigurableTable columns={columns} data={paginatedData} />

      <div className="flex justify-center items-center ">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <button className="flex items-center gap-2">
              <IoMdArrowRoundForward />
            </button>
          }
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(rawData.length / itemsPerPage)}
          forcePage={currentPage}
          previousLabel={
            <button className="flex items-center gap-2">
              <IoMdArrowRoundBack />
            </button>
          }
          renderOnZeroPageCount={null}
          containerClassName="custom-pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default ReferralRewardsLists;
