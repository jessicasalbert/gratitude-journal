import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");



    return (
        <LoginStyle>
            <Container style={loginBoxStyle}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="user"
                        onChange={(e) => {setUser(e.target.value)}}
                        value={user}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        onChange={(e) => {setPassword(e.target.value)}}
                        value={password}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
                </Container>
        </LoginStyle>
    )
}


export default Login;

const LoginStyle = styled.div`
    ::after {    
        z-index: -1;
        content: "";
        background-image: url("/thankful.jpg");
        background-size: cover;
        height: 100vh;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.50;
        
    }
    @media only screen and (max-width: 600px) {
        ::after {
            background-position: left -100px center;
        },
        .container {
            width: 100% !important
        }
      }
`;

const loginBoxStyle = {
    backgroundColor: "white",
    opacity: 0.8,
    marginTop: "15%",
    width: "50%"
}