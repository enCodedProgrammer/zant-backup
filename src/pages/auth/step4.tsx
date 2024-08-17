import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { InputCode } from "verify-code-input-react"

export default function Step3Page() {
	const router = useRouter()

	return (
		<div className="flex min-h-screen flex-col">
			<Link href={"/auth/login"}>
				<button className="absolute left-10 top-16 btn !w-auto !h-auto !p-0 !border-none">
					<Image className="h-9 w-9" src={CaretLeftIcon} alt="close" />
				</button>
			</Link>
			<header className="flex justify-center py-12">
				<Logo className="w-[7.5rem] h-[3.75rem]" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-20 self-stretch py-12 px-[7.5rem]">
				<div className="flex flex-col items-center gap-8">
					<div className="flex flex-col gap-4">
						<div className="text-gray-400 text-lead-md text-center">Sign up</div>
						<div className="font-bold text-heading-3xl">
							Check your text messages.
						</div>
					</div>
					<div className="text-xl">We just sent your one-time passcode to ***-***-8106.</div>
				</div>
				<div className="flex flex-1 flex-col justify-start gap-10">
					<InputCode
						fields={6}
						className="input-secondary !w-16 !h-16"
						type="number"
						onTriggerChange={(code) => {
							if (code.length == 6) {
								router.push('/profile')
							}
						}}
					></InputCode>
					<LinkButton className="self-center tz-md tz-primary">Send another code</LinkButton>
				</div>
			</div>
		</div>
	)
}

Step3Page.plainLayout = true;
