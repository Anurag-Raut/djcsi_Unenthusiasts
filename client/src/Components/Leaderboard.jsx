import React from "react";

export const Leaderboard = () => {
  const users = [
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
    { name: "Rahul", points: 100 },
  ];

  return (
    <div className="h-screen w-screen p-4 py-8 flex justify-center items-center bg-[#AB877D]">
      <div className="w-full h-full shadow-lg shadow-black bg-[#000] rounded-xl">
        <div className="flex flex-col gap-3">
          <h1 className="px-5 w-full font-semibold font text-3xl text-white p-10">
            Leaderboard
          </h1>
          <div className="text-white">
            todo categories
          </div>
          <div className="px-5 w-full overflow-y-hidden">
            <div className="bg-[#AB877D] overflow-auto shadow-xl rounded-xl">
              <div className="flex w-full justify-between items-center p-3">
                <div className="basis-1/2">
                  <p className="font-semibold">Name</p>
                </div>
                <div className="basis-1/2 flex items-center justify-between">
                  <p className="font-semibold">Points</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 w-full overflow-y-hidden">
            <div className="bg-[#AB877D] overflow-auto h-96 shadow-xl rounded-xl">
              {users.map((user, index) => {
                return index % 2 === 0 ? (
                  <div className="flex w-full bg-[#DCB9A3] justify-between items-center p-3">
                    <div className="basis-1/2">
                      <p className="font-semibold">{user.name}</p>
                    </div>
                    <div className="basis-1/2 flex items-center justify-between">
                      <p className="font-semibold">{user.points}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full justify-between items-center p-3">
                    <div className="basis-1/2">
                      <p className="font-semibold">{user.name}</p>
                    </div>
                    <div className="basis-1/2 flex items-center justify-between">
                      <p className="font-semibold">{user.points}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
