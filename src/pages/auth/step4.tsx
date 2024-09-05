//import ConsumerAPI from "@/api/consumerAPI"
//import service from "@/api/service"
import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
//import { getLocalStorage, setLocalStorage } from "@/util"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import "react-phone-input-2/lib/style.css"
import PhoneInput from "react-phone-input-2"
import PasswordStrengthBar from "react-password-strength-bar"
import Alert from "@mui/material/Alert"
import axios, {AxiosError} from "axios"
import Cookies from "js-cookie"
import { responsiveFontSizes } from "@mui/material"
//import { ZANT_USER } from "@/const/const"
//import api from "@/api/authAPI"

export default function Step4Page() {

	
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [checkEmailMessage, setCheckEmailMessage] = useState("")    
    const [agree, setAgree] = useState(false)
    const router = useRouter()
    const [user, setUser] = useState({ name: "", picture: "", company: "" })
    const [isError, setIsError] = useState(0)

    let errorMessage = <></>
    if (isError == 1)
        errorMessage = (
            <Alert variant="filled" severity="error" className="w-full">
                Password is required.
            </Alert>
        )
    else if (isError == 2)
        errorMessage = (
            <Alert variant="filled" severity="error" className="w-full">
                Password mismatch.
            </Alert>
        )
    else if (isError == 3)
        errorMessage = (
            <Alert variant="filled" severity="error" className="w-full">
                Input a valid email address.
            </Alert>
        )
    else if (isError == 4)
        errorMessage = (
            <Alert variant="filled" severity="warning" className="w-full">
                User already exists.
            </Alert>
        )
        else if (isError == 5)
            errorMessage = (
                <Alert variant="filled" severity="warning" className="w-full">
                    Password length must be more 6 and contain a number
                </Alert>
            )
            else if (isError == 6)
                errorMessage = (
                    <Alert variant="filled" severity="error" className="w-full">
                        Account Already in use
                    </Alert>
                )       
    // else if (isError == 4)
    //  errorMessage = (
    //      <Alert variant="filled" severity="error" className="w-full">
    //          The minimum length of the password is 8 letters.
    //      </Alert>
    //  )
    useEffect(() => {
		const getLocalStorage = localStorage.getItem("user")
        const user = JSON.parse(getLocalStorage || "{}")
        setPhone(user?.phone)
        setEmail(user?.email)
        setUser(user)
    }, [])

    const handlePasswordChange = (e)=> {        
        setPassword(e.target.value)
        const integerCheck = /\d/.test(e.target.value)   
        console.log(integerCheck)     
        if(password.length > 6 && integerCheck) {
            setIsValidPassword(true)
        } else { setIsValidPassword(false)}


    }



	function base64ToBlob(base64, mime) {
		const byteCharacters = atob(base64.split(',')[1]);
		const byteArrays: Uint8Array[] = [];

	
		for (let offset = 0; offset < byteCharacters.length; offset += 512) {
			const slice = byteCharacters.slice(offset, offset + 512);
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
	
		return new Blob(byteArrays, { type: mime });
	}


	


    const fetch = async () => {
    
    const formData = new FormData();
    let blob;
    if(user?.picture){
	const mime = user.picture.split(';')[0].split(':')[1];
	blob = base64ToBlob(user.picture, mime);
    formData.append('Paterner_img', blob, 'image.jpg');
    }

	formData.append("email", email)
	formData.append("password", password)
	formData.append("name", user.name)

    try {

	const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/verify_email/signup', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

    if (response.data.Message) {
		//Cookies.set("authToken", response.data.authToken)
        setCheckEmailMessage(response.data.Message)
        //fetchUser(response.data.authToken);
       //router.push("/profile")
       //setIsError(4)
    }
 } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError?.response?.status == 403) {    
        setIsError(6)
    }
        //console.log("the error", response)
        //setIsError(4)
        //return response
    }
 } 

    const signUp = async () => {
        try {
            let emailInput = document.getElementById("email") as HTMLInputElement
            if (!emailInput?.validity?.valid) {
                setIsError(3)
                return
                // email is valid
            }
            user["phone"] = phone
            user["email"] = email
            user["password"] = password
            // need UI work
            if (password == "") {
                setIsError(1)
                return
            }
            if(!isValidPassword){
                setIsError(5)
                return
            }
            if (password != confirmPassword) {
                setIsError(2)
                return
            }
            // if (password.length <= 8) {
            //  setIsError(4)
            //  return
            // }
            user["password"] = password
            localStorage.setItem("ZANT_USER", JSON.stringify(user));
            fetch()
            // router.push("step3")
        } catch (error) {
            console.log("the error", error)
        }
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Link href={"/auth/login"}>
                <button className="absolute left-10 top-16 btn !w-auto !h-auto !p-0 !border-none">
                    <Image className="w-9 h-9" src={CaretLeftIcon} alt="close" />
                </button>
            </Link>
            <header className="py-12 flex justify-center">
                <Logo className="w-[7.5rem] h-10" />
            </header>

            {checkEmailMessage !== "" ?
            <div className="flex-1 flex flex-col items-center justify-between px-[7.5rem] py-12 self-stretch grow gap-20">
                <div className="text-heading-3xl font-bold text-center">
                    {checkEmailMessage}
                </div>
            </div>
            :
            <div className="flex-1 flex flex-col items-center justify-between px-[7.5rem] py-12 self-stretch grow gap-20">
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-lead-md text-gray-400">Sign up</div>
                    <div className="text-heading-3xl font-bold text-center">
                        Thanks, {user?.name }. We just need a few
                        <br />
                        more details from you.
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-6">
                            <PhoneInput
                                country={"us"}
                                value={phone}
                                inputClass="input input-lg input-bordered rounded-none w-[26rem]"
                                buttonClass="input"
                                inputStyle={{
                                    height: "100%",
                                    width: "26rem",
                                    border: "1px solid #45ebfa",
                                    borderRadius: "0px",
                                }}
                                containerStyle={{
                                    width: "auto",
                                }}
                                buttonStyle={{
                                    height: "100%",
                                    border: "1px solid #45ebfa",
                                }}
                                onChange={(phone) => setPhone(phone)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-lg input-bordered rounded-none w-[26rem]"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                            />
                        </div>
                        <div className="flex gap-6">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-lg input-bordered rounded-none w-[26rem]"
                                onChange={(e) => handlePasswordChange(e)}
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-lg input-bordered rounded-none w-[26rem]"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <PasswordStrengthBar password={password} />
                        </div>
                        <div className="flex">{errorMessage}</div>
                        <div className="form-control mt-2">
                            <label className="label cursor-pointer gap-2 justify-start">
                                <input
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="checkbox checkbox-sm checkbox-secondary rounded-full [--chkfg:white]"
                                />
                                <span className="label-text text-md">
                                    I certify that I am 18 years of age or older, and I agree to the{" "}
                                    <Link href={""} className="text-link-md underline">
                                        User Agreement
                                    </Link>{" "}
                                    and{" "}
                                    <Link href={""} className="text-link-md underline">
                                        Privacy Policy
                                    </Link>
                                </span>
                            </label>
                        </div>
                    </div>
                    <Button
                        className="tz-lg tz-secondary self-center !w-[15rem]"
                        disabled={!phone || !email || !agree}
                        onClick={() => {
                            signUp()
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>
            }
        </div>
    )
}
Step4Page.plainLayout = true