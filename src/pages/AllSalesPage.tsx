import React from 'react'
import Navbar from '../components/Navbar'
import "./AllSalesPage.css"
import GameCardForAll from '../components/GameCardForAll'
import NavbarMobile from '../components/NavbarMobile'
import GameCardShimmer from "../components/GameCardShimmer"
import closeIcon from "../../public/closeIcon.png"
import filterOnIcon from "../../public/filterOn.png"
import filterOffIcon from "../../public/filterOff.png"

export default function AllSalesPage(props:any) {


    const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(true)

    const [percentageCheckbox, setPercentageCheckbox] = React.useState<any[]>([])
    const [priceCheckbox, setPriceCheckbox] = React.useState<any[]>([])
    const [normalPriceCheckbox, setNormalPriceCheckbox] = React.useState<any[]>([])

    const [selectedFilters, setSelectedFilters] = React.useState<any[]>([])

    const [csci, setCsci] = React.useState<any[]>([])


    const [allGames, setAllGames] = React.useState<any[]>([])
    



    const [gameShower, setGameShower] = React.useState(props.mostGamesData)
    console.log(gameShower)


    React.useEffect(()=>{
        let tempAllGames = props.mostGamesData
        setAllGames(tempAllGames)

        

        let percentageArray = []
        let priceArray = []
        let normalPriceArray = []

        /* let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp
                .sort((a:any,b:any) => Number(b.metacriticScore) - Number(a.metacriticScore))
                return sortedTemp
                }) */
        
        setGameShower(() =>{
            
            let sortedTemp = tempAllGames.sort((a:any,b:any) => Number(b.metacriticScore) - Number(a.metacriticScore))
            return sortedTemp
        })
        
        
        for (let i = 10; i<100; i+=10){
            let percentageTemp = tempAllGames.filter((game:any)=>{
                return (Number(game.savings) >= Number(i)) && (Number(game.savings) <= Number(i+10))
            })
            let priceTemp = tempAllGames.filter((game:any)=>{
                return (Number(game.salePrice) >= Number(i-10)) && (Number(game.salePrice) <= Number(i))
            })
            let normalPriceTemp = tempAllGames.filter((game:any)=>{
                return (Number(game.normalPrice) >= Number(i-10)) && (Number(game.normalPrice) <= Number(i))
            })

            percentageArray.push(
                percentageTemp.length !== 0 ?
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"percent"+i}>{i}% - {i+10}% <span className='text-[#89B1AE] text-[12px]'>({percentageTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterPercentageFunction(i,i+10,"percent",e.target.checked ? "add" : "remove");}} 
                    disabled={false}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"percent"+i} 
                    id={"percent"+i}></input>
                </div> : 
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"percent"+i}>{i}% - {i+10}% <span className='text-[#89B1AE] text-[12px]'>({percentageTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterPercentageFunction(i,i+10,"percent",e.target.checked ? "add" : "remove");}} 
                    disabled={true}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"percent"+i} 
                    id={"percent"+i}></input>
                </div>
            )
            priceArray.push(
                priceTemp.length !== 0 ?
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"price"+(i-10)}>${(i-10)} - ${i} <span className='text-[#89B1AE] text-[12px]'>({priceTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterPriceFunction(i-10,i,"price",e.target.checked ? "add" : "remove");}} 
                    disabled={false}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"price"+(i-10)} 
                    id={"price"+(i-10)}></input>
                </div> : 
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"price"+(i-10)}>${(i-10)} - ${i} <span className='text-[#89B1AE] text-[12px]'>({priceTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterPriceFunction(i-10,i,"price",e.target.checked ? "add" : "remove");}} 
                    disabled={true}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"price"+(i-10)} 
                    id={"price"+(i-10)}></input>
                </div>
            )
            normalPriceArray.push(
                normalPriceTemp.length !== 0 ?
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"normalPrice"+(i-10)}>${(i-10)} - ${i} <span className='text-[#89B1AE] text-[12px]'>({normalPriceTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterNormalPriceFunction(i-10,i,"normalPrice",e.target.checked ? "add" : "remove");}} 
                    disabled={false}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"normalPrice"+(i-10)} 
                    id={"normalPrice"+(i-10)}></input>
                </div> : 
                <div className='w-full flex gap-2 justify-between items-center'>
                    <label className='flex justify-between items-center w-full text-nowrap font-semibold text-[16px] text-[#022523]' htmlFor={"normalPrice"+(i-10)}>${(i-10)} - ${i} <span className='text-[#89B1AE] text-[12px]'>({normalPriceTemp.length})</span> </label>
                    <input 
                    onChange={(e)=>{filterNormalPriceFunction(i-10,i,"normalPrice",e.target.checked ? "add" : "remove");}} 
                    disabled={true}
                    className=" customCheckbox" 
                    type='checkbox' 
                    name={"normalPrice"+(i-10)} 
                    id={"normalPrice"+(i-10)}></input>
                </div>
            )
                
        }
        setPercentageCheckbox(percentageArray)
        setPriceCheckbox(priceArray)
        setNormalPriceCheckbox(normalPriceArray)
        
    },[props.mostGamesData])

    
        


    function filterPercentageFunction(numBefore:Number,numAfter:Number, type: String, functionType: String){
        
        filterPriceUnchecker()
        filterNormalPriceUnchecker()
        let temp = props.mostGamesData.filter((game:any)=>{
            return Number(game.savings) >= Number(numBefore) && Number(game.savings) <= Number(numAfter)
        })

        if(type === "percent" && functionType =="add"){
            
            setCsci((old:any)=>{return [...old, ...temp]})
            setSelectedFilters((old:any)=>{return [...old, {tag: (numBefore+"% <-> "+numAfter+ "%"),identifier: "percent",numBefore:numBefore, numAfter:numAfter}]})
        }
        else if(type === "percent" && functionType =="remove"){
            
            setCsci((old:any)=>{
                return old.filter((value:any)=>{return !temp.includes(value)})
            })
            setSelectedFilters((old:any)=>{
                return old.filter((value:any)=>{return value.tag !== (numBefore+"% <-> "+numAfter+ "%")})
            })
            
        }
        
        sortingFunctionForSelect(currentDropFilterSelected)
    }
    function filterPriceFunction(numBefore:Number,numAfter:Number, type: String, functionType: String){
        filterPercentageUnchecker()
        filterNormalPriceUnchecker()
        let temp = props.mostGamesData.filter((game:any)=>{
            return Number(game.salePrice) >= Number(numBefore) && Number(game.salePrice) <= Number(numAfter)
        })

        if(type === "price" && functionType =="add"){
            
            setCsci((old:any)=>{return [...old, ...temp]})
            setSelectedFilters((old:any)=>{return [...old, {tag: ("$"+numBefore+" <-> $"+numAfter),identifier: "price",numBefore:numBefore, numAfter:numAfter}]})
        }
        else if(type === "price" && functionType =="remove"){
            
            setCsci((old:any)=>{
                return old.filter((value:any)=>{return !temp.includes(value)})
            })
            setSelectedFilters((old:any)=>{
                return old.filter((value:any)=>{return value.tag !== ("$"+numBefore+" <-> $"+numAfter)})
            })
        }
        sortingFunctionForSelect(currentDropFilterSelected) 
    }
    function filterNormalPriceFunction(numBefore:Number,numAfter:Number, type: String, functionType: String){
        filterPercentageUnchecker()
        filterPriceUnchecker()
        let temp = props.mostGamesData.filter((game:any)=>{
            return Number(game.normalPrice) >= Number(numBefore) && Number(game.normalPrice) <= Number(numAfter)
        })

        if(type === "normalPrice" && functionType =="add"){
            
            setCsci((old:any)=>{return [...old, ...temp]})
            setSelectedFilters((old:any)=>{return [...old, {tag: ("OG $"+numBefore+" <-> $"+numAfter),identifier: "normalPrice",numBefore:numBefore, numAfter:numAfter}]})
        }
        else if(type === "normalPrice" && functionType =="remove"){
            
            setCsci((old:any)=>{
                return old.filter((value:any)=>{return !temp.includes(value)})
            })
            setSelectedFilters((old:any)=>{
                return old.filter((value:any)=>{return value.tag !== ("OG $"+numBefore+" <-> $"+numAfter)})
            })
        }
        sortingFunctionForSelect(currentDropFilterSelected) 
    }
    
    
    function filterPercentageUnchecker(){
        
        for(let i = 10; i< 100; i+=10){
            const ele = document.getElementById("percent"+i) as HTMLInputElement;
            if(ele.checked){
                ele.checked = false
                setCsci([])
                setSelectedFilters([])
            }
        }

        
    }
    function filterPriceUnchecker(){
        
        for(let i = 0; i< 90; i+=10){
            const ele = document.getElementById("price"+i) as HTMLInputElement;
            if(ele.checked){
                ele.checked = false
                setCsci([])
                setSelectedFilters([])
            }
        }

        
    }
    function filterNormalPriceUnchecker(){
        
        for(let i = 0; i< 90; i+=10){
            const ele = document.getElementById("normalPrice"+i) as HTMLInputElement;
            if(ele.checked){
                ele.checked = false
                setCsci([])
                setSelectedFilters([])
            }
        }

        
    }
    
    const [currentDropFilterSelected, setCurrentDropFilterSelected] = React.useState("Most popular")

    
    function sortingFunctionForSelect(value:string){
        if(value == "Most popular"){
            let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp
                .sort((a:any,b:any) => Number(b.metacriticScore) - Number(a.metacriticScore))
                return sortedTemp
                })
            setCsci((old: any) =>{
                return old.sort((a:any,b:any) => Number(a.metacriticScore) - Number(b.metacriticScore))
            })
        }
        if(value == "Low to high (Price)"){
            let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp
                .sort((a:any,b:any) => Number(a.salePrice) - Number(b.salePrice))
                return sortedTemp
                })
            setCsci((old: any) =>{
                return old.sort((a:any,b:any) => Number(a.salePrice) - Number(b.salePrice))
            })
        }
        if(value == "High to low (Price)"){
            let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp
                .sort((a:any,b:any) => Number(b.salePrice) - Number(a.salePrice))
                return sortedTemp
                })
            setCsci((old: any) =>{
                return old.sort((a:any,b:any) => Number(b.salePrice) - Number(a.salePrice))
            })
        }
        if(value == "Low to high (Sale %)"){
            let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp
                .sort((a:any,b:any) => Number(a.savings) - Number(b.savings))
                return sortedTemp
                })
            setCsci((old: any) =>{
                return old.sort((a:any,b:any) => Number(a.savings) - Number(b.savings))
            })
        }
        if(value == "High to low (Sale %)"){
            let temp = (props.mostGamesData)
            setGameShower(() =>{
                let sortedTemp = temp.sort((a:any,b:any) => Number(b.savings) - Number(a.savings))
                return sortedTemp
                })
            setCsci((old: any) =>{
                return old.sort((a:any,b:any) => Number(b.savings) - Number(a.savings))
            })
        }
    }

    function resetAllFiltersFunction(){
        
        setCsci([])
        setSelectedFilters([])
        filterPriceUnchecker()
        filterPercentageUnchecker()
        filterNormalPriceUnchecker()
    }



    

    let oldScrollY = 0;

    const [direction, setDirection] = React.useState('up');

    const controlDirection = () => {
        if(document.getElementById("mainContentArea")?.scrollTop! > oldScrollY) {
            setDirection('down');
        } else {
            setDirection('up');
        }
        oldScrollY = document.getElementById("mainContentArea")?.scrollTop!;
    }

    React.useEffect(() => {
        document.getElementById("mainContentArea")?.addEventListener('scroll', controlDirection);
        return () => {
            document.getElementById("mainContentArea")?.removeEventListener('scroll', controlDirection);
        };
    },[]);
    

    
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col w-full h-full'>
            <div className='md:flex hidden'>
                <Navbar showShadow={false} storeData={props.storeData} />
            </div>
            <div className={direction == "up" ? 'md:hidden flex': "hidden"}>
                <NavbarMobile showShadow={false} storeData={props.storeData} />
            </div>

            <div className={` w-full h-full flex md:pt-[82px] ${direction =="up" ?"pt-[128px]" : "pt-[0px]"}`}>
                
                {/* Side bar */}
                <div className={`
                bg-white h-full customScroll ${sidebarIsOpen ?
                    "md:w-80 md:p-2 md:relative absolute w-full z-20 p-4 top-0" :
                    "w-0 p-0 overflow-hidden"} 
                shadow-[inset_-2px_2px_4px_2px] shadow-[#02252340]
                overflow-y-auto 
                `}>
                    <div className='flex flex-col gap-4'>

                        <div className='flex w-full justify-end md:hidden'>
                            <img 
                            onClick={()=>{setSidebarIsOpen(false)}}
                            src={closeIcon} 
                            className=' size-6'></img>
                        </div>

                        <div>
                            <h1 className='font-semibold text-[12px] text-[#778887]'>Sale % threshold</h1>
                            <div className='flex flex-col gap-2 p-2'>
                                {percentageCheckbox.map((one)=>{
                                    return(one)
                                })}
                            </div>
                        </div>

                        <div>
                            <h1 className='font-semibold text-[12px] text-[#778887]'>Price threshold</h1>
                            <div className='flex flex-col gap-2 p-2'>
                                {priceCheckbox.map((one)=>{
                                    return(one)
                                })}
                            </div>
                        </div>

                        <div>
                            <h1 className='font-semibold text-[12px] text-[#778887]'>Original Price threshold</h1>
                            <div className='flex flex-col gap-2 p-2'>
                                {normalPriceCheckbox.map((one)=>{
                                    return(one)
                                })}
                            </div>
                        </div>

                        
                    </div>
                </div>
                {/* Side bar */}
                
                {/* Main part */}
                <div className='w-full h-full flex flex-col'>
                    {/* Secondary navbar in the main part */}
                    <div className='
                    w-full p-2
                    shadow-[0px_4px_4px_0px] shadow-[rgb(2,37,35,0.25)]
                    flex justify-end items-center flex-wrap gap-2
                    '>

                        <div className='flex gap-2 justify-between w-full'>
                            <select
                            id='selectListFilter'
                            className='md:border-[2px] border-[2px] border-[#022523] text-[12px] font-bold py-1 px-2 md:py-1 md:text-[16px] md:font-semibold rounded-md transition-all duration-500'
                            onChange={(e)=>{setCurrentDropFilterSelected(e.target.value); sortingFunctionForSelect(e.target.value);}}
                            >
                                <option>Most popular</option>
                                <option>Low to high (Price)</option>
                                <option>High to low (Price)</option>
                                <option>Low to high (Sale %)</option>
                                <option>High to low (Sale %)</option>

                            </select>
                            
                            <div className='flex gap-2'>
                                <div
                                className='md:border-[2px] border-[2px] border-[#022523] text-[12px] flex md:gap-1 gap-0 font-bold py-0 md:px-2 px-1 pr-0 md:pr-1 md:py-1 md:text-[16px] md:font-semibold rounded-md  hover:scale-[0.98] hover:shadow-[1px_1px_4px_2px] hover:shadow-[rgb(2,37,35,0.2)] transition-all duration-500'
                                onClick={()=>{
                                    resetAllFiltersFunction()
                                }}>
                                    <button>Reset</button>
                                    <img className='size-6' src={filterOnIcon}></img>
                                </div>
                                
                                <div 
                                className='md:border-[2px] border-[2px] border-[#022523] text-[12px] flex md:gap-1 gap-0 font-bold py-0 md:px-2 px-1 pr-0 md:pr-1 md:py-1 md:text-[16px] md:font-semibold rounded-md  hover:scale-[0.98] hover:shadow-[1px_1px_4px_2px] hover:shadow-[rgb(2,37,35,0.2)] transition-all duration-500'
                                onClick={()=>{
                                    setSidebarIsOpen(!sidebarIsOpen);}}>
                                    <button>{sidebarIsOpen? "Minimize" : "Extend"}</button>
                                    <img className='size-6' src={sidebarIsOpen? filterOffIcon : filterOnIcon}></img>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex gap-2 flex-wrap text-nowrap md:justify-start justify-around'>
                            {selectedFilters.map((one:any)=>{
                                return (
                                    <div className='border-[2px] border-[#022523] py-1 px-4 rounded-full flex-nowrap text-nowrap flex justify-center items-center md:gap-4 gap-2'>
                                        <h1 className='text-[#022523] md:text-[16px] text-[12px] font-semibold'>{one.tag}</h1>

                                        <h1 
                                        className='cursor-pointer md:text-[16px] text-[12px]'
                                        onClick={()=>{
                                            const ele = document.getElementById(one.identifier+one.numBefore) as HTMLInputElement;
                                            ele.checked = false;
                                                {   
                                                one.identifier === "price" ?
                                                filterPriceFunction(one.numBefore,one.numAfter,one.identifier,"remove") 
                                                :
                                                one.identifier === "normalPrice" ? 
                                                filterNormalPriceFunction(one.numBefore,one.numAfter,one.identifier,"remove")
                                                
                                                :
                                                filterPercentageFunction(one.numBefore,one.numAfter,one.identifier,"remove")
                                                
                                            }}}>✖</h1>
                                    </div>
                                )})
                            }
                        </div>

                        

                    </div>
                    {/* Secondary navbar in the main part */}
                    
                    {/* Main content part in the main part */}
                    <div id="mainContentArea" className='customScroll flex flex-wrap p-4 gap-4 justify-center items-center overflow-y-auto h-full'>
                        {allGames.length === 0 ?
                        Array.from({ length: 55 }).map(() => {
                            return <GameCardShimmer />}
                        )
                        
                        :
                        selectedFilters.length === 0 ?
                        props.mostGamesData.map((one:any)=>{
                            return(
                                <GameCardForAll
                                    title={one.title}
                                    storeID={one.storeID}
                                    storeData={props.storeData}
                                    rating={one.rating}
                                    price={one.normalPrice}
                                    salePrice={one.salePrice}
                                    salePercentage={one.savings}
                                    gameID={one.gameID}
                                    dealID={one.dealID}
                                    gameImg={one.thumb}
                                    metacriticScore={one.metacriticScore}
                                    />
                            )
                        }) 
                        : 
                        csci.map((one:any)=>{
                            return(
                                <GameCardForAll
                                    title={one.title}
                                    storeID={one.storeID}
                                    storeData={props.storeData}
                                    rating={one.rating}
                                    price={one.normalPrice}
                                    salePrice={one.salePrice}
                                    salePercentage={one.savings}
                                    gameID={one.gameID}
                                    dealID={one.dealID}
                                    gameImg={one.thumb}
                                    />
                            )
                        })
                        
                        
                        }

                    </div>
                    {/* Main content part in the main part */}
                </div>
                {/* Main part */}

            </div>
        </div>
    </div>
  )
}
