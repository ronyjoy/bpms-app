import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";

class User extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Add  Customer</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Company",
                          inputProps: {
                            type: "text",
                            disabled: false,
                            defaultValue: ""
                          }
                        },
                        {
                          label: "Contact Person",
                          inputProps: {
                            type: "text",
                            defaultValue: ""
                          }
                        },
                        {
                          label: "Email address",
                          inputProps: {
                            type: "email",
                            placeholder: ""
                          }
                        }
                      ]}
                    />
                   
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          inputProps: {
                            type: "text",
                            placeholder: "Address",
                            defaultValue:
                              ""
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "City",
                          inputProps: {
                            type: "text",
                            defaultValue: "",
                            placeholder: "City"
                          }
                        },
                        {
                          label: "Country",
                          inputProps: {
                            type: "text",
                            defaultValue: "",
                            placeholder: "Country"
                          }
                        },
                        {
                          label: "Postal Code",
                          inputProps: {
                            type: "number",
                            placeholder: "ZIP Code"
                          }
                        }
                      ]}
                    />
                   
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} xs={12}>
        
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default User;
