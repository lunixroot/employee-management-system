import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=" h-full w-[300px] bg-green-300 p-5 rounded-2xl flex-shrink-0">
        <div className="flex justify-between items-center">
          <h3 className=" text-sm bg-red-600 py-0.5 px-3 rounded-xl">High</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <div>
          <h2 className="mt-5 text-2xl font-semibold">
            {Data.title}
          </h2>
          <p className="mt-2 text-sm">
            {Data.discription}
          </p>
          <div className='flex justify-between gap-2 mt-5'>
            <button className='bg-red-400 py-1 px-2 text-sm'>Failed</button>
          </div>
        </div>
      </div>
  )
}

export default FailedTask