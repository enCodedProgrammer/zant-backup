import Avatar from "@/components/avatar"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Link from "next/link"


export default function Index() {

	return (
		<div className="relative flex min-h-screen flex-col bg-center bg-onboarding bg-cover">
			<header className="flex justify-center py-12">
				<Logo className="!brightness-0 !invert w-[7.5rem] h-10" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-40 self-stretch px-[6rem] pb-[7.5rem]">
				<div className="z-10 flex w-full items-center self-stretch gap-[7.5rem]">
					<div className="flex-1 font-bold text-display-3xl">
						<div className="font-bold text-white font-neue">Everyone has</div>
						<div className="font-bold text-primary font-neue">mental health</div>
					</div>
					<div className="flex flex-col items-start w-[28.75rem] gap-[3.75rem]">
						<div className="flex w-full flex-col items-start gap-6 self-stretch">
							<div className="self-stretch font-bold text-white text-heading-2xl">
								Become a zant partner today!
							</div>
							<p className="self-stretch text-white text-extra font-regular">
								Join zant today and support mental health for those who need it most. 
								Built for non-profits, schools, and companies, zant is committed to 
								streamlining funding for mental health services because we believe 
								that everyone deserves access to mental health care.
							</p>
						</div>
						<Link href="/auth" className="w-full">
							<Button className="!w-full tz-md tz-secondary">Get Started</Button>
						</Link>
					</div>
				</div>
				<div className="flex items-center justify-center self-stretch gap-[4.25rem]">
					<Avatar url="/assets/img/ads_avatar/avatar_01.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_02.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_03.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_04.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_05.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_06.png" />
				</div>
			</div>
		</div>
	)
}

Index.plainLayout = true
