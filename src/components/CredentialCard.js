import React from "react";

const CredentialCard = (props) => {
  return (
    <>
      <div
        style={{
          height: 100,
          width: 150,
          marginRight: 10,
          marginLeft: 10,
          backgroundColor: "#fff",
          textAlign: "center",
          paddingTop: 20,
          borderRadius: 5,
          boxShadow: "5px 5px 10px #888888",
        }}
      >
        <div>{props.name}</div>
        <button
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "green",
            color: "green",
            paddingLeft: 10,
            paddingRight: 10,
            padding: 5,
            marginTop: 10,
            borderRadius: 50,
            fontSize: 14,
          }}
          onClick={props.openModal}
        >
          Add Api
        </button>
      </div>
    </>
  );
};

export default CredentialCard;
