/* eslint-disable react/no-unescaped-entities */
import './styles/weatherCard.css'
import { useState } from "react"

/* eslint-disable react/prop-types */
const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const hidleButtonTemp = () => {
    setIsCelsius(!isCelsius)
  }



  return (
    <article className='weather'>
      <header>
        <h1>Weather App</h1>
        <h2 className="city">{weather?.name},{weather?.sys.country}</h2>
      </header>
      <section>
        <div >
          <img className='weather__img' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="img" />
        </div>
        <div>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul className='weather__list'>
            <li><span>Wind Speed: </span>{weather?.wind.speed} m/s</li>
            <li><span>Clouds: </span>{weather?.clouds.all} %</li>
            <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
          </ul>
        </div>
      </section>
      <footer>
        <h2 className="celsius">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F` }</h2>
        <button onClick={hidleButtonTemp}> Change to {isCelsius ? '°F' : '°C'}</button>
      </footer>
    </article>
  )
}



export default WeatherCard