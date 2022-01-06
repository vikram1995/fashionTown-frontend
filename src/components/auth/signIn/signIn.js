import React ,{useState} from "react";
import { signInWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from '../../../config/firebase-config'
// import store from '../../store'
import { googleAuthProvider,facebookAuthProvider } from '../../../config/authMethods';
import {SignInContainer,SignInBox,HorizontalLine,IconHolder} from "./signInStyleComponent";

import { Input, Row, Button, Space} from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";

function SignIn() {
    const [signInEmail, setSignInEmail] = useState(null)
    const [signInPassword, setSignInPassword] = useState(null)
    const emailSignIn = async (e) => {
        //e.preventDefault();
        try {
            const authResponse = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            console.log(authResponse);
            // store.dispatch({ type: 'App/authUser', payload: authResponse.user })
            // navigate('/');
        } catch (error) {
            console.log(error.message);
            //seterrorMsg(getErrorMsg(error.message))
        }
    }

    const handleSocialAuth = async (provider) => {
        const auth = getAuth();
        try {
          const result = await signInWithPopup(auth, provider)
          const user = result.user;
          console.log(user.displayName)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <SignInContainer>
      <SignInBox>
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <Row>
            <h2>Login</h2>
          </Row>
          <Row>
            <Input size="large" placeholder="Email" type={"email"} onChange={(e)=>setSignInEmail(e.target.value)}/>
          </Row>

          <Row>
            <Input size="large" placeholder="password" type={"password"} onChange={(e)=>setSignInPassword(e.target.value)}/>
          </Row>

          <Row>
            <Button htmlType="submit" onClick={(e)=>emailSignIn()}
              block
              style={{
                background: "#38AF1A",
                borderRadius: "5px",
                color: "white",
              }}
            >
              LOGIN
            </Button>
          </Row>

          <Row>
            <HorizontalLine></HorizontalLine>
          </Row>

          <Row style={{ position: "relative" }}>
            <IconHolder>
              <GoogleOutlined />
            </IconHolder>
            <Button onClick={() => handleSocialAuth(googleAuthProvider)} block>Sign in with Google</Button>
          </Row>

          <Row style={{ position: "relative" }}>
            <IconHolder>
              <FacebookFilled />
            </IconHolder>
            <Button block onClick={() => handleSocialAuth(facebookAuthProvider)}>Log in with Facebook</Button>
          </Row>

          <Row>
            <Button
              block
              style={{
                background: "#FF7F3F",
                borderRadius: "5px",
                color: "white",
              }}
            >
              CREATE ACCOUNT
            </Button>
          </Row>
          <Row>
            <Button
              block
              style={{
                background: "grey",
                borderRadius: "5px",
                color: "white",
              }}
            >
              GUEST LOGIN
            </Button>
          </Row>
        </Space>
      </SignInBox>
    </SignInContainer>
  );
}

export default SignIn;
