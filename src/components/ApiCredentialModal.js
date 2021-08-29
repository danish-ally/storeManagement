import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { submitNewCredentials } from "../redux/apicredentials/actions";
import swal from "sweetalert";

const customStyles = {
  content: {
    top: "0%",
    left: "auto",
    right: "0%",
    bottom: "auto",
  },
};

const ApiCredentialModal = (props) => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    appName: "",
    apiKey: "",
    secretKey: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.apiKey.length >= 6 &&
      state.appName.length >= 5 &&
      state.secretKey.length >= 5
    ) {
      dispatch(submitNewCredentials(state));
    } else {
      swal("Invalid Entry", "Enter valid fields to continue!", "error");
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ height: "100vh", width: "50vh" }}>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: "bold" }}>App Api</div>
              <button
                style={{ fontSize: 20, fontWeight: "bold" }}
                onClick={props.closeModal}
              >
                x
              </button>
            </div>
            <div style={{ marginTop: 30 }}>
              <div class="">
                <form onSubmit={handleSubmit}>
                  <label for="fname">App Name</label>
                  <input
                    style={inputbox}
                    type="text"
                    id="fname"
                    name="appName"
                    placeholder="ENTER APP NAME"
                    onChange={handleChange}
                  />
                  <label for="lname">Api Key</label>
                  <input
                    style={inputbox}
                    type="text"
                    id="lname"
                    name="apiKey"
                    placeholder="ADD API KEY"
                    onChange={handleChange}
                  />
                  <label for="lname">Secret Key</label>
                  <input
                    style={inputbox}
                    type="text"
                    id="lname"
                    name="secretKey"
                    placeholder="ADD SECRET KEY"
                    onChange={handleChange}
                  />
                  <div style={{ marginTop: 20 }}>
                    <button class="login100-form-btn">Add Api</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

const inputbox = {
  width: "100%",
  padding: "12px 10px",
  margin: "8px 0",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 5,
};

export default ApiCredentialModal;
