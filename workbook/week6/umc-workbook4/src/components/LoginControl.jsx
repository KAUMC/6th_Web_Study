import React, { useState } from 'react';

function UserGreeting() {
  return <h1>환영합니다!</h1>;
}

function GuestGreeting() {
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

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className='login-control'>
      {button}
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default LoginControl;
