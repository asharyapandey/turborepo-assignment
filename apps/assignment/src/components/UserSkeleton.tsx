import { Skeleton } from "@repo/assignment-ui/components";

const UserSkeleton = () => {
	const renderUsers = () => {
		return Array.from({ length: 5 }, (_, i) => i + 1).map((number) => {
			return (
				<div key={number} className="flex items-center gap-2 py-2">
					<Skeleton className="h-12 w-12 rounded-full" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[70px]" />
						<Skeleton className="h-4 w-[50px]" />
					</div>
				</div>
			);
		});
	};

	return (
		<div className="">
			<Skeleton className="h-4 w-[100px] mb-9" />

			{renderUsers()}
		</div>
	);
};

export default UserSkeleton;
