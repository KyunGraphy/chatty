
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './elements/Home';
import ChatPlatForm from './elements/ChatPlatForm';

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
