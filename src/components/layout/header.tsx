import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import classNames from "classnames"
import { useRouter } from "next/router"
import GenericIconButton from "../button/genericIcon"
import NotificationIcon from "@/asset/icons/system/Bell.svg"
import NotificationItem from "../notification"

const IconNotification = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="black">
		<path d="M16.0007 4C13.5757 4 11.2501 4.94821 9.53548 6.63604C7.82081 8.32387 6.85752 10.6131 6.85752 13V18.379L5.78015 19.4395C5.5671 19.6493 5.42202 19.9165 5.36325 20.2075C5.30448 20.4984 5.33465 20.7999 5.44996 21.074C5.56527 21.348 5.76054 21.5823 6.01108 21.7471C6.26161 21.9119 6.55617 21.9999 6.85752 22H25.1438C25.4451 21.9999 25.7397 21.9119 25.9902 21.7471C26.2408 21.5823 26.436 21.348 26.5513 21.074C26.6666 20.7999 26.6968 20.4984 26.6381 20.2075C26.5793 19.9165 26.4342 19.6493 26.2212 19.4395L25.1438 18.379V13C25.1438 10.6131 24.1805 8.32387 22.4658 6.63604C20.7512 4.94821 18.4256 4 16.0007 4ZM16.0007 28C14.7882 28 13.6254 27.5259 12.7681 26.682C11.9107 25.8381 11.4291 24.6935 11.4291 23.5H20.5722C20.5722 24.6935 20.0906 25.8381 19.2332 26.682C18.3759 27.5259 17.2131 28 16.0007 28Z" />
	</svg>
)
export default function Header({ close = false }: { close?: boolean }) {
	const [scrolled, setScrolled] = useState(false)
	const router = useRouter()

	const [picture, setPic] = useState("")
	const storedUser = localStorage.getItem("ZANT_USER")
	
	useEffect(() => {
	if(storedUser){
	const userObject = JSON.parse(storedUser);
	setPic(userObject.picture)
	}
	}, [])

	const scrollEvent = () => {
		setScrolled(window.scrollY > 20)
	}

	useEffect(() => {
		document.addEventListener("scroll", scrollEvent)
		return () => {
			document.removeEventListener("scroll", scrollEvent)
		}
	}, [])
	return (
		<div
			className={classNames(
				"fixed top-0 right-0 z-40 min-h-[4rem] w-full flex items-center px-9 py-5 gap-7",
				{
					"bg-white shadow-md": scrolled,
					"bg-transparent": !scrolled,
				},
			)}
		>
			<GenericIconButton
				className="ml-auto inline-block h-6 w-6"
				icon={NotificationIcon}
				onClick={() => {
					const modal = document.getElementById("notification_modal") as HTMLDialogElement
					modal.showModal()
				}}
			/>
			<Link href={"/profile"} className="inline-block h-12 w-12">
				<div className="avatar">
					<div className="rounded-full">
						<img src={picture} alt="avatar" />
					</div>
				</div>
			</Link>

			<dialog id="notification_modal" className="modal">
				<div className="h-screen w-screen p-0 modal-box max-w-[100vw] max-h-[100vh]">
					<form method="dialog">
						<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
							✕
						</button>
					</form>
					<div className="flex flex-col gap-20 py-[3.75rem] px-[7.5rem]">
						<div className="flex flex-col items-center gap-5 text-center">
							<span className="text-gray-400 text-lead-md">Notification</span>
						</div>
						<div className="mx-auto flex flex-col w-[50rem]">
							<NotificationItem
								className="py-6"
								active
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on Saturday at 2pm MST
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
							<NotificationItem
								className="py-6"
								active={false}
								text={
									<>
										Jenna Johnson requested to reschedule your next session on
										Saturday at 2pm MST. Lorem ipsum sit dolor tolore lore dolor
										<br />
										reschedule your next session on Saturday at 2pm MST. Lorem
										ipsum sit dolor tolore lore dolor...
									</>
								}
								description="Today, June 18th - 5:00 pm"
							/>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	)
}
