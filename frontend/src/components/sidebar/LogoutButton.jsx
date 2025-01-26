import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut
					className='w-8 h-8 text-sky-700 hover:text-sky-900 cursor-pointer transition-colors'
					onClick={logout}
				/>
			) : (
				<span className='loading loading-spinner text-sky-600'></span>
			)}
		</div>
	);
};
export default LogoutButton;
