import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Secrets from './components/Secrets.js';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Container>
        <Row>
          <h1>Rime of the frostmaiden</h1>
          <h2>Secrets Generator</h2>
          <Secrets />
        </Row>
      </Container>
    </div>
  );
}

export default App;
