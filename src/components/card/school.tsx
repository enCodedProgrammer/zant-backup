import { useRouter } from "next/router"
import Button from "../button"

export default function SchoolCard() {
	const router = useRouter()

	return (
		<div className="flex flex-col items-center gap-12 rounded-2xl px-20 py-20 text-white bg-primary">
			<div className="text-lead-xl">Are you in school?</div>
			<div className="text-center">
				<div className="font-medium text-heading-xl">Students are eligible for</div>
				<div className="font-medium text-heading-xl">discounted rates</div>
			</div>
			<Button
				className="tz-md tz-tertiary"
				onClick={() => {
					router.push({
						pathname: "/profile",
						query: { tab: "Settings" },
					})
				}}
			>
				Connect my student account
			</Button>
		</div>
	)
}
