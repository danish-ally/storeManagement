import React from "react";
const MyCredentialCard = (props) => {
  return (
    <>
      <div
        style={{
          height: 180,
          width: 330,
          marginRight: 10,
          marginLeft: 10,
          backgroundColor: "#fff",
          textAlign: "left",
          padding: 20,
          borderRadius: 5,
          boxShadow: "5px 5px 10px #888888",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            {props.name}
          </div>
          <div>8098</div>
        </div>

        <div style={{ marginTop: 10, fontSize: 14 }}>API Key : X X X X X X</div>
        <div style={{ fontSize: 14 }}>Public Key : X X X X X X X X</div>
        <div style={{ fontSize: 14 }}>
          Last Token Update : -
        </div>
        <div style={{ marginTop: 15 }}>
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                paddingLeft: 10,
                paddingTop: 5,
                paddingRight: 7,
                borderRadius: 5,
                height: 30,
                width: 80,
                alignSelf: "center",
                fontSize: 14,
                display: "flex",
              }}
            >
              Activate
            </button>
            <button
              style={{
                backgroundColor: "red",
                height: 30,
                width: 30,
                borderRadius: 5,
                color: "white",
                paddingLeft: 11,
                paddingTop: 1,
                display: "flex",
              }}
              onClick={props.deleteCredential}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCredentialCard;
