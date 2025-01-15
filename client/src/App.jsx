import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PatientDashboard from "./components/PatientDashboard";
import HospitalDashboard from "./components/QueueMonitoring";
// import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import PatientStatus from "./components/PatientStatus";
import HomeLayout from "./pages/HomeLayout";
import PatientForm from "./components/PatientForm";

import QueueStatus from "./components/QueueStatus";
import DepartmentList from "./components/DepartmentList";
import DoctorsList from "./components/DoctorsList";

import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route
            path="/patient-status/:patientId"
            element={<PatientStatus />}
          />
          <Route path="/hospital/queue-status" element={<QueueStatus />} />
          <Route path="/department-list" element={<DepartmentList />} />
          <Route path="/doctors/:departmentId" element={<DoctorsList />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
