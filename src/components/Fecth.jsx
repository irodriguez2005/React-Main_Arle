import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Ap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apData = async () => {
      const response = await Ap("https://rickandmortyapi.com/api/character");
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    apData();
  }, []);

  return (
    <div className="container">
      <h1>Articulos</h1>
      <div className="pos">
        {data.map((post) => (
          <Card
            style={{
              width: "20rem",
              margin: "15px",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <Card.Img
              variant="top"
              src={post.image}
              style={{ width: "4rem" }}
            />
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
              <Card.Text>$ {post.status}</Card.Text>
              <Card.Text>{post.species}</Card.Text>
            </Card.Body>
            <Button variant="primary" style={{ width: "100%" }}>
              Add Carrito
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}