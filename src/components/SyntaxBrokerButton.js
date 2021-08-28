import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFields } from "../redux/syntaxgenerator/actions";

const SyntaxBrokerButton = (props) => {
  const syntaxGeneratorState = useSelector(
    (state) => state.syntaxGeneratorState
  );
  const dispatch = useDispatch();

  return (
    <div>
      <button
        style={{
          borderStyle: "solid",
          width: 100,
          borderWidth: 1,
          borderColor: "#845EC2",
          color:
            syntaxGeneratorState.inputValues.broker === `${props.fieldId}`
              ? "white"
              : "#845EC2",

          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          fontSize: 14,
          fontWeight: "bold",
          backgroundColor:
            syntaxGeneratorState.inputValues.broker === `${props.fieldId}`
              ? "#845EC2"
              : "",
        }}
        onClick={() =>
          dispatch(updateFields(`${props.fieldId}`, "broker", true))
        }
      >
        {props.name}
      </button>
    </div>
  );
};

export default SyntaxBrokerButton;
