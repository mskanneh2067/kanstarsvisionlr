import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 8 characters", met: password.length >= 8 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<div className='mt-2 space-y-1'>
			{criteria.map((item) => (
				<div key={item.label} className='flex items-center text-xs'>
					{item.met ? (
						<Check className='size-4 text-green-500 mr-2' />
					) : (
						<X className='size-4 text-gray-500 mr-2' />
					)}
					<span className={item.met ? "text-green-500 font-normal" : "text-gray-700 font-normal"}>{item.label}</span>
				</div>
			))}
		</div>
	);
};

const PasswordStrengthMeter = ({ password }) => {
	const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 8) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};
	const strength = getStrength(password);

	const getColor = (strength) => {
		if (strength === 0) return "bg-red-600";
		if (strength === 1) return "bg-red-400";
		if (strength === 2) return "bg-[rgb(249,159,74)]";
		if (strength === 3) return "bg-[rgb(20,147,255)]";
		return "bg-green-500";
	};

	const getStrengthText = (strength) => {
		if (strength === 0) return "Very Weak";
		if (strength === 1) return "Poor";
		if (strength === 2) return "Fair";
		if (strength === 3) return "Good";
		return "Excellent";
	};

	return (
		<div className='mt-2'>
			<div className='flex justify-between items-center mb-1'>
				<span className='text-xs text-gray-700 font-normal'>Password strength</span>
				<span className='text-xs text-gray-700 font-normal'>{getStrengthText(strength)}</span>
			</div>

			<div className='flex space-x-1'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-1 w-1/4 rounded-full transition-colors duration-300 
                ${index < strength ? getColor(strength) : "bg-gray-600"}
              `}
					/>
				))}
			</div>
			<PasswordCriteria password={password} />
		</div>
	);
};
export default PasswordStrengthMeter;
