import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import RegistrationPage from "./components/Registration/RegistrationPage";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center">
				<nav className="mb-4 mt-4">
					<Link
						to="/login"
						className="text-purple-600 mx-4 font-semibold"
					>
						Login
					</Link>
					<Link
						to="/register"
						className="text-purple-600 mx-4 font-semibold"
					>
						Register
					</Link>
				</nav>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegistrationPage />} />
				</Routes>
			</div>
		</Router>
	);
}

const HomePage = () => (
	<div className="text-center">
		<h1 className="text-5xl font-bold text-gray-700">
			Welcome to Our Platform
		</h1>
		<p className="text-2xl mt-4 text-gray-600">
			Please log in or register to continue.
		</p>
	</div>
);

export default App;
