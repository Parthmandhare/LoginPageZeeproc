import React from "react";
import logo from "../assets/Logo.png";
import backgroundImg from "../assets/Demo_bg_img.png";

const Login_Demo = () => {
  return (
    <div className="relative min-h-fit w-full ">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="flex flex-col text-white  justify-center py-20 gap-20">
          <img src={logo} alt="Zeeproc" className="w-40" />
          <div className="flex flex-col gap-7">
            <p className="text-3xl font-semibold">
              An AI Powered <br />
              Customer Success Platform
            </p>

            <p className="text-sm">
              Work OS for customer success teams <br />
              driving revenue growth
            </p>
          </div>

          <button
            className="flex justify-center rounded-md py-2"
            style={{ backgroundColor: "#7B61FF" }}
          >
            Schedule a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login_Demo;
