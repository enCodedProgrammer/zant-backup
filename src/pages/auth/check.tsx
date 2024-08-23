import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function AuthPage() {
	const [exist, setExist] = useState<boolean | null>(null)
	const router = useRouter()

	if(exist) {
		router.push("/auth/login");
	}
	
	const handleNoExist = ()=> {
		setExist(false)
		if(!localStorage.getItem("user")) {
			const user = { name: "", company: "", picture: "", email: "", phone: "", password: "" };
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			console.log("user already exist")
			//router.push("/auth/login")
		}

		}




	return (
		<div className="flex min-h-screen flex-col">
			<header className="flex justify-center py-12">
				<Logo className="w-[7.5rem] h-[3.75rem]" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-20 self-stretch py-12 px-[7.5rem]">
				<div className="flex flex-col items-center gap-4">
					<div className="text-gray-400 text-lead-md">Welcome!</div>
					<div className="text-center font-bold text-heading-3xl">
						Do you already have a partner
						<br />
						account with zant?
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="flex flex-col gap-6">
						<div className="mt-2 form-control">
							<label className="cursor-pointer justify-between gap-5 label pl-5 pr-10 py-7 border-gray-100 border-[1px]">
								<input
									type="radio"
									name="yes_no"
									checked={exist == true}
									onChange={(e) => setExist(true)}
									className="rounded-full radio radio-md radio-secondary [--chkfg:white]"
								/>
								<span className="flex-1 text-center label-text text-heading-2xs font-roboto">
									Yes
								</span>
							</label>
						</div>
						<div className="mt-2 form-control">
							<label className="cursor-pointer justify-between gap-5 label pl-5 pr-10 py-7 border-gray-100 border-[1px]">
								<input
									type="radio"
									name="yes_no"
									checked={exist == false}
									onChange={handleNoExist}
									className="rounded-full radio radio-md radio-secondary [--chkfg:white]"
								/>
								<span className="flex-1 text-center label-text text-heading-2xs font-roboto">
									Nope
								</span>
							</label>
						</div>
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						disabled={exist == null}
						onClick={() => {
							router.push("/auth/step1")
						}}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

AuthPage.plainLayout = true
