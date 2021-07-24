import React from 'react'

import { Card, Button } from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const CourseCard = ({course, updateCourses}) => {

    const handleClick = () => {
        
        fetch("http://localhost:9292/courses/"+ course.id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        updateCourses(course.id)
    }

    return (
        <div>
            <Card className = "course-card">
                <Card.Header as="h5">COURSE</Card.Header>
                <Card.Body>
                    <Card.Title>{`${course.name}`}</Card.Title>
                    <Card.Text>{`${course.name}`}</Card.Text>
                    <Card.Text>
                        Items will show up here!
                    </Card.Text>
                    <Button variant="outline-danger" onClick={handleClick}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CourseCard
