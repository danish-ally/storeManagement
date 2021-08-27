import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stateCleanup, updateFields } from "../redux/syntaxgenerator/actions";
// import SyntaxBrokerButton from "../components/SyntaxBrokerButton";
// import SyntaxBrokerInput from "../components/SyntaxBrokerInput";
// import TransactionTypes from "../constants/TransactionType";
// import RowMapper from "../components/RowMapper";
// import exchange from "../constants/Exchange";
// import variety from "../constants/Variety";
// import orderType from "../constants/OrderType";
// import product from "../constants/Product";
// import funds from "../constants/Funds";
// import colors from "../constants/Colors";
// import SyntaxGenGenerateButton from "../components/SyntaxGenGenerateButton";
// import normal from "../constants/Normal";
// import close from "../constants/Close";
// import calputselection from "../constants/CalPutSelection";
// import orderTypeMarket from "../constants/OrderTypeMarket";
// import stoplossordertype from "../constants/StoplossOrderType";
// import plusminus from "../constants/PlusMinus";
// import { Modal, Button } from "react-bootstrap";

const SyntaxGenerator = (props) => {
  return (
    <h1>
      syntax
    </h1>
  )
//   const authState = useSelector((state) => state.authState);

//   const syntaxGeneratorState = useSelector(
//     (state) => state.syntaxGeneratorState
//   );
//   const dispatch = useDispatch();
//   const [percentage, setPercentage] = React.useState(false);

//   useEffect(() => {
//     dispatch(stateCleanup());
//   }, [dispatch]);

//   const [show, setshow] = useState(false);

//   return (
//     <>
//       <div style={{ padding: 25 }}>
//         <div style={{ fontSize: 25 }}>Syntax Generator</div>
//         <div
//           style={{
//             display: "flex",

//             justifyContent: "flex-start",
//             marginTop: 30,
//           }}
//         >
//           <div style={{ marginRight: 50 }}>
//             <SyntaxBrokerButton name="Angel" fieldId="angel" />
//             <SyntaxBrokerButton name=" Kotak" fieldId="kotak" />
//           </div>
//           <div>
//             <RowMapper
//               inputValues={syntaxGeneratorState.inputValues.variety}
//               fieldId="variety"
//               header="Variety"
//               data={variety}
//             />
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "NORMAL" ? (
//               <>
//                 <div>
//                   <SyntaxBrokerInput
//                     header="Instrument Token"
//                     value={syntaxGeneratorState.inputValues.IT}
//                     name="IT"
//                     placeholder="IT"
//                     fieldId="IT"
//                   />

//                   <SyntaxBrokerInput
//                     header="Trading Symbol"
//                     value={syntaxGeneratorState.inputValues.TS}
//                     name="TS"
//                     placeholder="TS"
//                     fieldId="TS"
//                   />
//                   <RowMapper
//                     inputValues={syntaxGeneratorState.inputValues.exchange}
//                     fieldId="exchange"
//                     header="Exchange"
//                     data={exchange}
//                   />

//                   <SyntaxBrokerInput
//                     header="Quantity"
//                     value={syntaxGeneratorState.inputValues.quantity}
//                     name="quantity"
//                     placeholder="quantity"
//                     fieldId="quantity"
//                   />
//                   <input
//                     type="checkbox"
//                     name="checkbox"
//                     checked={
//                       syntaxGeneratorState.inputValidity.quantitypercentage
//                     }
//                     onChange={() =>
//                       dispatch(
//                         updateFields(
//                           "%",
//                           "quantitypercentage",
//                           !syntaxGeneratorState.inputValidity.quantitypercentage
//                         )
//                       )
//                     }
//                   />
//                   <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                     % Percentage
//                   </label>
//                   {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                     <>
//                       <RowMapper
//                         inputValues={syntaxGeneratorState.inputValues.funds}
//                         fieldId="funds"
//                         header="Funds"
//                         data={funds}
//                       />
//                       <SyntaxBrokerInput
//                         header="Leverage"
//                         value={syntaxGeneratorState.inputValues.LEVERAGE}
//                         name="LEVERAGE"
//                         placeholder="Leverage"
//                         fieldId="LEVERAGE"
//                       />
//                       <SyntaxBrokerInput
//                         header="Per Lot Size (Optional)"
//                         value={syntaxGeneratorState.inputValues.perLotSize}
//                         name="perLotSize"
//                         placeholder="Per Lot Size"
//                         fieldId="perLotSize"
//                       />
//                     </>
//                   ) : null}
//                   <RowMapper
//                     inputValues={
//                       syntaxGeneratorState.inputValues.transactionType
//                     }
//                     fieldId="transactionType"
//                     header="Transaction Types"
//                     data={TransactionTypes}
//                   />
//                   <RowMapper
//                     inputValues={syntaxGeneratorState.inputValues.orderType}
//                     fieldId="orderType"
//                     header="Order Type"
//                     data={orderType}
//                   />
//                   {syntaxGeneratorState.inputValues.orderType === "LIMIT" ? (
//                     <>
//                       <SyntaxBrokerInput
//                         header="LTP (LIMIT)"
//                         value={syntaxGeneratorState.inputValues.limit}
//                         name="limit"
//                         placeholder="Ex. 1"
//                         fieldId="limit"
//                       />
//                       <input
//                         type="checkbox"
//                         name="checkbox"
//                         checked={
//                           syntaxGeneratorState.inputValidity.QuantityPercentage
//                         }
//                         onChange={() =>
//                           dispatch(
//                             updateFields(
//                               "%",
//                               "QuantityPercentage",
//                               !syntaxGeneratorState.inputValidity
//                                 .QuantityPercentage
//                             )
//                           )
//                         }
//                       />
//                       <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                         % Percentage
//                       </label>
//                     </>
//                   ) : null}
//                   <RowMapper
//                     inputValues={syntaxGeneratorState.inputValues.productType}
//                     fieldId="productType"
//                     header="Product"
//                     data={product}
//                   />
//                 </div>
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123;
//                       "V":"{syntaxGeneratorState.inputValues.variety}",
//                       "TT":"{syntaxGeneratorState.inputValues.transactionType}",
//                       "E":"{syntaxGeneratorState.inputValues.exchange}",
//                       "IT":"{syntaxGeneratorState.inputValues.IT}", 
//                       "TS":"{syntaxGeneratorState.inputValues.TS},
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}%", 
//                           "FUND":"{syntaxGeneratorState.inputValues.funds}",
//                           "LEVERAGE":"{syntaxGeneratorState.inputValues.LEVERAGE}X",
//                           "PER_LOT_SIZE":"{syntaxGeneratorState.inputValues.perLotSize}", 
//                           "OT":"{syntaxGeneratorState.inputValues.orderType}",
//                         </>
//                       ) : (
//                         <>
//                         "Q":"{syntaxGeneratorState.inputValues.quantity}",
//                         </>
//                       )}
//                       {syntaxGeneratorState.inputValues.orderType ===
//                       "LIMIT" ? (
//                         <>
//                           {syntaxGeneratorState.inputValidity.QuantityPercentage ? (
//                             <>
//                               "LTP":"-{syntaxGeneratorState.inputValues.limit}%",
//                             </>
//                           ) : (
//                             <>
//                               "LTP":"-{syntaxGeneratorState.inputValues.limit}",
//                             </>
//                           )}
//                         </>
//                       ) : (
//                         <>
//                           "OT":"{syntaxGeneratorState.inputValues.orderType}",
//                         </>
//                       )}
//                       "P":"{syntaxGeneratorState.inputValues.productType}",
//                       "VL":"DAY", "AT":"ANGEL" 
//                       &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "STOPLOSS" ? (
//               <>
//                 <div>
//                   <SyntaxBrokerInput
//                     header="Instrument Token"
//                     value={syntaxGeneratorState.inputValues.IT}
//                     name="IT"
//                     placeholder="IT"
//                     fieldId="IT"
//                   />

//                   <SyntaxBrokerInput
//                     header="Trading Symbol"
//                     value={syntaxGeneratorState.inputValues.TS}
//                     name="TS"
//                     placeholder="TS"
//                     fieldId="TS"
//                   />
//                   <RowMapper
//                     inputValues={syntaxGeneratorState.inputValues.exchange}
//                     fieldId="exchange"
//                     header="Exchange"
//                     data={exchange}
//                   />

//                   <SyntaxBrokerInput
//                     header="Quantity"
//                     value={syntaxGeneratorState.inputValues.quantity}
//                     name="quantity"
//                     placeholder="quantity"
//                     fieldId="quantity"
//                   />
//                   <input
//                     type="checkbox"
//                     name="checkbox"
//                     checked={
//                       syntaxGeneratorState.inputValidity.quantitypercentage
//                     }
//                     onChange={() =>
//                       dispatch(
//                         updateFields(
//                           "%",
//                           "quantitypercentage",
//                           !syntaxGeneratorState.inputValidity.quantitypercentage
//                         )
//                       )
//                     }
//                   />
//                   <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                     % Percentage
//                   </label>
//                   {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                     <>
//                       <RowMapper
//                         inputValues={syntaxGeneratorState.inputValues.funds}
//                         fieldId="funds"
//                         header="Funds"
//                         data={funds}
//                       />
//                       <SyntaxBrokerInput
//                         header="Leverage"
//                         value={syntaxGeneratorState.inputValues.LEVERAGE}
//                         name="LEVERAGE"
//                         placeholder="Leverage"
//                         fieldId="LEVERAGE"
//                       />
//                       <SyntaxBrokerInput
//                         header="Per Lot Size (Optional)"
//                         value={syntaxGeneratorState.inputValues.perLotSize}
//                         name="perLotSize"
//                         placeholder="Per Lot Size"
//                         fieldId="perLotSize"
//                       />
//                     </>
//                   ) : null}
//                   <RowMapper
//                     inputValues={
//                       syntaxGeneratorState.inputValues.transactionType
//                     }
//                     fieldId="transactionType"
//                     header="Transaction Types"
//                     data={TransactionTypes}
//                   />
//                   <RowMapper
//                     inputValues={
//                       syntaxGeneratorState.inputValues.stoplossordertype
//                     }
//                     fieldId="stoplossordertype"
//                     header="Order Type"
//                     data={stoplossordertype}
//                   />
//                   {syntaxGeneratorState.inputValues.stoplossordertype ===
//                   "SLL" ? (
//                     <>
//                       <SyntaxBrokerInput
//                         header="LTP (LIMIT)"
//                         value={syntaxGeneratorState.inputValues.limit}
//                         name="limit"
//                         placeholder="Ex. 1"
//                         fieldId="limit"
//                       />
//                       <input
//                         type="checkbox"
//                         name="checkbox"
//                         checked={
//                           syntaxGeneratorState.inputValidity.QuantityPercentage
//                         }
//                         onChange={() =>
//                           dispatch(
//                             updateFields(
//                               "%",
//                               "QuantityPercentage",
//                               !syntaxGeneratorState.inputValidity
//                                 .QuantityPercentage
//                             )
//                           )
//                         }
//                       />
//                       <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                         % Percentage
//                       </label>
//                     </>
//                   ) : null}
//                   <SyntaxBrokerInput
//                     header="TriggerPrice"
//                     value={syntaxGeneratorState.inputValues.triggerPrice}
//                     name="triggerPrice"
//                     placeholder="Trigger Price"
//                     fieldId="triggerPrice"
//                   />
//                  <input
//                         type="checkbox"
//                         name="checkbox"
//                         checked={
//                           syntaxGeneratorState.inputValidity.triggerPercentage
//                         }
//                         onChange={() =>
//                           dispatch(
//                             updateFields(
//                               "%",
//                               "triggerPercentage",
//                               !syntaxGeneratorState.inputValidity
//                                 .triggerPercentage
//                             )
//                           )
//                         }
//                       />
//                   <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                     % Percentage
//                   </label>
//                 </div>

//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; 
//                       "V":"{syntaxGeneratorState.inputValues.variety}",
//                       "TT":"{syntaxGeneratorState.inputValues.transactionType}",
//                       "E":"{syntaxGeneratorState.inputValues.exchange}", 
//                       "IT":"{syntaxGeneratorState.inputValues.IT}", 
//                       "TS":"{syntaxGeneratorState.inputValues.TS},
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}%", 
//                           "FUND":"{syntaxGeneratorState.inputValues.funds}",
//                           "LEVERAGE":"{syntaxGeneratorState.inputValues.LEVERAGE}X",
//                           "PER_LOT_SIZE":"{syntaxGeneratorState.inputValues.perLotSize}", 
//                           "OT":"{syntaxGeneratorState.inputValues.stoplossordertype}",
//                         </>
//                       ) : (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}",
//                           "OT":"{syntaxGeneratorState.inputValues.stoplossordertype}",
//                         </>
//                       )}
//                       {syntaxGeneratorState.inputValues.stoplossordertype ==="SLM" ? (
//                         <>
//                           {syntaxGeneratorState.inputValues.triggerPercentage ? (
//                             <>
//                               "TRP":"+{syntaxGeneratorState.inputValues.triggerPrice}%",
//                             </>
//                           ) : (
//                             <>
//                             "TRP":"+{syntaxGeneratorState.inputValues.triggerPrice}",
//                             </>
//                           )}
//                         </>
//                       ) : (
//                         <>
//                           {syntaxGeneratorState.inputValues.triggerPercentage ? (
//                             <>
//                               {syntaxGeneratorState.inputValidity.QuantityPercentage ? (
//                                 <>
//                                   "LTP":"-{syntaxGeneratorState.inputValues.limit}%",
//                                 </>
//                               ) : (
//                                 <>
//                                   "LTP":"-{syntaxGeneratorState.inputValues.limit}",
//                                 </>
//                               )}
//                               "TRP":"-{syntaxGeneratorState.inputValues.triggerPrice}%",
//                             </>
//                           ) : (
//                             <>
//                               {syntaxGeneratorState.inputValidity.QuantityPercentage ? (
//                                 <>
//                                   "LTP":"-{syntaxGeneratorState.inputValues.limit}%",
//                                 </>
//                               ) : (
//                                 <>
//                                   "LTP":"-{syntaxGeneratorState.inputValues.limit}",
//                                 </>
//                               )}
//                               "TRP":"-{syntaxGeneratorState.inputValues.triggerPrice}",
//                             </>
//                           )}
//                         </>
//                       )}
//                       "P":"{syntaxGeneratorState.inputValues.variety}",
//                       "VL":"DAY", "AT":"ANGEL" &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "CANCEL" ? (
//               <>
//                 <SyntaxBrokerInput
//                   header="Trading Symbol (Optional)"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Types (Optional)"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product (Optional)"
//                   data={product}
//                 />
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; "CANCEL":"
//                       {syntaxGeneratorState.inputValues.variety}", "TS":"
//                       {syntaxGeneratorState.inputValues.TS}", "TT":"
//                       {syntaxGeneratorState.inputValues.transactionType}", "P":"
//                       {syntaxGeneratorState.inputValues.productType}",
//                       "AT":"ANGEL" &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "EXITORDER" ? (
//               <>
//                 <SyntaxBrokerInput
//                   header="Trading Symbol (Optional)"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.exchange}
//                   fieldId="exchange"
//                   header="Exchange"
//                   data={exchange}
//                 />

//                 <SyntaxBrokerInput
//                   header="Quantity(optional)"
//                   value={syntaxGeneratorState.inputValues.quantity}
//                   name="quantity"
//                   placeholder="quantity"
//                   fieldId="quantity"
//                 />
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   checked={
//                     syntaxGeneratorState.inputValidity.quantitypercentage
//                   }
//                   onChange={() =>
//                     dispatch(
//                       updateFields(
//                         "%",
//                         "quantitypercentage",
//                         !syntaxGeneratorState.inputValidity.quantitypercentage
//                       )
//                     )
//                   }
//                 />
//                 <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                   % Percentage
//                 </label>
//                 {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                   <>
//                     <SyntaxBrokerInput
//                       header="Per Lot Size"
//                       value={syntaxGeneratorState.inputValues.perLotSize}
//                       name="perLotSize"
//                       placeholder="Per Lot Size"
//                       fieldId="perLotSize"
//                     />
//                   </>
//                 ) : null}

//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Type (Optional)"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product(Optional)"
//                   data={product}
//                 />
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; "CLOSE":"CLOSE", "TS":"
//                       {syntaxGeneratorState.inputValues.TS}", "E":"
//                       {syntaxGeneratorState.inputValues.exchange}",
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}
//                           %", "PER_LOT_SIZE":"
//                           {syntaxGeneratorState.inputValues.perLotSize}",
//                         </>
//                       ) : (
//                         <>"Q":"{syntaxGeneratorState.inputValues.quantity}",</>
//                       )}
//                       "TT":"{syntaxGeneratorState.inputValues.transactionType}",
//                       "P":"{syntaxGeneratorState.inputValues.productType}",
//                       "AT":"ANGEL" &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety ===
//               "ALTERNATIVESYMBOLS" ? (
//               <>
//                 <SyntaxBrokerInput
//                   header="Trading Symbol"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.exchange}
//                   fieldId="exchange"
//                   header="Exchange"
//                   data={exchange}
//                 />

//                 <SyntaxBrokerInput
//                   header="Quantity(optional)"
//                   value={syntaxGeneratorState.inputValues.quantity}
//                   name="quantity"
//                   placeholder="quantity"
//                   fieldId="quantity"
//                 />
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   checked={
//                     syntaxGeneratorState.inputValidity.quantitypercentage
//                   }
//                   onChange={() =>
//                     dispatch(
//                       updateFields(
//                         "%",
//                         "quantitypercentage",
//                         !syntaxGeneratorState.inputValidity.quantitypercentage
//                       )
//                     )
//                   }
//                 />
//                 <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                   % Percentage
//                 </label>
//                 {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                   <>
//                     <SyntaxBrokerInput
//                       header="Per Lot Size"
//                       value={syntaxGeneratorState.inputValues.perLotSize}
//                       name="perLotSize"
//                       placeholder="Per Lot Size"
//                       fieldId="perLotSize"
//                     />
//                   </>
//                 ) : null}

//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Type (Optional)"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product(Optional)"
//                   data={product}
//                 />
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; "AS":"{syntaxGeneratorState.inputValues.TS}",
//                       "E":"{syntaxGeneratorState.inputValues.exchange}",
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}
//                           %", "PER_LOT_SIZE":"
//                           {syntaxGeneratorState.inputValues.perLotSize}",
//                         </>
//                       ) : (
//                         <>"Q":"{syntaxGeneratorState.inputValues.quantity}",</>
//                       )}
//                       "TT":"{syntaxGeneratorState.inputValues.transactionType}",
//                       "P":"{syntaxGeneratorState.inputValues.productType}",
//                       "AT":"ANGEL" &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}

//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "FULLYALGO" ? (
//               <>
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.normal}
//                   fieldId="normal"
//                   header="Order Type"
//                   data={normal}
//                 />
//                 <SyntaxBrokerInput
//                   header="Instrument Token"
//                   value={syntaxGeneratorState.inputValues.IT}
//                   name="IT"
//                   placeholder="IT"
//                   fieldId="IT"
//                 />

//                 <SyntaxBrokerInput
//                   header="Trading Symbol"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.exchange}
//                   fieldId="exchange"
//                   header="Exchange"
//                   data={exchange}
//                 />

//                 <SyntaxBrokerInput
//                   header="Quantity"
//                   value={syntaxGeneratorState.inputValues.quantity}
//                   name="quantity"
//                   placeholder="quantity"
//                   fieldId="quantity"
//                 />
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   checked={
//                     syntaxGeneratorState.inputValidity.quantitypercentage
//                   }
//                   onChange={() =>
//                     dispatch(
//                       updateFields(
//                         "%",
//                         "quantitypercentage",
//                         !syntaxGeneratorState.inputValidity.quantitypercentage
//                       )
//                     )
//                   }
//                 />
//                 <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                   % Percentage
//                 </label>
//                 {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                   <>
//                     <RowMapper
//                       inputValues={syntaxGeneratorState.inputValues.funds}
//                       fieldId="funds"
//                       header="Funds"
//                       data={funds}
//                     />
//                   </>
//                 ) : null}
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Type"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.orderType}
//                   fieldId="orderType"
//                   header="Order Type"
//                   data={orderTypeMarket}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product"
//                   data={product}
//                 />
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; "CLOSE":"CLOSE", "E":"
//                       {syntaxGeneratorState.inputValues.exchange}", "TS":"
//                       {syntaxGeneratorState.inputValues.TS}, "P":"
//                       {syntaxGeneratorState.inputValues.productType}",
//                       "AT":"ANGEL" &#125;, &#123; "V":"
//                       {syntaxGeneratorState.inputValues.normal}", "TT":"
//                       {syntaxGeneratorState.inputValues.transactionType}", "E":"
//                       {syntaxGeneratorState.inputValues.exchange}", "TS":"
//                       {syntaxGeneratorState.inputValues.TS}", "IT":"
//                       {syntaxGeneratorState.inputValues.IT},
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}
//                           %", "FUND":"
//                           {syntaxGeneratorState.inputValues.funds}",
//                           "LEVERAGE":"
//                           {syntaxGeneratorState.inputValues.LEVERAGE}X",
//                           "PER_LOT_SIZE":"
//                           {syntaxGeneratorState.inputValues.perLotSize}",
//                         </>
//                       ) : (
//                         <>"Q":"{syntaxGeneratorState.inputValues.quantity}",</>
//                       )}
//                       {syntaxGeneratorState.inputValues.orderType ===
//                       "LIMIT" ? (
//                         <>
//                           {syntaxGeneratorState.inputValidity
//                             .QuantityPercentage ? (
//                             <>
//                               "LTP":"-
//                               {syntaxGeneratorState.inputValues.limit}%",
//                             </>
//                           ) : (
//                             <>
//                               "LTP":"-
//                               {syntaxGeneratorState.inputValues.limit}",
//                             </>
//                           )}
//                           "OT":"{syntaxGeneratorState.inputValues.orderType}
//                           ",
//                         </>
//                       ) : (
//                         <>
//                           "OT":"{syntaxGeneratorState.inputValues.orderType}
//                           ",
//                         </>
//                       )}
//                       "P":"{syntaxGeneratorState.inputValues.productType}",
//                       "VL":"DAY",
//                       {syntaxGeneratorState.inputValues.cal}", "AT":"ANGEL"
//                       &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "STRATEGY" ? (
//               <>
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.normal}
//                   fieldId="normal"
//                   header="Order Type"
//                   data={normal}
//                 />
//                 <SyntaxBrokerInput
//                   header="Instrument Token"
//                   value={syntaxGeneratorState.inputValues.IT}
//                   name="IT"
//                   placeholder="IT"
//                   fieldId="IT"
//                 />

//                 <SyntaxBrokerInput
//                   header="Trading Symbol"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.exchange}
//                   fieldId="exchange"
//                   header="Exchange"
//                   data={exchange}
//                 />

//                 <SyntaxBrokerInput
//                   header="Quantity"
//                   value={syntaxGeneratorState.inputValues.quantity}
//                   name="quantity"
//                   placeholder="quantity"
//                   fieldId="quantity"
//                 />
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   checked={
//                     syntaxGeneratorState.inputValidity.quantitypercentage
//                   }
//                   onChange={() =>
//                     dispatch(
//                       updateFields(
//                         "%",
//                         "quantitypercentage",
//                         !syntaxGeneratorState.inputValidity.quantitypercentage
//                       )
//                     )
//                   }
//                 />
//                 <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                   % Percentage
//                 </label>
//                 {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                   <>
//                     <RowMapper
//                       inputValues={syntaxGeneratorState.inputValues.funds}
//                       fieldId="funds"
//                       header="Funds"
//                       data={funds}
//                     />
//                     <SyntaxBrokerInput
//                       header="Leverage"
//                       value={syntaxGeneratorState.inputValues.LEVERAGE}
//                       name="LEVERAGE"
//                       placeholder="Leverage"
//                       fieldId="LEVERAGE"
//                     />
//                     <SyntaxBrokerInput
//                       header="Per Lot Size (Optional)"
//                       value={syntaxGeneratorState.inputValues.perLotSize}
//                       name="perLotSize"
//                       placeholder="Per Lot Size"
//                       fieldId="perLotSize"
//                     />
//                   </>
//                 ) : null}
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Type"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.orderType}
//                   fieldId="orderType"
//                   header="Order Type"
//                   data={orderTypeMarket}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product"
//                   data={product}
//                 />
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <p
//                       style={{
//                         fontSize: 16,
//                         color: "black",
//                         fontWeight: "bold",
//                         fontFamily: "'Courier New', monospace",
//                         wordBreak: "break-all",
//                       }}
//                     >
//                       [&#123; "AS":"{syntaxGeneratorState.inputValues.TS}",
//                       "E":"{syntaxGeneratorState.inputValues.exchange}",
//                       {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                         <>
//                           "Q":"{syntaxGeneratorState.inputValues.quantity}
//                           %", "PER_LOT_SIZE":"
//                           {syntaxGeneratorState.inputValues.perLotSize}",
//                         </>
//                       ) : (
//                         <>"Q":"{syntaxGeneratorState.inputValues.quantity}",</>
//                       )}
//                       "TT":"{syntaxGeneratorState.inputValues.transactionType}",
//                       "P":"{syntaxGeneratorState.inputValues.productType}",
//                       "AT":"ANGEL" &#125;]
//                     </p>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//             {syntaxGeneratorState.inputValidity.variety &&
//             syntaxGeneratorState.inputValues.variety === "AUTOSTRIKEPRICE" ? (
//               <>
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.normal}
//                   fieldId="normal"
//                   header="Order Type"
//                   data={normal}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.close}
//                   fieldId="close"
//                   header="Withclose or Without Close"
//                   data={close}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.calputselection}
//                   fieldId="calputselection"
//                   header="Cal Put Selection"
//                   data={calputselection}
//                 />
//                 <SyntaxBrokerInput
//                   header="Trading Symbol"
//                   value={syntaxGeneratorState.inputValues.TS}
//                   name="TS"
//                   placeholder="TS"
//                   fieldId="TS"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.exchange}
//                   fieldId="exchange"
//                   header="Exchange"
//                   data={exchange}
//                 />
//                 <SyntaxBrokerInput
//                   header="Quantity"
//                   value={syntaxGeneratorState.inputValues.quantity}
//                   name="quantity"
//                   placeholder="quantity"
//                   fieldId="quantity"
//                 />
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   checked={
//                     syntaxGeneratorState.inputValidity.quantitypercentage
//                   }
//                   onChange={() =>
//                     dispatch(
//                       updateFields(
//                         "%",
//                         "quantitypercentage",
//                         !syntaxGeneratorState.inputValidity.quantitypercentage
//                       )
//                     )
//                   }
//                 />
//                 <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                   % Percentage
//                 </label>
//                 {syntaxGeneratorState.inputValidity.quantitypercentage ? (
//                   <>
//                     <RowMapper
//                       inputValues={syntaxGeneratorState.inputValues.funds}
//                       fieldId="funds"
//                       header="Funds"
//                       data={funds}
//                     />
//                     <SyntaxBrokerInput
//                       header="Leverage"
//                       value={syntaxGeneratorState.inputValues.LEVERAGE}
//                       name="LEVERAGE"
//                       placeholder="Leverage"
//                       fieldId="LEVERAGE"
//                     />
//                     <SyntaxBrokerInput
//                       header="Per Lot Size (Optional)"
//                       value={syntaxGeneratorState.inputValues.perLotSize}
//                       name="perLotSize"
//                       placeholder="Per Lot Size"
//                       fieldId="perLotSize"
//                     />
//                   </>
//                 ) : null}
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.transactionType}
//                   fieldId="transactionType"
//                   header="Transaction Type"
//                   data={TransactionTypes}
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.orderType}
//                   fieldId="orderType"
//                   header="Order Type"
//                   data={orderType}
//                 />
//                 {syntaxGeneratorState.inputValues.orderType === "LIMIT" ? (
//                   <>
//                     <SyntaxBrokerInput
//                       header="LTP (LIMIT)"
//                       value={syntaxGeneratorState.inputValues.limit}
//                       name="limit"
//                       placeholder="Ex. 1"
//                       fieldId="limit"
//                     />
//                     <input
//                       type="checkbox"
//                       name="checkbox"
//                       checked={
//                         syntaxGeneratorState.inputValidity.QuantityPercentage
//                       }
//                       onChange={() =>
//                         dispatch(
//                           updateFields(
//                             "%",
//                             "QuantityPercentage",
//                             !syntaxGeneratorState.inputValidity
//                               .QuantityPercentage
//                           )
//                         )
//                       }
//                     />
//                     <label style={{ paddingLeft: 10, marginTop: 5 }}>
//                       % Percentage
//                     </label>
//                   </>
//                 ) : null}
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.productType}
//                   fieldId="productType"
//                   header="Product"
//                   data={product}
//                 />
//                 <SyntaxBrokerInput
//                   header="Near By"
//                   value={syntaxGeneratorState.inputValues.nearBy}
//                   name="nearBy"
//                   placeholder="near by"
//                   fieldId="nearBy"
//                 />
//                 <SyntaxBrokerInput
//                   header="Cal"
//                   value={syntaxGeneratorState.inputValues.cal}
//                   name="cal"
//                   placeholder="cal"
//                   fieldId="cal"
//                 />
//                 <RowMapper
//                   inputValues={syntaxGeneratorState.inputValues.plusMinus}
//                   fieldId="plusMinus"
//                   header="Plus and Minus"
//                   data={plusminus}
//                 />

//                 {/* auto Generated */}
//                 <button
//                   style={{
//                     backgroundColor: colors.ready,
//                     width: 150,
//                     marginTop: 10,
//                     padding: 7,
//                     fontWeight: "bold",
//                     borderStyle: "solid",
//                     borderWidth: 1,
//                     borderRadius: 50,
//                     borderColor: colors.primaryDark,
//                     color: colors.primaryDark,
//                   }}
//                   onClick={() => setshow(true)}
//                 >
//                   Generate
//                 </button>
//                 <Modal show={show}>
//                   <Modal.Header>
//                     <h3>Generated Code</h3>
//                   </Modal.Header>
//                   <Modal.Body>
//                     {syntaxGeneratorState.inputValues.close ===
//                     "WITHOUTCLOSE" ? (
//                       <>
//                         <p
//                           style={{
//                             fontSize: 16,
//                             color: "black",
//                             fontWeight: "bold",
//                             fontFamily: "'Courier New', monospace",
//                             wordBreak: "break-all",
//                           }}
//                         >
//                           [&#123; "V":"
//                           {syntaxGeneratorState.inputValues.normal}", "TT":"
//                           {syntaxGeneratorState.inputValues.transactionType}",
//                           "E":"{syntaxGeneratorState.inputValues.exchange}",
//                           "TS":"{syntaxGeneratorState.inputValues.TS}
//                           &#123;&#123;&#123;close&#125;&#125;&#125;
//                           {syntaxGeneratorState.inputValues.calputselection}",
//                           {syntaxGeneratorState.inputValidity
//                             .quantitypercentage ? (
//                             <>
//                               "Q":"{syntaxGeneratorState.inputValues.quantity}
//                               %", "FUND":"
//                               {syntaxGeneratorState.inputValues.funds}",
//                               "LEVERAGE":"
//                               {syntaxGeneratorState.inputValues.LEVERAGE}X",
//                               "PER_LOT_SIZE":"
//                               {syntaxGeneratorState.inputValues.perLotSize}",
//                             </>
//                           ) : (
//                             <>
//                               "Q":"{syntaxGeneratorState.inputValues.quantity}",
//                             </>
//                           )}
//                           {syntaxGeneratorState.inputValues.orderType ===
//                           "LIMIT" ? (
//                             <>
//                               {syntaxGeneratorState.inputValidity
//                                 .QuantityPercentage ? (
//                                 <>
//                                   "LTP":"+
//                                   {syntaxGeneratorState.inputValues.limit}%",
//                                 </>
//                               ) : (
//                                 <>
//                                   "LTP":"+
//                                   {syntaxGeneratorState.inputValues.limit}",
//                                 </>
//                               )}
//                               "OT":"{syntaxGeneratorState.inputValues.orderType}
//                               ",
//                             </>
//                           ) : (
//                             <>
//                               "OT":"{syntaxGeneratorState.inputValues.orderType}
//                               ",
//                             </>
//                           )}
//                           "P":"{syntaxGeneratorState.inputValues.productType}",
//                           "VL":"DAY", "NEAR":"
//                           {syntaxGeneratorState.inputValues.nearBy}", "CAL":"
//                           {syntaxGeneratorState.inputValues.plusMinus}
//                           {syntaxGeneratorState.inputValues.cal}", "AT":"ANGEL"
//                           &#125;]
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         <p
//                           style={{
//                             fontSize: 16,
//                             color: "black",
//                             fontWeight: "bold",
//                             fontFamily: "'Courier New', monospace",
//                             wordBreak: "break-all",
//                           }}
//                         >
//                           [&#123; "AS":"{syntaxGeneratorState.inputValues.TS}",
//                           "P":"{syntaxGeneratorState.inputValues.productType}",
//                           "E":"{syntaxGeneratorState.inputValues.exchange}",
//                           "AT":"ANGEL" &#125;, &#123; "V":"
//                           {syntaxGeneratorState.inputValues.normal}", "TT":"
//                           {syntaxGeneratorState.inputValues.transactionType}",
//                           "E":"{syntaxGeneratorState.inputValues.exchange}",
//                           "TS":"{syntaxGeneratorState.inputValues.TS}
//                           &#123;&#123;&#123;close&#125;&#125;&#125;
//                           {syntaxGeneratorState.inputValues.calputselection}",
//                           {syntaxGeneratorState.inputValidity
//                             .quantitypercentage ? (
//                             <>
//                               "Q":"{syntaxGeneratorState.inputValues.quantity}
//                               %", "FUND":"
//                               {syntaxGeneratorState.inputValues.funds}",
//                               "LEVERAGE":"
//                               {syntaxGeneratorState.inputValues.LEVERAGE}X",
//                               "PER_LOT_SIZE":"
//                               {syntaxGeneratorState.inputValues.perLotSize}",
//                             </>
//                           ) : (
//                             <>
//                               "Q":"{syntaxGeneratorState.inputValues.quantity}",
//                             </>
//                           )}
//                           {syntaxGeneratorState.inputValues.orderType ===
//                           "LIMIT" ? (
//                             <>
//                               {syntaxGeneratorState.inputValidity
//                                 .QuantityPercentage ? (
//                                 <>
//                                   "LTP":"-
//                                   {syntaxGeneratorState.inputValues.limit}%",
//                                 </>
//                               ) : (
//                                 <>
//                                   "LTP":"-
//                                   {syntaxGeneratorState.inputValues.limit}",
//                                 </>
//                               )}
//                               "OT":"{syntaxGeneratorState.inputValues.orderType}
//                               ",
//                             </>
//                           ) : (
//                             <>
//                               "OT":"{syntaxGeneratorState.inputValues.orderType}
//                               ",
//                             </>
//                           )}
//                           "P":"{syntaxGeneratorState.inputValues.productType}",
//                           "VL":"DAY", "NEAR":"
//                           {syntaxGeneratorState.inputValues.nearBy}", "CAL":"
//                           {syntaxGeneratorState.inputValues.plusMinus}
//                           {syntaxGeneratorState.inputValues.cal}", "AT":"ANGEL"
//                           &#125;]
//                         </p>
//                       </>
//                     )}
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button onClick={() => setshow(false)}>Close</Button>
//                     <Button onClick={() => setshow(false)}>Save</Button>
//                   </Modal.Footer>
//                 </Modal>
//               </>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
};

export default SyntaxGenerator;
