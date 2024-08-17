import InstagramIcon from "@/asset/icons/system/Instagram.svg"
import LinkedinIcon from "@/asset/icons/system/Linkedin.svg"
import TiktokIcon from "@/asset/icons/system/Tiktok.svg"
import TwitterIcon from "@/asset/icons/system/Twitter.svg"
import ClipboardIcon from "@/asset/icons/system/Clipboard.svg"
import GenericIconButton from "@/components/button/genericIcon"
import SocialButton from "@/components/button/social"
import Image from "next/image"
import Avatar from "@/components/avatar"

export default function ProfileSettingsInvite() {
	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-heading-2xs">Invite a Friend</h3>

			<div className="flex overflow-hidden rounded-2xl bg-white">
				<div className="flex flex-1 flex-col justify-between gap-14 border-r-8 px-12 py-16 border-r-primary">
					<div className="flex justify-around">
						<SocialButton icon={TwitterIcon} />
						<SocialButton icon={InstagramIcon} />
						<SocialButton icon={TiktokIcon} />
						<SocialButton icon={LinkedinIcon} />
					</div>

					<div className="flex cursor-pointer gap-4 border-gray-100 px-7 py-3 border-[1px]">
						<span className="flex-1">www.zant.app/providers/jennajohnson</span>
						<Image src={ClipboardIcon} alt="clipboard" />
					</div>
				</div>
				<div className="relative flex flex-1 flex-col gap-5 p-8 text-white">
					<img
						className="absolute h-full w-full self-stretch object-cover brightness-50 center"
						alt="invite"
						src="/assets/img/invite.jpeg"
					/>

					<div className="z-10 text-center text-xl font-medium">
						Invite four friends and instantly
						<br />
						get $100 in your Wallet
					</div>

					<span className="z-10 text-center text-display-lg">$100</span>

					<div className="flex items-center justify-center gap-2 self-stretch">
						<Avatar url="/assets/img/avatar/avatar_user1.png" />
						<Avatar url="/assets/img/avatar/avatar_user2.png" />
						<Avatar url="/assets/img/avatar/avatar_user3.png" />
						<Avatar url="/assets/img/avatar/avatar_user4.png" />
						<Avatar url="/assets/img/avatar/avatar_user5.png" />
						<Avatar url="/assets/img/avatar/avatar_user6.png" />
					</div>
				</div>
			</div>
		</div>
	)
}
