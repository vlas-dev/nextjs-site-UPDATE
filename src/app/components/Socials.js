import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="hidden lg:flex  fixed bottom-0 w-auto top-1/2 transform -translate-y-1/2 flex-col items-center justify-center z-50">
      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="m-2"
      >
        <div className="border border-gray-900 rounded-lg p-2 text-gray-900 bg-gray-100">
          <FaWhatsapp size={40} />
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="m-2"
      >
        <div className="border border-gray-900 rounded-lg p-2 text-gray-900 bg-gray-100">
          <FaInstagram size={40} />
        </div>
      </a>
    </div>
  );
}
