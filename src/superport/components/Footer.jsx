const Footer = ({
  brandName = "TeacherPortfolio",
  ownerName,
  description,
  location,
  phone,
  email,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-green-400">
                {brandName.split(" ")[0]}
              </span>{" "}
              {brandName.split(" ")[1] || ""}
            </h2>

            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-lg text-gray-300">
              {["Home", "About", "Education", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-green-400 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>📍 {location}</li>
              <li>📞 {phone}</li>
              <li>✉️ {email}</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-400">
          <p className="text-lg">
            © {year}{" "}
            <span className="text-green-400 font-semibold">
              {ownerName}
            </span>
            . All rights reserved.
          </p>

          <p className="text-sm mt-2">
            Designed & Built with ❤️ using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
