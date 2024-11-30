import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Create() {

  const [name, setname] = useState();
  const [email, setemail] = useState();


  const navigate = useNavigate();
  

  const submit = (e) => { 
    e.preventDefault();
    axios.post("https://backend-1-nmm5.onrender.com/createuser", {name,email})
      .then(result => { 
        console.log(result);
        navigate('/');
      })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">

            <h4 className='text-center text-primary mb-3'>Create User</h4>

            <Link to={'/'} className='btn btn-primary mb-3'>Home</Link>
            
            <form action="" onSubmit={submit}>
              
              <div className="mb-2">
                <input type="text" placeholder='Enter Username' onChange={(e)=>setname(e.target.value)} className='form-control' required />
              </div>

               <div className="mb-3">
                <input type="email" placeholder='Enter Email'  onChange={(e)=>setemail(e.target.value)} className='form-control' required />
              </div>

               <div className="mb-2">
                <button className='btn btn-primary w-100'>Create</button>
              </div>

              </form>
            
            </div>
          </div>
        </div>
    </>
  )
}
