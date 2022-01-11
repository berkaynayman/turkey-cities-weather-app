import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SelectCity from './components/SelectCity';
import WeatherShow from './components/WeatherShow';
import { CityContext } from './context/SelectCity';
import SectionDays from './components/SectionDays';

function App() {
  const [city, setCity] = useState("")
  const [cityList, setCityList] = useState([])
  const [cityWeatherInfoCurrent, setCityWeatherInfoCurrent] = useState("")
  const [cityWeatherInfoDaily, setCityWeatherInfoDaily] = useState("")
  const [latlon, setLatlon] = useState({lat:1, lon:1})

  useEffect(() => {
     axios("https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json")
    .then((data) => setCityList(data.data))
  },[])

  useEffect(() =>{
    cityList.forEach((item) => {
      if(item.name === city){
        setLatlon({
          ...latlon,
          lat: item.latitude,
          lon: item.longitude
        })
      }
    })
  }, [city])

  const API    = "https://api.openweathermap.org/data/2.5/onecall?"
  const APP_ID = "e3ea724098e3627f60157b0239a1d5fb"

  useEffect(() => {
    axios(`${API}lat=${latlon.lat}&lon=${latlon.lon}&cnt=8&units=metric&appid=${APP_ID}`)
    .then((data) =>{ 
      setCityWeatherInfoDaily(data.data.daily)
      setCityWeatherInfoCurrent(data.data.current)
    })
  },[latlon])


  const data = {
    city,
    setCity,
    cityList,
    cityWeatherInfoCurrent,
    cityWeatherInfoDaily
  }

  return (
    <CityContext.Provider value={data}>
      <div className="sections">
        <div className="section">
          <SelectCity/>
          <WeatherShow/>
        </div>
        <SectionDays/>
      </div>
    </CityContext.Provider>
  );
}

export default App;
