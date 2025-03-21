import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div>
        <form className="flex mt-10 p-5">
          <div className="bg-gray-700 w-1/2 flex flex-col p-10 gap-5 rounded-l-xl">
            <div>
              <h3>Task Title</h3>
              <input className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2 border-gray-400 text-xl" type="text" placeholder="Make a ui design" name="" id="" />
            </div>
            <div>
              <h3>Date</h3>
              <input  className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="date" name="" id="" />
            </div>
            <div>
              <h3>Asign to</h3>
              <input  className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input  className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="text" placeholder="design, dev, etc" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-gray-700 w-1/2 p-5 placeholder:p-2  rounded-r-xl">
            <h3>Description</h3>
            <textarea  className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl"  name="" cols={30} rows={10} id=""></textarea>
            <button className="mt-3 w-3/4 bg-green-300 p-4 rounded-xl">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask