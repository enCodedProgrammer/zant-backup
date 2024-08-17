import { useRouter } from "next/router"
import Avatar from "../avatar"
import GenericIconButton from "../button/genericIcon"
import SaveButton from "../button/save"
import CaretRightIcon from "@/asset/icons/system/CaretRight.svg"

export default function ProviderListItem({
	url,
	name,
	job,
}: {
	url: string
	name: string
	job: string
}) {
	const router = useRouter();

	return (
		<div className="flex h-28 cursor-pointer items-center px-8 py-10 gap-[4.75rem] hover:bg-white hover:shadow-md" onClick={() => router.push("/provider/profile/" + name)}>
            <div className="w-[4.5rem] h-[4.5rem]">
                <Avatar url={url} />
            </div>
			<div className="w-60 font-medium text-heading-2xs">{name}</div>
			<div className="flex-1 font-light text-heading-2xs">{job}</div>
			<div className="flex items-center gap-2">
				<SaveButton className="tz-md tz-secondary" />
				<GenericIconButton icon={CaretRightIcon} />
			</div>
		</div>
	)
}
