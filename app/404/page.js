import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <Header />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-4/5 lg:w-3/5 mx-auto py-28 px-4 md:px-0 space-y-20 md:space-y-0 md:space-x-20">
        <div className="w-full md:w-1/2 mt-20 sm:mt-0 md:mt-20">
          <div className="text-center sm:text-left leading-relaxed">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-8">
              The page you&aposre looking for might have been removed or is
              temporarily unavailable.
            </p>
          </div>
          <p className="sm:mb-2 mb-2">Try these:</p>
          <ul className="list-disc ml-8 mb-6">
            <li>Check the web address for errors.</li>
            <li>Refresh the page or try again later.</li>
            <li>
              Go to our{" "}
              <Link href="/" className="text-blue-500 hover:underline">
                Home Page
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/404.svg"
            alt="404 Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
