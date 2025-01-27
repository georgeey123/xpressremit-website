"use client"
import Image from "next/image"


import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };  

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        <span className="text-green-600">Connect</span> with Our Team
      </h1>
      <p className="text-gray-600 text-center mb-12">
      You can send our team a direct message or locate us on <br /> the Google Map. Call or send us an email and we will <br /> respond as soon as possible. 
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="bg-[#D0D1D1] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Write to Us Directly</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Input your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Input your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message request here"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Aenean commodo ligula eget dolor.
          </p>
        </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 border rounded-lg bg-white shadow-md">
              <div className="bg-red-500 text-white p-2 rounded-md">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Address</p>
                <p className="text-gray-600 text-sm">123 King Street, Accra, Gh.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg bg-white shadow-md">
              <div className="bg-red-500 text-white p-2 rounded-md">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Email</p>
                <p className="text-gray-600 text-sm">support@xpressremit.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg bg-white shadow-md">
              <div className="bg-red-500 text-white p-2 rounded-md">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Phone</p>
                <p className="text-gray-600 text-sm">+1 800 555 1234</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg bg-white shadow-md">
              <div className="bg-red-500 text-white p-2 rounded-md">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Availability</p>
                <p className="text-gray-600 text-sm">Daily 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="relative h-[200px]">
            <Image
              src="/assets/map.png"
              alt="About us logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
