const Skills = ({
  heading = "My Skills",
  subheading,
  skillBlocks = [],
}) => {
  return (
    <section
      id="skills"
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

        {/* Skills Blocks */}
        <div className="space-y-14 max-w-6xl mx-auto">
          {skillBlocks.map((block, index) => (
            <div
              key={index}
              className="
                grid md:grid-cols-2 gap-10 p-10 rounded-2xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)]
              "
              style={{ backgroundColor: "#1E2939" }}
            >
              <div>
                <h3 className="text-2xl font-bold text-green-400">
                  {block.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                {block.points.map((point, i) => (
                  <span key={i}>✔ {point}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
