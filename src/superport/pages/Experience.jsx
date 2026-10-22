const Experience = ({
  stats = [],
  roles = [],
  philosophyTitle,
  philosophyText,
}) => {
  return (
    <section
      id="experience"
      className="py-28 text-white"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Professional <span className="text-green-400">Experience</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A snapshot of my teaching roles, responsibilities, and impact.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl text-center
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              "
              style={{ backgroundColor: "#1E2939" }}
            >
              <h3 className="text-4xl font-extrabold text-green-400">{s.number}</h3>
              <p className="mt-2 text-gray-300">{s.title}</p>
            </div>
          ))}
        </div>

        {/* ROLE-BASED SECTIONS */}
        <div className="space-y-14">
          {roles.map((role, index) => (
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
                  {role.title}
                </h3>
                <p className="text-gray-400 mt-1">
                  {role.organization} · {role.duration}
                </p>
                <p className="mt-5 text-gray-300 leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                {role.points.map((point, i) => (
                  <span key={i}>✔ {point}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PHILOSOPHY */}
        <div
          className="
            mt-24 p-10 rounded-2xl text-center
            border border-white/10
            transition-all duration-300
            hover:-translate-y-2
            hover:border-green-400
            hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)]
          "
          style={{ backgroundColor: "#1E2939" }}
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            {philosophyTitle}
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {philosophyText}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
