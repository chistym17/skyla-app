import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-[450px] mx-auto">
			<div className="w-full p-8 rounded-xl shadow-xl bg-sky-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70">
				<h1 className="text-4xl font-semibold text-center text-sky-950 mb-8">
					Login to
					<span className="text-sky-600"> Skyla</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-sky-900 font-semibold flex items-center gap-2">
								<FaUser className="text-sky-700" />
								Username
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text text-sky-900 font-semibold flex items-center gap-2">
								<FaLock className="text-sky-700" />
								Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link
						to="/signup"
						className="text-sm text-sky-700 hover:underline hover:text-sky-800 mt-2 inline-block font-medium"
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button 
							className="btn btn-block h-12 mt-2 bg-sky-600 hover:bg-sky-700 text-white border-none text-base shadow-lg hover:shadow-xl transition-all duration-200" 
							disabled={loading}
						>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Login"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;