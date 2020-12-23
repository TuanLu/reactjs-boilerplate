import React, { useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { UserProvider } from "src/components/context/user";
import "./App.scss";

const Home = lazy(() => import("src/components/pages/home"));
const FAQ = lazy(() => import("src/components/pages/faq"));

const userInitialState = {
  auth: false,
};

function App() {
  const [user, setUser] = useState(userInitialState);
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/faq" exact component={FAQ} />
          </Switch>
        </Suspense>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
