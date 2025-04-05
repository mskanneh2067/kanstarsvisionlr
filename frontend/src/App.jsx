import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Register,
  EmailVerificationPage,
  Login,
  Header,
  Footer,
  EmailVerifiedSuccessfully,
  Dashboard,
  Profile,
  Projects,
  Orders,
  Account,
  Refunds,
  Billing,
  Support,
  Training
} from "./routes/Routes.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<Register />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verified" element={<EmailVerifiedSuccessfully />} />

        {/* Protected Routes */}

        <Route path="" element={<ProtectedRoutes />}>
          <Route path="/account" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="orders" element={<Orders />} />
            <Route path="refunds" element={<Refunds />} />
            <Route path="billing" element={<Billing />} />
            <Route path="support" element={<Support />} />
            <Route path="training" element={<Training />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
