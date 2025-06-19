import React from "react";
import { X } from "lucide-react";

interface MessageModalProps {
  message: any;
  onClose: () => void;
}

const MessageModal = ({ message, onClose }: MessageModalProps) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md  flex items-center justify-center z-50">
      <div className="bg-[#000503] border border-[#00e889] rounded-lg p-6 max-w-xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="text-white">
          <h2 className="text-xl font-bold mb-4 text-[#00e889]">
            {message.subject}
          </h2>

          <div className="mb-4 flex items-center gap-2">
            <p className="text-sm text-gray-400 mb-1">From:</p>
            <p className="text-sm text-white">{message.email}</p>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <p className="text-sm text-gray-400 mb-1">Date:</p>
            <p className="text-sm text-white">{message.date || "N/A"}</p>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <p className="text-sm text-gray-400 mb-1">Name:</p>
            <p className="text-sm text-white">{message.Name || "N/A"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Message:</p>
            <p className="text-white">
              {message.message ||
                message.content ||
                "No message content available."}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
