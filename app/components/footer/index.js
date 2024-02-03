"use client";
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
  const links = [
    { href: "/", text: "Home" },
    { href: "/PostDetail", text: "Post Detail" },
    { href: "/authors", text: "Authors" },
    { href: "/category", text: "Category" },
    { href: "/404", text: "404" },
  ];

  const socialIcons = [
    { Icon: FaFacebook },
    { Icon: FaTwitter },
    { Icon: FaInstagram },
    { Icon: FaLinkedin },
    { Icon: FaGithub },
  ];
  return (
    <footer className="mt-14 border-t border-black">
      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <img
              src="./images/logo-white.png"
              alt="Logo Image"
              className="w-64 h-auto cursor-pointer"
            />
          </Link>
          <p className="mt-2 text-white text-center md:text-left opacity-80">
            Welcome to Mezzaluna, a modern and sleek template for your website.
          </p>

          <div className="mt-4">
            <h2 className="font-bold text-lg mb-2 opacity-80">Follow Us</h2>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const { Icon } = social;
                return (
                  <Icon
                    key={index}
                    className="w-5 h-5 cursor-pointer opacity-80"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-1">
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-black"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p className="text-gray-500">
            1234 Street Name, City Name, United States
          </p>
          <p className="text-gray-500">+1 123 456 7890</p>
          <p className="text-gray-500"></p>
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
