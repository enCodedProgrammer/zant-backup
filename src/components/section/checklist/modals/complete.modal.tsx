import ConnectButton from "@/components/button/connected"

export default function CompleteApplicationModal({onClickEvent}: {onClickEvent: Function}) {
	return (
		<dialog id="complete_modal" className="modal">
			<div className="p-0 modal-box min-w-[33rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="px-12 py-16 flex flex-col gap-8">
					<div className="flex flex-col gap-3">
						<h4 className="text-center text-heading-2xs">Just Connect Your Account</h4>
						<span className="text-md text-center text-gray-700">
							Connect to one of your job profiles to apply
						</span>
					</div>
					<div className="flex flex-col gap-5">
						<div className="flex gap-6 items-center">
							<img
								className="w-14 aspect-square"
								src="/assets/img/connect/linkedin.png"
								alt="linkedin"
							/>
							<span className="flex-1 text-xl font-medium">Linkedin</span>
							<ConnectButton onClick={() => onClickEvent()} />
						</div>
						<hr />
						<div className="flex gap-6 items-center">
							<img
								className="w-14 aspect-square"
								src="/assets/img/connect/indeed.png"
								alt="indeed"
							/>
							<span className="flex-1 text-xl font-medium">Linkedin</span>
							<ConnectButton onClick={() => onClickEvent()} />
						</div>
						<hr />
						<div className="flex gap-6 items-center">
							<img
								className="w-14 aspect-square"
								src="/assets/img/connect/social.png"
								alt="social"
							/>
							<span className="flex-1 text-xl font-medium">Linkedin</span>
							<ConnectButton onClick={() => onClickEvent()} />
						</div>
					</div>
				</div>
			</div>
		</dialog>
	)
}
