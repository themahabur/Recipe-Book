import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" border-2 border-gray-300 rounded-lg px-10 py-2 m-4">
      <div className="md:flex justify-between items-center p-6 space-y-4">
        <div>
          <h1 className="text-xl font-bold">
            RECIPE <span className="text-green-600">BOOK</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-medium mb-3">Contact</h3>
          <div className="flex items-center gap-2 ">
            <IoIosCall size={24} />
            <p>01700000000</p>
          </div>
          <div className="flex items-center gap-2 ">
            <MdOutlineAlternateEmail size={24} />
            <p>contact@recipebook.com</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="https://www.facebook.com/mahabur.rahman21">
            <FaFacebook size={24} />
          </Link>
          <Link to="https://www.youtube.com/@MahaburRahmanOfficial">
            <FaYoutube size={24} />
          </Link>
          <Link to="https://x.com/Soikot21">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>

      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Recipe Book
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
