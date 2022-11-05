import React from "react";
import zuri from "./assets/images/zuri.png";
import logo from "./assets/images/logo.png";
const Contact = () => {
  return (
    <div className="flex justify-center items-center py-10 mx-5 lg:mx-28">
      <div className="w-screen flex justify-center items-center flex-col ">
        <div className="lg:w-1/2 mb-20 ">
          <h1 className="font-semibold text-gray-900 text-4xl pb-2">
            Contact Me
          </h1>
          <p className="font-normal text-lg text-gray-600 pb-6">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          <form action="">
            <div className="lg:grid lg:grid-cols-2 gap-x-2">
              <div className="form-control">
                <label
                  htmlFor="first_name"
                  className="font-medium text-sm text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                  className="border rounded-lg w-full border-gray-300 px-3 py-2 mt-1 mb-4"
                />
              </div>
              <div className="form-control">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                  className="border rounded-lg w-full border-gray-300 px-3 py-2 mt-1 mb-4"
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                className="border rounded-lg w-full border-gray-300 px-3 py-2 mt-1 mb-4"
              />
            </div>

            <div className="form-control ">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                className="border rounded-lg w-full border-gray-300 px-3 py-2 mt-1 mb-4"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>
            <div className="flex justify-center items-start gap-2 mb-8 lg:justify-start">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="m-2 border-gray-300 rounded-md"
              />
              <label htmlFor="terms">
                You agree to providing your data to robiah who may contact you.
              </label>
            </div>

            <button
              id="btn__submit"
              className="bg-blue-600 w-full rounded-lg text-semibold text-white text-base py-2"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="w-full">
          <hr />

          <div className=" text-left lg:flex justify-between items-center w-full ">
            <img src={zuri} alt="" srcset="" className="mb-2 mt-10" />
            <p className="font-normal test-base text-gray-500 mb-2">
              HNG Internship 9 Frontend Task
            </p>
            <img src={logo} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
