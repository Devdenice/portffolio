import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useTypewriter } from "react-simple-typewriter";
import Image from "../assets/image2.png";

const Hero = () => {
  const socialIcons = [
    {
      iconName: <AiOutlineGithub size={"1.7em"} />,
    },
    {
      iconName: <AiOutlineFacebook size={"1.7em"} />,
    },
    {
      iconName: <AiOutlineInstagram size={"1.7em"} />,
    },
    {
      iconName: <AiOutlineLinkedin size={"1.7em"} />,
    },
    {
      iconName: <AiOutlineTwitter size={"1.7em"} />,
    },
  ];

  const [typeEffect] = useTypewriter({
    words: ["DENICE PELO"],
    loop: {},
    cursor: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    cursorStyle: "_",
    cursorBlinking: true,
  });

  return (
    <>
      <div className="w-full h-full border-2 border-blue-400 flex items-center justify-center">
        <div className="z-10 w-11/12 mx-auto ">
          <div className="flex xxs:max-lg:flex-col gap-4 xxs:max-sm:gap-16 items-center">
            <div className="flex flex-col xxs:max-lg:flex-row gap-2 xxs:max-lg:order-3">
              {socialIcons?.map((socialIcon, index) => (
                <a key={index} href="#">
                  <div className="hover:text-primary hover:scale-125 hover:ease-in-out hover:duration-700">
                    {socialIcon.iconName}
                  </div>
                </a>
              ))}
            </div>
            <div className="grow xxs:max-lg:text-center xxs:max-lg:order-1 lg:max-xl:ml-5 flex flex-col gap-2 xxs:max-lg:items-center">
              <h4 className="xxs:max-xs:text-2xl xs:max-sm:text-3xl sm:max-md:text-3xl md:max-lg:text-4xl lg:max-xl:text-2xl xl:max-2xl:text-3xl font-medium">
                Hello!
              </h4>
              <h1 className="xxs:max-xs:text-3xl xs:max-sm:text-4xl sm:max-md:text-4xl md:max-lg:text-5xl lg:max-xl:text-6xl xl:max-2xl:text-7xl   font-bold">
                I&apos;m{" "}
                <span>
                  <span> </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39B5E0] via-[#1E98C2] to-[#A3DDF1] animate-text-shine">
                    Denice Pelo
                  </span>
                </span>
              </h1>
              <p className="text-base xs:max-sm:text-lg xs:max-sm:px-8 sm:max-md:text-lg sm:max-md:px-20 md:max-lg:text-xl md:max-lg:px-28 lg:max-xl:text-lg  lg:max-xl:w-8/12 xl:max-2xl:text-xl xl:max-2xl:w-10/12 ">
                I&apos;m an aspiring Front-End Web Developer with a passion for
                crafting visually appealing and user-friendly websites.
              </p>
              <button className=" max-w-3/12 lg:w-36  btn btn-info">
                Download CV
              </button>
            </div>
            <div className="grow xxs:max-lg:order-2">
              <img
                className="xxs:max-xs:w-80 xs:max-sm:w-96 sm:max-md:max-w-md md:max-lg:max-w-lg lg:max-xl:max-w-sm xl:max-2xl:max-w-lg mx-auto"
                src={Image}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full font-sans lg:max-3xl:h-full flex">
        <div className="mobile:max-md:w-10/12 md:max-lg:w-11/12 lg:max-3xl:w-11/12 mx-auto items-center flex justify-center">
          <div className="z-20 flex mobile:max-lg:flex-col mobile:max-sm:gap-4 sm:max-md:gap-8 md:max-lg:gap-8 lg:max-3xl:flex-row items-center">
            <div className="flex mobile:max-lg:order-3 mobile:max-lg:justify-center lg:max-3xl:flex-col lg:max-3xl:items-center lg:max-3xl:h-screen lg:max-3xl:justify-center gap-4">
              <div className="w-0.5 h-40 bg-primary mobile:max-lg:hidden origin-top animate-linedown"></div>
              {socialIcons?.map((socialIcon, index) => (
                <a key={index} href="#">
                  <div className="hover:text-primary hover:scale-125 hover:ease-in-out hover:duration-700">
                    {socialIcon.iconName}
                  </div>
                </a>
              ))}
              <div className="w-0.5 h-40 bg-primary mobile:max-lg:hidden origin-top animate-linedown delay-[3s]"></div>
            </div>
            <div className="flex flex-col gap-1 mobile:max-lg:order-1 sm:max-md:gap-3 lg:max-3xl:gap-2 mobile:max-lg:text-center lg:max-3xl:w-7/12 lg:max-3xl:ml-10 ">
              <h4 className="mobile:max-sm:text-2xl sm:max-md:text-4xl md:max-lg:text-4xl lg:max-3xl:text-3xl font-bold">
                Hello!
              </h4>
              <h1 className="mobile:max-sm:text-4xl sm:max-md:text-5xl md:max-lg:text-6xl lg:max-3xl:text-6xl font-extrabold">
                I&apos;m
                <span>
                  <span> </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39B5E0] via-[#1E98C2] to-[#A3DDF1] animate-text-shine">
                    Denice Pelo
                  </span>
                </span>
              </h1>
              <p className="mobile:max-sm:text-base sm:max-md:text-lg md:max-lg:text-xl lg:max-3xl:text-base lg:max-3xl:w-8/12 px-2 md:max-lg:px-28 lg:max-3xl:px-0">
                I&apos;m an aspiring Front-End Web Developer with a passion for
                crafting visually appealing and user-friendly websites. I
                possess a strong foundation in HTML, CSS, and JavaScript,
                coupled with a keen eye for design and a commitment to creating
                seamless digital experiences.
              </p>
            </div>
            <div className="w-full mobile:max-lg:order-2 lg:max-3xl:max-w-md ">
              <img
                className="w-9/12 mx-auto sm:max-md:w-8/12 md:max-lg:w-7/12 lg:max-3xl:w-10/12"
                src={Image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
