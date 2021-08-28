import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateFields } from "../redux/syntaxgenerator/actions";


const RowMapper = (props) => {
    const syntaxGeneratorState = useSelector(
        (state) => state.syntaxGeneratorState
      );
      const dispatch = useDispatch();

    return(
        <div>
        <div style={{marginTop:10, fontWeight:'bold'}}>{props.header}</div>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {props.data.map((item, index) => {
            return (
              <button
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#845EC2",
                  color:
                    `${props.inputValues}`=== item.value
                      ? "white"
                      : "#845EC2",
                  paddingInline: 50,
                  padding: 5,
                  marginTop: 10,
                  borderRadius: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                  backgroundColor:
                  `${props.inputValues}` === item.value
                      ? "#845EC2"
                      : "white",
                  margin: 5,
                }}
                key={item.value}
                onClick={() =>
                  dispatch(updateFields(item.value,`${props.fieldId}`, true))
                }
              >
                {item.label}
              </button>
            );
          })}
          {/* <button onClick={() => console.log(syntaxGeneratorState)}>hi</button> */}
        </div>
      </div>
    )

}

export default RowMapper