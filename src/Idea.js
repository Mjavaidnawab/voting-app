import React, {useState } from 'react';
import './App.css';

function Idea() {
let [isVoteOfc, setVoteOfc] = useState(true);
let [isVote, setVote] = useState(true);


function updateVoteOnOfc()
{
    console.log("On Button Clicked");
    setVoteOfc(!isVoteOfc)
    
}
function updateVoteOffOfc()
{
    console.log("On Button Clicked");
    if (!isVoteOfc)
    {setVoteOfc(!isVoteOfc)}

   
}
function updateVoteOn()
{
    console.log("Off Button Clicked");
    setVote(!isVote);
   
}

function updateVoteOff()
{
    if (!isVote)
    {setVote(!isVote)}
    console.log("Off Button Clicked");
       
}

  return (
    <div >
      <h1> Ideation App</h1>
      <h2> Assessment by Muhammad Javaid Nawab</h2>
     
 <ul>
 <li>
 <span>ModernOffice</span> - <span>votes: {isVoteOfc ? "Up ": "Down"}</span><button onClick = {updateVoteOnOfc }>+</button> <button onClick = {updateVoteOffOfc }>-</button>
 </li>
 <li>
 <span>Offsite</span> - <span>votes: {isVote ? "Up ": "Down"}</span><button onClick = {updateVoteOn}>+</button> <button onClick = {updateVoteOff}>-</button>
 </li>
 </ul>
 
    </div>
  );
}

export default Idea;
