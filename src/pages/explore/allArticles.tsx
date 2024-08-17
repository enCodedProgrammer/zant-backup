import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import ContentCard from "@/components/card"
import FeaturedCard from "@/components/card/featured"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Section = () => {
	const router = useRouter();
	
	return (
		<div className="grid grid-cols-6 gap-7">
			<ContentCard
				type="series"
				image="/assets/img/content/content_1.png"
				title="The impact of childhood on Adult"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_2.png"
				title="Addressing burnout among clients"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_3.png"
				title="Providing Culturally Competent Care"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_4.png"
				title="Navigating Ethical Challenges"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_5.png"
				title="Promoting Positive Body Image"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
			<ContentCard
				type="series"
				image="/assets/img/content/content_6.png"
				title="Cognitive-Behavioral Therapy"
				description="3 min read"
				onClick={() =>
					router.push("/explore/article/content-federation-and-composable-architecture")
				}
			/>
		</div>
	)
}

export default function ExplorePage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="px-8 py-10 bg-gray-25 flex flex-col gap-20">
				<h4 className="text-heading-lg">Articles</h4>
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
			</div>
		</div>
	)
}
