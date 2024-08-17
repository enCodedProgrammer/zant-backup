import Avatar from "@/components/avatar"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import PlayButton from "@/components/button/play"
import Logo from "@/components/logo"
import Link from "next/link"

export default function AuthPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="py-9 flex justify-center">
				<Logo className="w-[20rem] h-24" />
			</header>
			<div className="flex flex-col items-center justify-between px-[7.5rem] pt-7 pb-[5rem] flex-1 self-stretch grow gap-20">
				<div className="flex items-center justify-center gap-[4.25rem] self-stretch">
					<Avatar url="/assets/img/ads_avatar/avatar_01.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_02.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_03.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_04.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_05.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_06.png" />
				</div>
				<div className="flex-1 inline-flex flex-col items-center justify-end gap-10 self-stretch">
					<div className="inline-flex flex-col gap-4">
						<Link href="/auth/check">
							<Button className="tz-lg tz-secondary !w-[33rem]">Sign up</Button>
						</Link>
						<Link href="/auth/login">
							<Button className="tz-lg tz-tertiary !w-[33rem]">Login</Button>
						</Link>
					</div>
					<div className="inline-flex flex-col items-center gap-4">
						<div className="invert grayscale">
							<PlayButton className="w-6 h-6" />
						</div>
						<div className="text-xl font-light">what we do</div>
					</div>
				</div>
			</div>
		</div>
	)
}

AuthPage.plainLayout = true
