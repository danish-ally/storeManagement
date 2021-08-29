import React from "react";
import colors from "../constants/Colors";

const SyntaxGenGenerateButton = (props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: colors.ready,
          width: 150,
          marginTop: 10,
          padding: 7,
          fontWeight: "bold",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 50,
          borderColor: colors.primaryDark,
          color: colors.primaryDark,
        }}
      >
        Generate
      </button>
    </>
  );
};

export default SyntaxGenGenerateButton;
