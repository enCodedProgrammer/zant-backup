import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import VideoCard from "@/components/card/video"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"

export default function VideoSection({ title = "Video", addIcon = false }) {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<h3 className="flex-1 font-medium text-heading-sm">{title}</h3>
					{addIcon && <GenericIconButton className="filter-primary" icon={PlusCircleIcon} />}
				</div>
				<LinkButton className="tz-md tz-secondary">view all</LinkButton>
			</div>
			<div className="grid grid-cols-3 gap-7">
				<VideoCard
					url="/assets/img/video/video_1.jpg"
					title="Finding Inner Peace: A Journey Through Mental Health Therapy"
				/>
				<VideoCard url="/assets/img/video/video_2.jpg" title="Overcoming Challenges" />
				<VideoCard
					url="/assets/img/video/video_3.png"
					title="Embracing Authenticity and Discovering Self"
				/>
			</div>
		</div>
	)
}
