import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long", {
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			});
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found!", {
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className='relative'>
			<div className="relative group flex items-center">
				<input
					type='text'
					placeholder='Search users...'
					className='w-full bg-white/70 border-2 border-sky-100 rounded-xl py-2.5 pl-10 pr-12
					focus:border-sky-400 focus:outline-none hover:border-sky-200
					transition-all duration-300 placeholder:text-sky-400'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="absolute left-3 flex items-center pointer-events-none">
					<RiUserSearchLine className="text-sky-400 group-hover:text-sky-500 transition-colors text-lg" />
				</div>
				
				<motion.button 
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					type='submit'
					className='absolute right-2 p-1.5 bg-sky-500 
					hover:bg-sky-600 rounded-lg text-white transition-colors duration-300
					shadow-md hover:shadow-lg'
				>
					<IoSearchSharp className='w-4 h-4' />
				</motion.button>
			</div>

			{/* Optional: Add a quick search tip */}
			<div className="absolute -bottom-6 left-0 text-xs text-sky-600/70">
				Type at least 3 characters to search
			</div>
		</form>
	);
};

export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
