import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profiles/Profile";
import Home from "./Pages/home/home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur blurone"></div>
      <div className="blur blurtwo"></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
