import React from "react";
import EnglishIcon from "../assets/English_Icon.png";
import Logo from "../assets/Logo.png";
import googleIcon from "../assets/google_icon.png";
import Login_Demo from "./Login_Demo";
import backgroundImg from "../assets/Background_Img.png";

const Login = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <img 
          src={backgroundImg} 
          alt="background" 
          className="absolute bottom-0 left-0 z-0 w-2/5 hidden lg:block"

        />

        {/* Main Content */}
        <div className="relative z-10 flex gap-0 mx-3 lg:mx-48 lg:my-8 ">
          <div className="lg:flex w-2/5 hidden ">
            <Login_Demo />
          </div>

          <div className="flex flex-col gap-4 lg:w-2/3 px-10 py-20 md:px-48 lg:px-40 lg:py-10 bg-white">
            {/* logo */}
            <div className="flex justify-start">
              <img src={Logo} alt="Zeeproc" className="w-15 h-7" />
            </div>

            {/* welcome back text   */}
            <div className="flex flex-col justify-start gap-4">
              <p className="text-2xl font-bold">Welcome Back!</p>
              <p className="text-sm">
                Unlock a world of AI Powered Customer Success Platform <br /> with
                a single click! Please login in to your account.
              </p>
              <button className="border-2 border-gray-50 rounded-md flex justify-center gap-2 items-center px-3 py-1 shadow-md">
                <img src={googleIcon} alt="" className="w-5" /> Login with Google
              </button>
            </div>

            {/* Divider with centered "or" */}
            <div className="relative flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-400 border-0" />
              <span className="absolute px-3 bg-white font-medium text-gray-400">
                or
              </span>
            </div>

            {/* Form */}
            <form action="" className="flex flex-col">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>

                <div className="flex justify-between bg-gray-50 border border-gray-300 rounded-lg items-center px-2">
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 text-gray-900 text-sm w-full p-2.5"
                    placeholder="@example.com"
                    required
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex justify-between bg-gray-50 border border-gray-300 rounded-lg items-center px-2">
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 text-gray-900 text-sm w-full p-2.5"
                    placeholder="*******"
                    required
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-sm flex justify-end text-blue-600 font-semibold cursor-pointer">
                Forgot Password?
              </div>

              {/* Submit button   */}
              <button
                type="submit"
                className="rounded-md flex justify-center w-full text-sm font-semibold py-2 mt-10"
                style={{ backgroundColor: "#D2CCEE" }}
              >
                Login
              </button>
            </form>

            <div>
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <span className="font-semibold text-black cursor-pointer">Signup for free</span>
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2 cursor-pointer">
            <img src={EnglishIcon} alt="" className="w-4 h-4" />
            <p className="font-bold" style={{ fontSize: "12px" }}>
              EN
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;