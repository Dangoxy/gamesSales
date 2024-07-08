import React from 'react'
import {Link} from "react-router-dom"
import percentageIcon from '../../public/percentageIcon.png'
import searchIcon from '../../public/searchIcon.png'
import closeIcon from '../../public/closeIcon.png'
import loadingIndicatorIcon from '../../public/loadingIndicator.png'

export default function NavbarMobile(props:any) {

  const [searchInput, setSearchInput] = React.useState<any>("")

  const [searchResults, setSearchResults] = React.useState([])

  const [showSearchBarResults, setShowSearchBarResults] = React.useState(false)

  const [selectedGameFromSearch, setSelectedGameFromSearch] = React.useState<any>()

  const [showMoreInfoForGame, setShowMoreInfoForGame] = React.useState(false)

  const [loadingStateForSearchBar, setLoadingStateForSearchBar] = React.useState(false)

  
  const [gameDate, setGameDate] = React.useState<String>()
  React.useEffect(()=>{
    if(selectedGameFromSearch){
      let date = new Date(Number(selectedGameFromSearch.cheapestPriceEver.date)*1000).toLocaleDateString()
      setGameDate(date)
    }
  },[selectedGameFromSearch])
  

  let timeout:any = null

  function searchGames(currentInput:any){
    
    
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setLoadingStateForSearchBar(true)
      setSearchInput(currentInput)

      if (currentInput.length > 0){

      var requestOptions: {} = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`https://www.cheapshark.com/api/1.0/games?title=${currentInput}`,
      requestOptions)
      .then((response) => {return response.json();})
      .then((result) => {setSearchResults(result); setLoadingStateForSearchBar(false)})
      .catch(error => console.log('error', error));
    } else {
      setLoadingStateForSearchBar(false)
      setSearchResults([])
    }

    }, 500);
    
    
  
  }

  function getSelectedGame(value:any){

    setShowMoreInfoForGame(true)
    setSelectedGameFromSearch(null)
    
    var requestOptions: {} = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.cheapshark.com/api/1.0/games?id=${value}`,
      requestOptions)
      .then((response) => {return response.json();})
      .then((result) => {setSelectedGameFromSearch(result)})
      .catch(error => console.log('error', error));
  }

  return (
    <div 
    className={` z-20 w-full flex flex-col justify-between items-center px-4 py-4
    ${props.showShadow ? "shadow-[0px_2px_4px_2px] shadow-[rgb(2,37,35,0.25)]" : "absolute"}`}>

        <div className='w-full flex justify-between items-center'>
            <Link 
            to={"/"}
            className='flex justify-center items-center gap-2'>
                <h1 className='text-[32px] text-[#022523] font-black italic'>GS</h1>
                <img className='size-[32px]' src={percentageIcon}></img>
            </Link>

            <Link 
            to={"/allSales"}
            className='text-[20px] text-[#022523] font-semibold'>All sales</Link>
        </div>

        <div className='w-[100%] h-full relative'>
          <img className='absolute size-6 top-[50%] translate-y-[-50%] left-4' src={searchIcon}></img>
          <input 
          onFocusCapture={()=>{setShowSearchBarResults(true)}}
          
          onBlur={()=>{
            setTimeout(() => {
              setShowSearchBarResults(false)
            }, 100);
            
          }}
          onChange={(e)=>{
            
            searchGames(e.target.value)
            
            
          }}
          
          placeholder='Search'
          className='w-full h-full border-[3px] text-[20px] 
          placeholde-[#02252380] text-[#022523] font-semibold 
          border-[#022523] px-[44px] py-2 rounded-[23px]
          text-start'
          id='searchBar'
          ></input>

          <img 
          className={`${searchInput.length === 0 ? "hidden" :""} absolute size-6 top-[50%] translate-y-[-50%] right-4 cursor-pointer` }
          src={closeIcon}
          onClick={()=>{
            let currentInput = document.getElementById("searchBar") as HTMLInputElement
            if (currentInput !== null){
              currentInput.value = ""
              setSearchInput("")
            }
            
          }}
          ></img>

          <div 
          
          
          
          className={`${showSearchBarResults ? "flex" : "hidden"}
          h-[600px] w-full absolute top-12 bg-[rgba(255,255,255,0.5)] backdrop-blur-md
          border-[#022523] px-2 py-2 rounded-md border-[3px] z-20
          overflow-y-auto 
          flex-col gap-2 customScroll
          `}>

            { searchResults.length > 0 ?
              searchResults.map((game:any)=>{
                return(
                  <div 
                  onClick={()=>{getSelectedGame(game.gameID)}}
                  className='flex justify-between items-center w-full gap-2 
                  border-[#022523] border-[2px] rounded-lg p-2'>
                    <div className='size-12 flex justify-center items-center'>
                      <img 
                      className='' src={game.thumb}></img>
                    </div>
                    <div className='w-full'>
                      <h1>{game.external}</h1>
                      <h1>Cheapest price ever: ${game.cheapest}</h1>
                    </div>
                  </div>
                )
              })
              : loadingStateForSearchBar ?
              <div className='w-full h-full flex justify-center items-center'>
                <img className='size-8 animate-spinLoading' src={loadingIndicatorIcon}></img>
              </div>
              : (searchResults.length === 0 && searchInput.length !== 0) ? 
              <div className='w-full h-full flex justify-center items-center'>
                <h1 className='text-[#022523] text-[16px] font-semibold'>No results found.</h1> 
              </div>
              : 
              <div className='w-full h-full flex justify-center items-center'>
                <h1 className='text-[#022523] text-[16px] font-semibold'>Start by typing a game name.</h1>
              </div>
              
            }

          </div>

          
        </div>
        

        {selectedGameFromSearch ?
          <div className={`w-full h-screen top-0 left-0 bg-[rgba(128,128,128,0.5)] backdrop-blur-md z-30 fixed
        ${showMoreInfoForGame ? "flex" : "hidden"} justify-center items-center`}>
          <div className='bg-white border-[#022523] border-[4px] relative flex flex-col gap-8 py-8 px-2 rounded-[8px]'>
            <div className=''>
              <img 
              onClick={()=>{setShowMoreInfoForGame(false)}}
              src={closeIcon}
              className='size-8 absolute top-1 right-1 cursor-pointer'></img>
    
              <div className='flex flex-col justify-center items-center h-64 gap-4'>
                <div 
                className='w-full h-full'
                style={{
                  backgroundImage:`URL(${selectedGameFromSearch.info.thumb})`,
                  backgroundRepeat:"no-repeat no-repeat",
                  backgroundPosition:"center center",
                  backgroundSize:"contain",
                }}
                >
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <h1 className='w-full text-[#022523] font-semibold'>{selectedGameFromSearch.info.title}</h1>
                  <div className=''>
                    <div className='w-full flex justify-between'>
                      <h1 className='text-[#022523] font-semibold'>Cheapest price ever:</h1>
                      <h1 className='text-[#022523] font-semibold'>${selectedGameFromSearch.cheapestPriceEver.price}</h1>
                    </div>
                    <h1 className='w-full text-end text-[#022523] font-semibold'>{gameDate}</h1>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-[#C2D3D2] w-full h-[2px] rounded-full'></div>

            <div className='overflow-y-auto flex flex-col gap-2 h-64 p-2 pr-4 pl-0 customScroll'>
              {
                selectedGameFromSearch.deals.map((deal:any)=>{
                  let currentStore = props.storeData.filter((store:any)=>{return store.storeID===deal.storeID})
                  
                  return(
                    <div className='flex justify-between gap-4 border-2 border-[#022523] py-2 px-2 rounded-[8px]'>
                      <div className='flex justify-between items-center w-full gap-4'>
                      {Number(deal.savings) < 0.01 ? 
                          <>
                          <h1 className='font-semibold text-[16px] text-[#250202]'>{Number(deal.savings).toFixed(2)}%</h1>
                          <h1 className='font-semibold text-[16px] opacity-0 text-[#250202]'>${deal.price}</h1> 
                          <h1 className='font-semibold text-[16px] text-[#250202]'>${deal.price}</h1> 
                          </>
                          : 
                          <>
                              <h1 className='font-semibold text-[16px] text-[#022523]'>{Number(deal.savings).toFixed(2)}%</h1>
                              <h1 className='font-semibold text-[16px] text-[#022523]'>${deal.price}</h1>
                              <h1 className='font-semibold text-[16px] text-[#250202] line-through'>${deal.retailPrice}</h1>
                          </>
                          }
                      </div>
                      <div className='relative group flex justify-center items-center min-w-8 min-h-8'>   
                        <img 
                        className='size-8'
                        src={"https://www.cheapshark.com"+currentStore[0].images.logo}></img>

                        <h1
                        className='absolute top-0 right-12 
                        bg-white bg-opacity-50 backdrop-blur-sm border-2 border-[#022523] px-4 py-1 rounded-[4px]  
                        group-hover:flex hidden hover:flex font-semibold text-[16px] text-[#022523]'
                        >{currentStore[0].storeName}</h1>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          
          </div>

        </div>
        :
        <div className={`w-full h-screen top-0 left-0  z-30 fixed bg-[rgba(128,128,128,0.5)] backdrop-blur-md
          ${showMoreInfoForGame ? "flex" : "hidden"} justify-center items-center`}>
            <div className='bg-white border-[#022523] border-[4px] relative flex gap-8 p-32 h-96 rounded-[8px]'>
              
              <img 
              onClick={()=>{setShowMoreInfoForGame(false)}}
              src={closeIcon}
              className='size-8 absolute top-1 right-1 cursor-pointer'></img>
              

              <div className='w-full h-full flex justify-center items-center'>
                <img className='size-8 animate-spinLoading' src={loadingIndicatorIcon}></img>
              </div>

            </div>
          </div>
        }

          
        

        
    </div>
  )
}
