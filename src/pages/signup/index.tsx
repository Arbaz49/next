import Header from "@/Components/Header";
import React from "react";
import styles from "../../styles/signup.module.css";
import Link from "next/link";
const Signup = () => {
  return (
    <div>
      <Header />
      <div  style={{width:"500px",margin:"auto"}}>


      <form className="" style={{marginTop:"100px"}}>
        <div className={styles.container}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr className="hr" />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr className="hr" />

          <p>
            By creating an account you agree to our{" "}
            <a className="a" href="#">
              Terms & Privacy
            </a>
            .
          </p>
          <button type="submit" className={styles.registerbtn}>
            Register
          </button>
        </div>
        <div className={`${styles.container} ${styles.signin}`}>
          <p>
            Already have an account?{" "}
            <Link  className="a" href="/signin">
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
      </div>

    </div>
  );
};

export default Signup;
