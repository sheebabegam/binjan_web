import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import WebDesign from "./assets/Icons/WebDesign";
import MobileApp from "./assets/Icons/MobileApp";
import BrandId from "./assets/Icons/BrandId";

function App() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const mapIcons = [
    {
      id: 1,
      heading: "Website Design",
      project: "76 Projects",
      icon: <WebDesign />,
    },
    {
      id: 2,
      heading: "Mobile App Design",
      project: "63 Projects",
      icon: <MobileApp />,
    },
    {
      id: 3,
      heading: "Brand Identity",
      project: "47 Projects",
      icon: <BrandId />,
    },
  ];
  return (
    <div>
      <div className="bg-[#f8f7f1] w-full h-[640px]">
        <nav
          className="w-full bg-[#f8f7f1] p-16"
          data-aos-easing="linear"
          data-aos-duration="1300"
          data-aos="slide-down"
        >
          <div className="flex justify-around">
            <div>
              <h1 className="text-2xl">Binjan</h1>
            </div>

            <div>
              <ul
                className="flex justify-between h-full px-10 uppercase gap-6 font-medium pr-0 pl-0
            max-[768px]:mt-10 max-[768px]:block max-[768px]:bg-white max-[768px]:p-10 max-[768px]:pr-0 max-[768px]:rounded-md"
              >
                <li className="max-[768px]:pb-8">Services</li>
                <li className="max-[768px]:pb-8">Experience</li>
                <li className="max-[768px]:pb-8">Portfolio</li>
                <li className="max-[768px]:pb-8">Testimonials</li>
                <li className="flex justify-center flex-wrap gap-3 max-[768px]:pb-8">
                  <p className="pr-2">+001 (313) 345 678</p>
                  <div className="bg-white p-3 rounded-full mt-[-10px] shadow-[0_4px_4px_#0000000d] ">
                    <svg
                      stroke="currentColor"
                      fill="#286f6c"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                      <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div className="invisible max-[768px]:visible">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </div> */}
          </div>
        </nav>
        {/* <div className="container mx-auto px-36 bg-[#ffa500]">
        <p>abc</p>
      </div> */}
        <div className="container mx-auto px-36 bg-[#f8f7f1]">
          <div className="flex justify-between">
            <span className="text-5xl font-bold" data-aos="fade-right">
              Hey There, <br /> I'm Binjan.
            </span>
            <span className="text-xl font-medium" data-aos="fade-left">
              I design beautiful simple <br /> <br /> things, And I love what i
              do
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="bg-[url('https://youtubebinjanportfolio.pages.dev/splash.png')] bg-no-repeat overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src="https://youtubebinjanportfolio.pages.dev/person.png"
                alt="img"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos="slide-up"
              />
            </div>
          </div>

          <div className="bg-[#f8f7f1] top-[42%] absolute ">
            <a href="mailto:zainkeepscode@gmail.com" className="text-[#ffa500]">
              zainkeepscode@gmail.com
            </a>
          </div>

          <div className="flex justify-between mt-[-140px]">
            <div className="flex justify-center" data-aos="fade-right">
              <div>
                <p className="text-6xl font-bold pr-4">10</p>
              </div>
              <div>
                <span className="text-2xl font-normal pr-4">
                  Years <br /> Experience
                </span>
              </div>
            </div>

            <div className="text-center" data-aos="fade-left">
              <img
                src="https://youtubebinjanportfolio.pages.dev/certificate.png"
                alt="image"
                className="m-auto pb-4"
              />
              <p>CERTIFIED PROFATIONAL</p>
              <p>UI/UX DESIGNER</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 px-52">
        <div className="container mx-auto pl-48 bg-white  my-8 flex flex-col">
          {mapIcons.map((data, i) => (
            <div
              className="border border-solid border-[#E7E7E7] rounded-[20px] p-6 gap-8 mb-[20px]"
              data-aos="fade-right"
            >
              <div className="flex justify-start ">
                <div className="flex items-center justify-center pr-6">
                  {data.icon}
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{data.heading}</span>
                  <span className="font-medium text-xl leading-[50px]">
                    {data.project}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
