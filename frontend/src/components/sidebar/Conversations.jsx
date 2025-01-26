import { motion } from "framer-motion";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import { TiMessages } from "react-icons/ti";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	return (
		<motion.div 
			variants={containerVariants}
			initial="hidden"
			animate="show"
			className='py-2 flex flex-col'
		>
			{conversations.length === 0 && !loading ? (
				<div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-3">
					<div className="bg-sky-100 p-3 rounded-full">
						<TiMessages className="w-6 h-6 text-sky-500" />
					</div>
					<p className="text-sky-700 font-medium">No conversations yet</p>
					<p className="text-sky-500 text-sm">Start chatting with someone!</p>
				</div>
			) : null}

			{conversations.map((conversation, idx) => (
				<motion.div
					key={conversation._id}
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0 }
					}}
					className="relative"
				>
					<Conversation
						conversation={conversation}
						emoji={getRandomEmoji()}
						lastIdx={idx === conversations.length - 1}
					/>
					{idx !== conversations.length - 1 && (
						<div className="absolute left-14 right-2 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />
					)}
				</motion.div>
			))}

			{loading && (
				<div className="flex items-center justify-center py-10">
					<div className="flex flex-col items-center gap-3">
						<div className="loading loading-spinner text-sky-500 w-8 h-8"></div>
						<p className="text-sky-600 text-sm animate-pulse">Loading conversations...</p>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Conversations;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;
