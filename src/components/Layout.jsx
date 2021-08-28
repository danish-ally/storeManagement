import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import Nav from './Nav'
import logo from '../images/chart.png'
import "../components/Layout.css"

function Layout(props) {
    return (
        <div>
            <div style={{
          display: "flex",

          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          
          padding: 10,
          backgroundColor: "ivory",
          width:'100%',
          height:"8vh"
        }}>
            <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
            <img src={logo} />
            <div style={{fontFamily:'sans-serif', paddingLeft:10, fontWeight:'bold'}} >Traderbot</div>
                
            </div>
            </div>
            <div className="sidebar" style={{display: "flex", backgroundColor:"#F8F8F8", width:'100%'}}>
                
                <Sidebar history={props.history}/>
                <div style={{width:'100%'}}>
                    
                    <div style={{height:"10%"}}>
                    {props.children}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Layout;