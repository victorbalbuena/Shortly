import HeroIMG from "./../assets/illustration-working.svg";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-10 py-5 font-poppins flex flex-col-reverse md:flex-row md:justify-between items-center gap-10 md:mb-16">
      <div className="text-center md:text-start">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 ">
          More than just{" "}
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 ">
          {" "}
          shorter links
        </h2>
        <h3 className="text-gray-500 font-medium mb-7 text-lg md:text-xl">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </h3>
        <button
          className="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 text-white font-semibold py-3 px-10 rounded-full"
          onClick={() => window.location.replace("/#shorter-section")}
        >
          Get Started
        </button>
      </div>
      <div>
        <img src={HeroIMG} alt="img" />
      </div>
    </section>
  );
}
