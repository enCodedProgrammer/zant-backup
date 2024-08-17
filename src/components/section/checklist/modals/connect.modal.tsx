import Button from "@/components/button"

export default function ConnectModal({ onClickEvent }: { onClickEvent: Function }) {
	return (
		<dialog id="connect_modal" className="modal">
			<div className="p-0 modal-box min-w-[33rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="px-12 py-16 flex flex-col gap-8 items-center">
					<div className="flex flex-col gap-3">
						<h4 className="text-center text-heading-2xs">
							Connect your bank account with Plaid
						</h4>
						<span className="text-md text-center text-gray-700">
							Connect securely to your bank account via Stripe. Once your bank account
							is connected, you will be able to receive direct deposit payments.
						</span>
					</div>
					<Button className="tz-md tz-primary !w-64" onClick={() => onClickEvent()}>
						Sign in into Plaid
					</Button>
				</div>
			</div>
		</dialog>
	)
}
