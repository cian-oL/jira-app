import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/layouts/Layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <div>Home Page</div>
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <div>Registration Page</div>
          </Layout>
        }
      />
      <Route
        path="/auth-callback"
        element={
          <Layout>
            <AuthCallbackPage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
