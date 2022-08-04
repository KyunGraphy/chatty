
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ChatPlatForm from './components/ChatPlatForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatting/:roomId/:userName" element={<ChatPlatForm />} />
      </Routes>
    </Router>
  );
}

export default App;
