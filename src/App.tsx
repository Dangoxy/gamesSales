import React from "react"
import './App.css'
import Homepage from './pages/Homepage'
import { HashRouter, Route, Routes } from "react-router-dom"
import AllSalesPage from "./pages/AllSalesPage"


export default function App() {

  const [storeData, setStoreData] = React.useState(null)
  const [freeGamesData, setFreeGamesData] = React.useState(null)
  const [under20GamesData, setUnder20GamesData] = React.useState(null)
  const [upto90GamesData, setUpto90GamesData] = React.useState(null)
  const [mostGamesData, setMostGamesData] = React.useState<any[]>([])

  var requestOptions:any = {
    method: 'GET',
    redirect: 'follow'
  };
  React.useEffect(()=>{
    fetch("https://www.cheapshark.com/api/1.0/stores", requestOptions)
    .then(response => response.json())
    .then((result) => {console.log(result);setStoreData(result);})
    .catch(error => console.log('error', error));

    fetch("https://www.cheapshark.com/api/1.0/deals?&upperPrice=0&pageSize=20", requestOptions)
    .then(response => response.json())
    .then((result) => {console.log(result);
      let temp = result.filter((obj1:any, i:any, arr:any) => 
      arr.findIndex((obj2:any) => (obj2.title === obj1.title)) === i)
      setFreeGamesData(temp);})
    .catch(error => console.log('error', error));

    fetch("https://www.cheapshark.com/api/1.0/deals?&upperPrice=20&pageSize=15", requestOptions)
    .then(response => response.json())
    .then((result) => {console.log(result);
      let temp = result.filter((obj1:any, i:any, arr:any) => 
      arr.findIndex((obj2:any) => (obj2.title === obj1.title)) === i)
      setUnder20GamesData(temp);})
    .catch(error => console.log('error', error));

    fetch("https://www.cheapshark.com/api/1.0/deals?&upperPrice=30&pageSize=30", requestOptions)
    .then(response => response.json())
    .then((result) => {console.log(result);
      let temp = []
      temp = result.filter((one:any)=>{return Number(one.savings) >= 90})
      temp = temp.filter((obj1:any, i:any, arr:any) => 
      arr.findIndex((obj2:any) => (obj2.title === obj1.title)) === i)
      
    
      setUpto90GamesData(temp);
      console.log(temp)
    })
    .catch(error => console.log('error', error));

    /* let tempTotal:any[] = [] */
    setMostGamesData([])
    for(let i=0; i<6; i++){
      
      fetch(`https://www.cheapshark.com/api/1.0/deals?sortBy=Metacritic&sortBy=DealRating&pageNumber=${i}`, requestOptions)
      .then(response => response.json())
      .then((result) => {

       setMostGamesData((old)=>{
        return [...old, ...result].filter((obj1:any, i:any, arr:any) => 
          arr.findIndex((obj2:any) => (obj2.title === obj1.title)) === i
      )
       })
      })
      .catch(error => console.log('error', error));
    }
    /* console.log(tempTotal) */

  },[])
  

  https://www.cheapshark.com/api/1.0/deals?&upperPrice=10

  
  

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" 
        element={
          <Homepage storeData={storeData} freeGamesData={freeGamesData} under20GamesData={under20GamesData} upto90GamesData={upto90GamesData}  />
        } />
        <Route path="/allSales" 
        element={
          <AllSalesPage storeData={storeData} mostGamesData={mostGamesData} />
        } />
          
        
        </Routes>
      </HashRouter>
    </>
  )
}

