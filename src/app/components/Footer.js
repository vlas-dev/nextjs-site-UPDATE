import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 ">
      <div className=" mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Link href="/terms">
            <span className="mx-4 text-base hover:text-gray-100">Terms</span>
          </Link>
          <Link href="/privacy">
            <span className="mx-4 text-base hover:text-gray-100">Privacy</span>
          </Link>
        </div>
        <div className="flex justify-center space-x-4 text-gray-400">
          <p className="flex justify-center items-center">
            <FaMapMarkerAlt className="mr-2" />
            Address: 123 Business Street, City, Country
          </p>
          <p className="flex justify-center items-center">
            <FaEnvelope className="mr-2" />
            Email: support-email@synergy.com
          </p>
          <p className="flex justify-center items-center">
            <FaPhoneAlt className="mr-2" />
            Phone: +1 (123) 456-7890
          </p>
        </div>
        <p className="mt-6 text-gray-500 text-sm text-center">
          © 2023 Synergy, LLC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
