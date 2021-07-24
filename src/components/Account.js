import React from 'react'
import '../App.css'
import CourseCard from './CourseCard'
import 'bootstrap/dist/css/bootstrap.min.css'

const Account = ({userName, courses, updateCourses}) => {

    // const renderCourses = () => {
    //     return 
    // }
    return (
        <div className="account-page">
            <h1>{userName}</h1>
            {courses.map(course => <CourseCard updateCourses={updateCourses} course ={course} userName = {userName}/>)}
            
        </div>
    )
}

export default Account;