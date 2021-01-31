import styled from 'styled-components';


const Login = () => {
    return (
        <LoginStyle>
            
            
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
        
    }
    @media only screen and (max-width: 600px) {
        ::after {
            background-position: left -100px center;
        }
      }
`
    
;

const LoginBoxStyle = styled.div`

`
