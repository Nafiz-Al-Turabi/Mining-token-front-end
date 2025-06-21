"use client";
import ConfigurableTable, {
  TableColumn,
} from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import OrderDetailsModal from "../OrderDetailsModal/OrderDetailsModal";

const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const itemsPerPage = 3;

  const formatStatus = (status: string) => {
    const lowerStatus = status.toLowerCase();
    let text = "";
    let className = "";

    switch (lowerStatus) {
      case "pending":
        text = "Pending";
        className = "bg-[#fffb001a] text-[#fffb00]";
        break;
      case "completed":
        text = "Completed";
        className = "bg-[#00E8891A] text-[#22C55E]";
        break;
      default:
        text = status;
        className = "bg-gray-200 text-gray-700";
    }

    return (
      <span className={`px-4 py-2 rounded-md text-xs font-medium ${className}`}>
        {text}
      </span>
    );
  };

  const amountFormatter = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const rawData = [
    {
      orderNo: "URDH17464808424702",
      name: "Free daily",
      period: "1 month",
      amount: 30.0,
      countdown: 10,
      status: "pending",
    },
    {
      orderNo: "URDH17464838424702",
      name: "Free daily",
      period: "1 day",
      amount: 60.0,
      countdown: 10,
      status: "pending",
    },
    {
      orderNo: "URDH17464808424752",
      name: "Free daily",
      period: "7 days",
      amount: 50.0,
      countdown: 10,
      status: "completed",
    },
    {
      orderNo: "URDH17464808424703",
      name: "Free weekly",
      period: "1 week",
      amount: 25.0,
      countdown: 15,
      status: "pending",
    },
    {
      orderNo: "URDH17464838424703",
      name: "Paid daily",
      period: "3 days",
      amount: 100.0,
      countdown: 5,
      status: "completed",
    },
    {
      orderNo: "URDH17464808424753",
      name: "Paid monthly",
      period: "1 month",
      amount: 120.0,
      countdown: 3,
      status: "pending",
    },
  ];

  const formattedData = rawData.map((item) => ({
    ...item,
    status: formatStatus(item.status),
    amount: amountFormatter(item.amount),
  }));

  const columns: TableColumn[] = [
    { key: "orderNo", label: "Order No.", type: "text" },
    { key: "name", label: "Name", type: "text" },
    { key: "period", label: "Period", type: "text" },
    { key: "amount", label: "Amount", type: "number" },
    { key: "countdown", label: "Countdown", type: "number" },
    { key: "status", label: "Status", type: "text" },
  ];

  const tableActions = (rowData: any) => {
    return (
      <div>
        <button 
          className="px-8 py-2 bg-red-600/20 text-red-600 rounded-lg cursor-pointer hover:bg-red-600/30 transition-colors duration-200"
          onClick={() => {
            setSelectedOrder(rowData);
            setIsModalOpen(true);
          }}
        >
          Details
        </button>
      </div>
    );
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const paginatedData = formattedData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-2xl font-bold pb-4">Orders</h1>
      <ConfigurableTable
        columns={columns}
        data={paginatedData}
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

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedOrder(null);
        }}
        orderData={selectedOrder}
      />
    </div>
  );
};

export default OrdersList;
