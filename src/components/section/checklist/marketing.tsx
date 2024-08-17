import ClipboardIcon from "@/asset/icons/system/Clipboard.svg"
import InstagramIcon from "@/asset/icons/system/Instagram.svg"
import LinkedinIcon from "@/asset/icons/system/Linkedin.svg"
import TiktokIcon from "@/asset/icons/system/Tiktok.svg"
import TwitterIcon from "@/asset/icons/system/Twitter.svg"
import Avatar from "@/components/avatar"
import SocialButton from "@/components/button/social"
import Image from "next/image"
import { useRouter } from "next/router"
import CardSection from "../explore/card"
import VideoSection from "../explore/video"
import ChecklistContentSavedSection from "./content/savedContent"
import ChecklistMarketingSocialKitSection from "./marketing/socialkit"

export default function ChecklistMarketingTab() {
	const router = useRouter()

	return (
		<div className="flex flex-col px-8 py-10 gap-20 bg-gray-25">
			<div className="rounded-2xl flex bg-white overflow-hidden">
				<div className="flex-1 py-16 px-12 flex flex-col gap-14 justify-between">
					<div className="flex justify-around">
						<SocialButton className="tz-lg" icon={TwitterIcon} />
						<SocialButton className="tz-lg" icon={InstagramIcon} />
						<SocialButton className="tz-lg" icon={TiktokIcon} />
						<SocialButton className="tz-lg" icon={LinkedinIcon} />
					</div>

					<div className="border-[1px] border-gray-100 flex gap-4 px-7 py-3 cursor-pointer">
						<span className="flex-1">www.zant.app/providers/jennajohnson</span>
						<Image src={ClipboardIcon} alt="clipboard" />
					</div>
				</div>
				<div
					className="flex-1 relative flex flex-col gap-5 p-8"
					style={{
						background:
							"linear-gradient(0deg, rgba(70, 236, 251, 0.8) 0%, rgba(70, 236, 251, 0.8) 100%), url(/assets/img/session_bg.jpeg) 50% center / cover no-repeat lightgray",
					}}
				>
					<div className="flex flex-col px-12 py-16 gap-3 z-10 items-center justify-center">
						<span className="text-lead-sm">Share Link</span>
						<span className="text-heading-2xl text-center">
							Share your profile to reach a
							<br />
							wider audience
						</span>
					</div>
				</div>
			</div>
			<ChecklistMarketingSocialKitSection />
		</div>
	)
}
