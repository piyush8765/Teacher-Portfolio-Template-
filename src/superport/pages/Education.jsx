const Education = ({
  heading = "My Education",
  subheading,
  educationList = [],
}) => {
  return (
    <section
      id="education"
      className="py-28 text-white"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {heading.split(" ")[0]}{" "}
            <span className="text-green-400">
              {heading.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="
                p-8 rounded-2xl border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)]
              "
              style={{ backgroundColor: "#1E2939" }}
            >
              <h3 className="text-2xl font-bold text-green-400">
                {edu.degree}
              </h3>

              <p className="text-gray-300 mt-2">
                {edu.institution}
              </p>

              <p className="text-gray-400 mt-1">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
