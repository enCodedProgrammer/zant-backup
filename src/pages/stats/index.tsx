import SearchInput from "@/components/input/search";
import CardStatSection from "@/components/section/stats/cardStats";
import MonthSelect from "@/components/select/month";
import ProfileViewSelect from "@/components/select/view";

export default function StatsPage() {
	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-24 z-50 pl-8">
				<SearchInput placeholder="Search" />
			</div>

			<div className="p-8 flex flex-col gap-7">
				<div className="flex gap-7 items-center">
					<span className="text-heading-2xl">Statistics</span>
					<MonthSelect />
				</div>
				<CardStatSection />
			</div>

			<div className="px-8 py-14 grid grid-cols-2 gap-7">
				<div className="flex flex-col gap-8">
					<div className="flex gap-4 items-center">
						<span className="text-heading-sm">Profile engagement</span>
						<ProfileViewSelect />
					</div>
                    <img src="/assets/img/chart/chart1.png" alt="Profile engagement" />
				</div>
				<div className="flex flex-col gap-8">
					<span className="text-heading-sm">Consultations vs. Paid Sessions</span>
                    <img src="/assets/img/chart/chart2.png" alt="Consultations vs. Paid Sessions" />
				</div>
			</div>
		</div>
	)
}
