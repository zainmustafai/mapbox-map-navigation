import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import HomePage from "./pages/Homepage/HomePage";
function App() {
  return (
    <div>
      
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    {/* <Home /> */}
                    <HomePage/>
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
