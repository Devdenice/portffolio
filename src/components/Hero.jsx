import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "../assets/image2.png";
import blob from "../../public/images/blob.svg";

const Hero = () => {
  const socialIcons = [
    {
      iconName: <AiOutlineGithub size={"1.5em"} />,
    },
    {
      iconName: <AiOutlineFacebook size={"1.5em"} />,
    },
    {
      iconName: <AiOutlineInstagram size={"1.5em"} />,
    },
    {
      iconName: <AiOutlineLinkedin size={"1.5em"} />,
    },
    {
      iconName: <AiOutlineTwitter size={"1.5em"} />,
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
      <div className="hero min-h-screen bg-base-100 w-11/12 mx-auto mobile:max-md:min-h-full lg:max-3xl:relative ">
        {/* <div className="bg-[url('images/blob.svg')] bg-clip-border bg-no-repeat bg-contain absolute top-0 right-0 blur-xl">
          <div className="w-[430px] h-[500px]"></div>
        </div> */}
        <div className="hero-content flex flex-col lg:flex-row-reverse mobile:max-md:flex-col-reverse mt-0 ">
          <div className="border-0 bg-primary-content w-1 h-[400px] relative top-10 mobile:max-md:hidden"></div>
          <img
            src={Image}
            className="max-w-sm rounded-lg shadow-2xl mobile:max-md:w-9/12"
          />
          <div className="mobile:max-md:flex-row ml-10 mobile:max-md:order-1 mobile:max-md:text-center mobile:max-md:ml-0 mobile:max-md:mt-0">
            <h6 className="text-xl font-bold mobile:max-md:text-2xl mobile:max-md:">
              Hello, <span className="text-primary">My name is</span>
            </h6>
            <h1 className="text-7xl mobile:max-md:text-4xl font-bold ml-[-5px] mobile:max-md:mt-2">
              <h1 className="h-[60px] mobile:max-md:h-[20px] text-primary">
                {typeEffect}
              </h1>
            </h1>

            <p className="py-6 text-base w-9/12 mobile:max-md:mx-auto mobile:max-md:w-11/12 mobile:max-md:text-sm mobile:max-md:mt-2">
              I&apos;m an aspiring Front-End Web Developer with a passion for
              crafting visually appealing and user-friendly websites. I possess
              a strong foundation in HTML, CSS, and JavaScript, coupled with a
              keen eye for design and a commitment to creating seamless digital
              experiences.
            </p>
            <button className="btn mobile:max-md:text-sm btn-outline btn-primary btn-square w-auto rounded-md  px-3 normal-case mobile:max-md:mt-4 ">
              Check out my resume!
            </button>
          </div>
          <div className="relative top-16 mobile:max-md:static mobile:max-md:mt-6">
            <div className="flex flex-col gap-4 mobile:max-md:flex-row mobile:max-md:order-2">
              {socialIcons?.map((socialIcon, index) => (
                <a key={index} href="#">
                  <div className="hover:text-primary hover:animate-zoom-in-zoom-out">
                    {socialIcon.iconName}
                  </div>
                </a>
              ))}
            </div>
            <div className="border-0 h-[100px] w-0.5 mx-auto relative top-10 bg-primary-content mobile:max-md:hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
