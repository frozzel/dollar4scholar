import React, { useState} from "react";
// import Container from "../components/Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../components/CustomLink";
import { commonModalClasses } from "../utils/theme";
import FormContainer from "../form/FormContainer";
import { useNotification, useAuth } from "../hooks";
import { isValidEmail } from "../utils/helper";
import { Container, Row, Col, Form } from 'react-bootstrap';


const validateUserInfo = ({ email, password }) => {
 
  
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};



export default function SignIn() {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  
  const {updateNotification} = useNotification()
  const {handleLogin, authInfo} = useAuth();
  const {isPending} = authInfo;

  

  const handleChange = ({target}) => {
    const {name, value} = target;
    setUserInfo({...userInfo, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {ok, error}  = validateUserInfo(userInfo);

    if(!ok) return updateNotification('error', error, );
    handleLogin(userInfo.email, userInfo.password);
  }
 
  // useEffect(() => {
  //   if(isLoggedIn) navigate('/');
  // }, [isLoggedIn, navigate])



  return (
    // <section className="flex justify-center items-center h-screen">
    //   <main id="main">
    // <FormContainer>
    //   <Container>
    //     <form onSubmit={handleSubmit} className={commonModalClasses + " w-72"}>
    //       <Title >Sign In</Title>
    //       <FormInput  value={userInfo.email} onChange={handleChange} label="Email" name="email"  placeholder="your@email.com" />
    //       <FormInput value={userInfo.password} onChange={handleChange}  label="Password" name="password" type="password"  placeholder="********" />
    //       <Submit value="Sign In" busy={isPending}></Submit>
    //       <div className="flex justify-between">
    //         <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
    //         <CustomLink to="/auth/SignUp">Sign Up</CustomLink>
            
    //       </div>
    //     </form>
    //   </Container>
    // </FormContainer>
    // </main>
    // </section>

    <section className="mt-10 vh-80" >
    <Container className="py-5 h-100">
      <Row className="d-flex align-items-center justify-content-center h-100">
        <Col md={8} lg={7} xl={6}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </Col>
        <Col md={7} lg={5} xl={5} className="offset-xl-1">
          <Form>
            {/* Email input */}
            <Form.Group className="mb-4" controlId="form1Example13">
              <Form.Control type="email" className="form-control-lg" />
              <Form.Label>Email address</Form.Label>
            </Form.Group>

            {/* Password input */}
            <Form.Group className="mb-4" controlId="form1Example23">
              <Form.Control type="password" className="form-control-lg" />
              <Form.Label>Password</Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>

  );
}