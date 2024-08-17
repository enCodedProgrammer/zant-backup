import GenericIconButton from "@/components/button/genericIcon"
import SearchInput from "@/components/input/search"
import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Pill from "@/components/pill"
import { useRouter } from "next/router"

export default function InvoicePage() {
    const router = useRouter()

	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-24 z-50 pl-8">
				<SearchInput />
			</div>
			<div className="relative flex flex-col items-center justify-center gap-5 pt-5 pb-20">
				<GenericIconButton
					className="absolute top-2 left-8 text-primary"
					icon={CaretLeftIcon}
					size="0.8rem"
                    onClick={() => router.push("/profile")}
				>
					Wallet
				</GenericIconButton>

				<span className="font-medium text-display-lg text-primary">$50</span>
				<div className="flex flex-col items-center">
					<span className="font-medium text-heading-2xl">To Jenna Johnson</span>
					<span className="text-xl text-gray-700">18 Jan, 2023 - 5:00 pm</span>
				</div>
			</div>

			<div className="flex gap-7 px-8 py-10 bg-gray-25">
				<div className="flex flex-1 flex-col gap-20 rounded-2xl border-2 bg-white p-[3.75rem] borer-gray-50">
					<div className="flex flex-col gap-4">
						<div className="flex gap-3">
							<span className="font-medium text-heading-md">Invoice</span>
							<Pill className="tz-secondary tz-md" disabled>
								Fulfilled
							</Pill>
						</div>
						<div className="flex flex-col">
							<span className="text-heading-2xs font-regular">#136780</span>
							<span className="text-heading-2xs font-regular">
								Charged on:&nbsp;&nbsp;Saturday, January 01, 2023
							</span>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-7">
						<div className="flex flex-col gap-[4.5rem]">
							<div className="flex flex-col gap-5">
								<span className="font-normal text-heading-2xs">Billed To:</span>
								<span className="text-heading-2xs font-regular">Jokob Petal</span>
							</div>
							<div className="flex flex-col gap-5">
								<span className="font-normal text-heading-2xs">Issued By:</span>
								<span className="text-heading-2xs font-regular">
									Jenna Johnson
									<br />
									1765 East Powers Drive
									<br />
									Arvada, Colorado
									<br />
									80005
								</span>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-col gap-5">
								<span className="font-normal text-heading-2xs">Charges</span>
								<div className="flex justify-between">
									<span className="text-heading-2xs font-regular">
										Card Number
									</span>
									<span className="flex text-heading-2xs font-regular">
										**** **** **** 5901
										<img
											className="h-6 w-10"
											src="/assets/img/payment/debit.png"
											alt="card"
										/>
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-heading-2xs font-regular">Subtotal</span>
									<span className="flex text-heading-2xs font-regular">
										$150.00
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-heading-2xs font-regular">Discount</span>
									<span className="flex text-heading-2xs font-regular">--</span>
								</div>
								<div className="flex justify-between">
									<span className="text-heading-2xs font-regular">
										Sales Tax (4.89%)
									</span>
									<span className="flex text-heading-2xs font-regular">
										$8.00
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-heading-2xs font-regular">Due</span>
									<span className="flex text-heading-2xs font-regular">
										$0.00
									</span>
								</div>
							</div>

                            <hr className="my-14" />

                            <div className="flex justify-between text-heading-2xs">
                                <span className="font-normal">Paid</span>
                                <span className="font-normal">$158.00</span>
                            </div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-12 rounded-2xl border-2 bg-white p-12 w-[31rem] borer-gray-50">
					<Button className="tz-md tz-primary">Request Refund</Button>
					<Button className="tz-md tz-quaternary">View in Plaid</Button>
					<Button className="tz-md tz-quaternary">Download Receipt</Button>
					<Button className="tz-md tz-quaternary">View Jenna{"'"}s Profile</Button>
				</div>
			</div>
		</div>
	)
}
