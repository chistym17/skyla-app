import { useEffect } from "react";
import { motion } from "framer-motion";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoVideocamOutline, IoCallOutline, IoInformationCircleOutline } from "react-icons/io5";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[800px] flex flex-col bg-white/50 rounded-2xl shadow-lg backdrop-blur-md relative overflow-hidden'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<motion.div 
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='bg-white/70 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-sky-100'
					>
						<div className="flex items-center gap-3">
							<div className="avatar online">
								<div className="w-10 h-10 rounded-full ring-2 ring-sky-100">
									<img src={selectedConversation.profilePic} alt="user avatar" />
								</div>
							</div>
							<div className="flex flex-col">
								<span className='text-sky-900 font-semibold'>{selectedConversation.fullName}</span>
								<span className="text-xs text-sky-500">Online</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<button className="p-2 hover:bg-sky-50 rounded-lg transition-colors">
								<IoVideocamOutline className="w-5 h-5 text-sky-600" />
							</button>
							<button className="p-2 hover:bg-sky-50 rounded-lg transition-colors">
								<IoCallOutline className="w-5 h-5 text-sky-600" />
							</button>
							<button className="p-2 hover:bg-sky-50 rounded-lg transition-colors">
								<IoInformationCircleOutline className="w-5 h-5 text-sky-600" />
							</button>
						</div>
					</motion.div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	
	return (
		<motion.div 
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className='flex items-center justify-center w-full h-full min-h-[500px]'
		>
			<div className='px-4 text-center flex flex-col items-center gap-4'>
				<div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-sky-50 rounded-full flex items-center justify-center shadow-inner">
					<TiMessages className='text-4xl text-sky-500' />
				</div>
				
				<div className="space-y-2">
					<motion.p 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-xl font-semibold text-sky-900"
					>
						Welcome, {authUser.fullName}! 👋
					</motion.p>
					
					<motion.p 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="text-sky-600"
					>
						Select a conversation to start messaging
					</motion.p>
				</div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="mt-4 p-3 bg-white/50 rounded-lg backdrop-blur-sm text-sky-500 text-sm"
				>
					<p>✨ Start connecting with friends on Skyla</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
