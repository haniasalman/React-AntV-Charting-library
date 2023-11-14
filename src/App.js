import './App.css';
import AreaChart from './charts/AreaChart';
import AreaCh from './charts/AreaChart2';
import MixedChart from './charts/MixedChart'
import PieChart from './charts/PieChart';

function App() {
  return (
    <div className="App">
      Ant V 
      {/* <MixedChart/> */}
      <PieChart/>
      <br/>
      {/* <AreaChart/> */}
      <AreaCh/>
    </div>
  );
}

export default App;
