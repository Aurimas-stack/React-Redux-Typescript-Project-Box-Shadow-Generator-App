import { useState } from 'react';
import './BoxShadowOptions.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeShift } from '../Box/BoxSlice';

export const BoxShadowOptions = () => {
    const dispatch = useAppDispatch();
    const boxStyleOptions = useAppSelector(state => state.boxShadow);
    const handleShift = (e: any) => {
        e.preventDefault();
        Object.keys(boxStyleOptions).map(option => {
            if(option === e.target.id) {
                dispatch(changeShift({value: Number(e.target.value), text: option}))
            }
        })
    }

    return (
        <div className='boxShadowOptions-container'>
            <div className='slider-container'>
                <input id='rightShift'type='range' min='-50' max='50' step='1' value={boxStyleOptions.rightShift} onChange={handleShift}/>
                <p>Right Shift: {boxStyleOptions.rightShift}px</p>
            </div>
            <div className='slider-container'>
                <input  id='bottomShift' type='range' min='-50' max='50' step='1' value={boxStyleOptions.bottomShift} onChange={handleShift}/>
                <p>Bottom Shift: {boxStyleOptions.bottomShift}px</p>
            </div>
            <div className='slider-container'>
                <input  id='blur' type='range' min='0' max='50' step='1' value={boxStyleOptions.blur} onChange={handleShift}/>
                <p>Blur: {boxStyleOptions.blur}px</p>
            </div>
            <div className='slider-container'>
                <input  id='spread' type='range' min='-30' max='50' step='1' value={boxStyleOptions.spread} onChange={handleShift}/>
                <p>Spread: {boxStyleOptions.spread}px</p>
            </div>
            
        </div>
    )
}