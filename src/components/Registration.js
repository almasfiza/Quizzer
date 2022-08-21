import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      pwd: "",
      confirmpwd: "",
    };
  }
  unameChange = (event) => {
    this.setState(
      {
        uname: event.target.value,
      },
      console.log(this.state.uname)
    );
  };
  emailChange = (event) => {
    this.setState(
      {
        email: event.target.value,
      },
      console.log(this.state.email)
    );
  };
  pwdChange = (event) => {
    this.setState(
      {
        pwd: event.target.value,
      },
      console.log(this.state.pwd)
    );
  };
  confirmpwdChange = (event) => {
    this.setState(
      {
        confirmpwd: event.target.value,
      },
      console.log(this.state.address)
    );
  };

  render() {
    return (
      <div className="registration-box">
        <h1>Register on Quizzer</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="uname"
              placeholder="Name"
              value={this.state.uname}
              onChange={this.unameChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.emailChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="pwd"
              placeholder="Password"
              value={this.state.pwd}
              onChange={this.pwdChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmpwd"
              placeholder="Confirm Password"
              value={this.state.confirmpwd}
              onChange={this.confirmpwdChange}
            />
          </div>

          <button className="button-52" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
