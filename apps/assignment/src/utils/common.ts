export const calculateAge = (birthdate: string) => {
	const birthDate = new Date(birthdate);
	const currentDate = new Date();
	const differenceInMilliseconds =
		currentDate.getTime() - birthDate.getTime();
	const ageYears = Math.floor(
		differenceInMilliseconds / (31557600000 * 1.04)
	);
	return ageYears;
};
