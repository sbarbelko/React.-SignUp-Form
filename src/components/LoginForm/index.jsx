import { Component } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isNameValid: false,
      email: "",
      isEmailValid: false,
      password: "",
      isPasswordValid: false,
      passwordConfirm: "",
      isPasswordConfirmed: false,
      isChecked: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
      isNameValid: /^[A-Z][a-z]{3,15} [A-Z][a-z]{3,15}$/.test(e.target.value),
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      isEmailValid: /^.+@.+$/.test(e.target.value),
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      isPasswordValid: /^[A-Za-z0-9]{6,}$/.test(e.target.value),
      isPasswordConfirmed: this.state.passwordConfirm === e.target.value,
    });
  };

  handlePasswordConfirm = (e) => {
    this.setState({
      passwordConfirm: e.target.value,
      isPasswordConfirmed: this.state.password === e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      isChecked: false,
      passwordConfirm: "",
    });
  };

  nameGiver = (validator) => {
    return classNames(styles.averageInput, {
      [styles.validInput]: validator,
      [styles.invalidInput]: !validator,
    });
  };

  render() {
    const nameValidation = this.nameGiver(this.state.isNameValid);

    const emailValidation = this.nameGiver(this.state.isEmailValid);

    const passwordValidation = this.nameGiver(this.state.isPasswordValid);

    const passwordConfirmation = this.nameGiver(this.state.isPasswordConfirmed);

    return (
      <div className={styles.formContainer}>
        <h1>Login Form</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            <span>Full Name</span>
            <input
              className={nameValidation}
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
              className={emailValidation}
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
              className={passwordValidation}
              type="password"
              name="password"
              placeholder="Password123"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <label>
            <span>Password confirmation</span>
            <input
              className={passwordConfirmation}
              type="password"
              name="passwordConfirm"
              value={this.state.passwordConfirm}
              onChange={this.handlePasswordConfirm}
            />
          </label>
          <label>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="isChecked"
                checked={this.state.isChecked}
                onChange={this.handleCheckboxChange}
              />
              <span className={styles.checkboxText}>
                I Agree All Statements In Terms Of Service
              </span>
            </div>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
