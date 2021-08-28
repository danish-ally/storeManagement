import {React, useState} from 'react'
import { Modal, Button } from "react-bootstrap";

function ModalForService() {
    const [show, setshow] = useState(false);
    return (
        <div>
            <Modal show={show}>
                  <Modal.Header>
                    <h3>Generated Code</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <p
                      style={{
                        fontSize: 16,
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "'Courier New', monospace",
                        wordBreak: "break-all",
                      }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate est unde impedit commodi labore, quo deserunt, quibusdam hic iusto quia illum asperiores voluptatum odio earum vitae veniam ab minus necessitatibus similique? Illo, quod facere magnam libero minus pariatur accusamus voluptatum quas laboriosam deserunt odit labore non at sed molestiae?
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setshow(false)}>Close</Button>
                    <Button onClick={() => setshow(false)}>Save</Button>
                  </Modal.Footer>
                </Modal>
        </div>
    )
}

export default ModalForService
