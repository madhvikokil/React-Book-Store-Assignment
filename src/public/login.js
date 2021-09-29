import React from 'react';
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
// import { Form, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("state: ", this.state);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <h1 style={{color:"teal"}}>BOOK STORE</h1> */}
        <Grid textAlign="center" style={{ height: "75vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            Log-in to your Account
          </Header>
            <form class="ui large form" onSubmit={this.handleSubmit} >
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="email" placeholder="E-mail address" onChange={this.handleChange}/>
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                  </div>
                </div>
                <button 
                  class="ui fluid large teal submit button"
                  disabled={this.state.email === '' || this.state.password == ''}>
                    Login
                </button>
              </div>

              <div class="ui error message"></div>
            </form>
          <div class="ui message">
            New to us? <Link to="/signup">Sign Up</Link>
          </div>
        </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state
  }
}

export default connect(mapStateToProps)(Login);