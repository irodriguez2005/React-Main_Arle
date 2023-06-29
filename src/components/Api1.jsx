import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



export function Apiex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/posts")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePost = (data) => {
    axios.post('https://api.example.com/posts', data)
      .then(response => {
        setPosts([...posts, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (id, data) => {
    axios.put(`https://api.example.com/posts/${id}`, data)
      .then(response => {
        setPosts(posts.map(post => {
          if (post.id === id) {
            return response.data;
          } else {
            return post;
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`https://api.example.com/posts/${id}`)
      .then(response => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
        <h1>Articulos</h1>
        <div className="pos">
          {data.map((post) => (
            
            <Card style={{ width: "20rem",margin: "15px", alignItems: "center", padding: "8px"}}>
              <Card.Img
                variant="top"
                src={post.image}
                style={{ width: "4rem"  }}
              />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>$ {post.status}</Card.Text>
                <Card.Text>{post.species}</Card.Text>
               
              </Card.Body>
              <Button variant="primary" style={{width: "100%"}}>Add Carrito</Button>
            </Card>
          ))}
      </div>
      </div>
    
  );
}
