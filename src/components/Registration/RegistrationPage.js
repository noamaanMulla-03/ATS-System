// src/components/RegistrationPage.js
import React, { useState } from "react";
import JobSeekerForm from "./JobSeekerForm";
import RecruiterForm from "./RecruiterForm";

const RegistrationPage = () => {
	const [userType, setUserType] = useState(null);

	const handleUserTypeSelect = (type) => {
		setUserType(type);
	};

	return (
		<div className="login-bg flex flex-col items-center justify-center min-h-screen w-full bg-purple-100">
			{!userType ? (
				<div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
					<h2 className="text-2xl font-bold mb-6 text-gray-700">
						Register As
					</h2>
					<button
						onClick={() => handleUserTypeSelect("jobSeeker")}
						className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold mb-4 hover:bg-purple-700 transition"
					>
						Job Seeker
					</button>
					<button
						onClick={() => handleUserTypeSelect("recruiter")}
						className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
					>
						Recruiter
					</button>
				</div>
			) : userType === "jobSeeker" ? (
				<JobSeekerForm />
			) : (
				<RecruiterForm />
			)}
		</div>
	);
};

export default RegistrationPage;
