import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { Home } from "../pages/Home";
import { VehicleList } from "../pages/VehicleList";
import { ClientList } from "../pages/ClientList";
import { JobList } from "../pages/JobList";


export const ApplicationViews = ({ token, setToken }) => {
  return (
    <> 
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
          {/* Add Routes here */}
          <Route path="/" element={<Home token={token} setToken={setToken} />} />

          <Route
            path="/vehicles"
            element={<VehicleList token={token} setToken={setToken} />}   />

          <Route
            path="/clients"
            element={<ClientList token={token} setToken={setToken} />}   />

            <Route
            path="/jobs"
            element={<JobList token={token} setToken={setToken} />}   /> 

        </Route>
      </Routes>
    </>
  );
};
