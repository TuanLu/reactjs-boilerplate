import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import { Link, useHistory } from "react-router-dom";
import LogoImg from "src/assets/images/logo.png";
import UserContext from "src/contexts/user";
import Button from "src/components/common/button";
import API from "src/api";
import { STORE_KEY } from "src/constants";

const Header = () => {
  const [login, setLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const resetUser = () => {
    localStorage.removeItem(STORE_KEY);
    return {
      auth: {
        authenticated: false
      },
      user: {}
    };
  };

  const logout = useCallback(() => {
    setUser(resetUser());
    setLogin(false);
    history.push("/");
  }, [setLogin, setUser, history]);

  const handleLogin = useCallback(() => {
    setTimeout(() => {
      setLogin(true);
    }, 500);
  }, [setLogin]);

  useEffect(() => {
    if (login) {
      const loadUser = async () => {
        const { data: userData = {} } = await API.get("/user");
        const authData = {
          auth: {
            authenticated: true
          },
          user: userData
        };
        setUser(authData);
        localStorage.setItem(STORE_KEY, JSON.stringify(authData));
        history.push("/");
      };
      loadUser();
    }
  }, [login, setUser, history]);
  return (
    <div className="header">
      <img alt="logo" className="main__logo" src={LogoImg} />
      {user?.auth?.authenticated ? (
        <>
          <h1>Welcome: {user?.user?.display_name}</h1>
          <Button title="Đăng xuất" onClick={logout} />
        </>
      ) : (
        <Button title="Đăng nhập" onClick={handleLogin} />
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
