import Button from "../button";

export default function ClientSessionCard() {
    return (
        <div className="rounded-2xl bg-gray-50 flex flex-col px-10 py-8 gap-8">
            <div className="flex flex-col">
                <span className="text-lead-2xl">Thursday</span>
                <span className="text-display-xl">Jun 18</span>
                <div className="flex gap-3 items-center">
                    <div className="badge badge-secondary badge-xs" />
                    <span className="text-md">9:00 - 10:00 am</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Button className="tz-md tz-primary">Reschedule</Button>
                <Button className="tz-md tz-tertiary">Send a reminder</Button>
            </div>
        </div>
    )
}