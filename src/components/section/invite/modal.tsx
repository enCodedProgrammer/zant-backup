import Button from "@/components/button"
import { useState } from "react"

export default function InviteStudentModal() {
	const [value, setValue] = useState('');
	return (
		<dialog id="invite_student_modal" className="modal">
			<div className="p-0 modal-box max-w-[40]">
				<form method="dialog">
					<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="flex flex-col gap-8 px-12 py-16 items-center">
					<span className="text-heading-2xs">Invite Members</span>
					<input
						className="input input-bordered rounded-none w-full"
						placeholder="Email, comma seperated"
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<div className="flex flex-col gap-4 items-center">
						<Button className="tz-md tz-primary !w-48" disabled={value.length == 0}>Invite users</Button>
						<span className="text-sm text-gray-700">Or</span>
						<Button className="tz-md tz-teriary !w-48">Import .csv</Button>
					</div>
				</div>
			</div>
		</dialog>
	)
}
