import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./views/LadingPage";
import { PrivacyPage } from "./views/PrivacyPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
