import React from 'react'
import axios from 'axios'
const url = 'http://localhost:8080/api/v1/students'
class Student{
        getStudent(){
            return axios.get(url)
        }
        createStudent(stud){
            return axios.post(url,stud)
        }
        getStudentById(studid){
            return axios.get(url+"/"+studid)
        }
        updateEmployeeById(studid,stud){
            return axios.put(url+"/"+studid,stud)
        }
        deleteemployee(employeeid){
            return axios.delete(url+"/"+employeeid);
    
        }
    
}

export default new Student();