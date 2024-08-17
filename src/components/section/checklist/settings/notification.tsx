import ListSwitchItem from "@/components/list/setting.item"

export default function ProfileSettingsNotification() {
	return (
		<div className="flex flex-col gap-12">
			<h3 className="text-heading-2xs">Notifications</h3>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Session Notifications</h4>

				<ListSwitchItem>Push Notification</ListSwitchItem>
				<ListSwitchItem>Text Notification</ListSwitchItem>
				<ListSwitchItem>Email</ListSwitchItem>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Session Notification Time</h4>

				<ListSwitchItem>1 Week before</ListSwitchItem>
				<ListSwitchItem>1 Day before</ListSwitchItem>
				<ListSwitchItem>Day of a session</ListSwitchItem>
				<ListSwitchItem>1 hour before</ListSwitchItem>
				<ListSwitchItem>10 minutes before</ListSwitchItem>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">System & services update</h4>

				<ListSwitchItem>App updates</ListSwitchItem>
				<ListSwitchItem>Promotion</ListSwitchItem>
				<ListSwitchItem>Discount Available</ListSwitchItem>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Others</h4>

				<ListSwitchItem>New service available</ListSwitchItem>
				<ListSwitchItem>New content available</ListSwitchItem>
			</div>
		</div>
	)
}
