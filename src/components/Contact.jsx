import React, {useState} from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

function Contact() {
    const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mrbajblg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#040404] text-[#D7D9CE] py-24 px-8 flex flex-col items-center"
    >
      {/* Başlık */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 relative"
      >
        Contact
      </motion.h1>

      {/* İçerik Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* İletişim Kartları */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          {/* Mail */}
          <div className="bg-[#D7D9CE] text-[#040404] p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <Mail size={30} />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>ahmetfarukyasar0@gmail.com</p>
            </div>
          </div>
          {/* Linkedin */}
          <div className="bg-[#D7D9CE] text-[#040404] p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <Linkedin size={30} />
            <div>
              <h2 className="text-xl font-semibold">Linkedin</h2>
              <p>www.linkedin.com/in/ahmetfarukyasar</p>
            </div>
          </div>
          {/* Lokasyon */}
          <div className="bg-[#D7D9CE] text-[#040404] p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <MapPin size={30} />
            <div>
              <h2 className="text-xl font-semibold">Location</h2>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="bg-[#D7D9CE] text-[#040404] p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            className="p-3 rounded-lg border border-gray-400 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            className="p-3 rounded-lg border border-gray-400 focus:outline-none"
            required
          />
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-[#040404] text-[#D7D9CE] py-3 rounded-xl font-medium hover:bg-[#2a2a2a] transition cursor-pointer"
          >
            Send
          </button>
          <div className="font-extralight text-center">
            {status && <p className="mt-4 text-sm">{status}</p>}
          </div>
          
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
