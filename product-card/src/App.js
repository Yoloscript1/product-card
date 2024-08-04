import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "Drake"; 

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Image />
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? <h2>Hello, {firstName}!</h2> : <h2>Hello, there!</h2>}
        {firstName && <img src="https://via.placeholder.com/150" alt="placeholder" />}
      </div>
    </div>
  );
}

export default App;

