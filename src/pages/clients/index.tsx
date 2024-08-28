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
		//fetchData();
		const zantMembers = localStorage.getItem("ZANT_MEMBERS")
		setData(JSON.parse(zantMembers || "[]"))
		const auth = Cookies.get("authToken")
		if(!auth) {
		  router.push('/auth/login');
	
		}
		setLoading(false)	  
	}, []);


	

	if (loading) 
	return 
	<div className="flex" style={{fontSize:"28px", display:"flex", alignItems:"center", justifyContent: "center", height:"90vh", fontWeight: "700"}}>
		<div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#FF156D"></stop><stop offset=".3" stop-color="#FF156D" stop-opacity=".9"></stop><stop offset=".6" stop-color="#FF156D" stop-opacity=".6"></stop><stop offset=".8" stop-color="#FF156D" stop-opacity=".3"></stop><stop offset="1" stop-color="#FF156D" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FF156D" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
      </div>
	</div>;
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
						<th className="text-heading-2xs text-primary">First Name</th>
						<th className="text-heading-2xs">Last Name</th>
						<th className="text-heading-2xs">Type</th>
						<th className="text-heading-2xs">Sessions</th>
						<th className="text-heading-2xs">Status</th>
						<th className="text-heading-2xs">Last Active</th>
					</tr>
				</thead>

				{data.length > 0 ?

				<tbody>
					{data.map((user, k) => (
						<tr key={k}>
							<td>
								<input className="checkbox rounded-none" type="checkbox" />
							</td>
	
							<td className="cursor-pointer" onClick={() => {
								router.push("/clients/profile/" + user.first_name.substring(1),
							)
							}}>
							<span className="flex gap-10 text-heading-2xs items-center">
							<img
							className="w-[5.25rem] h-[5.25rem] rounded-full"
							src={user.photo ? user.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDghoMoSPxutcJPHr3TZGVWUk33lBQltZRw&usqp=CAU"}
							alt="avatar"
							/>										
							{user.first_name}
							</span>
							</td>
							<td className="text-heading-2xs font-regular">{user ? user.last_name : "Alex Durham"}</td>
							<td className="text-heading-2xs font-regular">{user ? user.is_provider ? "Provider" : "Client" : "Provider"}</td>
							<td className="text-heading-2xs font-regular">{user ? user._session_of_user : 2}</td>
							<td className="text-heading-2xs font-regular">{user ? user.status==""? "Inactive" : user.status : "Active"}</td>
							<td className="text-heading-2xs font-regular">{user ? user.date : "5 minutes ago"}</td>
						</tr>
					))}
					
					</tbody>

					: 

					
				<tbody>
					<tr>
						<td>
							<input className="checkbox rounded-none" type="checkbox" />
						</td>

						<td className="cursor-pointer" >
						<span className="flex gap-10 text-heading-2xs items-center">
						<img
						className="w-[5.25rem] h-[5.25rem] rounded-full"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDghoMoSPxutcJPHr3TZGVWUk33lBQltZRw&usqp=CAU"
						alt="avatar"
						/>										
						Alex
						</span>
						</td>
						<td className="text-heading-2xs font-regular">Alex Durham</td>
						<td className="text-heading-2xs font-regular">Provider</td>
						<td className="text-heading-2xs font-regular">2</td>
						<td className="text-heading-2xs font-regular">Active</td>
						<td className="text-heading-2xs font-regular">25th, August</td>
					</tr>
	
				
				</tbody>
				
			}
			</table>

			<InviteStudentModal />
			<DownloadModal data={data} />
		</div>
	)
};


export default StatisticsPage;