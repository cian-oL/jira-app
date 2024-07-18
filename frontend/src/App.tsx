import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/layouts/Layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import HomePage from "./pages/HomePage";
import KanbanPage from "./pages/KanbanPage";
import KanbanLayout from "./layouts/KanbanLayout";
import BacklogPage from "./pages/BacklogPage";
import CreateIssuePage from "./pages/CreateIssuePage";
import IssuesPage from "./pages/IssuesPage";

function App() {
  return (
    <Routes>
      {/* === HOME & PROFILE PAGES */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
      </Route>

      {/* === KANBAN & TASK PAGES ===  */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/kanban"
          element={
            <KanbanLayout>
              <KanbanPage />
            </KanbanLayout>
          }
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/backlog"
          element={
            <Layout>
              <BacklogPage />
            </Layout>
          }
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/issues"
          element={
            <Layout>
              <IssuesPage />
            </Layout>
          }
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/create-issue"
          element={
            <Layout>
              <CreateIssuePage />
            </Layout>
          }
        />
      </Route>

      {/* === AUTH PAGE === */}
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
