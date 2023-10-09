import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { auth ,provider,fbDatabase} from "../../firebase";
import { signInWithPopup ,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithPopup(auth,provider).then((data)=>{
      setEmail(data.user.email)
    })
    };
  

  const handleSignIn = (e) => {
    e.preventDefault();
  

    const email=e.target.email.value
    const password=e.target.password.value
    
    signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log("You are logged in");
        if (data) {
          console.log(auth);
        }
      })
      .catch((e) => alert("You are already SignIn"));
      setEmail("")
      setPassword("")
  };

  const registerSignIn = (e) => {
    e.preventDefault();
      const email=e.target.email.value
      const password=e.target.password.value
     
      createUserWithEmailAndPassword(fbDatabase,email, password)
      .then((data) => {
        if (data) {
          console.log(data,"authData");
        }
      })
      .catch((e) =>{console.error("Error during registration:", e);
      alert(e.message)} );

      setEmail("")
      setPassword("")
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>
            HandCrafted with ❤️ by{" "}
          </p>
          <h3>Amruta Pede</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h3>Login</h3>
            </div>
            <div className="login__inputFields">
              <h4>Email</h4>
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder=" Your Email"
                />
              </div>
              <h4>Password</h4>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder=" Your Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button type="submit" onClick={(e)=>handleSignIn}>Login</button>
            </div>
           <button type="submit" onClick={(e)=>registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
