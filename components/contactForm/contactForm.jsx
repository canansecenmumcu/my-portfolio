"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300"], // İnce ağırlıklar
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send your message.Please try again.");
      console.log(error);
    }
  };

  return (
    <div
      className={`${inter.className} max-w-lg mx-auto p-24 bg-red-50 shadow-md rounded-2xl `}
    >
      {status && <p className=" text-green-600 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name area */}
        <div>
          <span className="block text-black mb-6 font-bold">Hello Canan,</span>
          <textarea
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            rows={4}
            className="w-full text-black bg-transparent border-b-2 border-b-gray-400 outline-none resize-none "
          />
        </div>
        {/* EMmailArea */}
        <div>
          <span className="block text-black mb-4 font-bold">
            My mail address is:
          </span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-black bg-transparent border-b-2 border-b-gray-400 outline-none resize-none mb-6"
          />
        </div>

        {/* Send Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-red-300 hover:bg-blue-200 text-wtite font-bold py-2 px-4 rounded focus:outline-none"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
