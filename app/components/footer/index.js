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
import Image from "next/image";

export default function Footer() {
  const links = [
    { href: "/PostDetailed", text: "Post Detail" },
    { href: "/PostDetail", text: "Post Detail 2" },
    { href: "/Author", text: "Authors" },
    { href: "/Category", text: "Category" },
    { href: "/Contact", text: "Contact" },
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
            <Image
              src="/images/logo-white.png"
              alt="Logo Image"
              width={180}
              height={50}
              className="w-56 h-auto cursor-pointer"
            />
          </Link>
          <p className="mt-2 text-center md:text-left text-gray-500">
            Welcome to Mezzaluna, a modern and sleek template for your website.
          </p>

          <div className="mt-10 lg:mt-8 md:mt-6 sm:mt-5">
            <h2 className="font-bold text-lg mb-2 text-gray-500 text-center sm:text-left md:text-center lg:text-left">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialIcons.map((social, index) => {
                const { Icon } = social;
                return (
                  <Icon
                    key={index}
                    className="w-5 h-5 cursor-pointer text-gray-500 hover:text-sky-500"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-3 items-center justify-center text-center">
          <h2 className="font-bold text-lg col-span-full">Quick Links</h2>
          {links.map((link, index) => (
            <div key={index} className="mb-1">
              <Link href={link.href} className="text-gray-500 hover:text-sky-500">
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start text-center">
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p className="text-center md:text-left text-gray-500">
            1234 Street Name, City Name, United States
          </p>
          <p className="text-gray-500">+1 123 456 7890</p>
          <p className="text-gray-500"></p>
        </div>
      </div>

      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto px-4 mb-2">
        <span className="text-gray-500">
          © Mezzaluna 2024. By <b>Alif Laksono</b>
        </span>
      </div>
    </footer>
  );
}
