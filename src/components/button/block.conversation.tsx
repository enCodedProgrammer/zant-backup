import DotsIcon from "@/asset/icons/system/Dots.svg"
import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import Button from "."
import GenericIconButton from "./genericIcon"

export default function BlockConversationButton(
	props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) {
	return (
		<>
			<dialog id="block_profile_modal" className="modal">
				<div className="p-0 modal-box max-w-[21.5rem]">
					<form method="dialog">
						<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
							✕
						</button>
					</form>
					<div className="flex flex-col gap-8 px-8 py-12">
						<div className="flex flex-col items-center gap-2 text-center">
							<span className="text-xl font-medium">Block Jenna Johnson?</span>
							<span className="text-gray-700 text-para-sm font-roboto">
								They won’t be able to message you or find your profile on Zant. They
								won’t be notified that you blocked them.
							</span>
						</div>
						<div className="flex flex-col gap-4">
							<form method="dialog">
								<Button className="tz-md tz-primary !w-full">Block</Button>
							</form>
							<form method="dialog">
								<Button className="tz-md tz-tertiary !w-full">Cancel</Button>
							</form>
						</div>
					</div>
				</div>
			</dialog>

			<dialog id="delete_conversation_modal" className="modal">
				<div className="p-0 modal-box max-w-[21.5rem]">
					<form method="dialog">
						<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
							✕
						</button>
					</form>
					<div className="flex flex-col gap-8 px-8 py-12">
						<div className="flex flex-col items-center gap-2 text-center">
							<span className="text-xl font-medium">Delete this conversation?</span>
							<span className="text-gray-700 text-para-sm font-roboto">
								This action can’t be undone!
							</span>
						</div>
						<div className="flex flex-col gap-4">
							<Button
								className="tz-md tz-primary"
								onClick={() => {
									const modal = document.getElementById(
										"report_modal",
									) as HTMLDialogElement
									modal.showModal()
								}}
							>
								Block
							</Button>
							<form method="dialog">
								<Button className="tz-md tz-tertiary !w-full">Cancel</Button>
							</form>
						</div>
					</div>
				</div>
			</dialog>

			<dialog id="report_modal" className="modal">
				<div className="h-screen w-screen p-0 modal-box max-w-[100vw] max-h-[100vh]">
					<form method="dialog">
						<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
							✕
						</button>
					</form>
					<div className="flex flex-col gap-20 py-[3.75rem] px-[7.5rem]">
						<div className="flex flex-col items-center gap-5 text-center">
							<span className="text-gray-400 text-lead-md">Report</span>
							<span className="font-medium text-heading-3xl">
								Why are you reporting this
								<br />
								conversation?
							</span>
							<span className="text-gray-700 text-md">
								Your report is anonymous. If someone is in immediate
								<br />
								danger, call the local emergency services – don’t wait.
							</span>
						</div>
						<div className="mx-auto flex flex-col w-[50rem]">
							<div className="flex flex-col gap-1 py-9">
								<div className="flex justify-between">
									<span className="text-xl font-medium">
										Appropriate messages
									</span>
									<input
										type="radio"
										name="report_type"
										className="radio radio-secondary"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1 py-9">
								<div className="flex justify-between">
									<span className="text-xl font-medium">Profanity</span>
									<input
										type="radio"
										name="report_type"
										className="radio radio-secondary"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1 py-9">
								<div className="flex justify-between">
									<span className="text-xl font-medium">Sexual content</span>
									<input
										type="radio"
										name="report_type"
										className="radio radio-secondary"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1 py-9">
								<div className="flex justify-between">
									<span className="text-xl font-medium">Other</span>
									<input
										type="radio"
										name="report_type"
										className="radio radio-secondary"
									/>
								</div>
							</div>
							<textarea
								className="h-56 border-gray-100 textarea textarea-bordered"
								placeholder="Describe your problem"
							></textarea>

							<form method="dialog">
								<Button className="tz-md tz-primary mt-20 mx-auto !w-60">
									Next
								</Button>
							</form>
						</div>
					</div>
				</div>
			</dialog>

			<div className={classNames("dropdown", props.className)}>
				<GenericIconButton icon={DotsIcon} size="1.5rem" />
				<ul
					tabIndex={0}
					className="w-52 p-2 shadow dropdown-content z-[1] menu bg-base-100 rounded-box"
				>
					<li>
						<a
							className="text-md font-roboto"
							onClick={() => {
								const modal = document.getElementById(
									"block_profile_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>
							Block conversation
						</a>
					</li>
					<li>
						<a
							className="text-md font-roboto text-primary"
							onClick={() => {
								const modal = document.getElementById(
									"delete_conversation_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>
							Delete conversation
						</a>
					</li>
					<hr className="my-3" />
					<li>
						<a className="text-md font-roboto">Block provider</a>
					</li>
				</ul>
			</div>
		</>
	)
}
