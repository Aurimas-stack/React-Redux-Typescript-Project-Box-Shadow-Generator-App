import './AdditionalOptions.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeShift, changeColour} from '../Box/BoxSlice';

export const AdditionalOptions = () => {
    const dispatch = useAppDispatch();
    const boxStyleOptions = useAppSelector(state => state.boxShadow);
    const handleShift = (e: any) => {
        e.preventDefault();
        Object.keys(boxStyleOptions).forEach(option => {
            if(option === e.target.id) {
                if(e.target.id === 'color') {
                    dispatch(changeColour(e.target.value))
                } else {
                    dispatch(changeShift({value: Number(e.target.value), text: option}))
                }
            }
        })
    }
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
            <div className='slider-container'>
                <p className='slider-name' >Shadow Colour</p>
                <input id='color' type='text' value={boxStyleOptions.color} onChange={handleShift}/>
            </div>
        </div>
    )
}