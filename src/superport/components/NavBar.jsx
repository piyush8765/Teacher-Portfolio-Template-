import { useState, useEffect } from "react";

const NavBar = ({
  brand = "TeacherPortfolio",
  links = [],
  ctaText = "Hire Me",
}) => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActive(id);

    const yOffset = -90;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (let link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPos >= offsetTop &&
          scrollPos < offsetTop + offsetHeight
        ) {
          setActive(link.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">

        {/* LOGO */}
        <h1
          className="text-2xl font-extrabold text-white cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-white">
            {brand.split(" ")[0]}
          </span>
          <span className="text-green-400">
            {brand.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer select-none"
            >
              <span
                className={`transition ${
                  active === item.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.label}
              </span>

              {/* UNDERLINE */}
              <span
                className={`
                  absolute left-0 -bottom-2 h-[2px] w-full
                  bg-green-400 rounded-full
                  transition-transform duration-300
                  ${active === item.id ? "scale-x-100" : "scale-x-0"}
                `}
                style={{ transformOrigin: "left" }}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-300 transition"
        >
          {ctaText}
        </button>

      </div>
    </nav>
  );
};

export default NavBar;
