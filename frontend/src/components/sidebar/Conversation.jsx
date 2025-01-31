import { motion } from "framer-motion";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<motion.div
			whileHover={{ x: 4 }}
			whileTap={{ scale: 0.98 }}
			className="relative"
		>
			<div
				className={`flex items-center gap-3 p-2 py-3 cursor-pointer rounded-xl
				transition-all duration-300 ease-in-out
				${isSelected 
					? 'bg-sky-500/10 hover:bg-sky-500/20 shadow-sm' 
					: 'hover:bg-white/60'}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className="relative">
					<div className={`avatar ${isOnline ? "online" : "offline"}`}>
						<div className="w-12 h-12 rounded-full ring-2 ring-sky-100 ring-offset-2 transition-shadow hover:ring-sky-200">
							<img
								src={conversation.profilePic}
								alt={`${conversation.fullName}'s profile`}
								className="object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="flex-1 flex flex-col min-w-0">
					<div className="flex justify-between items-center gap-2">
						<p className="font-semibold text-sky-900 truncate">
							{conversation.fullName}
						</p>
						<span className="text-lg">{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1 opacity-50' />}
		</motion.div>
	);
};

export default Conversation;

// STARTER CODE SNIPPET
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='divider my-0 py-0 h-1' />
// 		</>
// 	);
// };
// export default Conversation;
