import { useAppSelector } from './app/hooks';
import './App.css';
import { BoxShadowOptions } from './features/BoxShadowOptions/BoxShadowOptions';

export default function App() {
  const boxStyleOptions = useAppSelector(state => state.boxShadow);
  return (
    <div className="App">
      <div id='item-container'>
        <BoxShadowOptions />
        <div id='box'
        style={
          boxStyleOptions.inset === false ? 
          {boxShadow: ` ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px 
          ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color}`} 
          : {
            boxShadow: `inset ${boxStyleOptions.rightShift}px ${boxStyleOptions.bottomShift}px 
          ${boxStyleOptions.blur}px ${boxStyleOptions.spread}px ${boxStyleOptions.color}`
          }
        }
        ></div>
      </div>
    </div>
  );
}
