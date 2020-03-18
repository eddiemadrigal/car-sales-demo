import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature, buyFeature } from './actions';
import { Container, Card, Row, Col } from 'reactstrap';


const App = ( props ) => {
  console.log(props);
  const { state, buyFeature, removeFeature } = props;

  
  return (
    <Container id="container">
      <h1>Featuring: { state.car.name }</h1>
      <p className="align-center">GitHub: <a href="https://master.dowaum6f8w0jr.amplifyapp.com/" target="_blank" rel="noopener noreferrer">https://master.dowaum6f8w0jr.amplifyapp.com/</a></p>
      <Row>
        <Col sm="6">
          <Card body>
            <Header car={ state.car } />
            <AddedFeatures car={ state.car } removeFeature={ removeFeature } />
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <AdditionalFeatures store={ state.store } buyFeature ={ buyFeature } />
            <Total car={ state.car } additionalPrice={state.additionalPrice} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ( state ) => {
  return {
    state
  };
};

export default connect(mapStateToProps, { buyFeature, removeFeature })( App );