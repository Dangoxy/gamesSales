import Navbar from '../components/Navbar'
import CustomSwiper from '../components/CustomSwiper'
import GameCard from '../components/GameCard'
import NavbarMobile from '../components/NavbarMobile'
import GameCardShimmer from "../components/GameCardShimmer"
import { Link } from 'react-router-dom'



export default function homepage(props:any) {

  let freeGamesDataList,
  under20GamesDataList,
  upto90GamesDataList

  freeGamesDataList =
  under20GamesDataList =
  upto90GamesDataList = [
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />,
    <GameCardShimmer />
  ]

  if(props.freeGamesData && props.freeGamesData!=null){
  freeGamesDataList = props.freeGamesData.map((one:any)=>{
    return(
    <GameCard 
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
  )})}
  if(props.under20GamesData && props.under20GamesData!=null){
  under20GamesDataList = props.under20GamesData.map((one:any)=>{
    return(
    <GameCard 
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
  )})}
  if(props.upto90GamesData && props.upto90GamesData!=null){
  upto90GamesDataList = props.upto90GamesData.map((one:any)=>{
    return(
    <GameCard 
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
  )})}


  return (
    <div className='w-full h-screen'>
      <div className='hidden md:flex'>
        <Navbar showShadow={true} storeData={props.storeData} />
      </div>
      <div className='flex md:hidden'>
          <NavbarMobile showShadow={true} storeData={props.storeData} />
      </div>

      <div className='p-4'>
        
        <div className=' flex flex-col gap-2 w-full'>
          <div className='flex w-full justify-between items-center'>
            <h1 className='flex justify-center items-center w-fit gap-4 text-[24px] md:text-[40px] text-[#022523] font-semibold'>
              <img className='animate-spin rounded-full md:size-8 size-4' src='../../public/starIcon.png'></img>
              <span>Free games</span>
              <img className='animate-spin rounded-full md:size-8 size-4' src='../../public/starIcon.png'></img>
            </h1>
            <Link to={"/AllSales"} className='text-[16px] md:text-[20px] font-semibold text-[#022523] hover:underline-offset-2 hover:underline'>See all</Link>
          </div>
          <CustomSwiper listOfElements={freeGamesDataList} />
        </div>

        <div className=' flex flex-col gap-2 w-full'>
          <div className='flex w-full justify-between items-center'>
            <h1 className='flex justify-center items-center w-fit gap-4 text-[24px] md:text-[40px] text-[#022523] font-semibold'>
              <span>$20 and under</span>
              <img className='animate-bounce rounded-full md:size-8 size-4' src='../../public/arrowDown.png'></img>
            </h1>
            <Link to={"/AllSales"} className='text-[16px] md:text-[20px] font-semibold text-[#022523] hover:underline-offset-2 hover:underline'>See all</Link>
          </div>

          <CustomSwiper listOfElements={under20GamesDataList} />
        </div>

        <div className=' flex flex-col gap-2 w-full'>
          <div className='flex w-full justify-between items-center'>
            <h1 className='flex justify-center items-center w-fit gap-4 text-[24px] md:text-[40px] text-[#022523] font-semibold'>
              <span>90% and up</span>
              <img className='animate-bounce rounded-full md:size-8 size-4' src='../../public/arrowUp.png'></img>
            </h1>
            <Link to={"/AllSales"} className='text-[16px] md:text-[20px] font-semibold text-[#022523] hover:underline-offset-2 hover:underline'>See all</Link>
          </div>
          <CustomSwiper listOfElements={upto90GamesDataList} />
        </div>

      </div>
    </div>
  )
}
