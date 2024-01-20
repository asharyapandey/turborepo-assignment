import { Button } from "@repo/assignment-ui/components";
import "./App.css";

function App() {
	return (
		<>
			<div className="bg-red-500">
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<Button appName="assignment">Haha</Button>
			</div>
		</>
	);
}

export default App;
