import Avatar from "@/components/avatar"
import BlockConversationButton from "@/components/button/block.conversation"
import ChatItem from "@/components/chat/item"
import SearchInput from "@/components/input/search"
import ChatBox from "@/components/section/chat/chatbox"
import { useState } from "react"

export default function ChatPage() {
	const [item, setItem] = useState(1)

	return (
		<div className="flex h-full">
			<div className="shadow-lg w-[30rem]">
				<div className="flex flex-col gap-6 px-9 pt-32 pb-9">
					<h3 className="font-medium text-heading-2xl">Chat</h3>
					<SearchInput />
				</div>
				<div className="flex flex-col">
					<ChatItem
						url="/assets/img/avatar/avatar_user5.png"
						name="Jakob Patol"
						message="Hi Jakob, how are you feeling"
						type="Client"
						dateString="10:31 am"
						available
						active={item == 0}
						onClick={() => setItem(0)}
					/>
					<ChatItem
						url="/assets/img/avatar/avatar_user6.png"
						name="Jenna Johnson"
						message="4 previous sessions"
						type="Client"
						dateString="10:31 am"
						available
						active={item == 1}
						onClick={() => setItem(1)}
					/>
					<ChatItem
						url="/assets/img/avatar/avatar_user2.png"
						name="Ann Rosser"
						message="4 previous sessions"
						type="Prospect"
						dateString="2w"
						available
						active={item == 2}
						onClick={() => setItem(2)}
					/>
				</div>
			</div>
			<div className="flex h-full flex-1 flex-col">
				<div className="flex items-center gap-10 bg-white px-14 pt-14 pb-9">
					<div className="w-20">
						<Avatar url="/assets/img/avatar/avatar_user5.png" />
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex gap-2 font-medium text-heading-sm">Jenna Johnson</div>
						<div className="flex items-center gap-3">
							<div className="badge badge-success badge-xs" />
							Active
						</div>
					</div>
					<BlockConversationButton />
				</div>
				<ChatBox />
			</div>
		</div>
	)
}
