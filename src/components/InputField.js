import React from "react";

const InputField = ({ inputFieldId, contentType, content, setData, value }) => {
	return (
		<input
			className="input-field"
			id={inputFieldId}
			type={contentType}
			placeholder={content}
			required
			value={value}
			onChange={(e) => setData(e.target.value)}
		/>
	);
};

export default InputField;
