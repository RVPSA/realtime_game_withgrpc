import React from "react";

const GameBoard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row  justify-evenly w-full">
        <div className="flex flex-col items-center justify-center pt-5">
          <h3>Welcome</h3>
          <h1>Akesh</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <h3>Game Id</h3>
          <h1>game-1</h1>
        </div>
      </div>
      {/* <div className=" w-full grid grid-cols-4 gap-5">
        <div className="col-span-2 place-items-center">
          <h3>Welcome</h3>
          <h1>Akesh</h1>
        </div>
        <div className="col-span-2 justify-items-center">
          <h3>Game Id</h3>
          <h1>game-1</h1>
        </div>
      </div> */}

      <div className="m-10 bg-[#0c1017] p-10 rounded-md text-white text-center shadow-2xl flex flex-col justify-between w-3/6">
        <div className="flex flex-row justify-around pb-5">
          <div className="w-32 h-32 border-2 border-[#173347] bg-[#111e2a]">
            1
          </div>
          <div className="w-32 h-32 border-2 border-[#173347] bg-[#111e2a]">
            1
          </div>
          <div className="w-32 h-32 border-2 border-[#173347] bg-[#111e2a]">
            1
          </div>
        </div>
        <div className="flex flex-row justify-around pb-5">
          <div className="w-32 h-32 border-2 border-[#8e3939] bg-[#381e22]">
            2
          </div>
          <div className="w-32 h-32 border-2 border-[#8e3939] bg-[#381e22]">
            2
          </div>
          <div className="w-32 h-32 border-2 border-[#8e3939] bg-[#381e22]">
            2
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="w-32 h-32 bg-[#12161f]">3</div>
          <div className="w-32 h-32 bg-[#12161f]">3</div>
          <div className="w-32 h-32 bg-[#12161f]">3</div>
        </div>
      </div>
      {/* <div className='grid grid-cols-3 grid-rows-12 gap-2 '> */}
      {/* <div className=' border-2 border-[#173347] bg-[#111e2a] row-span-4'>1</div>
            <div className=' border-2 border-[#8e3939] bg-[#381e22] '>1</div>
            <div className=''>1</div>
            <div className='col-start-1 col-end-3 bg-[#12161f] row-span-4'>2</div>
            <div className='col-start-3 col-end-5'>2</div>
            <div className='col-start-5 col-end-7'>2</div>
            <div className='col-start-1 col-end-3 row-span-4 bg-[#12161f]'>3</div>
            <div className='col-start-3 col-end-5'>3</div>
            <div className='col-start-5 col-end-7'>3</div> */}
      {/* </div> */}
    </div>
  );
};

export default GameBoard;
