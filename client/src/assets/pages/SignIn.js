import React from "react";

function SignIn() {
  return (
    <>
      <div className="">
        <form className="">
          <label>Email</label>
          <input type="text" placeholder="Email" className="z" />
          <label>Password</label>
          <input type="text" placeholder="Password" className="" />
          <input type="submit" value="Log In"></input>
        </form>
      </div>
    </>
  );
}

export default SignIn;
