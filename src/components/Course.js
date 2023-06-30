import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from 'reactstrap'

export const Course = ({course}) => {
    return (
        // <Card>
        //     <CardBody>
        //         <CardSubtitle style={{fontWeight:"bold"}}>
        //             Java Course
        //         </CardSubtitle>
        //         <CardText >
        //             It is a java course for beginners
        //         </CardText>
        //         <Container>
        //             <Button color="danger">Delete</Button>
        //             <Button color="warning" style={{marginLeft:5}}>Update</Button>
                    
        //         </Container>
        //     </CardBody>
        // </Card>
        <Card>
            <CardBody>
                <CardSubtitle style={{fontWeight:"bold"}}>
                    {course.title}
                </CardSubtitle>
                <CardText >
                   {course.description}
                </CardText>
                <Container>
                    <Button color="danger">Delete</Button>
                    <Button color="warning" style={{marginLeft:5}}>Update</Button>
                    
                </Container>
            </CardBody>
        </Card>
    )
}
