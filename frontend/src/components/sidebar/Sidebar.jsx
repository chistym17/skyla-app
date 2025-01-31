import { motion } from "framer-motion";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { FaComments } from "react-icons/fa";

const Sidebar = () => {
	return (
		<motion.div 
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			className='flex flex-col bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-md 
			p-4 min-w-[380px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-screen'
		>
			<div className="flex items-center gap-2 mb-6">
				<div className="p-2 bg-sky-500 rounded-lg shadow-lg">
					<FaComments className="text-white w-6 h-6" />
				</div>
				<h2 className="text-2xl font-bold text-sky-900">Messages</h2>
			</div>

			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				<SearchInput />
			</motion.div>

			<div className="relative my-4">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-sky-200/50"></div>
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white/60 px-4 text-sm text-sky-600 rounded-full backdrop-blur-sm my-3">
						Your Conversations
					</span>
				</div>
			</div>

			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="flex-1 overflow-hidden"
			>
				<div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-sky-200 
				scrollbar-track-transparent hover:scrollbar-thumb-sky-300 pr-2">
					<Conversations />
				</div>
			</motion.div>

			<div className="relative mt-4 pt-4">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-sky-200/50"></div>
				</div>
			</div>

			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
				className="flex items-center justify-between pt-2"
			>
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
						<img 
							src="/skyla-logo.png" 
							alt="Skyla" 
							className="w-6 h-6 object-cover"
						/>
					</div>
					<span className="text-sky-900 font-medium">Skyla Chat</span>
				</div>
				<LogoutButton />
			</motion.div>
		</motion.div>
	);
};

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
