import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { DecryptAndVerifyDetailsForm } from "./DecryptAndVerifyDetailsForm";
import { PreRestorationDetailsForm } from "./PreRestorationDetailsForm";
import { RestorationDetailsForm } from "./RestorationDetailsForm";
import { CopyToStageDetailsForm } from "./CopyToStageDetailsForm";

export class UpdateStatus extends Component {
  render() {
    return (
      <div className="mt-4">
        <h4 className="m-3 d-flex">Select one of the below stages: </h4>
        <Accordion className="mt-4">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Decrypt and Verify
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DecryptAndVerifyDetailsForm />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Pre-restoration
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <PreRestorationDetailsForm />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Restoration
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <RestorationDetailsForm />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Copy To Stage
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <CopyToStageDetailsForm />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
