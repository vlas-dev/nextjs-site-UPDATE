import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 w-screen">
      <div className=" mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Link href="/terms">
            <span className="mx-4 text-base hover:text-gray-100">Terms</span>
          </Link>
          <Link href="/privacy">
            <span className="mx-4 text-base hover:text-gray-100">Privacy</span>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 text-gray-400">
         
          <p className="flex items-center mx-auto lg:mx-0">
            <FaEnvelope className="mr-2" />
            support-email@synergy.com
          </p>
          <p className="flex items-center mx-auto lg:mx-0">
            <FaMapMarkerAlt className="mr-2" />
            123 Street, City, Country
          </p>
          <p className="flex  items-center mx-auto lg:mx-0">
            <FaPhoneAlt className="mr-2" />
            +1 (123) 456-7890
          </p>
        </div>
        <p className="mt-6 text-gray-500 text-sm text-center">
          © 2024 Synergy, LLC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
