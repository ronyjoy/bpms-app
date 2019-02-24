import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Row } from 'reactstrap';
import { connect } from 'react-redux';

class Login extends Component {
 render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4"  >
                  <CardBody>
                    <Form action="/auth/auth0">
          
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login With Auth0</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
          
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Login);
