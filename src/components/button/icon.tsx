import tw from "tailwind-styled-components"

const IconButton = tw.button`
    btn
    btn-primary
    !p-1
    ${(props) => (
        props.className?.includes("tz-xs") ? "!w-5" :
        props.className?.includes("tz-sm") ? "!w-7" :
        "!w-7"
    )}
    ${(props) => (props.className?.includes("tz-circle") ? "btn-circle" : "")}
    childImage:brightness-0 childImage:invert
`

export default IconButton
