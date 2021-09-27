import React, { Component } from "react";
import { connect } from "react-redux";
import { getForm } from "../../services";
import { Container, Card, Button, Row, Col, Spinner } from "react-bootstrap";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }

  componentDidMount() {
    this.props.getForm("/product");
  }

  render() {
    const { error, isLoaded, products } = this.props;
    const containsErrorMessage = () => {
      return <div>Error: {error.message}</div>;
    };
    const isLoading = () => {
      return (
        <Container>
          <Spinner animation="grow" />
        </Container>
      );
    };
    const results = () => {
      return (
        <Container>
          <h1 className="text-center p-5">DATA PRODUCT</h1>
          <Row className="justify-content-md-center">
            {products.slice(0, 6).map((result) => (
              <Col key={result.id} className="p-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={result.picture} />
                  <Card.Body>
                    <Card.Title>{result.name}</Card.Title>
                    <Card.Text>is Active : {result.isActive}</Card.Text>
                    <Card.Text>expiredAt : {result.expiredAt}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    };

    if (error) return containsErrorMessage();
    return !isLoaded ? isLoading() : results();
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    isLoaded: true,
  };
};

export default connect(mapStateToProps, {
  getForm,
})(ProductsList);
