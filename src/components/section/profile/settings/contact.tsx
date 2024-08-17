import Button from "@/components/button";

export default function ProfileSettingsContact() {
	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-heading-2xs">Contact Support</h3>

			<div className="flex flex-col gap-7">
				<div className="tracking-widest text-heading-2xs font-regular">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</div>

				<ul className="list-disc pl-5">
					<li className="font-normal tracking-widest text-heading-2xs underline">1.800.343.2234</li>
					<li className="font-normal tracking-widest text-heading-2xs underline">info@zant.com</li>
				</ul>

				<div className="tracking-widest text-heading-2xs font-regular">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</div>
			</div>
		</div>
	)
}
