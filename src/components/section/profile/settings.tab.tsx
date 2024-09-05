import DownloadIcon from "@/asset/icons/system/Download.svg";
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg";
import Avatar from "@/components/avatar";
import GenericIconButton from "@/components/button/genericIcon";
import LinkButton from "@/components/button/link";
import Image from "next/image";
import AddContributorModal from "./modal/addContributor";
import AddDocumentModal from "./modal/addDocument.modal";
import { useState, useEffect } from "react";
import axios from "axios";

interface Contributor {
  first_name: string;
  last_name: string;
  user_permission: string;
  title: string;
  email_address: string;
  phone: string;
  profile_picture?: {
    url: string;
  };
  
}

interface Pdfs {
   url: string;
   name: string;
   type: string;
}



interface ProfileSettingsTabProps {
  userData: any;
  setData: any;
  auth: any;
}

const ProfileSettingsTab: React.FC<ProfileSettingsTabProps> = ({ userData, setData, auth }) => {
  console.log("settings tab", userData);
  // let contributors: Contributor[] = [];

  const [showModal, setShowModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [pdfName, setPdfName] = useState<string>("");

  const [pdfs, setPd] = useState<Pdfs[]>([]);
  const [contributors, setContribututors] = useState<Contributor[]>([]);

		
  useEffect(() => {
    if (userData) {
      setPd(userData?.user_doc);
      setContribututors(userData._partnercontributor_of_partneruser)
      }	
  },[userData])



  const handleOpenModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

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
    <div className="flex flex-col gap-[3.75rem] px-8 py-10 modal-relative">
      <div className="flex flex-col gap-8">
        <span className="text-heading-sm">Current Contract Details</span>
        <div className="flex flex-col p-7 gap-7 bg-white border-2 border-gray-50 rounded-2xl">
          <span className="text-xl font-medium">Details</span>
          <div className="grid grid-cols-3 gap-7">
            <div className="flex flex-col px-6 py-3 bg-white border border-gray-25">
              <span className="text-xs text-gray-700 font-roboto">
                Total Individuals
              </span>
              <span className="text-xl font-roboto">{userData.partner_statistics ? userData.partner_statistics.individual_impacted : 0}</span>
            </div>
            <div className="flex flex-col px-6 py-3 bg-white border border-gray-25">
              <span className="text-xs text-gray-700 font-roboto">
                Price Per Seat
              </span>
              <span className="text-xl font-roboto">{userData.partner_statistics ? userData.partner_statistics.price_per_seat : 0}</span>
            </div>
            <div className="flex flex-col px-6 py-3 bg-white border border-gray-25">
              <span className="text-xs text-gray-700 font-roboto">Total Cost</span>
              <span className="text-xl font-roboto">{userData.partner_statistics ? userData.partner_statistics.total_spent : 0}</span>
            </div>
          </div>
        </div>
      </div>



      {contributors.length > 0 ? contributors.map((contributor, index) => (
      <div key={index} className="flex flex-col gap-8">
          <div className="flex gap-4 justify-between items-center">
            <span className="text-heading-sm">Contributors</span>

            <LinkButton
              className="tz-md tz-primary"
              onClick={handleOpenModal}
            >
              Add another contributor
              <Image className="w-5 h-5 filter-primary" src={PlusCircleIcon} alt="plus" />
            </LinkButton>
          </div>

        <div className="flex flex-col bg-white rounded-2xl border-2 border-gray-50 p-9 gap-9"
        >
          <div className="flex gap-5 items-center justify-between">
            <div className="text-relative">
            <Avatar className="!w-28 !h-28" url={contributor?.profile_picture?.url} />
            <div className="text-heading-lg text-absolute">{contributor?.first_name[0].toUpperCase() + " " + contributor?.last_name[0].toUpperCase()}</div>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-1">
              <span className="text-heading-lg">{`${contributor?.first_name} ${contributor?.last_name}`}</span>
              <span className="text-xl">{contributor?.user_permission}</span>
            </div>
          </div>

          <div>
            <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
              Permissions
            </label>
            <input className="w-full input rounded-none" value={contributor?.user_permission} readOnly />
          </div>

          <span className="text-xl font-medium">Details</span>

          <div className="grid grid-cols-2 gap-7">
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                First Name
              </label>
              <input className="w-full input rounded-none" value={contributor?.first_name} readOnly />
            </div>
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Last Name
              </label>
              <input className="w-full input rounded-none" value={contributor?.last_name} readOnly />
            </div>

            <div className="col-span-2">
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Title
              </label>
              <input className="w-full input rounded-none" value={contributor?.title} readOnly />
            </div>

            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Email
              </label>
              <input className="w-full input rounded-none" value={contributor?.email_address} readOnly />
            </div>
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Phone Number
              </label>
              <input className="w-full input rounded-none" value={contributor?.phone} readOnly />
            </div>
          </div>

          <div>
            <LinkButton className="tz-md tz-primary">
              Send reset password link
            </LinkButton>
          </div>
        </div>
      </div>
      ))
      
      :
        
      <div className="flex flex-col gap-8">
          <div className="flex gap-4 justify-between items-center">
            <span className="text-heading-sm">Contributors</span>

            <LinkButton
              className="tz-md tz-primary"
              onClick={handleOpenModal}
            >
              Update your contributors
              <Image className="w-5 h-5 filter-primary" src={PlusCircleIcon} alt="plus" />
            </LinkButton>
          </div>

        <div className="flex flex-col bg-white rounded-2xl border-2 border-gray-50 p-9 gap-9">
          <div className="flex gap-5 items-center justify-between">
            <Avatar className="!w-28 !h-28" url="/assets/img/ad.png" />
            <div className="flex-1 flex flex-col justify-center gap-1">
              <span className="text-heading-lg">Alex Darcia</span>
              <span className="text-xl">Editor</span>
            </div>
          </div>

          <div>
            <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
              Permissions
            </label>
            <input className="w-full input rounded-none" value="Editor" readOnly />
          </div>

          <span className="text-xl font-medium">Details</span>

          <div className="grid grid-cols-2 gap-7">
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                First Name
              </label>
              <input className="w-full input rounded-none" value="Alex" readOnly />
            </div>
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Last Name
              </label>
              <input className="w-full input rounded-none" value="Darcia" readOnly />
            </div>

            <div className="col-span-2">
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Title
              </label>
              <input className="w-full input rounded-none" value="Administrator" readOnly />
            </div>

            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Email
              </label>
              <input className="w-full input rounded-none" value="Alexdee@gmail.com" readOnly />
            </div>
            <div>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                Phone Number
              </label>
              <input className="w-full input rounded-none" value="+123487890" readOnly />
            </div>
          </div>

          <div>
            <LinkButton className="tz-md tz-primary">
              Send reset password link
            </LinkButton>
          </div>
        </div>
        </div>
      }

    

      {pdfs?.length>0 ?
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

                :

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
        }




        <div className="flex flex-col gap-8">     
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











      {showModal && (
        <div id="add_contributor_modal" className="modal-contributors">
          <AddContributorModal data={userData} setData={setData} auth={auth} showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}

      {showDocumentModal && (
        <div id="add_contributor_modal" className="modal-contributors">
          <AddDocumentModal data={userData} setData={setData} auth={auth} showDocumentModal={showDocumentModal} setShowDocumentModal={setShowDocumentModal} />
        </div>
      )}
    </div>
  );
};

export default ProfileSettingsTab
