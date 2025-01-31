import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { FaUser, FaLock, FaUserCircle, FaTransgender } from "react-icons/fa";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-[450px] mx-auto'>
			<div className='w-full p-8 rounded-xl shadow-xl bg-sky-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70'>
				<h1 className='text-4xl font-semibold text-center text-sky-950 mb-8'>
					Join <span className='text-sky-600'>Skyla</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-sky-900 font-semibold flex items-center gap-2'>
								<FaUserCircle className="text-sky-700" />
								Full Name
							</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-sky-900 font-semibold flex items-center gap-2'>
								<FaUser className="text-sky-700" />
								Username
							</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-sky-900 font-semibold flex items-center gap-2'>
								<FaLock className="text-sky-700" />
								Password
							</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-sky-900 font-semibold flex items-center gap-2'>
								<FaLock className="text-sky-700" />
								Confirm Password
							</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-12 bg-white/70 border-sky-200 focus:border-sky-400 focus:outline-none hover:border-sky-300 transition-colors'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-sky-900 font-semibold flex items-center gap-2'>
								<FaTransgender className="text-sky-700" />
								Gender
							</span>
						</label>
						<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					</div>

					<Link
						to={"/login"}
						className='text-sm text-sky-700 hover:underline hover:text-sky-800 mt-2 inline-block font-medium'
					>
						Already have an account?
					</Link>

					<div>
						<button 
							className='btn btn-block h-12 mt-2 bg-sky-600 hover:bg-sky-700 text-white border-none text-base shadow-lg hover:shadow-xl transition-all duration-200' 
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
