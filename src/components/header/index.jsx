import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import { useHistory } from "react-router-dom";
import LogoImg from "src/assets/images/logo.png";
import UserContext from "src/contexts/user";
import Button from "src/components/common/button";
import { STORE_KEY } from "src/constants";
import API from "src/api";
import Menus from "./menus";

const Header = () => {
  const [login, setLogin] = useState(false);
  const { setUser, isAuth } = useContext(UserContext);
  const history = useHistory();

  const resetUser = () => {
    localStorage.removeItem(STORE_KEY);
    return {
      auth: {
        authenticated: false
      },
      info: {}
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
          info: userData
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
      {isAuth() ? (
        <>
          <Menus />
          <Button title="Đăng xuất" onClick={logout} />
        </>
      ) : (
        <Button title="Đăng nhập" onClick={handleLogin} />
      )}
    </div>
  );
};

export default memo(Header);
