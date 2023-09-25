import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen border-2 border-red-600 overflow-x-clip z-10">
        {/* Circle Top Right */}
        <div className="z-0 absolute w-72 h-72 right-0 top-0  max-2xl:right-[-100px] max-2xl:top-[-100px] xxs:max-sm:w-52 xxs:max-sm:h-52 rounded-full bg-[#5CC2E6] blur-3xl opacity-40"></div>

        {/* Circle Middle Right */}
        <div className="z-0 absolute w-[500px] h-[500px] left-0 bottom-0 max-2xl:left-[-20rem] xxs:max-sm:w-[390px] xxs:max-sm:h-[390px] xxs:max-lg:bottom-[10rem]  rounded-full bg-[#5CC2E6] blur-3xl opacity-40"></div>

        {/* Cirlce Bottom */}
        <div className="z-0 absolute w-80 h-80 bottom-0 right-72 max-2xl:bottom-[-15rem] xxs:max-lg:right-[-5rem] lg:max-2xl:right-[9rem] lg:max-2xl:w-[400px] lg:max-2xl:h-[400px] rounded-full bg-[#5CC2E6] blur-3xl opacity-40"></div>

        {/* Scribble Shape */}
        <div className="z-0 absolute right-0 w-[500px] h-[500px] xxs:max-sm:w-[300px] xxs:max-sm:h-[300px] sm:max-md:w-[400px] sm:max-md:h-[400px] max-2xl:right-[-100px] max-2xl:top-[-100px] md:max-2xl:right-[-160px] md:max-2xl:top-[-150px] bg-[url('src/images/ssscribble.svg')] bg-no-repeat bg-cover opacity-60"></div>
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
