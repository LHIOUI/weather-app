import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    const { city, country } = this.state;
    if (city && country) {
      this.props.onFormSubmit &&
        this.props.onFormSubmit({ city, country });
      return;
    }
    //TODO: color the missing input border and
    // show a hint under it saying this field is required
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="city"
          onChange={this.onInputChange}
          placeholder="City..."
        />
        <input
          type="text"
          name="country"
          onChange={this.onInputChange}
          placeholder="Country..."
        />
        <button>Get weather now !</button>
      </form>
    );
  }
}

export default Form;
