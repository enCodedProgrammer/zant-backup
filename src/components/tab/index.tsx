import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react"
import Tab from "./tab"

export default function TabPanel({
	tabs,
	tab,
	onSelected,
	...props
}: { tabs: string[]; tab: string; onSelected: Function } & DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	const [selected, setSelected] = useState("")

	const onSelectTab = (tab: string) => {
		if (selected != tab) {
			onSelected(tab)
		}
	}

	useEffect(() => {
		setSelected(tab);
	}, [tab])

	return (
		<div className={classNames("flex gap-20", props.className)}>
			{tabs.map((tab, i) => (
				<Tab
					key={i}
					active={tab == selected}
					onClick={() => {
						onSelectTab(tab)
					}}
				>
					{tab}
				</Tab>
			))}
		</div>
	)
}
