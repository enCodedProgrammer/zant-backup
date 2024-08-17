import tw from "tailwind-styled-components"
import Button from ".";

const LoginButton = tw.button`
    btn
    rounded-none
    !font-normal
    relative
    justify-stretch
    ${(props) => (
        props.className?.includes("tz-md") ? "!text-md !py-3" :
        props.className?.includes("tz-lg") ? "!text-xl !p-6" :
        "!text-md !py-3"
    )}
    w-72
    [&>*]:flex-1
    [&>img]:flex-none
`

export default LoginButton;