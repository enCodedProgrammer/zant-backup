import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios, {AxiosError} from "axios"
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';




export default function LoginPage() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isError, setIsError] = useState(0)

	const notifyError = () => {
		if(isError == 500)
		toast.error("Invalid Credentials",
		{position: "bottom-left"}
	);
	if(isError == 3)
		toast.error("Input a valid email",
		{position: "bottom-left"}
	);

	}


	const router = useRouter()

	const fetchData = async (authToken) => {
		try {

		  const response = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
			headers: {
			  Authorization: `Bearer ${authToken}`,
			},
		  });
		
		  localStorage.setItem("ZANT_USER", JSON.stringify(response.data));

		  const allMembers = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/allmember", {
			headers: {
			  Authorization: `Bearer ${authToken}`,
			},
		  });
		  localStorage.setItem("ZANT_MEMBERS", JSON.stringify(allMembers.data.items));

		} catch (error) {
		  console.error("Failed to fetch user data:", error);
		}
	  };


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
				return response.data.authToken;
			}			
		} catch (error) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
			console.log("the error", axiosError)
			setIsError(axiosError.response?.status);
			notifyError();
		  //throw error;
			}
		}
	  };
	
	  const handleSignIn = async () => {
		console.log(email, password)		
	
		try {
			let emailInput = document.getElementById("email") as HTMLInputElement
            if (!emailInput?.validity?.valid) {
                setIsError(3)
				notifyError()
                return
                // email is valid
            }
		  const response = await signIn(email, password);		  
		  if (response) {
			Cookies.set('authToken', response, { expires: 7 });

			fetchData(response);
			router.push("/profile")
		 }		  
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
							type="email"
							id="email"
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
