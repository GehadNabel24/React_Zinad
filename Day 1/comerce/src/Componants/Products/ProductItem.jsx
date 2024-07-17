import React from "react";
import { Button, Card } from "react-bootstrap";
export function ProductItem() {
  return (
    <div className="col-sm-4 col-md-3 mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/5717983/pexels-photo-5717983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>{Card.Title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
