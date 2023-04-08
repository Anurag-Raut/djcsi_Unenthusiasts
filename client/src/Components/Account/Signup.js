import React from "react";

export const Signup = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-mono flex font-extrabold justify-center">
        Signup
      </div>
      <form>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Your full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <button type="submit" className="shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">Signup</button>
      </form>
    </div>
  );
};
