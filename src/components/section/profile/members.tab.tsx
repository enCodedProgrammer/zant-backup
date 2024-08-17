import Button from "@/components/button"
import { useRouter } from "next/router"

/* eslint-disable react/jsx-no-undef */
export default function ProfileMembersTab() {
	const router = useRouter()

	return (
		<div className="flex flex-col p-8">
			<div className="flex flex-col gap-4 py-6">
				<h4 className="text-heading-md text-center">Contact Us</h4>
				<div className="text-gray-700 text-center">
					Send us a message to our support team
				</div>

				<textarea className="textarea textarea-bordered textarea-secondary w-full h-[10rem]" placeholder="Your message" />
				<Button className="tz-md tz-primary">Send Message</Button>
			</div>

			<div className="flex gap-9 py-8">
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
						<span className="text-heading-2xs">Provider Operations</span>
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
						<span className="text-heading-2xs">Provider Operations</span>
						<span className="text-link-xl text-primary underline">
							providers@zant.app
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
