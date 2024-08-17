import InfoIcon from "@/asset/icons/display/Info.svg"
import Button from "@/components/button"
import Image from "next/image"

export default function FundsConfirmModal({ onClickEvent }: { onClickEvent: Function }) {
    return (
        <dialog id="funds_confirm_modal" className="modal">
            <div className="p-0 modal-box min-w-[25rem]">
                <div className="px-20 py-10 flex flex-col gap-8 items-center">
                    <div className="flex flex-col items-center gap-3">
                        <Image src={InfoIcon} alt="" />
                        <h4 className="text-center text-heading-2xs">
                            Are you sure you wish to add $5 to this wallet?
                        </h4>
                        <span className="text-md text-center text-gray-700">
                            This action is permanent and cannot be reversed. Funds are paid directly from zant.
                        </span>
                    </div>
                </div>
                <div className="flex gap-5 p-7 w-full">
                    <Button className="flex-1 tz-md tz-quaternary" onClick={() => onClickEvent()}>
                        Cancel
                    </Button>
                    <Button className="flex-1 tz-md tz-primary" onClick={() => onClickEvent()}>
                        Apply
                    </Button>
                </div>
            </div>
        </dialog>
    )
}
