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
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("1")}
            role="button"
          >1</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("2")}
            role="button"
          >2</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("3")}
            role="button"
          >3</Col>
        </Row>
        <Row>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("4")}
            role="button"
          >4</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("5")}
            role="button"
          >5</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("6")}
            role="button"
          >6</Col>
        </Row>
        <Row>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("7")}
            role="button"
          >7</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("8")}
            role="button"
          >8</Col>
          <Col
            className="btn btn-secondary"
            onClick={() => this.appendPin("9")}
            role="button"
          >9</Col>
        </Row>
        <Row>
          <Link className="btn btn-primary" role="button" to="/">
            Login
          </Link>
        </Row>
      </Grid>
    );
    }
};

export default PinEntry;
