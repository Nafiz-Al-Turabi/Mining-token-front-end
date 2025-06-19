"use client"
import ConfigurableTable, { TableColumn } from '@/components/ui/Tables/ConfigurableTable/ConfigurableTable';
import React, { useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';

const ProfitList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const amountFormatter = (amount: number) => {
        if(amount){
            return <span>-${amount}</span>
        }
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });

    }

    const rawData=[
            {
                create_at: "2021-01-01 12:00:00",
                type: "User withdrawal",
                amount: 100,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 200,
                balance: 2000,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            },
            
    ]

    const formattedData = rawData.map((item)=>({
        ...item,
        amount: amountFormatter(item.amount),
        balance: amountFormatter(item.balance),
    }))
    const columns: TableColumn[] = [
        { key: "create_at", label: "Create Date", type: "text" },
        { key: "type", label: "Type", type: "text" },
        { key: "amount", label: "Amount", type: "number" },
        { key: "balance", label: "Balance", type: "number" },
      ];
      const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
      };
      const paginatedData = formattedData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
    return (
        <div>
            <h1 className="text-2xl font-bold pb-4">Profit</h1>
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

export default ProfitList;