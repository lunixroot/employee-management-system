import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

const Admindashbord = () => {
  return (
    <div className="h-screen w-full bg-[#1c1c1c] p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admindashbord;
