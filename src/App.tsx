import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ErorPage from "./pages/ErorPage";

function App() {
  return (
    <Routes>
      {/* Static Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/profiles" element={<ProfilePage />} />

      {/* Dynamic Route using param ( :params ) */}
      <Route path="/profile/:username" element={<ProfileDetailPage />} />

      {/* Not Found Route */}
      <Route path="*" element={<ErorPage />} />
    </Routes>
  );
}

export default App;
