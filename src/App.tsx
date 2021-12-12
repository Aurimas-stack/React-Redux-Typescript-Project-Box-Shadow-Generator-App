import './App.css';
import { BoxShadowOptions } from './features/BoxShadowOptions/BoxShadowOptions';
import { Box } from './features/Box/Box';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { AdditionalOptions } from './features/AdditionalOptions/AdditionalOptions';
import { useState } from 'react';
import { changeColour, changeShift, changeInset, resetState } from './features/Box/BoxSlice';

export default function App() {

  const [color, setColor] = useState('');//holds current colour value and sets new colour value
  const [currOptions, setOptions] = useState(''); //holds values for ouput
  const dispatch = useAppDispatch(); //dispatch method
  const boxStyleOptions = useAppSelector(state => state.boxShadow); //method to get current boxSlice state

  const handleInset = (e: any) => { //Method for handling when output has to have inset in output
    e.preventDefault();
    let buttonValue = (e.target.value === "true");
    dispatch(changeInset(buttonValue))
  }
  const handleReset = (e:any) => { //method for input reset
    e.preventDefault();
    dispatch(resetState());
  }
  const handleShift = (e: any) => { //Method for slider inputs
        e.preventDefault();
        Object.keys(boxStyleOptions).forEach(option => {
            if(option === e.target.id) {
                dispatch(changeShift({value: Number(e.target.value), text: option}))
            }
        })
    }
  const changeColor = (e: any) => { //Method for changing shadow color and output values
    e.preventDefault();
    if(color !== '') {
        dispatch(changeColour(color))
    }
  }
  return (
    <div className="App">
      <div className='component-cont'>
      <div id='item-container'>
        <BoxShadowOptions
          handleShift={handleShift}
          handleInset={handleInset}
          handleReset={handleReset}
          currOptions={currOptions}
          setOptions={setOptions}
          boxStyleOptions={boxStyleOptions}
          />
        <Box boxStyleOptions={boxStyleOptions}/>
      </div>
      <AdditionalOptions 
        color={color} 
        setColor={setColor} 
        changeColor={changeColor}
        handleShift={handleShift}
        boxStyleOptions={boxStyleOptions}
        />
      </div>
    </div>
  );
}
