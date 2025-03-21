import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

const Admindashbord = (p) => {
  // console.log(data);
  return (
    <div className=" w-full bg-[#1c1c1c] p-10">
      <Header changeUser={p.changeUser} data={p.data}/>
      <CreateTask data={p.data} />
      <AllTask  data={p.data}/>
    </div>
  );
};

export default Admindashbord;
