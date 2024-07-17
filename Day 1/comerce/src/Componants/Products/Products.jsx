import React from "react";
import { ProductItem } from "./ProductItem";
import { ProductList } from "../../Models/ProductList";
import { Button, Card } from "react-bootstrap";

export function Products() {
  return (
    <div className="bg-light p-5 text-center">
      <div className="container">
        <h1 className="mb-5">Our Products</h1>
        <div className="row">
          {ProductList.map((product, index) => {
            return (
              <div className="col-sm-4 col-md-3 mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.img}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
