import React from 'react'

export default function GameCardForAll(props:any) {

    let currentStoreData = props.storeData && props.storeData.filter((store:any)=>{return store.storeID === props.storeID})[0]
    

    const [showMore, setShowMore] = React.useState(false)
    

    const [multiDeals, setMultiDeals] = React.useState<any>(null)

    var requestOptions:any = {
        method: 'GET',
        redirect: 'follow'
    };

    function findMultiDeals(){
            fetch(`https://www.cheapshark.com/api/1.0/games?id=${props.gameID}`, requestOptions)
            .then(response => response.json())
            .then((result) => {setMultiDeals(result)})
            .catch(error => console.log('error', error));
    }

    
  return (
    <div className={`flex ${showMore? "gap-2":"gap-0"} md:flex-row flex-col justify-center items-center border-[3px] border-[#022523] rounded-[8px] p-2 transition-all duration-500`}>
        <div className='max-w-[196px] min-w-[196px] h-[296px]   flex flex-col  justify-around items-center gap-2'>
            <div className='relative aspect-[16/9] max-w-[196px]  w-full flex justify-center items-center'>
                <img className='h-full max-h-28' src={props.gameImg}></img>
                <h3 className='
                    font-semibold text-[16px] text-[#022523]
                    bg-white border-2 border-[#022523] px-4 py-1 rounded-[4px] bg-opacity-75 backdrop-blur-sm  absolute top-0 right-0'>
                {Number(props.salePercentage).toFixed(2)}%</h3>
                
            </div>
            
            

            <h1 className='font-semibold text-[16px] text-[#022523]'>{props.title}</h1>

            <div className='w-full flex justify-between'>
                <h2 className='font-semibold text-[16px] text-[#022523]'>${props.salePrice}</h2>
                <h2 className='font-semibold text-[16px] text-[#250202] line-through'>${props.price}</h2>
            </div>

            <div className='w-full flex justify-between items-center'>
                <a 
                className='font-semibold text-[16px] text-[#022523] cursor-pointer'
                onClick={
                    ()=>{
                        setShowMore(!showMore);
                        if(!showMore){
                        findMultiDeals()}
                    }
                    }>{showMore?"Show less" : "Show more"} </a>
                <div className='relative group'>   
                    {currentStoreData && <img className='size-8' src={"https://www.cheapshark.com"+currentStoreData.images.logo}></img>}
                    {currentStoreData && 
                    <h1
                    className='absolute -top-[37px] right-0 
                    bg-white border-2 border-[#022523] px-4 py-1 rounded-[4px] bg-opacity-75 backdrop-blur-sm  
                    group-hover:flex hidden hover:flex font-semibold text-[16px] text-[#022523]'
                    >{currentStoreData.storeName}</h1>}
                </div>
            </div>
        </div>

        <div className={`${showMore? "flex" : "hidden"} md:h-[256px] md:w-0.5 w-[256px] h-0.5  bg-[#0C4E4A] bg-opacity-25 rounded-full`}></div>

        <div className={`${showMore? "md:max-w-[364px] max-h-[256px]" : "md:max-w-[0px] max-h-[0px]"} customScroll flex flex-col md:h-[256px]  overflow-y-scroll gap-2 overflow-hidden transition-all duration-500`}>
            
            {multiDeals && multiDeals.deals.map((one:any)=>{
                
                let currentSaleStore = props.storeData.filter((store:any)=>{return store.storeID === one.storeID})[0]
                
                return (
                <div className='flex gap-4 px-2 justify-center items-center'>
                    <div className='flex justify-between items-center w-full gap-2'>

                        {Number(one.savings) < 0.01 ? 
                        <>
                        <h1 className='font-semibold text-[16px] text-[#250202]'>{Number(one.savings).toFixed(2)}%</h1>
                        <h1 className='font-semibold text-[16px] text-[#250202]'>${one.price}</h1> 
                        </>
                        : 
                        <>
                            <h1 className='font-semibold text-[16px] text-[#022523]'>{Number(one.savings).toFixed(2)}%</h1>
                            <h1 className='font-semibold text-[16px] text-[#022523]'>${one.price}</h1>
                            <h1 className='font-semibold text-[16px] text-[#250202] line-through'>${one.retailPrice}</h1>
                        </>
                        }
                    </div>

                    <div className='relative group flex justify-center items-center'>   
                        <img 
                        className='md:w-12 w-8 aspect-square'
                        src={
                            "https://www.cheapshark.com"+currentSaleStore.images.logo
                            }></img>
                        
                        <h1
                        className='absolute top-0 right-12 
                        bg-white bg-opacity-50 backdrop-blur-sm border-2 border-[#022523] px-4 py-1 rounded-[4px]  
                        group-hover:flex hidden hover:flex font-semibold text-[16px] text-[#022523]'
                        >{currentSaleStore.storeName}</h1>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}
