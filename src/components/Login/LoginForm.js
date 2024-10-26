// src/components/LoginForm.js
import React, { useState } from "react";
import TextInput from "./TextInput";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Username:", username, "Password:", password);
		// Handle login logic
	};

	return (
		<div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
			<h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
				Login
			</h2>

			<form onSubmit={handleSubmit}>
				<TextInput
					label="Username"
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextInput
					label="Password"
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					type="submit"
					className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
				>
					Login
				</button>
			</form>

			<p className="text-center text-sm text-gray-500 mt-4">
				Don't have an account?{" "}
				<a
					href="/#"
					className="text-purple-600 hover:text-purple-700 font-semibold"
				>
					Sign Up
				</a>
			</p>
		</div>
	);
};

export default LoginForm;
