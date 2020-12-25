import React, { useState, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { UserProvider } from "src/contexts/user";
import { FAQProvider } from "src/contexts/faq";
import { STORE_KEY } from "src/constants";
import "./App.scss";

const Home = lazy(() => import("src/components/pages/home"));
const RedeemAwards = lazy(() => import("src/components/pages/auth/redeem"));
const Mission = lazy(() => import("src/components/pages/auth/mission"));
const Ranking = lazy(() => import("src/components/pages/auth/ranking"));
const FAQ = lazy(() => import("src/components/pages/faq"));
const Profile = lazy(() => import("src/components/pages/auth/profile"));
const NotFoundPage = lazy(() => import("src/components/pages/auth/not-found"));

const userInitialState = {
  auth: {
    authenticated: false
  },
  user: {}
};

const oldState = localStorage.getItem(STORE_KEY)
  ? JSON.parse(localStorage.getItem(STORE_KEY))
  : {};

function App() {
  const [user, setUser] = useState({
    ...userInitialState,
    ...oldState
  });
  const [faq, setFaq] = useState([]);

  const getPublicRoutes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    );
  };

  const getPrivateRoutes = () => {
    return (
      <Switch>
        <Route path="/redeem" component={RedeemAwards} />
        <Route path="/mission" exact component={Mission} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/faq" exact>
          <FAQProvider value={{ faq, setFaq }}>
            <FAQ />
          </FAQProvider>
        </Route>
        <Route path="/profile" exact component={Profile} />
        <Route path="/404" exact component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    );
  };

  const renderRoute = () => {
    if (user?.auth?.authenticated) {
      return getPrivateRoutes();
    }
    return getPublicRoutes();
  };

  return (
    <div className="main">
      <UserProvider
        value={{
          user,
          setUser
        }}
      >
        <Header />
        <Suspense fallback="Loading...">{renderRoute()}</Suspense>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
