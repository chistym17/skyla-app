import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleColor = fromMe ? "bg-sky-500" : "bg-white/70";
	const textColor = fromMe ? "text-white" : "text-sky-900";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full ring-2 ring-sky-100'>
					<img alt='User avatar' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleColor} ${textColor} ${shakeClass} shadow-sm backdrop-blur-sm`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-75 text-xs flex gap-1 items-center text-sky-600'>
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;

