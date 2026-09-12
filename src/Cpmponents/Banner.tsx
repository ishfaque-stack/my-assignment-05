
import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-16">

        {/* Left Content */}
        <div className="w-1/2">

          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
            Explore frontend, backend, database, and tooling options.
            <br />
            Compare them side by side, and put together the stack that's
            <br />
            right for your next project.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">

            <button
              className="
                rounded-md
                bg-pink-500
                px-5
                py-2.5
                text-xs
                font-medium
                text-white
                transition
                hover:bg-pink-600
              "
            >
              Explore Technologies
            </button>

            <button
              className="
                rounded-md
                border
                border-slate-200
                bg-white
                px-5
                py-2.5
                text-xs
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
              "
            >
              Learn More
            </button>

          </div>
        </div>


        {/* Right Image */}
        <div className="flex w-1/2 justify-center">

          <div className="flex h-72 w-72 items-center justify-center">

            <img
              src={banner}
              alt="Development Stack"
              className="h-full w-full object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;