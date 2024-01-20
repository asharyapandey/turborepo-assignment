import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@repo/assignment-ui/components";
import ModalContent from "./ModalContent";

function UserBirthdayModal() {
	return (
		<Dialog>
			<DialogTrigger className="p-3 text-white border border-white rounded-md hover:shadow-md">
				Open
			</DialogTrigger>
			<DialogContent className="w-80">
				<DialogHeader>
					<ModalContent />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default UserBirthdayModal;
