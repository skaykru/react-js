import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Вийти</MyButton>
      <div className="navbar_links">
        <Link to="/about">Про сайт</Link>
        <Link to="/posts">Пости</Link>
      </div>
    </div>
  );
};

export default Navbar;
