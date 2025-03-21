import React from "react";
import AcceptTask from "./AcceptTask";
import Newtask from "./Newtask";
import CopmleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] flex items-center justify-start gap-5 flex-nowrap w-full overflow-x-auto py-5  mt-10"
    >
      {data.tasks.map((e, idx)=>{
        if(e.active){
          return <AcceptTask key={idx} data={e}/>
        }
        if(e.new_task){
          return <Newtask key={idx} data={e}/>
        }
        if(e.completed){
          return <CopmleteTask key={idx} data={e}/>
        }
        if(e.failed){
          return <FailedTask key={idx} data={e}/>
        }
})}
    </div>
  );
};

export default TaskList;
