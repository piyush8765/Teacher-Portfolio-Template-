export default function Hero({
  name,
  role,
  description,
  profileImage,
}) {
  return (
    <section
      id="home"
      className="pt-32 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-green-400">{name}</span>
          </h1>

          <h2 className="mt-4 text-2xl text-gray-300">
            {role}
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-300 transition">
              Contact Me
            </button>

            <button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-bold hover:bg-green-400 hover:text-black transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-green-400/10 border-4 border-green-400 flex items-center justify-center overflow-hidden">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
