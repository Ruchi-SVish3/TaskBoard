import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Guest = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to the Self-Curated Task Board</h1>
          <p className="lead">The most convenient way to manage your day-to-day professional chores.</p>
          <p>New User? Kindly Register else Login to manage your schedules.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Guest;