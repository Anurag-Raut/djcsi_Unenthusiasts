import React from "react";

export const Login = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-mono flex font-extrabold justify-center">
        Login
      </div>
      <form className="">
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
            id="email"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
