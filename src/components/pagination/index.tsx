import tw from "tailwind-styled-components"
import CaretLeft from "@/asset/icons/system/CaretLeft.svg"
import CaretRight from "@/asset/icons/system/CaretRight.svg"
import GenericIconButton from "../button/genericIcon"

const PageButton = tw.button`
    btn
    btn-circle
    [&.active]:btn-neutral [&.active]:text-white
    !w-[28px]
    !h-[28px]
    !p-[4px]
    !text-xs
    font-medium
    !leading-none
`

const Button = tw.button`
    btn
    !w-auto
    !h-auto
    !p-0
    !border-none
`

export default function Pagination() {
	return (
		<div className="gap-6 rounded-full border-2 border-gray-50 join p-3.5">
            <GenericIconButton icon={CaretLeft} />
			<PageButton className="active">1</PageButton>
			<PageButton>2</PageButton>
			<PageButton>3</PageButton>
			<PageButton>4</PageButton>
			<PageButton>5</PageButton>
			<PageButton>6</PageButton>
			<PageButton>7</PageButton>
			<PageButton>8</PageButton>
            <GenericIconButton icon={CaretRight} />
		</div>
	)
}
