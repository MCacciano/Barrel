import React from 'react';



function App() {
  return (
    <div className='bg-barrel-green'>
      <div className='container mx-auto pt-20 px-16 align-items-center '>
        <div className=' grid grid-cols-3 bg-barrel-green gap-4  '>
          <div className='m-4 p-1 h-32 w-23 justify-center bg-red-300 flex'>
            <div className='flex flex-col basis-1/2'>
              <div className='basis-1/2 '>
                FLAG 1
              </div>
              <div className='basis-1/2'>
                FLAG 2
              </div>
            </div>
            <div className='basis-1/2 border-2 bg-barrel-green'>
              <span className='m-1 text-left font-weight-100'>Space:</span>
              <span className='text-right font-bold text-white'>      2.5 sqft</span><br />
              <span className='m-1 text-left font-weight-200'>WEIGHT:</span>
              <span className='text-left font-bold text-white'>   13 lbs</span><br />
              <span className='m-1 text-left font-weight-200'>DATE:</span>
              <span className='text-left font-bold text-white'>   06/05/2022</span><br />
              <span className='m-1 text-left font-weight-200'>AIRPORT:</span>
              <span className='text-left font-bold text-white'>JFK SJU</span><br />

            </div>

          </div>
          <div className='m-4 p-4  justify-center  bg-blue-500'>2</div>
          <div className='m-4 p-4 justify-center  bg-yellow-400'>3</div>
          <div className=' m-4 p-4  h-32 justify-center  bg-red-300'>4</div>
          <div className='m-4 p-4 justify-center  bg-yellow-400'>5</div>
          <div className='m-4 p-4 justify-center  bg-blue-500' >6</div>
          <div className=' m-4 p-4 h-32 justify-center  bg-red-300'>7</div>
          <div className='m-4 p-4 justify-center  bg-yellow-400'>8</div>
          <div className='m-4 p-4  justify-center  bg-orange-400'>9</div>

        </div>
      </div>
    </div >
  );
}

export default App;
