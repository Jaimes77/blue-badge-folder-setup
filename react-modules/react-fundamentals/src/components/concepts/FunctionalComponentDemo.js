import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

const FunctionalComponentDemo = () => (
  <div className="main">
    <div className="mainDiv">
      <h1>Functional Component</h1>
      <p>
        Functional Components are the primary tool in React to build a small,
        modular piece of your page.
      </p>
      <dl>
        <dt>Can use state</dt>
        <dd>
          With the 'useState' hook, functional components can now both render a
          display to the page and update the information to be shown.
        </dd>
        <dt>No 'this' keyword</dt>
        <dd>
          Older class components use 'this', functional components have no
          'this' object.
        </dd>
        <dt>Can use effects</dt>
        <dd>
          With the 'useEffect' hook, functional components can perform side
          effect with any props or state changes.
        </dd>
        <dt>return()</dt>
        <dd>
          Must return a single element, but this element may have nested
          elements inside.
        </dd>
      </dl>
      <h1>Functional Syntax versus Arrow Function</h1>
      <hr />
      <h2>Challenge</h2>
      <Row>
        <Col sm="6">
          <Card>
            <CardImg
              top
              width="100%"
              height="280px"
              src="https://i.ytimg.com/vi/h33Srr5J9nY/maxresdefault.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Fat Arrow Function</CardTitle>
              <CardSubtitle>A JS Library</CardSubtitle>
              <CardText className="text-muted">
                const HelloWorld = () =&gt;
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg
              top
              width="100%"
              height="280px"
              src="https://miro.medium.com/max/766/1*3zXRYTPXfpzgiZP4bMNUJA.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Regular 'Ol Function</CardTitle>
              <cardSubtitle>A JS Library</cardSubtitle>
              <CardText className="text-muted">
                const HelloWorld = function()
              </CardText>

              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default FunctionalComponentDemo;
