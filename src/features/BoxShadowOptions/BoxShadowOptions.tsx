import './BoxShadowOptions.css';
import { BoxShadowOuput } from '../BoxShadowOuput/BoxShadowOutput';
import { useEffect } from 'react';

type Props = {
    handleInset: (val: any) => void,
    handleReset: (val: any) => void,
    handleShift: (val:any) => void,
    currOptions: string,
    setOptions: (val:string) => void,
    boxStyleOptions:any
}

export const BoxShadowOptions: React.FC<Props> = ({handleInset, handleReset, handleShift, currOptions, setOptions, boxStyleOptions}) => {
    useEffect(() => {
        if(boxStyleOptions.inset === false) {
            setOptions(
                `box-shadow: ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color}; 
border-radius: ${boxStyleOptions.borderRadius}px; //element radius
width: ${boxStyleOptions.width}px; //element width
height: ${boxStyleOptions.height}px; //element height`
            )
        } else {
            setOptions(
                `box-shadow: inset ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color};
border-radius:  ${boxStyleOptions.borderRadius}px; //element radius
width: ${boxStyleOptions.width}px; //element width
height: ${boxStyleOptions.height}px; //element height`
            )
        }
    },[boxStyleOptions, setOptions])
    return (
        <div className='boxShadowOptions-container'>
            <div className='slider-container'>
                <p className='slider-name' >Right Shift</p>
                <input className='slider' id='rightShift'type='range' min='-50' max='50' step='1' value={boxStyleOptions.rightShift} onChange={handleShift}/>
                <p>{boxStyleOptions.rightShift}px</p>
            </div>
            <div className='slider-container'>
                <p className='slider-name' >Bottom Shift</p>
                <input  className='slider'  id='bottomShift' type='range' min='-50' max='50' step='1' value={boxStyleOptions.bottomShift} onChange={handleShift}/>
                <p>{boxStyleOptions.bottomShift}px</p>
            </div>
            <div className='slider-container'>
                <p className='slider-name' >Blur</p>
                <input  className='slider'  id='blur' type='range' min='0' max='50' step='1' value={boxStyleOptions.blur} onChange={handleShift}/>
                <p>{boxStyleOptions.blur}px</p>
            </div>
            <div className='slider-container'>
                <p className='slider-name' >Spread</p>
                <input  className='slider'  id='spread' type='range' min='-30' max='50' step='1' value={boxStyleOptions.spread} onChange={handleShift}/>
                <p>{boxStyleOptions.spread}px</p>
            </div>
            <div className='slider-container'>
                <p className='slider-name' >Border radius</p>
                <input  className='slider'  id='borderRadius' type='range' min='0' max='130' step='1' value={boxStyleOptions.borderRadius} onChange={handleShift}/>
                <p>{boxStyleOptions.borderRadius}px</p>
            </div>
            <div className='slider-container' id='btn-container'>
                {
                    boxStyleOptions.inset === false ?
                    <button value='true' className='btn' onClick={handleInset}>INSET</button> 
                    :
                    <button value='false' className='btn' onClick={handleInset}>NO INSET</button>
                }
                <button id='reset-btn' className='btn' onClick={handleReset}>RESET</button>
                <button id='clip-btn' className='btn' onClick={() => {navigator.clipboard.writeText(currOptions)}}>Copy to clipboard</button>
            </div>
            <BoxShadowOuput currOptions={currOptions}/>      
        </div>
    )
}