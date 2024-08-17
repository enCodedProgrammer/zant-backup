import GenericIconButton from "@/components/button/genericIcon"
import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import { useRouter } from "next/router"
import ProvidersListSection from "@/components/section/provider/providers.list"

export default function FavoritesPage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="flex justify-center px-8 py-12 relative">
				<h2 className="text-heading-2xl font-medium">My Favorite Providers</h2>

				<GenericIconButton
					className="absolute left-8 text-primary top-16"
					icon={CaretLeftIcon}
					size="0.8rem"
					onClick={() => router.back()}
				>
					All Favorites
				</GenericIconButton>
			</div>
            <div className="p-8 bg-gray-25 flex flex-col">
                <ProvidersListSection />
            </div>
		</div>
	)
}
