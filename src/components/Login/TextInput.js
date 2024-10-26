// src/components/TextInput.js
import React from "react";

const TextInput = ({ label, type, id, name, onChange, value }) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-600"
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				required
				className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
			/>
		</div>
	);
};

export default TextInput;
