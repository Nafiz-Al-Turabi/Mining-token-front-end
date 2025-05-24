"use client";

import React from "react";

export default function PurchaseNotice() {
  return (
    <section className=" bg-[#000503] text-white px-4 py-12 ">
      <div className="max-w-[1320px] mx-auto px-0 xl:px-4 ">
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem]  font-semibold">
          Purchase <span className="bg-gradient-to-t from-[#067549] to-[#00E889] bg-clip-text text-transparent">Notice</span>
        </h1>
        <p className=" text-gray-300">
          Please review the following content before placing an order. We want
          to ensure that you fully understand your rights and obligations when
          using the HEXminer cloud mining platform.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-2xl bg-gradient-to-t from-[#067549] to-[#00E889] bg-clip-text text-transparent font-bold mb-4">
              Contract Activation and Post-Sale
            </h2>
            <p className="text-gray-300 mt-2">
              Once the order is confirmed and payment is made, the contract will
              take effect immediately and will be automatically allocated to the
              mining site through HEXminer's intelligent system. Once the
              contract starts, it cannot be canceled or modified until it
              expires. Please ensure that you fully understand all terms before
              placing an order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl bg-gradient-to-t from-[#067549] to-[#00E889] bg-clip-text text-transparent font-bold mb-4">
              Earnings Settlement and Principal Refund
            </h2>
            <p className="text-gray-300 mt-2">
              This is a promotional contract requiring a minimum purchase of 2.
              After placing the order, the contract will automatically run.
              Earnings will be settled every 24 hours and credited to your
              account balance until the contract expires. After the contract
              expires, the principal will be refunded to your account balance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl bg-gradient-to-t from-[#067549] to-[#00E889] bg-clip-text text-transparent font-bold mb-4">
              Funds Security and Compliance Management
            </h2>
            <p className="text-gray-300 mt-2">
              We take strict measures to ensure the safety of your funds and
              comply with anti-money laundering regulations. During the contract
              period, your funds will be managed and supervised by a
              professional third party to ensure security and compliance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl bg-gradient-to-t from-[#067549] to-[#00E889] bg-clip-text text-transparent font-bold mb-4">
              Data Privacy and Protection
            </h2>
            <p className="text-gray-300 mt-2">
              We are committed to protecting your personal data, ensuring that
              all data collection, storage, and usage processes comply with
              privacy protection regulations (such as GDPR). We will only
              process your data for legitimate, specific purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
