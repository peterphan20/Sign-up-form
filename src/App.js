import React from "react";
import FormField from "./components/FormField";

const App = () => {
	return (
		<div className="container">
			<div className="learn-text">
				<h1>Learn to code by watching others</h1>
				<p>
					{" "}
					See how experienced developers solve problems in real-time. Watching scripted tutorials is
					great, but understanding how developers think is invaluable.{" "}
				</p>
			</div>
			<FormField />
		</div>
	);
};

export default App;
