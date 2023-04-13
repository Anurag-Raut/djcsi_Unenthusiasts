import React from "react";

export const Coupons = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="px-5 pb-5 w-screen font-semibold font text-2xl flex flex-col gap-5">
          <img src="/ettarra.png" className="w-[226.77px]" alt="" /> Your
          Coupons
        </h1>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex flex-col border">
              <div className="flex w-full justify-between items-center">
                <p className="font-semibold text-gray-600 border-y p-3">
                  Coupon 1
                </p>
                <p className="font-semibold text-gray-600 border-y p-3">
                  10% off
                </p>
              </div>
              <div className="flex w-full justify-center text-xs items-center">
                On orders above Rs. 500
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex flex-col border">
              <div className="flex w-full justify-between items-center">
                <p className="font-semibold text-gray-600 border-y p-3">
                  Coupon 2
                </p>
                <p className="font-semibold text-gray-600 border-y p-3">
                  5% off
                </p>
              </div>
              <div className="flex w-full justify-center text-xs items-center">
                On orders above Rs. 200
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex flex-col border">
              <div className="flex w-full justify-between items-center">
                <p className="font-semibold text-gray-600 border-y p-3">
                  Coupon 3
                </p>
                <p className="font-semibold text-gray-600 border-y p-3">
                  10% off
                </p>
              </div>
              <div className="flex w-full justify-center text-xs items-center">
                On orders above Rs. 300
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex flex-col border">
              <div className="flex w-full justify-between items-center">
                <p className="font-semibold text-gray-600 border-y p-3">
                  Coupon 4
                </p>
                <p className="font-semibold text-gray-600 border-y p-3">
                  10% off
                </p>
              </div>
              <div className="flex w-full justify-center text-xs items-center">
                On orders above Rs. 400
              </div>
            </div>
          </div>
        </div>
        <p className="px-5 pb-5 w-screen font-semibold font text-base">Select one</p>
      </div>
    </div>
  );
};