import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [eatenPlate, setEatenPlate] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(()=>{
    fetch(API)
    .then(r=> r.json())
    .then(data=>setSushi(data))
  }, [])

function eatSushi(eaten){
  const cost = eaten.price
  console.log(cost)
  if ((wallet-cost) > 0){
  setWallet(wallet=>wallet-cost)
  setEatenPlate(()=> eatenPlate.push(1))
}
else {alert("Out of Money!")}

}
  return (
    <div className="app">
      <SushiContainer sushis={sushi} eatSushi={eatSushi}/>
      <Table plates={eatenPlate} wallet={wallet}/>
    </div>
  );
}

export default App;
