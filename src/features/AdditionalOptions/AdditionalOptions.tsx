import './AdditionalOptions.css';

type Props = {
    color: string,
    setColor: (val: string) => void,
    changeColor: (val: any) => void,
    handleShift: (val: any) => void,
    boxStyleOptions: any
} 

export const AdditionalOptions: React.FC<Props> = ({color, setColor, changeColor, handleShift, boxStyleOptions}) => {
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
                value={color === '' ? boxStyleOptions.color : color} onChange={(e) => {setColor(e.target.value); changeColor(e)}}/>
            </div>
        </div>
    )
}