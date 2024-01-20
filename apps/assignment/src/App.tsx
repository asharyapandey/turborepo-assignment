import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UserBirthdayModal from "./components/UserBirthdayModal";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className=" w-full h-screen bg-pink-500 flex justify-center items-center">
				<UserBirthdayModal />
			</div>
		</QueryClientProvider>
	);
}

export default App;
