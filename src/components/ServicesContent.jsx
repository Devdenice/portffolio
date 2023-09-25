import WebDesign from "../../src/images/Services Image/web-design-svgrepo-com.svg";
import WebDev from "../../src/images/Services Image/web-svgrepo-com.svg";
import ResponsiveWeb from "../../src/images/Services Image/web-page-website-svgrepo-com.svg";
import Python from "../../src/images/Services Image/python-svgrepo-com.svg";

const ServicesContent = () => {
  const contentInfo = [
    {
      image: WebDesign,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus urna sed.",
    },
    {
      image: WebDev,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus urna sed.",
    },
    {
      image: ResponsiveWeb,
      title: "Responsive Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus urna sed.",
    },
    {
      image: Python,
      title: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus urna sed.",
    },
  ];
  return (
    <>
      <div className="relative border-2 border-blue-700 w-full h-screen mobile:max-md:min-h-screen font-sans flex items-center justify-center">
        <div className="w-11/12 mobile:max-md:w-10/12 mx-auto border-2 border-blue-500 ">
          <h1 className="text-3xl font-bold mobile:max-md:text-center mb-6">
            Services
          </h1>
          <div className="border-2 grid grid-cols-4 mobile:max-md:grid-cols-1 mx-auto gap-2   ">
            {contentInfo?.map((info, index) => (
              <div
                key={index}
                className="bg-base-200 mobile:max-sm:max-w-[220px] sm:max-md:max-w-[300px] rounded-2xl mx-auto backdrop-blur-sm hover:shadow-2xl  bg-gradient-to-t from-[#5CC2E6] from-[-190%] hover:from-[-900%] to-transparent to-[40%] hover:to-[300%]"
              >
                <div className="text-left p-3 flex flex-col items-center justify-center">
                  <img
                    className="w-20 object-contain mobile:max-sm:w-16"
                    src={info.image}
                    alt=""
                  />
                  <div className="text-md mobile:max-sm:text-sm font-semibold mt-3">
                    {info.title}
                  </div>
                  <div className="text-sm mobile:max-sm:text-xs mt-1 text-center">
                    {info.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesContent;
