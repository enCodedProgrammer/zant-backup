export default function PaymentCard({ url, number }: { url: string; number: string }) {
	return (
		<div className="flex gap-4 border-gray-100 bg-white p-5 border-[1px] min-w-[23rem]">
            <div className="text-center w-[3.75rem] h-[1.25rem]">
			    <img className="!h-full mx-auto" src={url} alt="card" />
            </div>
			<span className="flex-1 text-gray-700 text-md">{number}</span>
			<input type="radio" name="payment_card" className="radio radio-secondary" />
		</div>
	)
}
