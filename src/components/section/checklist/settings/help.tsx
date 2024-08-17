export default function ProfileSettingsHelp() {
	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-heading-2xs">Help</h3>

			<div className="flex gap-7">
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar02.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Provider Operations</span>
						<span className="text-link-xl text-primary underline">
							providers@zant.app
						</span>
					</div>
				</div>
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar01.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Technical Support</span>
						<span className="text-link-xl text-primary underline">
							providers@zant.app
						</span>
					</div>
				</div>
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar03.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Inquiries</span>
						<span className="text-link-xl text-primary underline">
							providers@zant.app
						</span>
					</div>
				</div>
			</div>

			<div className="tracking-widest text-heading-2xs font-regular">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deser
			</div>

			<ul className="list-disc pl-5">
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Lorem ipsum dolor sit
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Lorem ipsum dolor sit
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Lorem ipsum dolor sit
				</li>
			</ul>

			<div className="tracking-widest text-heading-2xs font-regular">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
			</div>
		</div>
	)
}
