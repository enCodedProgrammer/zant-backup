import PenCircleIcon from "@/asset/icons/system/PenCircle.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import GenericIconButton from "@/components/button/genericIcon"
import EducationCard from "@/components/card/education"
import VideoCard from "@/components/card/video"
import Tag from "@/components/pill/tag"
import { useEffect, useState } from "react"

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

export default function ChecklistMyProfileTab() {
	return (
		<div className="flex flex-col px-8 py-10 gap-20 bg-gray-25">
			<div className="flex">
				<div className="flex-1 flex bg-gray-25 items-center justify-center">
					<img src="/assets/img/chart/80.png" alt="chart" />
				</div>
				<div className="flex-1">
					<div className="relative flex flex-1 flex-col gap-6 p-14 text-white">
						<img
							className="absolute h-full w-full self-stretch object-cover brightness-50 center"
							alt="invite"
							src="/assets/img/invite.jpeg"
						/>

						<div className="z-10 text-center text-heading-2xl font-medium">
							Complete your profile now
							<br></br>
							to reach more clients.
						</div>

						<span className="z-10 text-center text-xl">
							Complete your profile to get recognized by potential clients. Providers
							with a 100% complete profile schedule 2x more sessions.
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex justify-between items-center">
					<h4 className="font-medium text-heading-sm">Bio</h4>
					<GenericIconButton className="filter-primary" icon={PenCircleIcon} />
				</div>
				<div className="flex gap-10">
					<div className="w-[28rem]">
						<VideoCard url="/assets/img/profile/user3.png" />
					</div>
					<div className="flex flex-1 flex-col gap-4">
						<h5 className="font-normal text-heading-sm">About me</h5>
						<p className="font-regular tracking-wide text-extra leading-10">
							Hi there, I{"'"}m Jenna! But you can call me Jen :{")"} As an anxiety
							counselor, I{"'"}m here to help you tackle those worries and fears that
							might be holding you back from living your best life. But don{"'"}t
							worry, I won{"'"}t make you lie on a couch and tell me your deepest
							secrets (unless you want to, of course!). Instead, we{"'"}ll work
							together to find practical, actionable strategies to help you feel more
							confident, calm, and in control. So take a deep breath, relax, and let
							{"'"}s get started. Cheers!
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex justify-between items-center">
					<h4 className="font-medium text-heading-sm">Specialties</h4>
					<GenericIconButton className="filter-primary" icon={PenCircleIcon} />
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex gap-7">
						<Tag className="tz-md tz-secondary" selected>Anxiety</Tag>
						<Tag className="tz-md tz-secondary" selected>Stress</Tag>
						<Tag className="tz-md tz-secondary" selected>Depression</Tag>
						<Tag className="tz-md tz-secondary" selected>Family issues</Tag>
						<Tag className="tz-md tz-secondary" selected>Mood disorders</Tag>
					</div>
					<div className="flex gap-7">
						<Tag className="tz-sm tz-secondary">Addictions</Tag>
						<Tag className="tz-sm tz-secondary">Work</Tag>
						<Tag className="tz-sm tz-secondary">Social</Tag>
						<Tag className="tz-sm tz-secondary">PTSD</Tag>
						<Tag className="tz-sm tz-secondary">Grief</Tag>
						<Tag className="tz-sm tz-secondary">Identity</Tag>
						<Tag className="tz-sm tz-secondary">Lack of focus</Tag>
						<Tag className="tz-sm tz-secondary">Spirituality</Tag>
					</div>
					<div className="flex gap-7">
						<Tag className="tz-sm tz-secondary">Trouble sleeping</Tag>
						<Tag className="tz-sm tz-secondary">Eating disorders</Tag>
						<Tag className="tz-sm tz-secondary">Personality disorders</Tag>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex justify-between items-center">
					<h4 className="font-medium text-heading-sm">Education</h4>
					<div>
						<GenericIconButton className="filter-primary" icon={PlusCircleIcon} />
						<GenericIconButton className="filter-primary" icon={PenCircleIcon} />
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
		</div>
	)
}
