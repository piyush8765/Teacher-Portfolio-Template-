import { useState } from "react";

const Contact = ({
  title,
  subtitle,
  phone,
  whatsapp,
  location,
  availability,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 text-white"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {title.split(" ")[0]}{" "}
            <span className="text-green-400">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* FORM */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ backgroundColor: "#1E2939" }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#101828] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-green-400"
              />

              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[#101828] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-green-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-[#101828] border border-white/10 rounded-lg px-4 py-3 h-32 outline-none focus:border-green-400"
              />

              <button
                type="submit"
                className="w-full bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="space-y-6">

            {/* Location (Google Maps backend) */}
            <div
              className="p-6 rounded-2xl border border-white/10 hover:border-green-400 transition cursor-pointer"
              style={{ backgroundColor: "#1E2939" }}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location
                  )}`,
                  "_blank"
                )
              }
            >
              <h4 className="text-xl font-bold text-green-400">📍 Location</h4>
              <p className="text-gray-300 mt-2">{location}</p>
            </div>

            <div
              className="p-6 rounded-2xl border border-white/10 hover:border-green-400 transition"
              style={{ backgroundColor: "#1E2939" }}
            >
              <h4 className="text-xl font-bold text-green-400">⏰ Availability</h4>
              <p
                className="text-gray-300 mt-2"
                dangerouslySetInnerHTML={{ __html: availability }}
              />
            </div>

            <div
              className="p-6 rounded-2xl border border-white/10 hover:border-green-400 transition cursor-pointer"
              style={{ backgroundColor: "#1E2939" }}
              onClick={() => window.open(`tel:${phone}`)}
            >
              <h4 className="text-xl font-bold text-green-400">📞 Call</h4>
              <p className="text-gray-300 mt-2">{phone}</p>
            </div>

            <div
              className="p-6 rounded-2xl border border-white/10 hover:border-green-400 transition cursor-pointer"
              style={{ backgroundColor: "#1E2939" }}
              onClick={() => window.open(`https://wa.me/${whatsapp}`, "_blank")}
            >
              <h4 className="text-xl font-bold text-green-400">💬 WhatsApp</h4>
              <p className="text-gray-300 mt-2">Chat with me</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
