"use client"
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-black">
      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Link href="/">
            <img
              src="./images/logo-white.png"
              alt="Logo Image"
              className="w-64 h-auto cursor-pointer"
            />
          </Link>
        </div>
        {/* <div>
          <div className="flex justify-between">
            <div>
              <h2 className="mb-2">Features</h2>
              <ul className="list-none text-current space-y-2">
                <li>
                  <Link href="/tags" className="no-underline">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="no-underline">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="no-underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">Features</h2>
              <ul className="list-none text-current space-y-2">
                <li>
                  <Link href="/tags" className="no-underline">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="no-underline">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="no-underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">Features</h2>
              <ul className="list-none text-current space-y-2">
                <li>
                  <Link href="/tags" className="no-underline">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="no-underline">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="no-underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div>
          <h2 className="font-bold text-lg mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebook className="w-5 h-5 cursor-pointer" />
            <FaTwitter className="w-5 h-5 cursor-pointer" />
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 cursor-pointer" />
            <FaGithub className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto px-4 mb-2">
        <span>
          © Mezzaluna 2024. By <b>Alif Laksono</b>
        </span>
      </div>
    </footer>
  );
}
