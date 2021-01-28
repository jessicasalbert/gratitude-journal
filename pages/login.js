import styled from 'styled-components';


const Login = () => {
    return (
        <LoginStyle>
            Login
        </LoginStyle>
    )
}


export default Login;

const LoginStyle = styled.div`
    

    ::after {    
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
        background-position: center, center;
`;

