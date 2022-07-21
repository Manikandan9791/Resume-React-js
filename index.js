  import React from 'react';
  import ReactDOM  from 'react-dom';
 
 import  {BrowserRouter as Router , Route , Routes }from "react-router-dom";
 import Home from"./Home";
 import Project from './Project';
 import Contact from './Contact';
  import Youtube from './Youtube';

 const routing =(
   <Router>
     
       <Routes>
         <Route path='/' element={<Home/>}/> 
         <Route path='/project' element={<Project/>}/> 
         <Route path='/Contact' element={<Contact/>}/> 
         <Route path='/Youtube' element={<Youtube/>}/> 
       </Routes>
       
   </Router>

 ) 
 ReactDOM.render(routing,document.getElementById("root"));
