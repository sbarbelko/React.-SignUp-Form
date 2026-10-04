import { Component } from "react";
import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      isChecked: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <h1>Login Form</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Name Surname"
              autoFocus
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <span>Email adress</span>
            <input
              type="email"
              name="email"
              placeholder="your@email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password123"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
