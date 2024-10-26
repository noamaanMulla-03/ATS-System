// src/components/JobSeekerForm.js
import React, { useState } from "react";
import TextInput from "./TextInput";

const JobSeekerForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		resume: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Job Seeker Data:", formData);
		// Handle submission logic
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
		>
			<h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
				Job Seeker Registration
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
			{/* Add contact with dropdown for country codes */}
			<TextInput
				label="Contact Number"
				type="tel"
				id="contactNumber"
				name="contactNumber"
				value={formData.contactNumber}
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
				label="Upload Resume (URL)"
				type="url"
				id="resume"
				name="resume"
				value={formData.resume}
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

export default JobSeekerForm;
