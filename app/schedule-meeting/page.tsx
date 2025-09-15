"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Landing_page/Footer";
import Link from "next/link";

export default function ScheduleMeeting() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
{/* MTQJGWSPY9SE6B7JQER8S1ZM recovery code */}
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setResult({ success: false, message: "Please fill name, email, date and time." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult({ success: true, message: `Booking confirmed (sid: ${data.sid}). A WhatsApp message was sent.` });
        setFormData({ name: "", email: "", date: "", time: "", message: "" });
      } else {
        // Show Twilio / server error message if available
        const errMsg = data?.error || "Server rejected the request";
        setResult({ success: false, message: `Failed: ${errMsg}` });
      }
    } catch (err: any) {
      setResult({ success: false, message: `Network error: ${err?.message || err}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: 150,
          paddingBottom: 64,
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Schedule a Meeting</h1>
          <p className="text-lg opacity-90">
            Book a consultation with our healthcare experts to discuss your project needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-2 text-[#2e8f7f]">Select Date & Time</h2>
            <p className="text-gray-600 mb-8">Choose a convenient time for your consultation</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3db1a2] focus:border-[#3db1a2] text-gray-700"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3db1a2] focus:border-[#3db1a2] text-gray-700"
                  placeholder="Email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3db1a2] focus:border-[#3db1a2] text-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3db1a2] focus:border-[#3db1a2] text-gray-700"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3db1a2] focus:border-[#3db1a2] text-gray-700"
                  placeholder="Tell us about your project or specific requirements"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2e8f7f] transition-colors flex-1 ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Sending..." : "Confirm Booking"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: "", email: "", date: "", time: "", message: "" });
                    setResult(null);
                  }}
                  className="bg-[#efefef] text-[#2e8f7f] border border-[#2e8f7f] font-semibold py-3 px-8 rounded-full hover:bg-[#f7fffd] transition-colors flex-1"
                >
                  Cancel
                </button>
              </div>

              {result && (
                <div className={`mt-4 text-center ${result.success ? "text-green-600" : "text-red-600"}`}>
                  {result.message}
                </div>
              )}

              <p className="text-sm text-gray-500 text-center mt-6">
                By scheduling this meeting, you agree to our privacy policy and terms of service.
                A confirmation will be sent to your email address.
              </p>
            </form>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2e8f7f]">What to Expect</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="text-[#3db1a2] mr-2">•</span><span>30-minute consultation with our healthcare technology experts</span></li>
              <li className="flex items-start"><span className="text-[#3db1a2] mr-2">•</span><span>Discussion of your specific needs and challenges</span></li>
              <li className="flex items-start"><span className="text-[#3db1a2] mr-2">•</span><span>Initial assessment and project scope overview</span></li>
              <li className="flex items-start"><span className="text-[#3db1a2] mr-2">•</span><span>Q&A session about our process and methodologies</span></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
