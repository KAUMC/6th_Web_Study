import React, { Component } from 'react';

function UserGreeting(props) {
  return <h1>환영합니다!</h1>;
}

function GuestGreeting(props) {
  return <h1>로그인 해주세요!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button className='login-button' onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className='login-button' onClick={props.onClick}>
      로그아웃
    </button>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className='login-control'>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default LoginControl;
