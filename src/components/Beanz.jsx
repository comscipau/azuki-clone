import React from "react";

const Beanz = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <div className="w-screen h-[screen] bg-beanzbg bg-no-repeat bg-contain bg-bottom lg:bg-top lg:bg-cover relative bg-fixed flex flex-col">
        <div className="w-screen h-screen bg-[#bc3848] bg-opacity-90">
        </div>
        <div className="w-screen h-screen bg-[#0267bc] bg-opacity-90">
        </div>
        <div className="w-screen h-screen bg-[#40a49b] bg-opacity-90">
        </div>
      </div>
    </div>
  );
};

export default Beanz;
