import React from 'react'

const Body = () => {
    return (
        <div className='flex items-center gap-5 '>
            <div className='w-1/2 px-13 '>
                <h1 className='text-[7vw] uppercase leading-[12vh] font-extrabold '>Your feet deserve the best</h1>
                <p className='p-3 leading-[1.5vw] mt-7 text-zinc-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE <br /> BEST AND WE’RE HERE TO HELP YOU WITH <br />OUR SHOES.</p>
                <div className='flex items-center gap-7'>
                    <button className='p-1 w-[9vw] border-none bg-red-600 text-white text-xl font-semibold cursor-pointer'>Shop Now</button>
                    <button className='p-1 w-[9vw] border-[1.5px] border-zinc-700 bg-transparent text-xl font-semibold text-zinc-700 cursor-pointer'>Add To Cart</button>
                </div>
                <h4 className='mt-8 font-light text-zinc-600'>Also Avaiable On</h4>
                <div className='flex items-center mt-3 gap-2'>
                    <img src="src/assets/flipcart.png" alt="flipcart" />
                    <img src="src/assets/amazon.png" alt="amazon" />
                </div>
            </div>
            <div>
                <img src="src/assets/shoes.png" alt="shoes" />
            </div>
        </div>
    )
}

export default Body
