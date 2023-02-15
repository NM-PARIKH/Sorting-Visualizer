import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./Navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { green, red } from "@mui/material/colors";

const Navbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  // const [num, setNum] = useState();
  const [arr, setArr] = useState([]);

  const handleSort = (sortAlgo) => {
    console.log(sortAlgo);
    dispatch({
      type: "UPDATE_ALGORITHM",
      sortingAlgorithm: sortAlgo,
    });
  };

  const handleColor = (sortColor) => {
    dispatch({
      type: "UPDATE_COLOR",
      sortingColor: sortColor,
    });
  };

  const handleSpeed = (sortSpeed) => {
    dispatch({
      type: "UPDATE_SPEED",
      sortingSpeed: sortSpeed,
    });
  };

  // const handleNum = (no) => {
  //   const n = no.target.value;
  //   setNum(n);
  //   dispatch({
  //     type: "UPDATE_NUM",
  //     amt: n,
  //   });
  // };

  const handleArray = (array) => {
    setArr(array)
    let newArr=[]
    let tokenizer = arr.split(/\W+/);
    for(let i=0; i<tokenizer.length; i++){
      newArr.push([tokenizer[i], i]);
    }
    // myState.arrVal = newArr;
    dispatch({
      type: "UPDATE_ARRAY",
      arrVal: newArr,
    });
    console.log(array);
  };
  
  
  const handlePlayPause = (play) => {
    console.log(myState.play)
    if(!myState.play){
      //  console.log("msa = " + myState.arrVal);
      //  console.log("msa length = " + myState.arrVal.length);
      console.log("PLAY BUTTON CLICKED");
       document.getElementById('play').disabled = true;
       document.getElementById('play').style.backgroundColor = '#999999';
       document.getElementById('play').style.cursor='not-allowed';
       
       document.getElementById('sort').disabled = true;
      //  document.getElementById('sort').style.backgroundColor = '#999999';
       document.getElementById('sort').style.cursor='not-allowed';
       
       document.getElementById('color').disabled = true;
      //  document.getElementById('color').style.backgroundColor = '#999999';
       document.getElementById('color').style.cursor='not-allowed';
       
       document.getElementById('speed').disabled = true;
      //  document.getElementById('speed').style.backgroundColor = '#999999';
       document.getElementById('speed').style.cursor='not-allowed';


       document.getElementById('textfield').disabled = true;
      //  document.getElementById('textfield').style.backgroundColor = '#999999';
       document.getElementById('textfield').style.cursor='not-allowed';
    
    }

    else{
       return;
    }
    dispatch({
       type: 'PLAY_PAUSE',
      //  play: play
       play: true
    })
 }

//  useEffect(() => {
//     if(!myState.play){
//        document.getElementById('play').disabled = false;
//        document.getElementById('play').style.backgroundColor = 'rgb(0, 149, 199)';
//     }
//  },[myState.play]);



  return (
    <div className="navDiv">

      <FormControl  variant="filled" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel>Sorting Algorithm</InputLabel>
        <Select
          className="menuClass"
          id="sort"
          value={myState.sortingAlgorithm}
          onChange={(e) => handleSort(e.target.value)}
        >
          <MenuItem className="itmClass" value="bubble">Bubble Sort</MenuItem>
          <MenuItem className="itmClass" value="insertion">Insertion Sort</MenuItem>
          <MenuItem className="itmClass" value="selection">Selection Sort</MenuItem>
          <MenuItem className="itmClass" value="merge">Merge Sort</MenuItem>
          <MenuItem className="itmClass" value="quick">Quick Sort</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel>Color</InputLabel>
        <Select
          className="menuClass"
          id="color"
          value={myState.sortingColor}
          onChange={(e) => handleColor(e.target.value)}
        >
          <MenuItem className="itmClass" value="#76afff" style={{ backgroundColor: "#cefbff" }}>
            Blue
          </MenuItem>
          <MenuItem className="itmClass" value="#51a954" style={{ backgroundColor: "#deffde" }}>
            Green
          </MenuItem>
          <MenuItem className="itmClass" value="#ff7070" style={{ backgroundColor: "#ffe2e7" }}>
            Red
          </MenuItem>
          <MenuItem className="itmClass" value="#e4e263" style={{ backgroundColor: "#ffffd1" }}>
            Yellow
          </MenuItem>
          <MenuItem className="itmClass" value="#6c6c6c" style={{ backgroundColor: "#d4d4d4" }}>
            Black
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 130 }}>
        <InputLabel>Speed</InputLabel>
        <Select
          className="menuClass"
          id="speed"
          value={myState.sortingSpeed}
          onChange={(e) => handleSpeed(e.target.value)}
        >
          <MenuItem className="itmClass" value={1000}> Slow </MenuItem>
          <MenuItem className="itmClass" value={300}> Medium </MenuItem>
          <MenuItem className="itmClass" value={100}> Fast </MenuItem>
        </Select>
      </FormControl>

      <button id='play' className="play" onClick={() => handlePlayPause(true)} > PLAY </button>

      <div>
        {/* MAX NUMBERS CAN BE ENTERED ARE 42 */}
        <h2> Enter The Values of Numbers Between 1-99 : </h2>
        <input
          id='textfield'
          type="text"
          placeholder="Enter The Values of Numbers"
          onChange={(e) => handleArray(e.target.value)}
          value={arr}
          className="numVal"
        />
      </div>
    </div>
  );
};

export default Navbar;
