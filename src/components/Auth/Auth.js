import React, { Component } from "react";
import Input from "./Input/Input";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router-dom";

import "./Auth.css";

class Auth extends Component {
  state = {
    loginForm: {
      login: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Login"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          isRequired: true,
          minLength: 6
        }
      },
      password: {
        elementType: "input",
        value: "",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        touched: false,
        valid: false,
        validation: {
          isRequired: true
        }
      }
    },
    valid: false
  };

  handleFormConfirm = event => {
    event.preventDefault();
    const result = Object.keys(this.state.loginForm).reduce((res, key) => {
      res[key] = this.state.loginForm[key].value;
      return res;
    }, {});
    console.log("handleFormConfirm:");
    console.log(result);
    this.props.onAuth(result.login, result.password); // dispatch an event (login and pw)
    console.log("here");
  };

  checkValidity = (value, rule) => {
    let isValid = true;
    if (rule.isRequired) {
      isValid = value.trim() !== "";
    }
    if (rule.minLength) {
      isValid = value.trim().length >= rule.minLength && isValid;
    }
    return isValid;
  };

  handleInput = (event, key) => {
    const newFormData = {
      ...this.state.loginForm
    };
    const inputData = {
      ...this.state.loginForm[key]
    };

    inputData.touched = true;
    inputData.value = event.target.value;
    inputData.valid = this.checkValidity(inputData.value, inputData.validation);

    const invalid = Object.keys(newFormData).some(key => {
      return !newFormData[key].valid;
    });

    newFormData[key] = inputData;
    this.setState({
      loginForm: newFormData,
      valid: !invalid
    });
  };

  render() {
    const inputs = Object.keys(this.state.loginForm).map(key => {
      const element = this.state.loginForm[key];
      return (
        <Input
          key={key}
          elementType={element.elementType}
          elementConfig={element.elementConfig}
          value={element.value}
          valid={element.valid}
          touched={element.touched}
          invalid={!element.valid}
          changed={event => this.handleInput(event, key)}
        />
      );
    });

    let redirect = null;
    if (this.props.token) {
      console.log("redirect to /about");
      redirect = <Redirect to="/about" />;
    }

    if (this.props.error) {
    }

    return (
      <form onSubmit={e => this.handleFormConfirm(e)}>
        {inputs}
        <button
          disabled={!this.state.valid}
          type="submit"
          className="LogInButton"
        >
          Log in
        </button>
        {this.props.token}
        {redirect}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (login, password) => dispatch(actions.auth(login, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
