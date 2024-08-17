import Button from "@/components/button"

export default function BackgroundModal({ onClickEvent }: { onClickEvent: Function }) {
	return (
		<dialog id="background_modal" className="modal">
			<div className="p-0 modal-box min-w-[33rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="px-12 py-16 flex flex-col gap-16 items-center">
					<div className="flex flex-col gap-3">
						<h4 className="text-center text-heading-2xs">
							Run your background with Vetty
						</h4>
					</div>
					<Button className="tz-md tz-primary !w-64" onClick={() => onClickEvent()}>
						Start
					</Button>
				</div>
			</div>
		</dialog>
	)
}
