import './Box.css';

type Props = {
  boxStyleOptions: any
}

export const Box: React.FC<Props> = ({boxStyleOptions}) => {
    return (
        <div id='box'
        style={
          boxStyleOptions.inset === false ? 
          {
          boxShadow: ` ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px 
          ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color}`, 
          borderRadius: `${boxStyleOptions.borderRadius}px`,
          width: `${boxStyleOptions.width}px`,
          height: `${boxStyleOptions.height}px`,
        } 
          : 
          {
          boxShadow: `inset ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px 
          ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color}`,
          borderRadius: `${boxStyleOptions.borderRadius}px`,
          width: `${boxStyleOptions.width}px`,
          height: `${boxStyleOptions.height}px`,   
          }
        }
        >         
        </div>
    )
}