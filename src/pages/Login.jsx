import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/Button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Сторінка для реєстрації</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введіть логін" />
        <MyInput type="password" placeholder="Введіть пароль" />
        <MyButton>Війти</MyButton>
      </form>
    </div>
  );
};

export default Login;
