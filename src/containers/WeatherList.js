import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  calculateAvg(arr) {
    let sum = 0;
    arr.forEach( num => {
      sum += num;
    });
    const avg = sum / arr.length;
    return avg;
  }

  renderRows() {
    return this.props.weatherArr.map( (city) => {
      const tempInKelvs = city.list.map( timeStamp => {
        return timeStamp.main.temp;
      })

      // temp conversion
      const kelvinToCelciusCoeff = 273.15;
      const temp = tempInKelvs.map( temp => temp - kelvinToCelciusCoeff);

      const press = city.list.map( timeStamp => {
        return timeStamp.main.pressure;
      })

      const hum = city.list.map( timeStamp => {
        return timeStamp.main.humidity;
      })

      const tempAvg = this.calculateAvg(temp);
      const pressAvg = this.calculateAvg(press);
      const humAvg = this.calculateAvg(hum);

      return (
        <tr key={city.city.name}>
          <td>
            <GoogleMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW7zTVlbqWLh07IYCBhPYNXt2tQk_KoHw&callback=initMap"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `200px`, width: `220px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              coord={city.city.coord}
            />
          </td>
          <td>
            <Sparklines data={temp} height={200}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>AVG: {tempAvg.toFixed(1)}°C</div>
          </td>
          <td>
            <Sparklines data={press} height={200}>
              <SparklinesLine color="orange" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>AVG: {pressAvg.toFixed(1)}hPa</div>
          </td>
          <td>
            <Sparklines data={hum} height={200}>
              <SparklinesLine color="red" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>AVG: {humAvg.toFixed(1)}%</div>
          </td>
        </tr>
      )
    })
  }
  
  render() {
    return (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature [°C]</th>
            <th scope="col">Pressure [hPa]</th>
            <th scope="col">Humidity [%]</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherArr: state.weatherArr,
  }
}

export default connect(mapStateToProps)(WeatherList);