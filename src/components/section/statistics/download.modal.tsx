import Button from "@/components/button"

export default function StatDownloadModal() {
	return (
		<dialog id="stat_download_modal" className="modal">
			<div className="p-0 modal-box min-w-[33rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="px-12 py-16 flex flex-col gap-8 items-center">
					<div className="flex flex-col gap-3">
						<h4 className="text-center text-heading-2xs">
							Are you sure you want to download?
						</h4>
						<span className="text-md text-center text-gray-700">
							Click download to export the selected client information
						</span>
					</div>
					<Button
						className="tz-md tz-primary !w-64"
						onClick={() => {
							const modal = document.getElementById(
								"stat_download_modal",
							) as HTMLDialogElement
							modal.close("modal")
						}}
					>
						Downlnoad
					</Button>
				</div>
			</div>
		</dialog>
	)
}
