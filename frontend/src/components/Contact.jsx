import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    query: "",
  });
  return (
    <div className="w-full flex flex-col gap-20 items-center justify-center">
      <h1 className="text-4xl font-bold contact relative z-10">Contact Us</h1>

      <div className="bg-white/15 rounded-2xl w-[60%] border border-gray-600 py-5 flex flex-col gap-8 items-center justify-center">
        <fieldset className="w-3/4 border border-white/30 rounded-2xl py-1">
          <legend className="mx-3 text-white/60 text-[15px]">Full Name</legend>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="overflow-hidden w-full bg-transparent border-none outline-none px-3 pb-1 text-white/50"
            placeholder="John Doe"
          />
        </fieldset>

        <fieldset className="w-3/4 border border-white/30 rounded-2xl py-1">
          <legend className="mx-3 text-white/60 text-[15px]">Email</legend>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="overflow-hidden w-full bg-transparent border-none outline-none px-3 pb-1 text-white/50"
            placeholder="john@example.com"
          />
        </fieldset>

        <fieldset className="w-3/4 border border-white/30 rounded-2xl py-1">
          <legend className="mx-3 text-white/60 text-[15px]">Query</legend>
          <textarea
            type="email"
            rows={10}
            value={formData.quer}
            onChange={(e) =>
              setFormData({ ...formData, query: e.target.value })
            }
            className="overflow-hidden w-full bg-transparent border-none outline-none px-3 pb-1 text-white/50"
            placeholder="write your query...."
          ></textarea>
        </fieldset>

        <button className="bg-blue-700 w-[75%] py-2 rounded-xl font-bold">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
