import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import { motion } from "framer-motion";
import { TiMessages } from "react-icons/ti";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto py-4 bg-gradient-to-b from-white/50 to-transparent'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="flex flex-col items-center justify-center h-full gap-3"
				>
					<div className="p-4 bg-white/30 rounded-full backdrop-blur-sm">
						<TiMessages className="w-8 h-8 text-sky-500" />
					</div>
					<p className="text-sky-600 text-center">
						No messages yet. Start the conversation!
					</p>
				</motion.div>
			)}

			<div className="flex flex-col gap-4">
				{messages.map((message, idx) => (
					<motion.div
						key={message._id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.1 }}
						ref={idx === messages.length - 1 ? lastMessageRef : null}
					>
						<Message message={message} />
					</motion.div>
				))}
			</div>

			{/* Date divider example - you can implement this based on your needs */}
			{messages.length > 0 && (
				<div className="relative my-4">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-sky-100"></div>
					</div>
					<div className="relative flex justify-center">
						<span className="bg-white/60 px-4 text-xs text-sky-500 rounded-full backdrop-blur-sm">
							Today
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Messages;

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;
