import React, { Component } from 'react';
import Cronometro from './Cronometro';

class PlacarBasquete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipe1: 0,
      equipe2: 0
    };
    this.autoAddPointsInterval = null;
  }

  componentDidMount() {
    this.startAutoAddPoints();
  }

  componentWillUnmount() {
    clearInterval(this.autoAddPointsInterval);
  }

  startAutoAddPoints = () => {
    this.autoAddPointsInterval = setInterval(() => {
      const randomTeam = Math.random() < 0.5 ? 'equipe1' : 'equipe2';
      this.addPointToTeam(randomTeam);
    }, 10000);
  };

  addPointToTeam = (team) => {
    this.setState(prevState => ({
      [team]: prevState[team] + 1
    }));
  };

  adicionarPontosEquipe1 = () => {
    this.addPointToTeam('equipe1');
  };

  removerPontosEquipe1 = () => {
    this.setState(prevState => ({
      equipe1: Math.max(prevState.equipe1 - 1, 0)
    }));
  };

  adicionarPontosEquipe2 = () => {
    this.addPointToTeam('equipe2');
  };

  removerPontosEquipe2 = () => {
    this.setState(prevState => ({
      equipe2: Math.max(prevState.equipe2 - 1, 0)
    }));
  };

  resetarPlacar = () => {
    this.setState({
      equipe1: 0,
      equipe2: 0
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <Cronometro />
        <h1>Placar de Basquete</h1>
        <div style={styles.placar}>
          <div style={styles.equipe}>
            <h2>Equipe 1</h2>
            <h3>{this.state.equipe1}</h3>
            <button onClick={this.adicionarPontosEquipe1}>Adicionar Ponto</button>
            <button onClick={this.removerPontosEquipe1}>Remover Ponto</button>
          </div>
          <div style={styles.equipe}>
            <h2>Equipe 2</h2>
            <h3>{this.state.equipe2}</h3>
            <button onClick={this.adicionarPontosEquipe2}>Adicionar Ponto</button>
            <button onClick={this.removerPontosEquipe2}>Remover Ponto</button>
          </div>
        </div>
        <button onClick={this.resetarPlacar} style={styles.resetButton}>Resetar Placar</button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  placar: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px'
  },
  equipe: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  resetButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default PlacarBasquete;
