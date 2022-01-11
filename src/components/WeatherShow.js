import { CityContext, useContext} from '../context/SelectCity';

function WeatherShow() {
    const { cityWeatherInfoCurrent } = useContext(CityContext)
    return (
        <div className="weather-info">
            {
                cityWeatherInfoCurrent &&
                <div className="card-info">
                <div className="card-img">
                    <img src={`http://openweathermap.org/img/wn/${cityWeatherInfoCurrent.weather[0].icon}@4x.png`} alt={cityWeatherInfoCurrent.weather[0].icon}/>
                </div>
                <div className="boxs">
                    <div className="card-box" id="celcius">
                        {Math.ceil(cityWeatherInfoCurrent.temp)} °C
                    </div>
                    <div className="card-box card-box-2">
                        {
                            cityWeatherInfoCurrent.weather[0].description
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default WeatherShow
