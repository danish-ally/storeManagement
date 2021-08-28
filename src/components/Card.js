import {React, useState} from "react";
import Client from "../images/client.jpg";
import { Modal, Button } from "react-bootstrap";

function Card(props) {

  const [show, setshow] = useState(false);

  return (
    <div>
    <div class="card" style={{width: "18rem" , marginBottom: "20px"}}>
        <img src={props.img} alt="client" />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
          {props.Description}
          </p>
          <a href="#" class="btn btn-primary" onClick={() => setshow(true)}>
            Read more
          </a>
          <Modal show={show}>
                  <Modal.Header>
                    <h3 style={{
                        fontWeight: "bold",
                      }}>{props.name}</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <p
                      style={{
                        fontSize: 16,
                        color: "black",
                        // fontWeight: "bold",
                        wordBreak: "break-all",
                      }}
                    >
                      {props.ReadMore}
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setshow(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
        </div>
      </div>
      </div>
  );
}

export default Card;
