import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData?: {
    orderNo: string;
    name: string;
    period: string;
    amount: string;
    countdown: number;
    status: React.ReactNode;
  };
}

const OrderDetailsModal = ({ isOpen, onClose, orderData }: OrderDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-[#000503] rounded-lg shadow-xl w-full max-w-xl mx-4 transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-4 fade-in-0 zoom-in-95">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Order Details</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-600 transition-colors duration-200"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="p-6">
          {orderData ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Order No.
                  </label>
                  <p className="text-sm text-gray-400">{orderData.orderNo}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Name
                  </label>
                  <p className="text-sm text-gray-400">{orderData.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Period
                  </label>
                  <p className="text-sm text-gray-400">{orderData.period}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Amount
                  </label>
                  <p className="text-sm text-gray-400">{orderData.amount}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Countdown
                  </label>
                  <p className="text-sm text-gray-400">{orderData.countdown} days</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Status
                  </label>
                  <div className="mt-1">{orderData.status}</div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">No order data available</p>
          )}
        </div>
          
        <div className="flex justify-end gap-3 p-6 border-t border-gray-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;