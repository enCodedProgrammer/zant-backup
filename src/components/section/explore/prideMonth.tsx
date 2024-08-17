import LinkButton from "@/components/button/link"
import ContentCard from "@/components/card"
import FeaturedCard from "@/components/card/featured"

const PrideMonthSection = ({ title, onViewAll }: { title: string; onViewAll?: Function }) => (
	<div className="flex flex-col gap-6">
		<div className="flex items-center justify-between">
			<h3 className="flex-1 font-medium text-heading-sm">{title}</h3>
			<LinkButton className="tz-md tz-secondary" onClick={() => onViewAll && onViewAll()}>
				view all
			</LinkButton>
		</div>
		<div className="grid grid-cols-6 gap-7">
			<div className="col-span-2">
				<FeaturedCard
					title="Discover Pride"
					image="/assets/img/feed/01.png"
					className="text-primary"
					href="/explore/pride"
				/>
			</div>
			<ContentCard
				type="series"
				image="/assets/img/content/content_3.png"
				title="Providing Culturally Competent Care"
				description="3 min read"
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_4.png"
				title="Navigating Ethical Challenges"
				description="3 min read"
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_5.png"
				title="Promoting Positive Body Image"
				description="3 min read"
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_6.png"
				title="Cognitive-Behavioral Therapy"
				description="3 min read"
			/>
		</div>
	</div>
)

export default PrideMonthSection
