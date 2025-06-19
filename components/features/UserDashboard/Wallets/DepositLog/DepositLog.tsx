"use client";
import ConfigurableTable, {
  TableColumn,
} from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

const DepositLog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
    const formatStatus = (status:string) => {
        const lowerStatus = status.toLowerCase();
        let text= "";
        let className = "";

        switch(lowerStatus){
            case "pending":
                text = "Pending Payment";
                className = "bg-[#FF00041A] text-[#FF0004]";
                break;
            case "paid":
                text = "Passed";
                className = "bg-[#00E8891A] text-[#22C55E]";
                break;
            default:     
        }

        return (
            <span className={`px-4 py-2 rounded-md text-xs font-medium ${className}`}>
                {text}
            </span>
        )
       
    }
    const remarkFormat = (remark:string) => {
        return <div>
            <input 
                type="text" 
                defaultValue={remark}
                className="w-full rounded-lg border border-[#363636] bg-[#0e0e0e] p-3 text-white focus:border-[#00e889] focus:outline-none placeholder:text-xs lg:placeholder:text-base" 
            />
        </div>
    }
  const data = [
    {
      created_at: "2021-01-01",
      orderNo: "1234567890",
      amount: 1000,
      payment: "Bank Transfer",
      status: "paid",
      remark: "This is a remark",
    },
    {
      created_at: "2021-01-01",
      orderNo: "1234567890",
      amount: 1000,
      payment: "Bank Transfer",
      status: "paid",
      remark: "This is a remark",
    },
    {
      created_at: "2021-01-01",
      orderNo: "1234567890",
      amount: 1000,
      payment: "Bank Transfer",
      status: "paid",
      remark: "This is a remark",
    },
    {
      created_at: "2021-01-01",
      orderNo: "1234567890",
      amount: 1000,
      payment: "Bank Transfer",
      status: "paid",
      remark: "This is a remark",
    },
  ];

  const formattedData = data.map((item) => ({
    ...item,
    status: formatStatus(item.status),
    remark: remarkFormat(item.remark),
}));
  const columns: TableColumn[] = [
    { key: "created_at", label: "Date", type: "text" },
    { key: "orderNo", label: "Order No.", type: "text" },
    { key: "amount", label: "Amount", type: "number" },
    { key: "payment", label: "Payment", type: "text" },
    { key: "status", label: "Status", type: "text" },
    { key: "remark", label: "Remark", type: "text" },
  ];

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };
  const paginatedData = formattedData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const tableActions = (row: any) => {
    return (
      <div>
        <button className="bg-[#1B1B1B] text-[#00E889] px-4 py-2 rounded-md hover:bg-[#00E889]/20 transition-all duration-300 cursor-pointer">
          View
        </button>
      </div>
    );
  };

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold pb-4">Deposit Log</h1>
      <ConfigurableTable
        columns={columns}
        data={paginatedData}
        loading={false}
        actions={tableActions}
      />
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
          pageCount={Math.ceil(formattedData.length / itemsPerPage)}
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

export default DepositLog;
