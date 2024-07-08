export default function GameCardShimmer() {

  return (
    <div className={`flex gap-2 md:flex-row flex-col justify-center items-center border-[3px] border-[rgb(128,128,128,0.5)] rounded-[8px] p-2 transition-all duration-500`}>
        <div className='max-w-[196px] min-w-[196px] h-[256px]   flex flex-col  justify-center items-center gap-6'>
            
            <div className='w-full h-24 bg-gray-400 rounded-lg animate-shimmer' ></div>
                
            
            
            <div className='w-full flex flex-col gap-2'>
                <h1 className='font-semibold text-[16px] text-[#022523] w-full h-10 bg-gray-400 rounded-lg animate-shimmer'></h1>

                <div className='w-full flex justify-between gap-4'>
                    <h2 className='font-semibold text-[16px] text-[#022523] h-4 w-full bg-gray-400 rounded-lg animate-shimmer'></h2>
                    <h2 className='font-semibold text-[16px] text-[#250202] h-4 w-full bg-gray-400 rounded-lg animate-shimmer'></h2>
                </div>

                <div className='w-full flex justify-between items-center gap-4'>
                    <h2 className='font-semibold text-[16px] text-[#022523] h-4 w-[50%] bg-gray-400 rounded-lg animate-shimmer'></h2>
                    
                    <div className='size-8 bg-gray-400 rounded-lg animate-shimmer'></div>
                    
                </div>
            </div>

            
        </div>

        

        
    </div>
  )
}
