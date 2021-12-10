import './App.css';
import { BoxShadowOptions } from './features/BoxShadowOptions/BoxShadowOptions';
import { Box } from './features/Box/Box';
import { AdditionalOptions } from './features/AdditionalOptions/AdditionalOptions';

export default function App() {
  return (
    <div className="App">
      <div className='component-cont'>
      <div id='item-container'>
        <BoxShadowOptions />
        <Box />
      </div>
      <AdditionalOptions />
      </div>
    </div>
  );
}
