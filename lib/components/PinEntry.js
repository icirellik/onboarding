import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PinEntry extends React.PureComponent {
  state = {
    pin: ""
  };
  appendPin = (pin) => {
    this.setState({
      pin: this.state.pin + pin,
    });
  };
  render() {
    return (
      <Grid>
        <Row><input value={this.state.pin} /></Row>
        <Row>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("1")}>1</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("2")}>2</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("3")}>3</Col>
        </Row>
        <Row>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("4")}>4</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("5")}>5</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("6")}>6</Col>
        </Row>
        <Row>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("7")}>7</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("8")}>8</Col>
          <Col className="btn btn-secondary" role="button" onClick={() => this.appendPin("9")}>9</Col>
        </Row>
        <Row>
          <Link className="btn btn-primary" role="button" to="/">Login</Link>
        </Row>
      </Grid>
    );
    }
};

export default PinEntry;
