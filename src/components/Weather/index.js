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
        cityName: "",
        weather: "",
        weatherDescription: "",
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
              <i>The current weather of</i><h1> {this.state.cityName}</h1><p><i>is..</i></p>
              <img src= {`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} width ="250px" height = "250px" alt="Weather icon"></img>
              <h2>{this.state.weather} ( {this.state.weatherDescription} )</h2>
              <h2>{this.state.temperature}</h2>
            </div>
          )
      }
}
export default Weather;