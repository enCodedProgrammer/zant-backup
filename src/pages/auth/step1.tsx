import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Step1Page() {
	const [name, setName] = useState("")
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault();

	const storedUser = localStorage.getItem('user');
      if (storedUser) {
         const userObject = JSON.parse(storedUser);

         // Update the name and save the updated object back to localStorage
         userObject.name = name;
         localStorage.setItem('user', JSON.stringify(userObject));

         console.log('User object updated:', userObject);
		 router.push("step2")
      }
	}


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
				<div className="flex flex-col items-center gap-4">
					<div className="text-gray-400 text-lead-md">Sign up</div>
					<div className="font-bold text-heading-3xl">
						Hi there! What should we call you?
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="flex gap-6">
						<input
							type="text"
							placeholder="Name"
							className="rounded-none input input-lg input-bordered w-[32rem]"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						disabled={!name}
						onClick={handleSubmit}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

Step1Page.plainLayout = true;
