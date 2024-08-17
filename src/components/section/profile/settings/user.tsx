export default function ProfileSettingsUser() {
	return (
		<div className="flex flex-col gap-10">
			<h3 className="text-heading-2xs">Profile Information</h3>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">My Profile</h4>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							First name
						</label>
						<input className="input w-full" value="Jakob" />
					</div>
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Last Name
						</label>
						<input className="input w-full" value="Patel" />
					</div>
				</div>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Email Address
						</label>
						<input className="input w-full" value="jakob@csu.edu" />
					</div>
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Phone number
						</label>
						<input className="input w-full" value="970-124-5753" />
					</div>
				</div>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							State
						</label>
						<input className="input w-full" value="New Jersey" />
					</div>
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Birthdate
						</label>
						<input className="input w-full" value="06 / Oct / 1991" />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Option Information</h4>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Job
						</label>
						<input className="input w-full" />
					</div>
					<div className="flex-1">
						<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
							Degree
						</label>
						<input className="input w-full" />
					</div>
				</div>
				<div>
					<label className="block text-gray-700 text-sm font-regular mb-1 ml-2">
						Biography
					</label>
					<textarea className="textarea textarea-bordered textarea-secondary w-full" />
				</div>
			</div>
		</div>
	)
}
