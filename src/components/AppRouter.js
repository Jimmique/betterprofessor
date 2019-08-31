import React from "react";
import StudentList from "./StudentList.js";
import Messanger from "./Messanger.js";
import { Route } from "react-router-dom";


export default function AppRouter(props) {
  return (
    <div>
      
    <Route 
    path="/students" 
    render={props => <StudentList {...props} />}
  />

    <Route 
    path="/messages" 
    render={props => <Messanger {...props} />}
  />

  </div>
  );
};
  