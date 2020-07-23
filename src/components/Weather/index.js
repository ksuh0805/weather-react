import React from "react";
// Stateless component

const API_WEATHER = "http://localhost:8888/weather-service/weathers?cityName={city}";

const Weather = (props) => {
  // 1 .
  // class 형태로 변경 후 fetch 선택 도시의 날씨
  // 2 .
  // react Hook << 검색
  // state, setState
  const { cityName } = props.match.params;
  console.log(cityName);
  return (
    <div>
      <h1>Weather : {cityName}</h1>
      <p>Here is front page.!</p>
    </div>
  );
};
export default Weather;

// class Weather extends React.Component {
//     currentWeather = {
//         cityName,
//         weather,
//         weatherDescription,
//         temperature
//     };
// }