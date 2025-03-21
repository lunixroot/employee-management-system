import React from "react";

const Tasklistnumber = ({data}) => {
  return (
    <div className="flex gap-1 min-h-4 flex-wrap w-[100%]  justify-between items-center">
      <div className="flex flex-col justify-center items-start bg-red-300 w-1/5 mt-10 rounded-xl py-10 px-5">
        <h1 className="text-4xl">{data.task_summary.new_task}</h1>
        <h1 className="text-3xl">New Task</h1>
      </div>
      <div className="flex w-1/5 flex-col justify-center items-start bg-blue-300  mt-10 rounded-xl py-10 px-5">
        <h1 className="text-4xl">{data.task_summary.active}</h1>
        <h1 className="text-3xl">Active Tasks</h1>
      </div>
      <div className="flex w-1/5 flex-col justify-center items-start bg-green-300  mt-10 rounded-xl py-10 px-5">
        <h1 className="text-4xl">{data.task_summary.completed}</h1>
        <h1 className="text-3xl">Completed Task</h1>
      </div>
      <div className="flex w-1/5 flex-col justify-center items-start  bg-yellow-300  mt-10 rounded-xl py-10 px-5">
        <h1 className="text-4xl">{data.task_summary.failed}</h1>
        <h1 className="text-3xl">Failed Task</h1>
      </div>
    </div>
  );
};

export default Tasklistnumber;
