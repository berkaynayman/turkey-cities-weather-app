import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development'
import { CityContext, useContext} from '../context/SelectCity';




function WeatherShow() {
    const [cityWeatherInfo, setCityWeatherInfo] = useState("")

    const API    = "https://api.openweathermap.org/data/2.5/weather?q="
    const APP_ID = "e3ea724098e3627f60157b0239a1d5fb"

    const {city} = useContext(CityContext)

    console.log(city);
    useEffect(() => {
        console.log("useeffect", city);
        axios(`${API}${city}&lang=tr&appid=${APP_ID}`)
        .then((data) => {
            setCityWeatherInfo(data.data.weather[0])
        })
    }, [city])

    return (
        <div className="weather-info">
            <div className="card-info">
                <div className="card-img">
                    <img src={`http://openweathermap.org/img/wn/${cityWeatherInfo.icon}@4x.png`}/>
                </div>
                <div className="card-description">
                    <h3>
                        {
                            cityWeatherInfo.description
                        }
                    </h3> 
                </div>
            </div>
        
            
        </div>
    )
}

export default WeatherShow
