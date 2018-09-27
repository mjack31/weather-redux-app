import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/fetchWeatherAsyncAction';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  //input change event
  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      term: event.target.value,
    })
  }

  //submit event
  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" placeholder="Check weather in your favorite city in Poland" value={this.state.term} onChange={this.onInputChange}></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  fetchWeather: fetchWeather,
}

export default connect(null, mapDispatchToProps)(SearchBar);