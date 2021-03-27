import React, { useState } from "react";
import InputField from "./InputField";

const FormField = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		const userInfo = {
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			password: password,
		};
		console.log(userInfo);
	};

	return (
		<div className="form-container">
			<div className="top-banner">
				<strong>Try it free 7 days</strong> then $20/mo. thereafter
			</div>
			<form>
				<div>
					<InputField
						setData={setFirstName}
						value={firstName}
						inputFieldId="first-name-input"
						contentType="text"
						content="First Name"
					/>
					<InputField
						setData={setLastName}
						value={lastName}
						inputFieldId="last-name-input"
						contentType="text"
						content="Last Name"
					/>
					<InputField
						setData={setEmailAddress}
						value={emailAddress}
						inputFieldId="email-input"
						contentType="email"
						content="Email Address"
					/>
					<InputField
						setData={setPassword}
						value={password}
						inputFieldId="password-input"
						contentType="password"
						content="Password"
					/>
				</div>
				<button className="input-btn" onClick={onFormSubmit}>
					CLAIM YOUR FREE TRIAL
				</button>
				<p>
					By clicking the button, you are agreeing to our <span>Terms and Services</span>
				</p>
			</form>
		</div>
	);
};

export default FormField;
