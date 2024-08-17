import tw from "tailwind-styled-components"

const Pill = tw.button<{active?: boolean}>`
    btn
    rounded-full
    ${(props) => (
        props.active ? (
            props.className?.includes("tz-primary") ? "btn-primary !text-white" :
            props.className?.includes("tz-secondary") ? "btn-secondary" :
            "btn-primary !text-white"
        ) : (
            "btn-ghost !border-gray-100"
        )
    )}
    ${(props) => (
        props.className?.includes("tz-sm") ? "!px-3 !py-1 !text-sm font-roboto" :
        props.className?.includes("tz-md") ? "!px-8 !py-3 !text-md font-roboto" :
        props.className?.includes("tz-lg") ? "!px-8 !py-3.5 !text-lg font-roboto" :
        "!px-3 !py-1"
    )}
`
// ${(props) => (props.active && !props.disabled ? "after:content-['✖']" : "")}

export default Pill