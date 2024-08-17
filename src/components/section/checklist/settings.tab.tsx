import { useState } from "react"
import ProfileSettingsContact from "./settings/contact"
import ProfileSettingsHelp from "./settings/help"
import ProfileSettingsNotification from "./settings/notification"
import SidebarSettingsPanel from "./settings/sidebar"
import ProfileSettingsUser from "./settings/user"

export default function ChecklistSettingsTab() {
	const [tab, setTab] = useState("user")

	return (
		<div className="flex gap-7 p-10 bg-gray-25">
			<div className="flex-1">
                {tab == "user" && <ProfileSettingsUser />}
                {tab == "bell" && <ProfileSettingsNotification />}
                {tab == "headset" && <ProfileSettingsContact />}
                {tab == "question" && <ProfileSettingsHelp />}
            </div>
			<SidebarSettingsPanel setTab={setTab} />
		</div>
	)
}
