// src/components/RecruiterForm.js
import React, { useState } from "react";
import TextInput from "./TextInput";

const RecruiterForm = () => {
	const [formData, setFormData] = useState({
		companyName: "",
		email: "",
		companyWebsite: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Recruiter Data:", formData);
		// Handle submission logic
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
		>
			<h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
				Recruiter Registration
			</h2>
			<TextInput
				label="Full Name"
				type="text"
				id="fullName"
				name="fullName"
				value={formData.fullName}
				onChange={handleChange}
			/>
			{/* Add password and confirm password */}
			<TextInput
				label="Password"
				type="password"
				id="password"
				name="password"
				value={formData.password}
				onChange={handleChange}
			/>
			<TextInput
				label="Confirm Password"
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				value={formData.confirmPassword}
				onChange={handleChange}
			/>
			<TextInput
				label="Company Name"
				type="text"
				id="companyName"
				name="companyName"
				value={formData.companyName}
				onChange={handleChange}
			/>
			<TextInput
				label="Email"
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
			/>
			<TextInput
				label="Company Website (URL)"
				type="url"
				id="companyWebsite"
				name="companyWebsite"
				value={formData.companyWebsite}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
			>
				Register
			</button>
		</form>
	);
};

export default RecruiterForm;
