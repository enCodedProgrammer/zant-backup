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
import Cookies from "js-cookie"

import axios from "axios"

export default function Verified() {
	const router = useRouter()
	//const [image, setImage] = useState<any>();
	const [name, setName] = useState("")
	const [picture, setPicture] = useState("")
	const [token, setToken] = useState<any>('');
	const [authToken, setAuthToken] = useState<any>('');


    useEffect(() => {
		const lUser = localStorage.getItem('user');
		if(lUser) {
		const lObject = JSON.parse(lUser);
		setName(lObject.name)
        setPicture(lObject.picture)
		}
	},[])

  
	useEffect(() => {
	  if (router.isReady) {
		const { token } = router.query;
		setToken(token); // Set the token to state
	  }
	}, [router.isReady, router.query]);



	
    const fetchUser = async (authToken) => {
		console.log("using auth token", authToken)

		Cookies.set("authToken", authToken);		
		
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



	const exchangeToken = async() => {
		const res = await axios.post("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/verify_email/magic_login", {
			magic_token: token
		});
		console.log(res.data.authToken)
		await fetchUser(res.data.authToken)		
	}





	const handleSubmit = async(e) => {
    //const authToken = "exchange magic link for authtoken"
		e.preventDefault();
		await exchangeToken();

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
				<div className="flex flex-col items-center gap-8">
					<div className="flex flex-col gap-4">
						<div className="text-gray-400 text-lead-md text-center">Sign up</div>
						<div className="font-bold text-heading-3xl text-center">
							Hurray, {name}!.
							<br />			
                            Your account has been verified.				
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between items-center gap-10">
					<div className="relative">
						<div style={{maxWidth: "200px"}}>
						<Avatar url={picture} className="w-[7.5rem] h-[3.75rem] cursor-pointer" />
						</div>
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						onClick={handleSubmit}
					>
						Dashboard
					</Button>
				</div>
			</div>
		</div>
	)
}

Verified.plainLayout = true;
