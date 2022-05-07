import { Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/login/LoginScreen"
import { HashRouter as Router } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes"



export const AppRouter = () => {
  return (
    <Router>
        
            <Routes>
                
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>
    </Router>
  )
}
