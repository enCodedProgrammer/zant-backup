export default function CheckboxInput({
	checked = false,
	label,
	onClicked,
}: {
	checked?: boolean
	label: string
	onClicked?: Function
}) {
	return (
		<div className="form-control">
			<label className="flex cursor-pointer justify-start gap-4 label">
				<input
					type="checkbox"
					className="checkbox checkbox-primary"
                    checked={checked}
					onChange={() => {
                        if (onClicked)
						    onClicked()
					}}
				/>
				<span className="text-lg label-text">{label}</span>
			</label>
		</div>
	)
}
