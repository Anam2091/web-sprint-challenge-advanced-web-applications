import React from "react";
import axios from "axios"

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleNameChanges = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  handlePassChanges = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  SubmitButton = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios
      .post(`http://localhost:5000/api/login`, this.state)
      .then((response) => {
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/protected");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  render() {
    return (
      <>
        <form >
          <label>
            Name:
            <input name="name" value={this.state.username}
              onChange={this.handleNameChanges} />
          </label>

          <label>
              Password:
            <input password="password" value={this.state.password}
              onChange={this.handlePassChanges} />
          </label>

          <button  onClick={this.SubmitButton}>Submit</button>
        </form>
      </>
    );
  }
}

export default Login;
