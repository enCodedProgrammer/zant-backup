import tw from "tailwind-styled-components";

const Button = tw.button<{disabled?: boolean}>`
    btn
    ${(props) => (
        props.className?.includes("tz-sm") ? "btn-sm" :
        props.className?.includes("tz-md") ? "btn-md" :
        props.className?.includes("tz-lg") ? "btn-lg" :
        "btn-lg"
    )}
    ${(props) => (
        props.disabled ? "!border-0 !text-gray-700" : ""
    )}
    ${(props) => (props.className?.includes("tz-outline") ? "btn-outline" : "")}
    ${(props) => (
        !props.className?.includes("tz-outline") && props.className?.includes("tz-primary") ? "btn-primary text-white" :
        !props.className?.includes("tz-outline") && props.className?.includes("tz-secondary") ? "btn-secondary" :
        !props.className?.includes("tz-outline") && props.className?.includes("tz-tertiary") ? "btn-neutral text-white" :
        !props.className?.includes("tz-outline") && props.className?.includes("tz-quaternary") ? "bg-white btn-white hover:bg-white hover:border-gray-50 border-[1px] border-gray-50" : 

        props.className?.includes("tz-outline") && props.className?.includes("tz-primary") ? "btn-primary hover:!text-white border-2" :
        props.className?.includes("tz-outline") && props.className?.includes("tz-secondary") ? "btn-secondary !text-secondary hover:!text-white border-secondary border-2" :
        props.className?.includes("tz-outline") && props.className?.includes("tz-tertiary") ? "btn-neutral hover:!bg-black border-2" : ""
    )}
    rounded-none
`

export default Button;