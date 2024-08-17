import tw from "tailwind-styled-components";

const LinkButton = tw.a`
    btn
    btn-link
    !p-0
    ${(props) => (
        props.className?.includes("tz-2xs") ? "!text-link-2xs" :
        props.className?.includes("tz-xs") ? "!text-link-xs" :
        props.className?.includes("tz-sm") ? "!text-link-sm" :
        props.className?.includes("tz-md") ? "!text-link-md" :
        props.className?.includes("tz-lg") ? "!text-link-lg" :
        props.className?.includes("tz-xl") ? "!text-link-xl" :
        "text-md"
    )}
    ${(props) => (
        props.className?.includes("tz-primary") ? "text-primary" :
        props.className?.includes("tz-secondary") ? "text-black" :
        props.className?.includes("tz-tertiary") ? "text-gray-500" :
        "text-primary"
    )}
`

export default LinkButton