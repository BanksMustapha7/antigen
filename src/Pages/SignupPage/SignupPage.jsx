import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/cross.png";
import Group6 from "../../assets/Group 6.png";
function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showRequire, setShow] = useState(false);
  const [char, setChar] = useState(false);
  const [casing, setCase] = useState(false);
  const [num, setNum] = useState(false);

  const styles = {
    passwordRequire: {
      color: char === false ? "red" : "green",
    },
  };
  const show = () => (setShow(false) ? setShow(true) : setShow(false));

  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcset="" />
        <h1>Sign Up</h1>
      </div>

      <div className="bottom">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              {...register("firstName")}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              {...register("lastName")}
            />
            <input type="email" placeholder="Email Address" />
            <input
              type="password"
              placeholder="Password"
              {...register("lastName")}
            />

            {showRequire && (
              <div className="require">
                <small style={styles.passwordRequire}>
                  <span>
                    <img
                      className="required"
                      src={(char === false && Cross) || Group6}
                      alt="tick"
                      srcset=""
                    />
                  </span>
                  8 Characters Minimum
                </small>
                <small style={styles.passwordRequire}>
                  <span>
                    <img
                      className="required"
                      src={(casing === false && Cross) || Group6}
                      alt="tick"
                    />
                  </span>
                  One Uppercase and One Lowercase
                </small>
                <small style={styles.passwordRequire}>
                  <span>
                    <img
                      className="required"
                      src={(num === false && Cross) || Group6}
                      alt="tick"
                    />
                  </span>
                  One Number
                </small>
              </div>
            )}

            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="click" onClick={handleSubmit}>
            LOGIN
          </button>
        </form>

        <hr />

        <div className="authbox">
          <button className="google click">
            <img src={Google} alt="google" />
            <span>SIGN IN WITH GMAIL</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
