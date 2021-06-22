import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class RestorationDetailsForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalLineItemList">
            <Form.Label column sm={2}>
              Line Item IDs
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Eg: [123,786,1234]" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalSourcePath">
            <Form.Label column sm={2}>
              Source Path
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter Source Path for Decrypt and Verify" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalDestinationPath">
            <Form.Label column sm={2}>
              Destination Path
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter Destination Path for Decrypt and Verify" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
