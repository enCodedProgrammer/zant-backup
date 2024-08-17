import Button from "@/components/button";
import LinkButton from "@/components/button/link";
import LoginButton from "@/components/button/login";
import StatusButton from "@/components/button/status";
import Apple from "@/asset/icons/system/Apple.svg";
import Image from "next/image";
import FilterButton from "@/components/button/filter";
import IconButton from "@/components/button/icon";
import Plus from "@/asset/icons/system/PlusCircle.svg";
import SocialButton from "@/components/button/social";
import SaveButton from "@/components/button/save";
import ConnectButton from "@/components/button/connected";
import ContentCard from "@/components/card";
import FeaturedCard from "@/components/card/featured";
import VideoCard from "@/components/card/video";
import SavedContentCard from "@/components/card/saved";
import RatingButton from "@/components/card/rating";
import EducationCard from "@/components/card/education";
import RateCard from "@/components/card/rate";
import Pagination from "@/components/pagination";

export default function Index() {
	return (
		<div className="flex flex-col gap-4 p-4">
			<div className="flex justify-between">
				<Button className="tz-primary">Button</Button>
				<Button className="tz-secondary">Button</Button>
				<Button className="tz-tertiary">Button</Button>
				<Button className="tz-quaternary">Button</Button>
			</div>

			<div className="flex justify-between">
				<Button className="tz-primary tz-sm">Button</Button>
				<Button className="tz-secondary tz-sm">Button</Button>
				<Button className="tz-tertiary tz-sm">Button</Button>
				<Button className="tz-quaternary tz-sm">Button</Button>
			</div>

			<div className="flex justify-between">
				<Button className="tz-primary tz-outline">Button</Button>
				<Button className="tz-secondary tz-outline">Button</Button>
				<Button className="tz-tertiary tz-outline">Button</Button>
			</div>

			<div className="flex justify-between">
				<StatusButton status="default">Button</StatusButton>
				<StatusButton status="disabled">Button</StatusButton>
				<StatusButton status="pending">Button</StatusButton>
				<StatusButton status="completed">Button</StatusButton>
			</div>

			<div>
				<LinkButton className="tz-primary tz-2xs">Button</LinkButton>
				<LinkButton className="tz-primary tz-xs">Button</LinkButton>
				<LinkButton className="tz-primary tz-sm">Button</LinkButton>
				<LinkButton className="tz-primary tz-md">Button</LinkButton>
				<LinkButton className="tz-primary tz-lg">Button</LinkButton>
				<LinkButton className="tz-primary tz-xl">Button</LinkButton>
			</div>

			<div>
				<LinkButton className="tz-secondary tz-2xs">Button</LinkButton>
				<LinkButton className="tz-secondary tz-xs">Button</LinkButton>
				<LinkButton className="tz-secondary tz-sm">Button</LinkButton>
				<LinkButton className="tz-secondary tz-md">Button</LinkButton>
				<LinkButton className="tz-secondary tz-lg">Button</LinkButton>
				<LinkButton className="tz-secondary tz-xl">Button</LinkButton>
			</div>

			<div>
				<LinkButton className="tz-tertiary tz-2xs">Button</LinkButton>
				<LinkButton className="tz-tertiary tz-xs">Button</LinkButton>
				<LinkButton className="tz-tertiary tz-sm">Button</LinkButton>
				<LinkButton className="tz-tertiary tz-md">Button</LinkButton>
				<LinkButton className="tz-tertiary tz-lg">Button</LinkButton>
				<LinkButton className="tz-tertiary tz-xl">Button</LinkButton>
			</div>

			<div>
				<LoginButton className="w-72 tz-md">
					<Image src={Apple} alt="apple"></Image><span>Login with Apple</span>
				</LoginButton>
				<LoginButton className="w-72 tz-lg">
					<Image src={Apple} alt="apple"></Image><span>Login with Apple</span>
				</LoginButton>
			</div>

			<div>
				<FilterButton className="tz-xs">Filter</FilterButton>
				<FilterButton className="tz-md">Filter</FilterButton>
			</div>

			<div>
				<IconButton className="tz-xs">
					<Image src={Plus} alt="plus" />
				</IconButton>
				<IconButton className="tz-sm">
					<Image src={Plus} alt="plus" />
				</IconButton>
				<IconButton className="tz-circle tz-xs">
					<Image src={Plus} alt="plus" />
				</IconButton>
				<IconButton className="tz-circle tz-sm">
					<Image src={Plus} alt="plus" />
				</IconButton>
			</div>

			<div>
				<SocialButton className="tz-sm"></SocialButton>
				<SocialButton className="tz-lg"></SocialButton>
			</div>

			<div>
				<div>
					<SaveButton className="tz-primary tz-md" active></SaveButton>
					<SaveButton className="tz-primary tz-md"></SaveButton>
					<SaveButton className="tz-primary tz-ghost tz-md" active></SaveButton>
					<SaveButton className="tz-primary tz-ghost tz-md"></SaveButton>
				</div>

				<div>
					<SaveButton className="tz-secondary tz-md" active></SaveButton>
					<SaveButton className="tz-secondary tz-md"></SaveButton>
					<SaveButton className="tz-secondary tz-ghost tz-md" active></SaveButton>
					<SaveButton className="tz-secondary tz-ghost tz-md"></SaveButton>
				</div>

				<div>
					<SaveButton className="tz-tertiary tz-md" active></SaveButton>
					<SaveButton className="tz-tertiary tz-md"></SaveButton>
					<SaveButton className="tz-tertiary tz-ghost tz-md" active></SaveButton>
					<SaveButton className="tz-tertiary tz-ghost tz-md"></SaveButton>
				</div>
			</div>

			<div>
				<div>
					<SaveButton className="tz-primary tz-lg" active></SaveButton>
					<SaveButton className="tz-primary tz-lg"></SaveButton>
					<SaveButton className="tz-primary tz-ghost tz-lg" active></SaveButton>
					<SaveButton className="tz-primary tz-ghost tz-lg"></SaveButton>
				</div>

				<div>
					<SaveButton className="tz-secondary tz-lg" active></SaveButton>
					<SaveButton className="tz-secondary tz-lg"></SaveButton>
					<SaveButton className="tz-secondary tz-ghost tz-lg" active></SaveButton>
					<SaveButton className="tz-secondary tz-ghost tz-lg"></SaveButton>
				</div>

				<div>
					<SaveButton className="tz-tertiary tz-lg" active></SaveButton>
					<SaveButton className="tz-tertiary tz-lg"></SaveButton>
					<SaveButton className="tz-tertiary tz-ghost tz-lg" active></SaveButton>
					<SaveButton className="tz-tertiary tz-ghost tz-lg"></SaveButton>
				</div>
			</div>

			<div>
				<ConnectButton></ConnectButton>
				<ConnectButton active></ConnectButton>
			</div>

			<div className="flex justify-start">
				<ContentCard
					type="event"
					image="/assets/img/test.png"
					category="WEBINAR"
					title="Fight Depression"
					description="Wednesday, Jun 16th"
				/>
				<ContentCard
					type="series"
					image="/assets/img/test.png"
					title="Fight Depression"
					description="Wednesday, Jun 16th"
				/>
				<ContentCard
					type="article"
					image="/assets/img/test.png"
					title="Fight Depression"
					description="Wednesday, Jun 16th"
				/>
			</div>

			<div>
				<FeaturedCard></FeaturedCard>
			</div>

			<div>
				<VideoCard url="/assets/img/video.jpg" title="I had a Dog Named Depression" />
			</div>
			<div>
				<SavedContentCard url="/assets/img/saved content.jpg" title="Anxiety and the Effects" />
			</div>

			<div>
				<RatingButton score={4.92} />
			</div>

			<div>
				<EducationCard
					url="/assets/img/university.png"
					university="Harvard University"
					major="Bachelor's in Cognitive Science"
					year="2006 - 2010"
				/>
			</div>

			<div>
				<RateCard />
				<RateCard disabled />
				<RateCard unavailable />
			</div>

			<div>
				<Pagination />
			</div>
		</div>
	)
}
