import LinkButton from "@/components/button/link"
import SavedContentCard from "@/components/card/saved"

export default function ChecklistContentSavedSection({ onViewAll }: { onViewAll?: Function }) {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<h3 className="flex-1 text-heading-sm font-medium">Saved Content</h3>
				<LinkButton
					className="tz-md tz-secondary"
					onClick={() => {
						onViewAll && onViewAll()
					}}
				>
					view all
				</LinkButton>
			</div>
			<div className="grid grid-cols-2 gap-7">
				<div className="flex flex-col gap-14">
					<SavedContentCard title="Anxiety and the Effects" url="/assets/img/savedcontent/01.png"></SavedContentCard>
					<hr />
					<SavedContentCard title="Anxiety and the Effects" url="/assets/img/savedcontent/02.png"></SavedContentCard>
				</div>
				<div className="flex flex-col gap-14">
					<SavedContentCard title="Anxiety and the Effects" url="/assets/img/savedcontent/03.png"></SavedContentCard>
					<hr />
					<SavedContentCard title="Anxiety and the Effects" url="/assets/img/savedcontent/04.png"></SavedContentCard>
				</div>
			</div>
		</div>
	)
}
