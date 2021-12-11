import './AdditionalOptions.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeShift, changeColour} from '../Box/BoxSlice';
import { useState, useEffect } from 'react';

export const AdditionalOptions = () => {
    const [color, setColor] = useState('');
    const dispatch = useAppDispatch();
    const boxStyleOptions = useAppSelector(state => state.boxShadow);
    const handleShift = (e: any) => {
        e.preventDefault();
        Object.keys(boxStyleOptions).forEach(option => {
            if(option === e.target.id) {
                dispatch(changeShift({value: Number(e.target.value), text: option}))
            }
        })
    }
    useEffect(() => {
        if(color !== '') {
            dispatch(changeColour(color))
        }
    })
    /*onst changeColor = (e: any) => {
        e.preventDefault();
        if(color !== '') {
            dispatch(changeColour(color))
        }
    } */
    return (
        <div className='addopt-container'>
            <div className='slider-container'>
                <p className='slider-name' >Box Width</p>
                <input className='slider' id='width'type='range' min='0' max='250' 
                step='1' value={boxStyleOptions.width} onChange={handleShift}/>
                <p>{boxStyleOptions.width}px</p>
            </div>
            <div className='slider-container'>
                <p className='slider-name' >Box Height</p>
                <input className='slider' id='height'type='range' min='0' max='250' 
                step='1' value={boxStyleOptions.height} onChange={handleShift}/>
                <p>{boxStyleOptions.height}px</p>
            </div>
            <div className='slider-container '>
                <p className='slider-name' >Shadow Colour</p>
                <input  id='color' type='text' value={color === '' ? boxStyleOptions.color : color} readOnly/>
                <input id='color-picker' type='color' title='Pick Color'
                value={color === '' ? boxStyleOptions.color : color} onChange={e => setColor(e.target.value)}/>
            </div>
        </div>
    )
}