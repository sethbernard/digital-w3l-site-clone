import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TeamPage = () => {
  const teamData = [
    { fileName: 'mt1', fullName: 'Suzan Lois', jobTitle: 'CEO/Founder' },
    { fileName: 'mt2', fullName: 'Dora Caelan', jobTitle: 'Marketing Manager' },
    { fileName: 'mt3', fullName: 'Rosanna', jobTitle: 'Sales Executive' },
    { fileName: 'mt4', fullName: 'Rose Alpha', jobTitle: 'Product Manager' },
    { fileName: 'mt5', fullName: 'Suzan Lois', jobTitle: 'Sales Executive' },
    { fileName: 'mt6', fullName: 'Dora Caelan', jobTitle: 'Product Manager' },
    { fileName: 'mt7', fullName: 'Rosanna', jobTitle: 'Sales Manager' },
    { fileName: 'mt2', fullName: 'Rose Alpha', jobTitle: 'Co-Founder' }
  ];

  const teamInfo = teamData.map(person => {
    return (
      <Col xs="6" md="3" key={person} className="employee">
        <img
          src={require(`../assets/team/${person.fileName}.jpg`)}
          alt=""
          className="img-fluid"
          style={{ paddingBottom: '30px' }}
        />
        <h4>{person.fullName}</h4>
        <p>{person.jobTitle}</p>
        <div className="team-icons">
          <a href="#" className="fab fa-facebook fb-icon" />
          <a href="#" className="fab fa-twitter twitter-icon" />
          <a href="#" className="fa fa-envelope-open envelope-icon" />
        </div>
      </Col>
    );
  });

  return (
    <Container>
      <h2 className="team-heading">Our Marketing Team</h2>
      <Row>{teamInfo}</Row>
    </Container>
  );
};

export default TeamPage;
