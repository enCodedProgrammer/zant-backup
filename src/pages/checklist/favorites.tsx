import GenericIconButton from "@/components/button/genericIcon"
import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import { useRouter } from "next/router"
import ProvidersListSection from "@/components/section/provider/providers.list"

export default function FavoritesPage() {
	const router = useRouter()

	return (
		<div className="mt-24 flex flex-col">
			<div className="relative flex justify-center px-8 py-12">
				<h2 className="font-medium text-heading-2xl">My Favorite Providers</h2>

				<GenericIconButton
					className="absolute top-16 left-8 text-primary"
					icon={CaretLeftIcon}
					size="0.8rem"
					onClick={() => router.back()}
				>
					All Favorites
				</GenericIconButton>
			</div>
            <div className="flex flex-col p-8 bg-gray-25">
                <ProvidersListSection />
            </div>
		</div>
	)
}
