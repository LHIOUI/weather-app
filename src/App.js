import React from 'react';

import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';
import { getWeather } from './api/index';

class App extends React.Component {
  state = {};

  onFormSubmit = async ({ city, country }) => {
    let data = await getWeather(city, country);
    if (data) {
      this.setState({ ...data, error: null });
    } else {
      this.setState({
        error: 'Please enter some values',
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form onFormSubmit={this.onFormSubmit} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
