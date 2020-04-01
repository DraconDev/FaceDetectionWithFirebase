import React, { useState } from "react";

const Register = ({ onRouteChange, loadUser }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  const onEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const onNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const onRegister = () => {
    fetch("http://localhost:3000/register ", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: registerEmail,
        password: registerPassword,
        name: registerName,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user, "test");
        // console.log(data, "success", data.toString() === "success");
        if (user) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ba b--black"
                style={{ "box-sizing": "border-box" }}
                type="name"
                name="name"
                id="name"
                onChange={onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ba b--black"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ba b--black"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className="f6 link dim black db pointer"
              style={{ border: "1px solid" }}
              onClick={() => onRouteChange("home")}
            >
              Try without login
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
