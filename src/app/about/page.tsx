import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-black mt-10 text-white py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <img
            src="https://pagedone.io/asset/uploads/1717741205.png"
            alt="Developer profile"
            className="rounded-2xl shadow-xl object-cover w-full max-h-[500px] mx-auto hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold">Hi Im Sanjay Choudhary</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Im a passionate <span className="text-indigo-400">Frontend Developer</span> experienced in building responsive, high-performance web apps using <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
            <div className="text-center min-w-[100px]">
              <h3 className="text-3xl font-bold">1.5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center min-w-[100px]">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-gray-400 text-sm">Projects Done</p>
            </div>
            <div className="text-center min-w-[100px]">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md space-y-3 text-sm text-gray-300">
            <p><span className="text-white font-semibold">Name:</span> Sanjay Choudhary</p>
            <p><span className="text-white font-semibold">Email:</span> sjat6375697673@gmail.com</p>
            <p><span className="text-white font-semibold">Phone:</span> 6376024125 - 9376893981</p>
          </div>

          <div>
            <Link href={"/"}>
              <button className="w-full cursor-pointer sm:w-fit px-6 py-3 bg-white rounded-lg text-black text-sm font-semibold shadow-md transition duration-300">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
