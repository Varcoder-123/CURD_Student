import { useEffect, useState } from "react"
import Student from "../api/Student"
import {Link} from "react-router-dom"
import Swal from "sweetalert2"
const Read = () => {
   const [first, setfirst] = useState([])
   const[search,setSearch] = useState("")
   

  useEffect(() => {   //This contains the data which is from backend
    Student.getStudent().then((response) =>{
        console.log(response.data)
        setfirst(response.data)
    }).catch((error) =>{
        console.log(error)
    })
  }, [])

  const getAllEmplouess = () =>{
    Student.getStudent().then((response) =>{
        setfirst(response.data)
    }).catch((error) =>{
        console.log(error)
    })
  }
  
  const deleteemployee = (empid) => {
    Swal.fire({
        title: 'Are you sure you want to delete?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.isConfirmed) {
            Student.deleteemployee(empid).then((response) => {
                getAllEmplouess();
            });
        }
    });
}
  return (
    <div className="container">
        <h2 className="text-center">
            Students record
        </h2>
        <Link to = "/add-student" className="btn btn-primary mb-2">Add Employee </Link>
        <form>
            <div className="input-container">
                <input className="form-control mr-sm-2" type="search" placeholder="Search Based On SRN" onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
            </div>
        </form>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <th>Student FirstName</th>
                <th>Student LastName</th>
                <th>Student DOB</th>
                <th>Student SRN</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    first.filter((sear)=>{
                        return search === ''? sear : sear.srn.includes(search)
                    }).map(
                        stud =>
                        <tr>
                            <td>{stud.firstName}</td>
                            <td>{stud.lastName}</td>
                            <td>{stud.dob}</td>
                            <td>{stud.srn}</td>
                            <td>
                            <Link className="btn btn-info" to={`/edit-student/${stud.id}`}>Update</Link>
                            <button className="btn btn-danger" onClick={() => deleteemployee(stud.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Read