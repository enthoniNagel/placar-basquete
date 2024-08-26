import React, { Component } from 'react';

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.setState({ hora: `${hours}:${minutes}:${seconds}` });
    }, 1000);
  };

  render() {
    return (
      <div style={styles.cronometro}>
        <h2>Tempo de Jogo</h2>
        <h3>{this.state.hora}</h3>
      </div>
    );
  }
}

const styles = {
  cronometro: {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default Cronometro;
