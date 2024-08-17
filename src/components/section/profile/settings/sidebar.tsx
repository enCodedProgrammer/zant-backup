import Avatar from "@/components/avatar"
import Image from "next/image"
import UserIcon from "@/asset/icons/display/UserCircle.svg"
import BellIcon from "@/asset/icons/display/Bell.svg"
import TagIcon from "@/asset/icons/display/Tag.svg"
import UsersIcon from "@/asset/icons/display/Users.svg"
import QuestionIcon from "@/asset/icons/display/Question.svg"
import HeadsetIcon from "@/asset/icons/display/Headset.svg"
import SignOutIcon from "@/asset/icons/display/SignOut.svg"
import Button from "@/components/button"
import { useRouter } from "next/router"

export default function SidebarSettingsPanel({ setTab }: { setTab: Function }) {
	const router = useRouter()

	return (
		<div>
			<div className="flex-col inline-flex sticky top-32 overflow-hidden rounded-2xl border-2 border-gray-50 bg-white">
				<div
					className="px-12 py-5 flex gap-8 items-center cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("main")}
				>
					<Avatar url="/assets/img/avatar.png" className="!w-14 !h-14" />
					<div>
						<div className="text-sm text-gray-700">student</div>
						<div className="text-lg font-medium">Jakob@csu.edu</div>
					</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("user")}
				>
					<Image className="w-9 h-9" src={UserIcon} alt="user" />
					<div className="text-sm font-normal">User Information</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("bell")}
				>
					<Image className="w-9 h-9" src={BellIcon} alt="bell" />
					<div className="text-sm font-normal">Notification Preferences</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("tag")}
				>
					<Image className="w-9 h-9" src={TagIcon} alt="tag" />
					<div className="text-sm font-normal">My Mood</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("users")}
				>
					<Image className="w-9 h-9" src={UsersIcon} alt="users" />
					<div className="text-sm font-normal">Invite a Friend</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("question")}
				>
					<Image className="w-9 h-9" src={QuestionIcon} alt="question" />
					<div className="text-sm font-normal">Help</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => setTab("headset")}
				>
					<Image className="w-9 h-9" src={HeadsetIcon} alt="headset" />
					<div className="text-sm font-normal">Contact Support</div>
				</div>
				<div
					className="px-12 py-5 flex gap-8 items-center border-t-[1px] border-t-gray-50 cursor-pointer hover:bg-gray-100"
					onClick={() => {
						const modal = document.getElementById("signout_modal") as HTMLDialogElement
						modal.showModal()
					}}
				>
					<Image className="w-9 h-9" src={SignOutIcon} alt="signout" />
					<div className="text-sm font-normal">Sign Out</div>
				</div>

				<dialog id="signout_modal" className="modal">
					<div className="modal-box w-72 p-0">
						<form method="dialog">
							<button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-9">
								✕
							</button>
						</form>
						<div className="flex flex-col px-7 py-12 gap-8">
							<div className="flex flex-col gap-2">
								<h4 className="text-xl font-medium text-center">Sign Out</h4>
								<p className="text-para-sm text-gray-700 text-center">
									Are you sure you want to log out of your account?
								</p>
							</div>
							<Button
								className="tz-md tz-primary !w-full"
								onClick={() => {
									router.push("/")
								}}
							>
								Yes
							</Button>
						</div>
					</div>
				</dialog>
			</div>
		</div>
	)
}
