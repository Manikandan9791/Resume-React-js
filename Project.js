import React from 'react'
 import './Project.css'
function Project() {
  return (
      <div className='container'>
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
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <img src='/img-1.jpg' className='picture' alt='my photo'/> 
                                </div>
                                 <div className='col-sm-4'>
                                    <img src='/img-2.jpg' className='picture' alt='my photo'/> 
                                </div>
                                 <div className='col-sm-4'>
                                    <img src='/img-3.jpg' className='picture' alt='my photo'/> 
                                </div>
                            </div>
                            </div>
                            </div>
                             
  )
}

export default Project;