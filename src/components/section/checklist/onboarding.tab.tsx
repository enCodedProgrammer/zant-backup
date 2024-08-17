import PenCircleIcon from "@/asset/icons/system/PenCircle.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import GenericIconButton from "@/components/button/genericIcon"
import EducationCard from "@/components/card/education"
import CompletionItem from "@/components/list/completion"
import { useEffect, useState } from "react"
import BackgroundModal from "./modals/background.modal"
import CompleteApplicationModal from "./modals/complete.modal"
import ConnectModal from "./modals/connect.modal"
import BuildProfileModal from "./modals/buildprofile.modal"

type Status = "default" | "disabled" | "pending" | "completed"

type ItemProp = {
	status: Status
	defaultText: string
	completedText: string
	disabledText: string
	pendingText: string
	title: string
	alt: string
	description: string
}

export default function ChecklistOnboardingTab() {
	const [apply, setApply] = useState<ItemProp>({
		status: "default",
		defaultText: "Apply | 1 minute",
		completedText: "Complete",
		disabledText: "Apply | 1 minute",
		pendingText: "Pending review",
		title: "Begin Your Application",
		alt: "",
		description:
			"Simply connect your account to your LinkedIn, Indeed or Simply Hired account. Our team will review your application within a day.",
	})
	const [background, setBackground] = useState<ItemProp>({
		status: "disabled",
		defaultText: "Run Check  |  5 minutes",
		completedText: "Complete",
		disabledText: "Run Check  |  5 minutes",
		pendingText: "Run Check  |  5 minutes",
		title: "Background Check by Vetty",
		alt: "you can run your background check after your application is approved",
		description:
			"This secure process takes about 5 minutes. You'll just need to give us a few basic details about yourself, after you've been cleared, you'll be ready to start!",
	})
	const [connect, setConnect] = useState<ItemProp>({
		status: "disabled",
		defaultText: "Connect  |  1 minute",
		completedText: "Complete",
		disabledText: "Connect  |  1 minute",
		pendingText: "Connect  |  1 minute",
		title: "Connect Your Bank Account to Get Paid",
		alt: "you can run your background check after your application is approved",
		description:
			"Connect securely to your bank account via Plaid. Once your bank account is connected, you will be able to receive direct deposit payments.",
	})
	const [profile, setProfile] = useState<ItemProp>({
		status: "default",
		defaultText: "Build My Profile",
		completedText: "Complete",
		disabledText: "Build My Profile",
		pendingText: "Build My Profile",
		title: "Build Your Provider Profile",
		alt: "",
		description:
			"This secure process takes about 5 minutes. You'll just need to give us a few basic details about yourself, after you've been cleared, you'll be ready to start!",
	})
	const [gradient, setGradient] = useState<CanvasGradient | undefined>(undefined)

	const [data, setData] = useState({
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [20, 80],
				backgroundColor: [gradient, "rgb(0, 0, 0)"],
				borderWidth: 0,
			},
		],
	})

	useEffect(() => {
		const style = document
			.createElement("canvas")
			.getContext("2d")
			?.createLinearGradient(0, 0, 10, 0)
		style?.addColorStop(0, "#EF0CAF")
		style?.addColorStop(1, "#EF0CAF")
		setGradient(style)

		const datasets = { ...data }
		datasets.datasets[0].backgroundColor[0] = style
		setData(datasets)
	}, [])

	return (
		<div className="flex flex-col px-8 py-10 gap-20">
			<div className="flex">
				<div className="flex-1 flex bg-gray-25 items-center justify-center">
					<img src="/assets/img/chart/20.png" alt="chart" />
				</div>
				<div className="flex-1">
					<div className="relative flex flex-1 flex-col gap-6 p-14 text-white">
						<img
							className="absolute h-full w-full self-stretch object-cover brightness-50 center"
							alt="invite"
							src="/assets/img/invite.jpeg"
						/>

						<div className="z-10 text-center text-heading-2xl font-medium">
							Welcome to Zant
							<br />
							You{"'"}re Almost there.
						</div>

						<span className="z-10 text-center text-xl">
							Complete your profile to get recognized by potential clients. Providers
							with a 100% complete profile schedule 2x more sessions.
						</span>
					</div>
				</div>
			</div>

			<CompleteApplicationModal
				onClickEvent={() => {
					const modal = document.getElementById("complete_modal") as HTMLDialogElement
					modal.close("close")
					setApply({
						...apply,
						status: "pending",
					})
					setBackground({
						...background,
						status: "default",
					})
				}}
			/>

			<BackgroundModal
				onClickEvent={() => {
					const modal = document.getElementById("background_modal") as HTMLDialogElement
					modal.close("close")
					setBackground({
						...background,
						status: "completed",
					})
					setConnect({
						...connect,
						status: "default",
					})
				}}
			/>

			<ConnectModal
				onClickEvent={() => {
					const modal = document.getElementById("connect_modal") as HTMLDialogElement
					modal.close("close")
					setConnect({
						...background,
						status: "completed",
					})
				}}
			/>

			<BuildProfileModal
				// onClickEvent={() => {
				// 	const modal = document.getElementById("connect_modal") as HTMLDialogElement
				// 	modal.close("close")
				// 	setConnect({
				// 		...background,
				// 		status: "completed",
				// 	})
				// }}
			/>

			<div className="flex flex-col px-14 py-10 gap-8">
				<div className="text-heading-2xs">Complete Your Application</div>
				<hr />
				<CompletionItem
					status={apply.status}
					defaultText={apply.defaultText}
					completedText={apply.completedText}
					disabledText={apply.disabledText}
					pendingText={apply.pendingText}
					title={apply.title}
					description={apply.description}
					onClickEvent={() => {
						const modal = document.getElementById("complete_modal") as HTMLDialogElement
						modal.showModal()
					}}
				/>
				<hr />
				<CompletionItem
					status={background.status}
					defaultText={background.defaultText}
					completedText={background.completedText}
					disabledText={background.disabledText}
					pendingText={background.pendingText}
					title={background.title}
					alt={background.alt}
					description={background.description}
					onClickEvent={() => {
						const modal = document.getElementById(
							"background_modal",
						) as HTMLDialogElement
						modal.showModal()
					}}
				/>
				<hr />
				<CompletionItem
					status={connect.status}
					defaultText={connect.defaultText}
					completedText={connect.completedText}
					disabledText={connect.disabledText}
					pendingText={connect.pendingText}
					title={connect.title}
					alt={connect.alt}
					description={connect.description}
					onClickEvent={() => {
						const modal = document.getElementById("connect_modal") as HTMLDialogElement
						modal.showModal()
					}}
				/>
				<hr />
				<CompletionItem
					status={profile.status}
					defaultText={profile.defaultText}
					completedText={profile.completedText}
					disabledText={profile.disabledText}
					pendingText={profile.pendingText}
					title={profile.title}
					alt={profile.alt}
					description={profile.description}
					onClickEvent={() => {
						const modal = document.getElementById("build_profile_modal") as HTMLDialogElement
						modal.showModal()
					}}
				/>
			</div>

			{apply.status == "default" ? (
				<>
					<div className="flex flex-col gap-8">
						<div className="flex justify-between items-center">
							<h4 className="text-heading-sm">Commonly Asked Questions</h4>
						</div>

						<div className="flex flex-col gap-5 border-2 border-gray-50 rounded-2xl p-12 pr-32">
							<h5 className="text-heading-sm">
								How long does the vetting/onboarding process take?
							</h5>
							<div className="text-[1.5rem] leading-10">
								The vetting and onboarding process takes approximately 1-2 weeks.
								You begin by completing your background check and insurance
								verification through company partner Vetty. Once your report is
								returned clear, you will receive a certificate to show clients and
								employers that you have been vetted to zant{"'"}s high standards.
								After your, background check, you are guided through the pipeline of
								completing courses that overview zant{"'"}s history and mission, get
								set up with our HIPAA compliance partner, and more.
							</div>
						</div>

						<div className="flex flex-col gap-5 border-2 border-gray-50 rounded-2xl p-12 pr-32">
							<h5 className="text-heading-sm">How do I get paid?</h5>
							<div className="text-[1.5rem] leading-10">
								You get paid directly from your clients at the rate you set on the
								app. Once you create your account, you set up your payment method
								connecting either a card or bank account with our integrated
								transfer system, Stripe.
							</div>
						</div>

						<div className="flex flex-col gap-5 border-2 border-gray-50 rounded-2xl p-12 pr-32">
							<h5 className="text-heading-sm">
								What if a client doesn{"'"}t show up?
							</h5>
							<div className="text-[1.5rem] leading-10">
								Sessions are prepaid with a $15 cancellation fee. If a client
								cancels within 24 hours of the session or doesn{"'"}t show, they
								will be charged a $15 fee that will go to the provider.
							</div>
						</div>

						<div className="flex flex-col gap-5 border-2 border-gray-50 rounded-2xl p-12 pr-32">
							<h5 className="text-heading-sm">
								What happens if I can{"'"}t make a session last minute?
							</h5>
							<div className="text-[1.5rem] leading-10">
								In the event that you can{"'"}t make a session, you must reschedule
								it with your client. You can do this by going to your upcoming
								sessions and clicking the reschedule button at the top of the
								session
							</div>
						</div>

						<div className="flex gap-9">
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
				</>
			) : (
				<>
					<div className="flex flex-col gap-8">
						<div className="flex justify-between items-center">
							<h4 className="font-medium text-heading-sm">Bio</h4>
							<GenericIconButton className="filter-primary" icon={PenCircleIcon} />
						</div>
						<div className="flex gap-10">
							<div className="w-[28rem]">
								<img
									className="w-full"
									src="/assets/img/upload-zone.png"
									alt="upload"
								/>
							</div>
							<div className="flex flex-1 flex-col gap-4">
								<h5 className="font-normal text-heading-sm">About me</h5>
								<p className="font-regular tracking-wide text-extra leading-10">
									Hi there, I{"'"}m Jenna! But you can call me Jen :{")"} As an
									anxiety counselor, I{"'"}m here to help you tackle those worries
									and fears that might be holding you back from living your best
									life. But don{"'"}t worry, I won{"'"}t make you lie on a couch
									and tell me your deepest secrets (unless you want to, of
									course!). Instead, we{"'"}ll work together to find practical,
									actionable strategies to help you feel more confident, calm, and
									in control. So take a deep breath, relax, and let
									{"'"}s get started. Cheers!
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex justify-between items-center">
							<h4 className="font-medium text-heading-sm">Education</h4>
							<div>
								<GenericIconButton
									className="filter-primary"
									icon={PlusCircleIcon}
								/>
								<GenericIconButton
									className="filter-primary"
									icon={PenCircleIcon}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-7">
							<EducationCard
								url="/assets/img/university.png"
								university="Harvard University"
								major="Bachelor's in Cognitive Science"
								year="2006 - 2010"
							/>
							<EducationCard
								url="/assets/img/university.png"
								university="Harvard University"
								major="Bachelor's in Cognitive Science"
								year="2006 - 2010"
							/>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
