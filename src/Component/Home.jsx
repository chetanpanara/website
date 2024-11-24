import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

  const [users, setusers] = useState([]);

  useEffect(() => { 
    axios.get(`https://mywebsite-agbt.onrender.com//data`)
      .then(result => { 
        setusers(result.data)
      
      })
    .catch(err=>console.log(err))
  },[])


  const handeldelete = (id) => { 
    console.log(id);
    axios.delete('http://localhost:5001/deleteuser/'+id)
      .then(res => { 
        console.log(res)
        window.location.reload();
        
      })
        .catch(err=>console.log(err))
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8">

            <Link to={'/create'} className='btn btn-primary mb-3'>Add User</Link>
            
           <table className="table table-bordered table-striped">
  <thead>
    <tr>
    
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
              <tbody>
                { 
                  
                  users.map((user) => {
                  
                    return <tr>
                     
    <td>{user.name}</td>
    <td>{ user.email}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-success mx-3">Edit</Link>
                     <Link onClick={(e)=>handeldelete(user._id)} className="btn btn-danger">Delete</Link>
                    
      </td>
    </tr>
                  })
                }
  
    
  </tbody>
</table>

            </div>
              </div>
        </div>
    </>
  )
}
