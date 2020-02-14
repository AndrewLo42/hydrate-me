import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  healthCheck() {
    fetch('/api/health-check')
      .then(response => response.json)
      .then(data => {
        this.setState({ message: data });
      });
  }

  render() {
    this.healthCheck();
    return (
      <div>{this.state.message}</div>
    );
  }
}

export default App;
