import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import PenIcon from "@/asset/icons/system/Pen.svg"
import GenericIconButton from "@/components/button/genericIcon"
import { useEffect, useState } from "react"
import Avatar from "@/components/avatar"

export default function Step3Page() {
	const router = useRouter()
	const [image, setImage] = useState<any>();
	const [name, setName] = useState("")

    useEffect(() => {
		const lUser = localStorage.getItem('user');
		if(lUser) {
		const lObject = JSON.parse(lUser);
		setName(lObject.name)
		}
	},[])

	const handleSubmit = (e) => {
		e.preventDefault();
		const storedUser = localStorage.getItem('user');
      if (storedUser) {
		const userObject = JSON.parse(storedUser);

         // Update the name and save the updated object back to localStorage
         userObject.picture = image;
         localStorage.setItem('user', JSON.stringify(userObject));

         console.log('User object updated:', userObject);
		 router.push("step4")
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
				<div className="flex flex-col items-center gap-8">
					<div className="flex flex-col gap-4">
						<div className="text-gray-400 text-lead-md text-center">Sign up</div>
						<div className="font-bold text-heading-3xl text-center">
							Thanks, {name}. Please upload your
							<br />
							company logo here.
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between items-center gap-10">
					<div className="relative">
						<div style={{maxWidth: "200px"}}>
						<Avatar url={image ? image : "/assets/img/avatar-placeholder.png"} />
						</div>
						<div className="absolute right-0 bottom-0" style={{ transform: "translate(-1rem, -1rem)" }}>
							<GenericIconButton
								size="1.5rem" icon={PenIcon}
								iconClassName="brightness-0 invert"
								className="btn-primary btn-circle !p-1"
								onClick={() => {
									const input = document.createElement('input');
									input.type = 'file';
									input.accept = "image/png, image/gif, image/jpeg";

									input.onchange = e => {
										const file = (e as any).target.files[0];
										const reader = new FileReader();

										reader.onload = function (e) {
											setImage((e as any).target.result);
											console.log(e);
										};

										reader.readAsDataURL(file);
									}

									input.click();
								}}
							/>
						</div>
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

Step3Page.plainLayout = true;
