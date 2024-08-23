import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { use, useState } from "react"

export default function Step2Page() {

	const [company, setCompany] = useState("");
	const router = useRouter()


	const handleSubmit = (e) => {
		e.preventDefault();

	const storedUser = localStorage.getItem('user');
      if (storedUser) {
         const userObject = JSON.parse(storedUser);

         // Update the name and save the updated object back to localStorage
         userObject.company = company;
         localStorage.setItem('user', JSON.stringify(userObject));

         console.log('User object updated:', userObject);
		 router.push("step3")
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
					<div className="text-center font-bold text-heading-3xl">
						What kind of company are you?
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="flex flex-col gap-5">
						<div className="flex gap-6">
							<div className="flex align-items-center px-4 py-5 border w-[32rem] text-xl">
								<select onChange={(e) => setCompany(e.target.value)}>
									<option selected>Non-Profit</option>
									<option>Company</option>
									<option>School</option>
									<option>Other</option>
								</select>
							</div>
						</div>

						{/* <div className="mt-2 form-control">
							<label className="cursor-pointer justify-start gap-2 label">
								<input
									type="checkbox"
									checked={agree}
									onChange={(e) => setAgree(e.target.checked)}
									className="rounded-full checkbox checkbox-sm checkbox-secondary [--chkfg:white]"
								/>
								<span className="label-text text-md">
									I certify that I am 18 years of age or older, and I agree to the{" "}
									<Link href={""} className="underline text-link-md">
										User Agreement
									</Link>{" "}
									and{" "}
									<Link href={""} className="underline text-link-md">
										Privacy Policy
									</Link>
								</span>
							</label>
						</div> */}
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						onClick={handleSubmit}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

Step2Page.plainLayout = true;
