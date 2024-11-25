import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Update() {


  const { id } = useParams();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get('https://mywebsitebackend-r0e9.onrender.com/getuser/' + id)
      .then(result => { 
        console.log(result)
        setname(result.data.name)
        setemail(result.data.email)
      })
    .catch(err=>console.log(err))
  }, [])
  
   const update = (e) => { 
    e.preventDefault();
    axios.put("https://mywebsitebackend-r0e9.onrender.com/updateuser/"+id, {name,email})
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

            <h4 className='text-center text-success mb-3'>Update User</h4>

            <Link to={'/'} className='btn btn-success mb-3'>Home</Link>
            
            
            <form action="" onSubmit={update}>
              
              <div className="mb-2">
                <input type="text" placeholder='Enter Username' onChange={(e)=>setname(e.target.value)} value={name} className='form-control' required />
              </div>

               <div className="mb-3">
                <input type="email" placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)} value={email} className='form-control' required />
              </div>

               <div className="mb-2">
                <button className='btn btn-success w-100'>Update</button>
              </div>

              </form>
            
            </div>
          </div>
        </div>
    </>
  )
}
