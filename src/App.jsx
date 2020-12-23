import React, { useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { UserProvider } from "src/components/context/user";
import { STORE_KEY } from "src/constants";
import "./App.scss";

const Home = lazy(() => import("src/components/pages/home"));
const AuthHome = lazy(() => import("src/components/pages/auth/home"));
const FAQ = lazy(() => import("src/components/pages/faq"));



const userInitialState = {
	auth: {
		authenticated: false
	},
  user: {},
};

const oldState = localStorage.getItem(STORE_KEY)
  ? JSON.parse(localStorage.getItem(STORE_KEY))
  : {};

function App() {
	const [user, setUser] = useState({
		...userInitialState,
		...oldState
	});
	const getPublicRoutes = () => {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/faq" exact component={FAQ} />
			</Switch>
		)
	};
	const getPrivateRoutes = () => {
		return (
			<Switch>
				<Route path="/" exact component={AuthHome} />
				<Route path="/faq" exact component={FAQ} />
			</Switch>
		)
	};
	const renderRoute = () => {
		if(user?.auth?.authenticated) {
			return getPrivateRoutes();
		}
		return getPublicRoutes();
	}
  return (
    <div className="main">
      <UserProvider
        value={{
          user,
          setUser,
        }}
      >
        <Header />
        <Suspense fallback="Loading...">
					{renderRoute()}
        </Suspense>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
