import React from "react";
// Stateless component

const API_WEATHER = "http://localhost:8888/weather-service/weathers?cityName=";

// const Weather = (props) => {
// //   1 .
// //   class 형태로 변경 후 fetch 선택 도시의 날씨
// //   2 .
// //   react Hook << 검색
// //   state, setState
//   const { cityName } = props.match.params;
//   console.log(cityName);
//   return (
//     <div>
//       <h1>Weather : {cityName}</h1>
//       <p>Here is front page.!</p>
//     </div>
//   );
// };
// export default Weather;

class Weather extends React.Component {
    state = {
        cityName: "a",
        weather: "b",
        weatherDescription: "c",
        temperature: 0,
        icon : ""
    };
    componentDidMount() {
      console.log("weather component");
      const { cityName } = this.props.match.params;
      console.log(cityName);
      console.log(API_WEATHER+cityName);
      
      const citiesData = fetch(API_WEATHER+cityName)
        .then().catch(err => console.warn(`ERROR occurs : ${err.message}`))
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            cityName : cityName,
            weather : data.weather[0].main,
            weatherDescription : data.weather[0].description,
            temperature : (data.main.temp - 273.15).toFixed(2) +" °C",
            icon : data.weather[0].icon
          })
          console.log(data.weather[0].main);
        });
      }
      render() {
          return(
            <div>
              <h1>city : {this.state.cityName}</h1>
              <img src= "http://openweathermap.org/img/wn/04n@2x.png" alt="Weather icon"></img>
              <h1>weather : {this.state.weather}</h1>
              <h1>description : {this.state.weatherDescription}</h1>
              <h1>temperature : {this.state.temperature}</h1>
              <h1>icon : {this.state.icon}</h1>
             
            </div>
          )
      }
}
export default Weather;