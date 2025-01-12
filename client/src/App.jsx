import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PatientDashboard from "./components/PatientDashboard";
import HospitalDashboard from "./components/QueueMonitoring";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import PatientStatus from "./components/patient/PatientStatus";
import HomeLayout from "./pages/HomeLayout";
import PatientForm from "./components/patient/PatientForm";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/patient"
            element={
              <ProtectedRoute>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hospital"
            element={
              <ProtectedRoute>
                <HospitalDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/patient-form" element={<PatientForm />} />
          {/* Update the route to accept a dynamic patientId */}
          <Route
            path="/patient-status/:patientId"
            element={<PatientStatus />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
