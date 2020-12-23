import React, { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "src/assets/images/logo.png";
import UserContext from "src/components/context/user";
import LoginButton from "src/components/common/button";
import LogoutButton from "src/components/common/button";
import API from "src/api";
import { STORE_KEY } from "src/constants";

const Header = () => {
  const [login, setLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const loadUser = async () => {
		const { data: userData = {} } = await API.get("/user");
		const authData = {
      auth: {
        authenticated: true,
      },
      user: userData,
		};
		setUser(authData);
		localStorage.setItem(STORE_KEY, JSON.stringify(authData));
  };

  const resetUser = () => {
		localStorage.removeItem(STORE_KEY);
    return {
      auth: {
        authenticated: false,
      },
      user: {},
    };
  };

  const logout = () => {
		setUser(resetUser());
		setLogin(false);
	};

  const handleLogin = () => {
    setTimeout(() => {
      setLogin(true);
    }, 500);
  };

  useEffect(() => {
    if (login) {
      loadUser();
    }
  }, [login]);
  return (
    <div className="header">
      <img alt="logo" className="main__logo" src={LogoImg} />
      {user?.auth?.authenticated ? (
        <>
          <h1>Welcome: {user?.user?.display_name}</h1>
          <LogoutButton title="Đăng xuất" onClick={logout} />
        </>
      ) : (
        <LoginButton title="Đăng nhập" onClick={() => handleLogin()} />
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
