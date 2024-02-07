"use client";
import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  const [faqData, setFaqData] = useState([
    {
      question: "1. How can I reset my password?",
      answer:
        'To reset your password, simply click on the "Forgot Password" link on the login page. You will receive instructions via email on how to reset your password.',
      open: false,
    },
    {
      question: "2. What is your refund policy for?",
      answer:
        "We offer refunds within 30 days of purchase for products that meet our refund policy criteria. Please review our refund policy page for detailed information on eligibility and the refund process.",
      open: false,
    },
    {
      question: "3. Can I change my subscription plan?",
      answer:
        "Yes, you can change your subscription plan at any time by logging into your account and selecting the desired plan from the subscription settings.",
      open: false,
    },
    {
      question: "4. How can I contact customer support?",
      answer:
        " You can contact our customer support team by filling out the contact form on this page or by sending an email to support@example.com. We strive to respond to all inquiries within 24 hours.",
      open: false,
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqData(
      faqData.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  const [policyData, setPolicyData] = useState([
    {
      title: "1. Information We Collect",
      content:
        "We collect personal information that you voluntarily provide to us, such as your name, email address, and any other information you choose to provide when contacting us.",
      open: false,
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information you provide to respond to your inquiries, provide customer support, and improve our products and services. We may also use your information to send you promotional emails or newsletters if you have opted in to receive them.",
      open: false,
    },
    {
      title: "3. Disclosure of Information",
      content:
        "We may disclose your personal information to third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also disclose your information when we believe it is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.",
      open: false,
    },
    {
      title: "4. Data Security",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      open: false,
    },
    {
      title: "5. Updates to Privacy Policy",
      content:
        "We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page, and the revised Privacy Policy will take effect immediately upon posting.",
      open: false,
    },
  ]);

  const togglePolicy = (index) => {
    setPolicyData(
      policyData.map((policy, i) =>
        i === index ? { ...policy, open: !policy.open } : policy
      )
    );
  };
  return (
    <>
      <Header />
      <div className="container w-full md:w-4/5 lg:w-3/4 px-4 md:px-0 mx-auto">
        {/* contact page */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Form Section</h2>

          <form className="space-y-4">
            <input
              className="w-full p-2 border rounded-md bg-sky-950 text-gray-500 focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full p-2 border rounded-md bg-sky-950 text-gray-500 focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full p-2 border rounded-md bg-sky-950 text-gray-500 focus:outline-none"
              placeholder="Message"
            ></textarea>
            <button className="w-full p-2 bg-sky-500 text-white rounded hover:bg-sky-400 transition ease-in-out duration-150">
              Submit
            </button>
          </form>
        </div>
        {/* FAQ Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">FAQ Section</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm">
                <button
                  className="flex justify-between"
                  style={{ alignItems: "flex-start" }}
                  onClick={() => toggleAnswer(index)}
                >
                  <p>{faq.question}</p>
                  {faq.open ? (
                    <FiChevronUp size={20} className="ml-1" />
                  ) : (
                    <FiChevronDown size={20} className="ml-1" />
                  )}
                </button>
                {faq.open && (
                  <p className="mt-2 opacity-80 ml-4 leading-loose">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Privacy Policy */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <div className="space-y-4">
            {policyData.map((policy, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm">
                <button
                  className="flex justify-between items-center"
                  onClick={() => togglePolicy(index)}
                >
                  <h3>{policy.title}</h3>
                  {policy.open ? (
                    <FiChevronUp size={20} className="ml-1" />
                  ) : (
                    <FiChevronDown size={20} className="ml-1" />
                  )}
                </button>
                {policy.open && (
                  <p className="mt-2 opacity-80 ml-4 leading-loose">
                    {policy.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
