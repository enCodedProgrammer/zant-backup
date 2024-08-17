import Avatar from "@/components/avatar"
import ConnectButton from "@/components/button/connected"

export default function ProfileSettingsMain() {
	return (
		<div className="rounded-xl border-2 border-gray-50">
			<div className="flex gap-4 border-b-2 border-gray-50 p-5">
				<Avatar url="/assets/img/avatar.png" className="!w-14 !h-14" />
				<div className="flex-1">
					<div className="text-sm text-gray-700">student</div>
					<div className="text-lg font-medium">Jakob@csu.edu</div>
				</div>
			</div>
			<div className="flex flex-col gap-5 px-5 py-6">
				<div className="flex gap-6">
					<div className="flex flex-1 flex-col gap-1">
						<div className="font-medium text-md">Student Account</div>
						<div className="text-sm text-gray-700">
							Students are eligible for discounted rates
						</div>
					</div>
					<ConnectButton />
				</div>
				<div className="flex gap-6">
					<div className="flex flex-1 flex-col gap-1">
						<div className="font-medium text-md">Partner Account</div>
						<div className="text-sm text-gray-700">
							Partners are eligible for discounted rates
						</div>
					</div>
					<ConnectButton />
				</div>
			</div>
		</div>
	)
}
