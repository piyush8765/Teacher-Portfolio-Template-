const About = ({
  heading = "About Me",
  description1,
  description2,
  stats = [],
}) => {
  return (
    <section
      id="about"
      className="py-28 text-white"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            {heading.split(" ")[0]}{" "}
            <span className="text-green-400">
              {heading.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            {description1}
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            {description2}
          </p>
        </div>

        {/* RIGHT STATS CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                p-8 rounded-2xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
              "
              style={{ backgroundColor: "#1E2939" }}
            >
              <h3 className="text-4xl font-extrabold text-green-400">
                {item.count}
              </h3>

              <p className="mt-2 text-gray-300 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
