import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie';


export default function LoginPage() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const signIn = async (email, password) => {
		try {
		  const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/login', {
			email,
			password,
		  }, {
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
	
		  console.log('User signed in successfully:', response.data);
		  console.log("login data", response.data);
			if (response.data.authToken) {
				console.log("cookie set", response.data.authToken);
				Cookies.set('authToken', response.data.authToken, { expires: 7 });
			 }
		} catch (error) {
		  throw error;
		}
	  };
	
	  const handleSignIn = async () => {
		console.log(email, password)
	
		try {
		  const response = await signIn(email, password);		  
				
		  router.push('/profile');
		} catch (error) {
		} finally {
		}
	  };

	  const authToken = Cookies.get("authToken");

	  if (authToken) {
		router.push("/profile")
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
					<div className="text-gray-400 text-lead-md">Login</div>
					<div className="font-bold text-heading-3xl">
						Company Login
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="flex flex-col gap-10">
						<input
							type="text"
							placeholder="Email address"
							className="rounded-none input input-lg input-bordered w-[48rem]"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							className="rounded-none input input-lg input-bordered w-[48rem]"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						disabled={!email}
						onClick={() => {
							handleSignIn()
						}}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

LoginPage.plainLayout = true;
