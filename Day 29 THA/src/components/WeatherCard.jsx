import { useSelector } from "react-redux";

const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className={theme ? "card dark" : "card"}>
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°C</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind Speed</div>
                        <div className="data">
                          {placeData.current.wind_kph}{" "}
                          <span className="unit">Km/h</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}{" "}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_in}{" "}
                          <span className="unit">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Place not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};
export default WeatherCard;