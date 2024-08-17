import tw from "tailwind-styled-components";

const StatusButton = tw.button<{status: 'default' | 'disabled' | 'pending' | 'completed'}>`
    btn
    rounded-3xl
    text-xs
    !w-72
    ${(props) => (
        props.status == "disabled" ? "btn-disabled !bg-white !border-gray-600 !text-gray-600" :
        props.status == "pending" ? "btn-disabled border-0 !text-[#979797] !bg-[#D9D9D9] !font-bold italic" :
        props.status == "completed" ? "btn-disabled !bg-white border-0 !font-bold !italic" :
        "btn-outline btn-primary hover:!text-white"
    )}
`

export default StatusButton