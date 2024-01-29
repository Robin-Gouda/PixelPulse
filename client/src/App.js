import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profiles/Profile";
// import Home from "./pages/home/home";
import Home from "./Pages/home/home.jsx";

function App() {
  return (
    <div className="App">
      <div className="blur blurone"></div>
      <div className="blur blurtwo"></div>
      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
