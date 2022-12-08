import React from "react";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import sec1Img from "../assets/1.png";
// import sec2Img from "../assets/2.png";
// import sec3Img from "../assets/3.png";

const Beanz = () => {
  const [ref1, inViewSec1] = useInView({
    threshold: 0.3, // 30% of container in view
  });
  // const sec3Anim = useAnimation();

  const [ref2, inViewSec2] = useInView({
    threshold: 0.5, // 30% of container in view
  });
  const sec2Anim = useAnimation();

  const [ref3, inViewSec3] = useInView({
    threshold: 0.3,
  });
  const bgAnimation = useAnimation();

  useEffect(() => {
    if (inViewSec1) {
      bgAnimation.start({
        backgroundColor: "rgba(188,56,72,0.95)",
        transition: {
          duration: 0.5,
        },
      });
    }

    if (inViewSec3) {
      bgAnimation.start({
        backgroundColor: "rgba(64,164,155,0.95)",
        transition: {
          duration: 0.5,
        },
      });
    }

    if (inViewSec2) {
      sec2Anim.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      bgAnimation.start({
        backgroundColor: "rgba(2,103,188,0.95)",
        transition: {
          duration: 0.5,
        },
      });
    } else {
      sec2Anim.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inViewSec1, inViewSec2, inViewSec3]);

  const fadeInToUp = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <div className="w-screen h-[screen] bg-beanzbg bg-no-repeat bg-contain bg-bottom lg:bg-top lg:bg-cover relative bg-fixed flex flex-col">
        {/* <motion.div className="bg-[#bc3848] bg-opacity-90"> */}
        <motion.div
          initial={{
            backgroundColor: "rgba(188,56,72,0.95)",
          }}
          animate={bgAnimation}
        >
          <div
            ref={ref1}
            // className="w-screen h-screen bg-[#bc3848] bg-opacity-90"
            className="w-screen h-screen"
          >
            <div className="flex">
              <motion.div
                className="mt-[156px] ml-[70px] w-1/2"
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
              >
                <p className="text-white font-black text-6xl">
                  FROM THE GARDEN <br />
                  TO THE ALLEY
                </p>
                <p className="text-white pr-20 text-lg mt-5">
                  A small species that sprouts from the dirt in the garden.
                  While they're earnestly driven by the desire to help their
                  Azuki friends, some BEANZ simply can't resist the allure of
                  the alley...
                </p>
                <div className="flex gap-2 mt-10">
                  <button className="text-white bg-black rounded-3xl py-3 px-5 flex items-center hover:bg-opacity-70">
                    A TRUSTY SIDEKICK{" "}
                    <span className="ml-3">
                      <BsArrowDown />
                    </span>
                  </button>
                  <button className="text-white bg-white bg-opacity-25 rounded-3xl py-3 px-5 flex items-center hover:bg-opacity-50">
                    VIEW GALLERY{" "}
                    <span className="ml-3">
                      <BsArrowRight />
                    </span>
                  </button>
                  <button className="text-white bg-white bg-opacity-25 rounded-3xl py-3 px-5 flex items-center hover:bg-opacity-50">
                    OPENSEA{" "}
                    <span className="ml-3">
                      <BsArrowRight />
                    </span>
                  </button>
                </div>
              </motion.div>
              {/* <div className="w-1/2 h-1/2 bg-sec1img"></div> */}
              {/* <div className="w-1/2 h-1/2 mt-16 mr-16">
              <img src={sec1Img} alt="" className="h-full overflow-scroll" />
            </div> */}
            </div>
          </div>
          <div
            ref={ref2}
            // className="w-screen h-screen bg-[#0267bc] bg-opacity-90"
            className="w-screen h-screen"
          >
            <div className="flex">
              <motion.div
                className="mt-[200px] ml-[70px] w-1/2"
                animate={sec2Anim}
                // variants={fadeInToUp}
                // initial="hidden"
                // whileInView="visible"
              >
                <p className="text-white font-black text-6xl">
                  <span className="text-[#6ca7d8]">(ALMOST)</span> ALWAYS
                  <br />
                  BY YOUR SIDE
                </p>
                <p className="text-white pr-20 text-lg mt-5">
                  Some like to be a sidekick, but others enjoy kicking it alone.
                </p>
                <div className="flex gap-2 mt-10">
                  <button className="text-white bg-black rounded-3xl py-3 px-5 flex items-center hover:bg-opacity-70">
                    FOR BETTER OR WORSE{" "}
                    <span className="ml-3">
                      <BsArrowDown />
                    </span>
                  </button>
                </div>
              </motion.div>
              {/* <div className="w-1/2 h-1/2 mt-16 mr-16">
              <img src={sec2Img} alt="" className="h-full overflow-hidden" />
            </div> */}
            </div>
          </div>
          <div
            ref={ref3}
            // className="w-screen h-screen bg-[#40a49b] bg-opacity-90"
            className="w-screen h-screen"
          >
            <div className="flex">
              <motion.div
                className="mt-[180px] ml-[70px] w-1/2"
                // animate={sec3Anim}
                variants={fadeInToUp}
                initial="hidden"
                whileInView="visible"
              >
                <p className="text-white font-black text-6xl">
                  FOR BETTER...
                  <br />
                  OR WORSE
                </p>
                <p className="text-white pr-20 text-lg mt-5">
                  Being helpful is in their DNA, but some have a slightly
                  different definition of “helpful”...
                </p>
                <div className="flex gap-2 mt-10">
                  <button className="text-white bg-black rounded-3xl py-3 px-5 flex items-center hover:bg-opacity-70">
                    MEET THE SQUAD{" "}
                    <span className="ml-3">
                      <BsArrowDown />
                    </span>
                  </button>
                </div>
              </motion.div>
              {/* <div className="w-1/2 h-1/2 mt-16 mr-16">
              <img src={sec3Img} alt="" className="h-full overflow-hidden" />
            </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Beanz;
