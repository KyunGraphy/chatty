import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./elements/Home";
import ChatPlatForm from "./elements/ChatPlatForm";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/chatting/:roomId/:userName" element={<ChatPlatForm />} />
      </Routes>
    </Router>
  );
}

export default App;
