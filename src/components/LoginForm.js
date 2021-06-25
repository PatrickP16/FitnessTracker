import React , {useState } from "react";
// import { register } from "../api/index";

// import 'file.css'
import { Button , Form,  Col, Row , Container} from "react-bootstrap"

const Login = ({ user , setUser}) => {
    let userName ;
    let passwordOriginal;
//     let passwordConfirm; 

    // const handleSubmit = ( event ) => {
    //     event.preventDefault();
    //     console.log(event.target.value)
    //     console.log(userName)
        // console.log(passwordOriginal)

//         if ( passwordOriginal === passwordConfirm ) {
//             register({ userName ,  passwordOriginal})/*.then((newUser) => {
//                 if ( newUser.userName) {
//                     setUser ( newUser );
//                 } else {
//                     alert( newUser );
//                 }
//             });
//         } else { /*adjust the stylying of the following alert
//             console.error ("Please try again Passwords are not the same");*/
//         }


//     } 
    // const handleUser = ( event ) => {
    //     userName = event.target.value;
    // }
    // const handlePasswordOriginal = ( event ) => {
    //     passwordOriginal = event.target.value;
    // }
//     const handlePasswordConfirm = ( event ) => {
//         passwordConfirm = event.target.value;
//     }
//     console.log(userName)
//     console.log(passwordOriginal)
    return (
        
        <Container id = 'reg'>
            <Row>
                <Col>
                    <div>
                        <Form id = 'reg-form' >
                            <Form.Group>
                                <Form.Label>Username---</Form.Label> 
                                <Form.Control  type = 'text' 
                                    placeholder = 'Enter Username'/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password---</Form.Label>
                                <Form.Control type = 'password'
                                    placeholder = 'Password'  />
                            </Form.Group>

                            {/* <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control  type = 'password'
                                    placeholder = 'Confirm Password' onChange = { handlePasswordConfirm } />
                            </Form.Group> */}
                            <Button className = 'regSubmit' variant = 'outline-primary' type = 'submit'>Log In</Button>
                        </Form>

                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}


export default Login
