import React from 'react'
import { updateFields } from '../redux/syntaxgenerator/actions';
import { useSelector, useDispatch } from "react-redux";


const SyntaxBrokerInput = (props) => {

  const dispatch = useDispatch();
    return (
        <div>
            <div style={{marginTop:10, fontWeight:'bold'}}>{props.header}</div>
                <input
                  style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#845EC2",
                    borderRadius: 5,
                    marginTop: 5,
                    padding: 2,
                    width: "50%"
                  }}
                  value={props.value}
                  type="text"
                  name={props.name}
                  placeholder={props.placeholder}
                  
                  onChangeCapture={(e) => 
                    dispatch(
                      updateFields(e.target.value,`${props.fieldId}`, true)
                    )
                  }
                />
        </div>
    )
}

export default SyntaxBrokerInput