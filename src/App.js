import { useState } from 'react';
import './App.css';
import SelectCity from './components/SelectCity';
import WeatherShow from './components/WeatherShow';
import { CityContext } from './context/SelectCity';

function App() {
  const [city, setCity] = useState("")

  const data = {
    city,
    setCity
  }

  return (
    <CityContext.Provider value={data}>
      <div className="section">
        <SelectCity/>
        <WeatherShow/>
      </div>
    </CityContext.Provider>
  );
}

export default App;
