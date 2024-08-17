import tw from "tailwind-styled-components"

const Tab = tw.a<{ active: boolean }>`
    px-4 py-5
    border-b-[6px]
    cursor-pointer
    text-center
    ${(props) =>
		props.active ? "!border-b-primary" : "border-b-transparent hover:border-b-gray-300"}
    text-heading-2xs font-normal
`

export default Tab