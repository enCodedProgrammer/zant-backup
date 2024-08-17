import Button from "@/components/button"
import ChatboxDivider from "./divider"

export default function ChatBox() {
	return (
		<div className="flex flex-col bg-gray-25 px-10 py-6">
			<div className="flex-1 overflow-y-auto flex flex-col gap-7">
				<div className="chat chat-start">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="/assets/img/avatar/avatar_user5.png"
							/>
						</div>
					</div>
					<div className="chat-bubble bg-gray-50 text-neutral text-lg">
						Me too. Talk soon!
					</div>
				</div>
				<div className="chat chat-end">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="/assets/img/avatar/avatar_user6.png"
							/>
						</div>
					</div>
					<div className="chat-bubble bg-teal text-white text-lg">
						Hi Jakob, looking forward to our session in 15 minutes, See you soon!
					</div>
				</div>
				<div className="chat chat-start">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="/assets/img/avatar/avatar_user5.png"
							/>
						</div>
					</div>
					<div className="chat-bubble bg-gray-50 text-neutral text-lg">
						You were the Chosen One!
					</div>
					<div className="chat-bubble bg-gray-50 text-neutral text-lg flex flex-col gap-5 py-5 px-8">
						<div className="flex flex-col items-center">
							<span className="text-lead-sm">Session 02</span>
							<p className="text-heading-2xs font-medium">Session with Jakob</p>
							<p className="text-sm font-roboto tracking-widest">
								June 18th, 2023 9:00 - 10:00 am
							</p>
						</div>
						<Button
							className="tz-md tz-primary"
							onClick={() => {
								const modal = document.getElementById(
									"session_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>
							View session
						</Button>
					</div>
				</div>
				<ChatboxDivider label="Today, June 18th" />
				<div className="chat chat-end">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="/assets/img/avatar/avatar_user6.png"
							/>
						</div>
					</div>
					<div className="chat-bubble bg-teal text-white text-lg">I hate you!</div>
					<div className="chat-footer opacity-50">Delivered</div>
				</div>
			</div>
			<div className="relative mt-12">
				<input
					type="text"
					className="py-4 border-2 w-full px-4 border-gray100 "
					placeholder="Message..."
				></input>
				<div className="absolute right-3 top-5">
					<div className="flex items-center gap-3 text-xl text-gray300 cursor-pointer">
						<svg
							stroke="#c4c4c4"
							fill="#c4c4c4"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
						</svg>
						<svg
							stroke="#c4c4c4"
							fill="#c4c4c4"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M21.75 21.5H2.25A1.75 1.75 0 0 1 .5 19.75V4.25c0-.966.784-1.75 1.75-1.75h19.5c.966 0 1.75.784 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75ZM2.25 4a.25.25 0 0 0-.25.25v15.5c0 .138.112.25.25.25h3.178L14 10.977a1.749 1.749 0 0 1 2.506-.032L22 16.44V4.25a.25.25 0 0 0-.25-.25ZM22 19.75v-1.19l-6.555-6.554a.248.248 0 0 0-.18-.073.247.247 0 0 0-.178.077L7.497 20H21.75a.25.25 0 0 0 .25-.25ZM10.5 9.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm-1.5 0a1.75 1.75 0 1 0-3.501.001A1.75 1.75 0 0 0 9 9.25Z"></path>
						</svg>
						<svg
							stroke="#c4c4c4"
							fill="#c4c4c4"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<circle cx="15.5" cy="9.5" r="1.5"></circle>
							<circle cx="8.5" cy="9.5" r="1.5"></circle>
							<path d="M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"></path>
							<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}
