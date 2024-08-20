import DownloadIcon from "@/asset/icons/system/Download.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import Button from "@/components/button"
import StatCard from "@/components/card/stat"
import SearchInput from "@/components/input/search"
import Pill from "@/components/pill"
import InviteStudentModal from "@/components/section/invite/modal"
import DownloadModal from "@/components/section/members/download.modal"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import axios from "axios"

interface clientProps {
	data: any;

}




	const StatisticsPage: React.FC<clientProps> = ({}) => {
	const router = useRouter()
	const [users, setUsers] = useState<
			{
				url: string
				firstName: string
				lastName: string
				type: string
				sessions: string
				status: string
				date: string
				rating: string
			}[]
		>([
			{
				url: "/assets/img/avatar/avatar_user1.png",
				firstName: "Adam",
				lastName: "Patel",
				type: "Student",
				sessions: "10",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user2.png",
				firstName: "Annie",
				lastName: "Vetrovs",
				type: "Affiliated",
				sessions: "3",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user3.png",
				firstName: "Bonnie",
				lastName: "Carder",
				type: "Regular",
				sessions: "122",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user4.png",
				firstName: "Buck",
				lastName: "Siphron",
				type: "Student",
				sessions: "7",
				status: "Inactive",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user5.png",
				firstName: "Charlie",
				lastName: "Dorwart",
				type: "Student",
				sessions: "4",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user6.png",
				firstName: "Chelsea",
				lastName: "Calzoni",
				type: "Affiliated",
				sessions: "40",
				status: "Inactive",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user1.png",
				firstName: "Darrel",
				lastName: "Gouse",
				type: "Student",
				sessions: "192",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
			{
				url: "/assets/img/avatar/avatar_user2.png",
				firstName: "Dotty",
				lastName: "Herwitz",
				type: "Regular",
				sessions: "32",
				status: "Active",
				date: "Jan 01, 2023",
				rating: "4.3 stars",
			},
		])
	
	
		
		const [data, setData] = useState<any[]>([]);
		const [loading, setLoading] = useState(true)



	const fetchData = async () => {
		try {
		  const authToken = Cookies.get("authToken");
	
		  if (!authToken) {
			throw new Error("No auth token found, please login.");
		  }
	
		  const response = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/allmember", {
			headers: {
			  Authorization: `Bearer ${authToken}`,
			},
		  });
	
		  setData(response.data.items);
		  console.log("userData", response.data);
		} catch (err) {
		  console.error("Error fetching data:", err);
		} finally {
		  setLoading(false);
		}
	  };
	
	  useEffect(() => {
		fetchData();
	  }, []);


	

	if (loading) return <div style={{fontSize:"28px", display:"flex", alignItems:"center", justifyContent: "center", height:"90vh", fontWeight: "700"}}>Loading...</div>;
	if (!data) {
		router.push('/auth/login');
		return <div>Error loading data</div>;
	}		
	
		

	return (
		<div className="flex flex-col mt-24">
			<div className="fixed top-5 right-40 left-56 z-50 pl-8">
				<div className="flex gap-10 items-center">
					<h1 className="text-heading-2xl">Clients</h1>
					<div className="flex gap-3 items-center">
						<span className="text-sm font-roboto">Filter by:</span>
						<Pill className="tz-sm tz-primary">Date range</Pill>
						<Pill className="tz-sm tz-primary">Type</Pill>
						<Pill className="tz-sm tz-primary">Sessions</Pill>
						<Pill className="tz-sm tz-primary">Flagged</Pill>
						<Pill className="tz-sm tz-primary">Status</Pill>
					</div>
				</div>
			</div>

			<div className="px-8 pt-2 pb-8 flex flex-col gap-8">
				<div className="grid grid-cols-3 gap-7">
					<StatCard title="Total Invites" value="5000" additionalText="+ 5%" />
					<StatCard title="Total Active Members" value="590" additionalText="+ 2%" />
					<StatCard title="Total Funded Seats" value="600" additionalText="+ 5%" />
				</div>
				<div className="flex gap-7">
					<SearchInput
						fullHeight
						className="flex-1"
						placeholder="Search"
						white
					/>
					<Button
						className="tz-md tz-primary !w-56"
						onClick={() => {
							const modal = document.getElementById(
								"invite_student_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}
					>
						<Image
							className="w-6 h-6 filter-tertiary"
							src={PlusCircleIcon}
							alt="invite"
						/>
						Invite a new user
					</Button>
					<Button
						className="tz-md tz-tertiary !w-56"
						onClick={() => {
							const modal = document.getElementById(
								"download_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}
					>
						<Image
							className="w-6 h-6 filter-tertiary"
							src={DownloadIcon}
							alt="invite"
						/>
						Export
					</Button>
				</div>
			</div>

			<table className="table-auto table-zebra w-full">
				<thead>
					<tr>
						<th>
							<input className="checkbox rounded-none" type="checkbox" />
						</th>
						<th className="text-heading-2xs text-primary"></th>
						<th className="text-heading-2xs text-primary">First Name</th>
						<th className="text-heading-2xs">Last Name</th>
						<th className="text-heading-2xs">Type</th>
						<th className="text-heading-2xs">Sessions</th>
						<th className="text-heading-2xs">Status</th>
						<th className="text-heading-2xs">Last Active</th>
					</tr>
				</thead>
				<tbody>
					{data.map((user, k) => (
						<tr key={k}>
							<td>
								<input className="checkbox rounded-none" type="checkbox" />
							</td>
							<td
								className="cursor-pointer"
								onClick={() => {
									router.push(
										"/clients/profile/" + user.first_name.substring(1),
									)
								}}
							>

								<img
										className="w-[5.25rem] h-[5.25rem]"
										src={user.photo ? user.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDghoMoSPxutcJPHr3TZGVWUk33lBQltZRw&usqp=CAU"}
										alt="avatar"
									/>								
							</td>
							<td className="text-heading-2xs font-regular cursor-pointer" onClick={() => {
									router.push(
										"/clients/profile/" + user.first_name.substring(1),
									)
									}}>
							<span className="flex gap-10 text-heading-2xs items-center">{user.first_name}
							</span>
							</td>
							<td className="text-heading-2xs font-regular">{user.last_name}</td>
							<td className="text-heading-2xs font-regular">{user.is_provider ? "Provider" : "Client"}</td>
							<td className="text-heading-2xs font-regular">{user._session_of_user}</td>
							<td className="text-heading-2xs font-regular">{user.status==""? "Inactive" : user.status}</td>
							<td className="text-heading-2xs font-regular">{user.date}</td>
						</tr>
					))}
				</tbody>
			</table>

			<InviteStudentModal />
			<DownloadModal onClickEvent={() => {
				const modal = document.getElementById(
					"download_modal",
				) as HTMLDialogElement
				modal.close("close")
			}} />
		</div>
	)
};


export default StatisticsPage;