import React from "react";
import Input from "./Input";

const Card = () => {
  return (
    <>
      <div class=" flex justify-center mt-20">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm py-15  px-5">
          <div>
            <h1 className="text-3xl bold">Sign In</h1>
            <p className="py-3">Stay updated on your professional world</p>
          </div>
          <div className="pb-8">
          <div class="form-floating mb-3 xl:w-75">
              <Input
                type="email"
                style="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="floatingInputEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput" class="text-gray-700">
                Email
              </label>
            </div>
            <div class="form-floating mb-3 xl:w-75">
              <Input
                type="password"
                style="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="floatingInputPassword"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput" class="text-gray-700">
                password
              </label>
            </div>
           
            <a href="#!">Forgot password?</a>
            <br />
            <div class="flex space-x-2 justify-center mt-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-28 py-4 text-base bg-blue-600 text-white  leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign In
              </button>
            </div>
            <div class="flex justify-center mt-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="px-14 hover:bg-gray-100 py-3 text-base bg-white-600 text-black flex leading-tight rounded-full border-2 transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1354 5.75C14.0004 5.75 15.4794 6.396 16.4204 7.33L19.0744 4.676C17.3544 3 14.9584 2 12.1354 2C8.1984 2 4.8554 4.148 3.1704 7.302L6.2004 9.7C7.0974 7.39 9.3304 5.75 12.1354 5.75Z"
                    fill="#E94435"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.7708 11.9896C5.7708 11.1806 5.9248 10.4106 6.2008 9.7006L3.1708 7.3016C2.4238 8.7006 1.9998 10.2946 1.9998 11.9896C1.9998 13.7206 2.4098 15.3266 3.1358 16.7256L6.1958 14.3026C5.9248 13.5956 5.7708 12.8206 5.7708 11.9896Z"
                    fill="#F8BB15"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8107 17.3084C14.8667 17.8694 13.6267 18.2294 12.0107 18.2294C9.3627 18.2294 7.1007 16.6654 6.1957 14.3034L3.1357 16.7254C4.7837 19.9024 8.0767 22.0004 12.0107 22.0004C14.7537 22.0004 17.0727 21.1524 18.7877 19.6654L15.8107 17.3084Z"
                    fill="#34A751"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 11.9896C22 11.3086 21.931 10.6436 21.801 9.9996H12V13.9996H18.062L18.018 14.2496C17.784 15.4466 17.068 16.5606 15.811 17.3086L18.788 19.6656C20.818 17.9056 22 15.2466 22 11.9896Z"
                    fill="#547DBE"
                  ></path>
                </svg>
                Sign In with Google
              </button>
            </div>
            <div class="flex justify-center mt-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="px-14 py-3 text-base bg-white-600 text-black flex leading-tight rounded-full border-2 transition duration-150 ease-in-out"
              >
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 2 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="transparent"></rect>
                  <path
                    d="M17.569 12.6254C17.597 15.652 20.2179 16.6592 20.247 16.672C20.2248 16.743 19.8282 18.1073 18.8662 19.5166C18.0345 20.735 17.1714 21.9488 15.8117 21.974C14.4756 21.9986 14.046 21.1799 12.5185 21.1799C10.9915 21.1799 10.5142 21.9489 9.2495 21.9987C7.93704 22.0485 6.93758 20.6812 6.09906 19.4673C4.38557 16.9842 3.0761 12.4508 4.83438 9.39061C5.70786 7.87092 7.26882 6.90859 8.96311 6.88391C10.2519 6.85927 11.4683 7.753 12.2562 7.753C13.0436 7.753 14.5219 6.67821 16.0759 6.83605C16.7265 6.8632 18.5527 7.09947 19.7253 8.81993C19.6309 8.87864 17.5463 10.095 17.569 12.6254ZM15.058 5.1933C15.7548 4.34789 16.2238 3.171 16.0959 2C15.0915 2.04046 13.877 2.67085 13.1566 3.5158C12.5109 4.26404 11.9455 5.46164 12.0981 6.60946C13.2176 6.69628 14.3612 6.03925 15.058 5.1933Z"
                    fill="black"
                  ></path>
                </svg>
                Sign In with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="py-3">New to LinkedIn?</p>
        <a
          href="#"
          className="text-blue-900 ml-5 hover:bg-blue-300 rounded-full py-1 px-2"
        >
          Join Now
        </a>
      </div>
    </>
  );
};

export default Card;
