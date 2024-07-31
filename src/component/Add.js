import React, { useState, useEffect} from 'react'
import {Link,useNavigate,useParams} from "react-router-dom"
import Student from '../api/Student'
const Add = () => {
        const[firstName,setFirstName] = useState("")
        const[lastName,setLatName] = useState("")
        const[dob,setDob] = useState("")
        const[srn,setSrnName] = useState("") 
        
        const history = useNavigate();
        const {id} = useParams();

        useEffect(() => {
          Student.getStudentById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLatName(response.data.lastName)
            setDob(response.data.dob)
            setSrnName(response.data.srn)
          }).catch((error)=>{
            console.log(error)
          })
        }, [])
        
        
        const saveStudent = (e) =>{
            e.preventDefault(); //stop the refresh
            const student = {firstName,lastName,dob,srn}

            if(id){
              Student.updateEmployeeById(id,student).then((response)=>{
                history("/")
            }).catch((error)=>{
                console.log(error)
            })
            }
            else{
            Student.createStudent(student).then((response)=>{
                console.log(response.data)
                history("/")
            }).catch((error)=>{
                console.log(error)
            })
          }
        }

        const title = () =>{
          if(id){
            return <h1 className='text-center'>Update Student Details</h1>
          }
          else{
            return <h1 className='text-center'>Add Student Details</h1>
          }
        }

  return (
    <div>
      <br></br>
        <div className="container">
          <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                  {
                    title()
                  }
                  <div className="card-body">
                    <form>
                      <div className="form-group mb-2">
                        <label className="form-label">First Name:</label>
                        <input type='text' placeholder='Enter your first name' value={firstName} className="form-control" onChange={(e) => setFirstName(e.target.value)}></input> 
                      </div>
                      <div className="form-group mb-2">
                        <label className="form-label">Last Name:</label>
                        <input type='text' placeholder='Enter your last name' value={lastName} className="form-control" onChange={(e) => setLatName(e.target.value)}></input>
                      </div>
                      <div className="form-group mb-2">
                        <label className="form-label">Date Of Birth:</label>
                        <input type='text' placeholder='YYYY-MM-DD' className="form-control" value={dob} onChange={(e) => setDob(e.target.value)}></input>
                      </div>
                      <div className="form-group mb-2">
                        <label className="form-label">SRN:</label>
                        <input type='text' placeholder='Enter your SRN' className="form-control" value={srn} onChange={(e) => setSrnName(e.target.value)}></input> 
                      </div>
                      <button className="btn btn-success me-2" onClick={(e) => saveStudent(e)}>Save</button>
                      <Link to = "/" className="btn btn-danger">Cancel</Link>  
                    </form>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Add