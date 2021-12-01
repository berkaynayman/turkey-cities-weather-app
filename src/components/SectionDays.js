import React from 'react'
import { CityContext, useContext} from '../context/SelectCity';

function SectionDays() {
    const {cityWeatherInfoDaily} = useContext(CityContext)

    return (
        <div className="section-days">
            {
                cityWeatherInfoDaily && (
                    cityWeatherInfoDaily.map((item) => {
                        return(
                        <div className="day">
                            <div className="card-img">
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}/>
                            </div>
                            <div className="boxs">
                                <div className="card-box" id="celcius">
                                    {item.temp.day} °C
                                </div>
                                <div className="card-box card-box-2">
                                    {item.weather[0].description}
                                </div>
                            </div>
                        </div> )
                    })
                )
            }
        </div>
    )
}

export default SectionDays
