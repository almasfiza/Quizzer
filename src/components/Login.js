import React, { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    props.handleSubmit();
  };

  return (
    <div className="login-box">
      <h1>Quizzer Login</h1>
      <form className="login-form" onSubmit={submit}>
        <input
          id="email"
          name="email"
          placeholder="john@email.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          name="password"
          placeholder="******"
          type="password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button-52" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
