import { calculateAge } from "../utils/common";

type Props = {
	name: string;
	birthday: string;
	avatar: string;
};

const User = ({ name, birthday, avatar }: Props) => {
	return (
		<div className="flex gap-2 py-2 items-center">
			<div>
				<img
					src={avatar}
					className="rounded-full w-12 h-12 bg-gray-500 object-cover"
					alt={`image of the user ${name}`}
				/>
			</div>
			<div>
				<p className="block text-black">{name}</p>
				<p className="text-xs text-gray-600">
					{calculateAge(birthday)} years
				</p>
			</div>
		</div>
	);
};

export default User;
