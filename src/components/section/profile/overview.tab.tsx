import CallIcon from "@/asset/icons/system/Call.svg"
import DownloadIcon from "@/asset/icons/system/Download.svg"
import EnvelopeIcon from "@/asset/icons/system/Envelope.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import Avatar from "@/components/avatar"
import Button from "@/components/button"
import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import StatCard from "@/components/card/stat"
import { colors } from "@/types/color"
import { useEffect, useState } from "react"
import axios from "axios"
import {
	BarController,
	BarElement, CategoryScale, ChartData, Chart as ChartJS,
	LineController,
	LineElement, LinearScale,
	PointElement, Title,
	Tooltip
} from "chart.js"
import Image from "next/image"
import InviteStudentModal from "../invite/modal"
import AddDocumentModal from "./modal/addDocument.modal"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarController, LineController, BarElement, Title, Tooltip)

const activityData: ChartData<"bar", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [
		{
			label: "Clients",
			data: [100, 250, 420, 620, 430, 180, 150],
			backgroundColor: colors["primary"],
		},
	],
}


	interface Pd {
		url: string;
		name: string;
		type: string;
	}

	const ProfileOverviewTab = ({ userData, setData, auth }) => {

	

		const [showModal, setShowModal] = useState(false);
		const [showDocumentModal, setShowDocumentModal] = useState(false);
		const [pdfs, setPd] = useState<Pd[]>([]);

		
		useEffect(() => {
			if (userData) {
				setPd(userData?.pdf_files);
			  }	
		},[userData])


		const handleOpenDocumentModal = () => {
			setShowDocumentModal(true);
			console.log(showDocumentModal);
		  };


		const handleDownload = async(url: string, name: string) => {
			try {
			  const response = await axios.get(url, {
				responseType: 'blob',
			  });
		
			  const blob = new Blob([response.data], { type: 'application/pdf' });
			  const downloadUrl = window.URL.createObjectURL(blob);
		
			  const link = document.createElement('a');
			  link.href = downloadUrl;
			  link.download = name;
			  document.body.appendChild(link);
		
			  link.click();
		
			  document.body.removeChild(link);
			  window.URL.revokeObjectURL(downloadUrl);
			} catch (error) {
			  console.error('Error downloading the file:', error);
			}
			
		  };
		
		
	return (
		<div className="bg-gray-25">
			<div className="grid grid-cols-3 px-8 py-10 gap-7">
				<div className=" col-span-2 flex flex-col gap-12">
					<div className="flex flex-col gap-5">
						<span className="text-heading-sm">Contract Overview</span>
						<div className="grid grid-cols-3 gap-7">
							<StatCard title="Invited Seats" value={userData?.partner_statistics ? userData?.partner_statistics.invited_seat : 0} additionalText="+ 5%" />
							<StatCard title="Price per seat" value={userData?.partner_statistics ? userData?.partner_statistics.price_per_seat : 0} additionalText="+ 2%" />
							<StatCard title="Total Spent" value={userData?.partner_statistics ? userData?.partner_statistics.total_spent : 0} additionalText="+ 5%" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<span className="text-heading-sm">Statistics Overview</span>
						<div className="grid grid-cols-3 gap-7">
							<StatCard title="Active Members" value="2,400" additionalText="+ 5%" />
							<StatCard title="Inactive Memebers" value="197" additionalText="+ 2%" />
							<StatCard title="Total session" value={userData?.partner_statistics ? userData?.partner_statistics.total_session : 0} additionalText="+ 5%" />
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5">
				<span className="text-heading-sm">Main Contact</span>
				{userData?._partnercontributor_of_partneruser[0] && ( // Check if the first contributor exists
					<div className="flex flex-col bg-white rounded-2xl border-2 border-gray-50 p-9 gap-9">
					<div className="flex gap-5 items-center justify-between">
						<div className="text-relative">
						<Avatar className="!w-28 !h-28" url={userData?._partnercontributor_of_partneruser ? userData?._partnercontributor_of_partneruser[0].profile_picture?.url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMWjLWtAaly3VilsK2TfnT4iiX2UehBwpMQ&s"} />
						<div className="text-heading-lg text-absolute">{userData?._partnercontributor_of_partneruser ? userData._partnercontributor_of_partneruser[0]?.first_name[0].toUpperCase() + " " + userData._partnercontributor_of_partneruser[0]?.last_name[0].toUpperCase() : "AD"}</div>
						</div>
						<div className="flex-1 flex flex-col justify-center gap-1">
						<span className="text-heading-2xs">
							{userData?._partnercontributor_of_partneruser ? userData._partnercontributor_of_partneruser[0].first_name + " " + userData._partnercontributor_of_partneruser[0].last_name : "Alex Durham"}
						</span>
						<span className="text-xl">{userData?._partnercontributor_of_partneruser ? userData._partnercontributor_of_partneruser[0].title : "Human Resources"}</span>
						</div>
					</div>
					<div className="flex flex-col gap-5">
						<span className="text-heading-2xs font-regular">Contact Information</span>
						<span className="text-xl flex gap-3">
						<Image className="w-8 h-8 filter-gray-400" src={EnvelopeIcon} alt="envelope" />
						{userData?._partnercontributor_of_partneruser ? userData._partnercontributor_of_partneruser[0].email_address : "Alexd@gmail.com"}
						</span>
						<span className="text-xl flex gap-3">
						<Image className="w-8 h-8 filter-gray-400" src={CallIcon} alt="call" />
						{userData?._partnercontributor_of_partneruser ? userData._partnercontributor_of_partneruser[0].phone :  "+172 274 233 333"}
						</span>
					</div>
					</div>
				)}
				</div>

			</div>
			<div className="rounded-2xl flex items-center justify-center overflow-hidden relative h-[25.5rem] m-20">
				<img
					className="absolute center w-full self-stretch object-cover"
					alt="back"
					src="/assets/img/card_back.png"
				/>
				<div className="flex flex-col justify-center items-center z-10 text-white gap-5">
					<div className="flex flex-col gap-3 items-center">
						<span className="mt-3 text-heading-2xl text-center">
							Invite members now
						</span>
					</div>
					<span className="mt-7 text-xl text-center">
						You will have access to statistics, clients, and member information once you add
						<br />
						members to your account.
					</span>
					<Button
						className="tz-md tz-tertiary"
						onClick={() => {
							const modal = document.getElementById(
								"invite_student_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}
					>
						Invite members now
					</Button>
				</div>
			</div>


			{pdfs?.length>0 ?
				<div className="flex flex-col gap-8 w-full px-8 py-10">     
                <div className="flex gap-4 justify-between items-center">
                <span className="text-heading-sm">Documents</span>
                <LinkButton
                  className="tz-md tz-primary"
                  onClick={handleOpenDocumentModal}
                >
                  Add another document
                  <Image className="w-5 h-5 filter-primary" src={PlusCircleIcon} alt="plus" />
                </LinkButton>
                </div>
				</div>

                :
				<div className="flex flex-col gap-8 w-full px-8 py-10">     
                <div className="flex gap-4 justify-between items-center">
                <span className="text-heading-sm">Documents</span>
                <LinkButton
                  className="tz-md tz-primary"
                  onClick={handleOpenDocumentModal}
                >
                  Update your documents
                  <Image className="w-5 h-5 filter-primary" src={PlusCircleIcon} alt="plus" />
                </LinkButton>
                </div> 
				</div>  
        }




        <div className="flex flex-col gap-8 w-full px-8 py-10">     
            <div className="flex flex-col p-7 bg-white border-2 border-gray-50 rounded-2xl">

            {pdfs?.length > 0 ? pdfs.map((pdf, index) => (

              <div key={index} className="py-5 flex gap-4 items-center">
                <img
                className="w-[3.75rem] h-[3.75rem] rounded-lg"
                src="/assets/img/pdf.png"
                alt="pdf"
                />
                <div className="w-full flex flex-col gap-1 justify-center">
                <div className="flex gap-4 justify-between items-center">
                  <span className="text-lg font-medium">{pdf?.name}</span>
                  <LinkButton onClick={(e) => {
                  e.preventDefault();                  
                  handleDownload(pdf?.url, pdf?.name);
                  }}>
                  <GenericIconButton size="1.5rem" icon={DownloadIcon} />
                  </LinkButton>
                </div>
                <span className="text-lg opacity-50">{pdf?.type}</span>
                </div>
              </div>	
                    
          ))        

  
		:

          
            <>
            <div className="py-5 flex gap-4 items-center">
              <img
              className="w-[3.75rem] h-[3.75rem] rounded-lg"
              src="/assets/img/pdf.png"
              alt="pdf"
              />
              <div className="w-full flex flex-col gap-1 justify-center">
              <div className="flex gap-4 justify-between items-center">
                <span className="text-lg font-medium">Uploaded Document</span>
                <LinkButton>
                <GenericIconButton size="1.5rem" icon={DownloadIcon} />
                </LinkButton>
              </div>
              <span className="text-lg opacity-50">PDF</span>
              </div>
            </div>	

            <div className="py-5 flex gap-4 items-center">
            <img
            className="w-[3.75rem] h-[3.75rem] rounded-lg"
            src="/assets/img/pdf.png"
            alt="pdf"
            />
            <div className="w-full flex flex-col gap-1 justify-center">
            <div className="flex gap-4 justify-between items-center">
              <span className="text-lg font-medium">Uploaded Document</span>
              <LinkButton>
              <GenericIconButton size="1.5rem" icon={DownloadIcon} />
              </LinkButton>
            </div>
            <span className="text-lg opacity-50">PDF</span>
            </div>
          </div>	
          </>	

		}
    </div>
    
    </div>




		{showDocumentModal && (
			<div id="add_contributor_modal" className="modal-contributors">
			<AddDocumentModal data={userData} setData={setData} auth={auth} showDocumentModal={showDocumentModal} setShowDocumentModal={setShowDocumentModal} />
			</div>
		)}

			<InviteStudentModal />
			
		</div>
	)
}


export default ProfileOverviewTab;
