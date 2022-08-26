import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {
const [index, setIndex] = useState(0)
 
  let sushiArray = sushis.slice(index, index+4)
  function handleClick(){
    setIndex(index=>index+4)
  }
  return (
    <div className="belt">
      {sushiArray.map(sushi=><Sushi sushi={sushi} key={sushi.id} eatSushi={eatSushi}/>)}
      <MoreButton click={handleClick}/>
    </div>
  );
}

export default SushiContainer;
