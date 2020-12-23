import React, { memo, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from "src/assets/images/logo.png";
import UserContext from 'src/components/context/user';
import LoginButton from 'src/components/common/button';
import API from 'src/api';

const Header = () => {
	const { user, setUser } = useContext(UserContext);
	const loadUser = async () => {
		const { data: userData = {}} = await API.get('/user');
		setUser({
			...user,
			...userData,
			auth: true
		});
	};
  return (
    <div className="header">
      <img alt="logo" className="main__logo" src={LogoImg} />
			{user.auth ? (
				<h1>Welcome: {user.name}</h1>
			) : (
				<LoginButton title="Đăng nhập" onClick={loadUser} />
			)}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default memo(Header);
