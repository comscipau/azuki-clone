import React from "react";
import videoBG from "../assets/beanz2.mp4";
import mobileBG from "../assets/mobilemeep2.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        loop
        muted
        src={videoBG}
        className="w-full h-screen object-cover hidden md:block"
      />
      <img
        src={mobileBG}
        alt="mobileBG"
        className="w-full h-screen object-cover block md:hidden"
      />
    </div>
  );
};

export default Home;
