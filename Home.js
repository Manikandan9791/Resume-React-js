  
 import ReactDOM  from 'react-dom';
 import  {BrowserRouter as Router,Routes,Route} from "react-router-dom";
  import React from 'react'
   import './Home.css'
  

  function Home() {
    return (
       <body>
                 <div  className="heading">
                     <div  className="jumbotron text-center" id="heading">
                         <h1  className="myname">Manikandan Kumaresan</h1>
                         <p  className="myoccupation">Software Developer</p>
                         <ul className='nav nav-pills nav-justified ' id='navigation'>
                           <li className='nav-item'>
                             <a className='nav-link active' href='/'>
                               Home
                             </a>

                           </li>
                             <li className='nav-item'>
                             <a className='nav-link active' href='/project'>
                                Project
                             </a>
                                </li>
                                <li className='nav-item'>
                             <a className='nav-link active' href='/youtube'>
                               Youtube
                             </a>

                           </li>
                             <li className='nav-item'>
                             <a className='nav-link active' href='/contact'>
                                Contact
                             </a>

                           </li>

                         </ul>

                          </div>
                 </div>
                 <div className='container'>
                   <div className='row'>
                     <div className='col-sm-4'>
                       <div className='rounded-circle'>
                         <img src='/manikandan.jpg' className='rounded-circle mx-auto d-block' alt='my photo'
                         />
                         </div>
                         <br/>
                           </div>
                           <div className='col-sm-6'>
                             <h2 className='myskils'>Career Objective :</h2>
                             <p className='skils'>
                               My name is Manikandan.I have been completed my degree in BCA in Khadhir Mohaideen Collage of Arts ans Scince.
                               From Bhrathithaasan university.My overall CGPA is 6.5.
                               Then i have completed in course in Programming launguage in Root institute  from Trichy.
                               Good Communication skill and Problem solving.

                             </p>
                             <h2 className='myskils'> Ambition :</h2>
                             <p className='skils'>Soft suave company was like a reputed company.That company was fresher salary is starting 4 lacks.
                             so i tried to be a placement of soft suave company.
                             </p>
                             
                              </div>
                             
                           </div>
                            <br/>
                             <div className='container'>
                               <div className='row'>
                                 <div className='col-sm-6'>
                                   <h2 className='myskills'>Technical Skills</h2>
                                   <br/>
                                   <ul>
                                    <li>
                                      Front end launguage = HTML , CSS , JAVASCRIPT ,C# ,REACT JS.
                                    </li>
                                     <li>
                                       Back end launguage = JAVA , PYTHON , NODE JS .
                                    </li>
                                     <li>
                                       Data base launguage =  My Sql,MongoDB.
                                    </li>
                                   </ul>
                                 </div>
                              <div className='col-sm-6'>
                                <h2 className='myskills'>Intern</h2>
                                <br/>
                                <ul className='skills'>
                                  <li>
                                    I done web Development intern in vj techno wizard.
                                  </li>
                                  <li>
                                    I done  android Development intern in vj techno wizard.
                                  </li>
                                </ul>
                              </div>
                              <br/>
                              <div className='col-sm-12'>
                                <h2 className='myskills'>My project</h2>
                                <br/>
                                <table className='table table-dark table-stripped'>
                                  <thead>
                                    <tr>
                                      <th>Project Domain</th>
                                      <th>Programming Launguages</th>
                                      <th>Projects Link</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Front End Development</td>
                                      <td>C#,Java,CSS,ReactJs</td>
                                      <td><a href={"https://github.com"}>Bus Booking Application</a></td>
                                    </tr>
                                     <tr>
                                      <td> Back End Development</td>
                                      <td>C#,Java,CSS,Node Js</td>
                                      <td><a href={"https://github.com"}> Food Delivery  Application</a></td>
                                    </tr>
                                    <tr>
                                      <td>Full Stack Development</td>
                                      <td>C#,Java,CSS,ReactJs</td>
                                      <td><a href={"https://github.com"}>Baker Dozen's Application</a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                               <div className='col-sm-12'>
                                <h2 className='myskills'>Education Qualification</h2>
                                <br/>
                                <table className='table table-dark table-stripped'>
                                  <thead>
                                    <tr>
                                      <th>Degree</th>
                                      <th> School/Collage</th>
                                      <th>YOP</th>
                                      <th>Percentage</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td> C# course</td>
                                      <td> Root insitute   </td>
                                      <td>2022</td>
                                      <td>80%</td>
                                    </tr>
                                    <tr>
                                      <td>BCA</td>
                                      <td>KMC Collage of Arts and Scince</td>
                                      <td>2020</td>
                                      <td>89%</td>
                                    </tr>
                                     <tr>
                                      <td>12 </td>
                                      <td>GHS Thmarankottai </td>
                                      <td>2017</td>
                                      <td>85%</td>
                                    </tr>
                                    <tr>
                                      <td>10</td>
                                      <td>GHS Thmarankottai </td>
                                      <td>2014</td>
                                      <td>80%</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                             
                               </div>
                               </div> 
                            </div>
                        <div className='jumbotron text-center' id='footer'>
                          <ul className='nav justify-content-center'>
                            <li className='nav-item'>
                              <a href='https://www.linkedin.com/in/manikandan-kumaresan-63955221b'
                              className='fa fa-linkedin nav-link'
                              style={{color:"blue"}}/>
                            </li>
                            <li className='nav-item'>
                              <a href='https://www.github.com/'
                              className='fa fa-github nav-link'
                              style={{color:"blue"}}/>
                            </li>
                            <li className='nav-item'>
                              <a href='https://www.instagram.com/kmkandan1999'
                              className='fa fa-instagram nav-link'
                              style={{color:"blue"}}/>
                            </li>
                             <li className='nav-item'>
                              <a href='https://www.facebook.com/'
                              className='fa fa-facebook nav-link'
                              style={{color:"blue"}}/>
                            </li>
                             <li className='nav-item'>
                              <a href='https://www.twitter.com/'
                              className='fa fa-twitter nav-link'
                              style={{color:"blue"}}/>
                            </li>
                            
                          </ul>
                        </div>

             </body>
            
   
            
    )
  }
  
            
         
    
 
 export default Home;