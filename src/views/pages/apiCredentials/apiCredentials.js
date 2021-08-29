import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Modal from "react-modal";
import CredentialCard from "../../../components/CredentialCard";
import MyCredentialCard from "../../../components/MyCredentialCard";
import ApiCredentialModal from "../../../components/ApiCredentialModal";
// import Sidebar from "../Components/Sidebar";
import colors from "../../../constants/Colors";

import { useSelector, useDispatch } from "react-redux";
import { deleteCredentials, getAllCredentials } from "../../../redux/apicredentials/actions";
import Cookies from "js-cookie";
import { Digital } from "react-activity";

const ApiCredentials = (props) => {
  const credentialState = useSelector((state) => state.apiCredentialsState);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const submitDelete = (id) => {
    console.log("in submit");
    console.log(id);
    dispatch(deleteCredentials(id));
  };


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(getAllCredentials())
  }

  useEffect(() => {
    dispatch(getAllCredentials());
  }, [dispatch]);

  return (
    <>
      <div style={{}}>
        <ApiCredentialModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

        <div style={{ height: "30vh", padding: 25 }}>
          <div style={{ fontSize: 25 }}>Api Credentials</div>
          <div style={{ marginTop: 30 }}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <CredentialCard name="Angel" openModal={openModal} />
              {/* <CredentialCard name="Kotak" openModal={openModal} /> */}
            </Grid>
          </div>
        </div>
        <div style={{ height: "100%", padding: 25 }}>
          <div style={{ fontSize: 25 }}>My Credentials</div>
          {credentialState.loading ? (
            <div>
              <Digital />
            </div>
          ) : null}
          <div style={{ marginTop: 30 }}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {credentialState &&
                credentialState.myCredentials &&
                credentialState.myCredentials.map((item, index) => {
                  return (
                    <MyCredentialCard
                      name={item.name}
                      deleteCredential={() => submitDelete(item._id)}
                    />
                  );
                })}

              {/* credentialState.data.map(f =>
                <MyCredentialCard name={f.name}/>
                ) */}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiCredentials;


















// import React, { useEffect } from "react";
// import { Grid } from "@material-ui/core";
// import CredentialCard from "../../../components/CredentialCard";
// import MyCredentialCard from "../../../components/MyCredentialCard";
// import ApiCredentialModal from "../../../components/ApiCredentialModal";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   deleteCredentials,
//   getAllCredentials,
// } from "../../../redux/apicredentials/actions";
// import { Digital } from "react-activity";
// import Modal from 'react-modal';
// import swal from 'sweetalert';

// const ApiCredentials = (props) => {
//   /*  */
//   const credentialState = useSelector((state) => state.apiCredentialsState);
//   const dispatch = useDispatch();
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//     dispatch(getAllCredentials());
//   }

//   const submitDelete = (id) => {
//     console.log("in submit");
//     console.log(id);
//     dispatch(deleteCredentials(id));
//   };

//   useEffect(() => {
//     dispatch(getAllCredentials());
//   }, [dispatch]);

//   return (
//     <>
//       <div style={{}}>
//         <ApiCredentialModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

//         <div style={{ height: "30vh", padding: 25 }}>
//           <div style={{ fontSize: 25 }}>Api Credentials</div>
//           <div style={{ marginTop: 30 }}>
//             <Grid
//               container
//               direction="row"
//               justify="flex-start"
//               alignItems="center"
//             >
//               <CredentialCard name="Angel" openModal={openModal} />
//               {/* <CredentialCard name="Kotak" openModal={openModal} /> */}
//             </Grid>
//           </div>
//         </div>
//         <div style={{ height: "100%", padding: 25 }}>
//           <div style={{ fontSize: 25 }}>My Credentials</div>
//           {credentialState.loading ? (
//             <div>
//               <Digital />
//             </div>
//           ) : null}
//           <div style={{ marginTop: 30 }}>
//             <Grid
//               container
//               direction="row"
//               justify="flex-start"
//               alignItems="center"
//             >
//               {credentialState &&
//                 credentialState.myCredentials &&
//                 credentialState.myCredentials.map((item, index) => {
//                   return (
//                     <MyCredentialCard
//                       name={item.name}
//                       deleteCredential={() => submitDelete(item._id)}
//                     />
//                   );
//                 })}

//               {/* credentialState.data.map(f =>
//                 <MyCredentialCard name={f.name}/>
//                 ) */}
//             </Grid>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ApiCredentials;
