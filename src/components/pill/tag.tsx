import tw from "tailwind-styled-components"

const Tag = tw.a<{selected?: boolean}>`
    rounded-2xl
    px-10 py-5
    ${(props) => (
        props.className?.includes("tz-md") ? "px-10 py-5 text-xl font-normal" :
        props.className?.includes("tz-sm") ? "px-5 py-3 text-heading-sm font-normal" :
        "px-10 py-5"
    )}
    ${(props) => (
        props.selected && props.className?.includes("tz-primary") ? "bg-primary text-white" :
        props.selected && props.className?.includes("tz-secondary") ? "bg-neutral text-white" :
        !props.selected ? "bg-gray-50 text-black" : "bg-gray-50 text-black"
    )}
`

export default Tag