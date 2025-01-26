import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSmile, FaPaperclip } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";
import { motion } from "framer-motion";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<motion.div 
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="px-6 py-4 bg-white/70 backdrop-blur-md border-t border-sky-100"
		>
			<form onSubmit={handleSubmit} className="flex items-center gap-2">
				<div className="flex items-center gap-2">
					<button 
						type="button"
						className="p-2 hover:bg-sky-50 rounded-full transition-colors"
					>
						<FaSmile className="w-5 h-5 text-sky-500" />
					</button>
					<button 
						type="button"
						className="p-2 hover:bg-sky-50 rounded-full transition-colors"
					>
						<FaPaperclip className="w-5 h-5 text-sky-500" />
					</button>
				</div>

				<div className="flex-1 relative">
					<input
						type="text"
						className="w-full px-4 py-2.5 bg-white/50 border-2 border-sky-100 rounded-xl 
						focus:border-sky-400 focus:outline-none hover:border-sky-200 transition-colors
						placeholder:text-sky-400 text-sky-800"
						placeholder="Type a message..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					type="submit"
					className="p-3 bg-sky-500 hover:bg-sky-600 rounded-xl text-white shadow-md 
					hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
					disabled={loading}
				>
					{loading ? (
						<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
					) : (
						<BsSend className="w-5 h-5" />
					)}
				</motion.button>
			</form>
		</motion.div>
	);
};

export default MessageInput;

// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
