// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import SidebarItems from "./SidebarItems";
// import "../components/Sidebar.css"
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SubMenu,
//   SidebarHeader,
//   SidebarContent,
//   SidebarFooter,
// } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import profile from "../images/man.png";

// import { useSelector, useDispatch } from "react-redux";
// import { logUserOut } from "../redux/auth/actions";
// import { NavLink } from "react-router-dom";
// import Cookies from 'js-cookie'

// function Sidebar(props, { defaultActive }) {
//   const authState = useSelector((state) => state.authState);
  
//   const dispatch = useDispatch();

//   const location = props.history.location;
//   const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
//   const lastActiveIndex = Number(lastActiveIndexString);
//   const [activeIndex, setActiveIndex] = useState(
//     lastActiveIndex || defaultActive
//   );

//   function changeActiveIndex(newIndex) {
//     localStorage.setItem("lastActiveIndex", newIndex);
//     setActiveIndex(newIndex);
//   }

//   function getPath(path) {
//     if (path.charAt(0) !== "/") {
//       return "/" + path;
//     }
//     return path;
//   }

//   const [name,setName] = React.useState("")


//   useEffect(() => {
//     var userName = Cookies.get('name')
//     setName(userName)
//   })

//   useEffect(() => {
//     const activeItem = SidebarItems.findIndex(
//       (item) => getPath(item.route) === getPath(location.pathname)
//     );
//     changeActiveIndex(activeItem);
//   }, [location]);

//   return (
//     <>
//       <ProSidebar className="proSidebar" style={{color:'ivory', height:"100vh", background: "#2f4151"}}>
//         <SidebarHeader style={{ padding: '24px',
//             textTransform: 'uppercase',
//             fontWeight: 'bold',
//             fontSize: 14,
//             letterSpacing: '1px',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             whiteSpace: 'nowrap',}} >
          
        
//         <div
//           style={{
            
//             marginTop: 50,
//             marginBottom: 20,
//             textAlign: "center",
//           }}
//         >
//           <img src={profile} style={{ height: 50, width: 50 }} />
//           <div style={{color:'ivory', marginTop:5, fontWeight:'bold'}}> {name}</div>
//         </div>
//         </SidebarHeader>
        
//           <SidebarContent >
//           {/* <Menu iconShape="square">
//     <MenuItem >Dashboard</MenuItem>
//     <SubMenu title="Components" >
      
//       <MenuItem key >Component 1</MenuItem>
      
//       <MenuItem>Component 2</MenuItem>
//     </SubMenu>
//   </Menu> */}
//           <Menu>
//             {SidebarItems.map((item, index) => {
              
//               return (
//                 // <Link to={item.route}>

//                   <MenuItem
//                     style={{ height: 60, backgroundColor:`${index === activeIndex ? "#845EC2" : ""}`}}
//                     key={item.name}
//                     active={index === activeIndex}
                    
//                   >
//                     <Link to={item.route} />
//                     <p style={{ padding:10 , color:`${index === activeIndex?"#fff" : "EC2"}` }}>
//                       {item.name}
//                     </p>
//                   </MenuItem>
//                 // </Link>
//               );
//             })}
//           </Menu>
//           </SidebarContent>
//           <SidebarFooter style={{padding:20, textAlign:'center' }}>
//           <NavLink to="/">
//           <button style={{color:'ivory', marginTop:5, fontWeight:'bold'}}
//             onClick={() => {
//               dispatch(logUserOut());
//             }}
//           >
//             Logout
//           </button>
//         </NavLink>
            
            

            
//           </SidebarFooter>
        

        
//         </ProSidebar>
//     </>
//   );
// }

// export default Sidebar;

// const SidebarParent = styled.div`
//   background: #2f4151;

//   a {
//     text-decoration: none;
//   }

//   & > div {
//     width: 250px;
//     height: 100vh;
//   }

//   .behind-the-scenes {
//     width: 250px;
//   }
// `;

// const SidebarItem = styled.div`
//   padding: 5px 10px;
//   transition: all 0.25s ease-in-out;
//   background: ${(props) => (props.active ? "#845EC2" : "")};
//   margin: 4px 5px;
//   border-radius: 4px;
//   borderColor:'white';
//   p {
//     color: ${(props) => (props.active ? "#fff" : "EC2")};
//     font-weight: bold;
//     text-decoration: none;
//   }

//   &:hover {
//     cursor: pointer;
//     borderWidth: 10, 
//     borderColor: 'white', 
//     borderStyle:'solid' 
//   }

//   &:hover:not(:first-child) {
//     background: #c34a36;
//   }
// `;
