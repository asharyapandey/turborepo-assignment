import { DialogDescription, DialogTitle } from "@repo/assignment-ui/components";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import User from "./User";
import UserSkeleton from "./UserSkeleton";

const ModalContent = () => {
	const { isFetching, data } = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

	if (isFetching) {
		return (
			<div className="px-3">
				<UserSkeleton />
			</div>
		);
	}

	const renderUsers = () => {
		return data?.map((user) => {
			return (
				<User
					key={user.id}
					name={`${user.firstName} ${user.lastName}`}
					birthday={user.birthDate}
					avatar={user.image}
				/>
			);
		});
	};

	return (
		<div className="px-3">
			<DialogTitle className="font-bold mb-9 text-lg">
				{data?.length} birthdays today
			</DialogTitle>
			<DialogDescription>
				{renderUsers()}

				<div className="py-5">
					<button className="w-full text-center py-3 shadow-lg rounded bg-gradient-to-r from-[#E66DD0] to-[#FE68A3] text-white">
						View All
					</button>
				</div>
			</DialogDescription>
		</div>
	);
};

export default ModalContent;
