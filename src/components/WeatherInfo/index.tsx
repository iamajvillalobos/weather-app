import PropTypes from "prop-types";

type WeatherInfoProps = {
  location: String,
  temperature: Number,
  windspeed: Number
}

export const WeatherInfo = (
  {location, temperature, windspeed}: WeatherInfoProps
) => {
  return (
    <div className="card shadow-0 border">
      <div className="card-body p-4">
        <h4 className="mb-1 sfw-normal">{location}</h4>
        <p className="mb-2">
          Current temperature: <strong>{temperature.toString()}</strong>℃
        </p>
        <p className="mb-2">
          Windspeed: <strong>{windspeed.toString()}</strong>℃
        </p>
      </div>
    </div>
  )
}

WeatherInfo.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  windspeed: PropTypes.string.isRequired,
}