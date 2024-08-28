import Button from "@/components/button";
import NotificationItem from "@/components/notification";
import axios, { AxiosError } from "axios";
import { notFound } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'react-toastify';


interface AddContributorModalProps {
  data: any;
  setData: any;
  auth: any;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

interface FormData {
  first_name: string;
  last_name: string;
  title: string;
  email_address: string;
  user_permission: string;
  partneruser_id: number;
  key: any;
}

interface ErrorResponse {
  message: string;
}

const AddContributorModal: React.FC<AddContributorModalProps> = ({
  data,
  setData,
  auth,
  showModal,
  setShowModal,
}) => {
  console.log("userData from modal", data);

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    title: '',
    email_address: '',
    user_permission: '',
    partneruser_id: data.id,
    key:''
  });

  const [contributorAdded, setContributorAdded] = useState<boolean>(false)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(0)

  const notifySuccess = () => toast.success(uploadStatus || "New Contributor Added", 
		{position: "bottom-left"},
		

	);

  const notifyError = () => {
		if(isError == 3){
		toast.error(uploadStatus,
		{position: "bottom-left"}
	)
  setIsLoading(false)
 } else {
	toast.error(uploadStatus || "Error Adding New Contributor",
		{position: "bottom-left"}
	);
}
}





  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let emailInput = document.getElementById("email") as HTMLInputElement
    if (!emailInput?.validity?.valid) {
        setIsError(3)
        notifyError()
        return
        // email is valid
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const dummyImage = `https://singlecolorimage.com/get/${randomColor}/300x300`;



    const formDataToSend = new FormData();
  
    for (const key in formData) {
      formDataToSend.append(key, formData[key as keyof typeof formData]);
    }
  
    formDataToSend.append("image_link", dummyImage);


    console.log(formData);
    
    try {
      const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/partnercontributor', formDataToSend);
      setUploadStatus("New Contributor Added")
      notifySuccess()
      setContributorAdded(true)
      setShowModal(!showModal)
      console.log('Response:', response.data);
      setIsLoading(false)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
			if (axiosError.response && axiosError.response?.data.message) {
			console.log("the error", axiosError)
      const errorMessage = axiosError.response.data.message as string
      setUploadStatus(errorMessage)
      setIsLoading(false)
			setIsError(axiosError.response?.status);
			notifyError();
    }
    }
    }

    const refetch = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    setData(refetch.data)
    localStorage.setItem("ZANT_USER", JSON.stringify(refetch.data));
  
  };

  return (
    <div id="add_contributor_modal" className={showModal && !contributorAdded ? 'modal-contributors' : 'modal-add-contributors-hide'}>
      {showModal && !contributorAdded && (
        <div className="p-0 modal-box max-w-[30rem]">
          <div>
            <button
              className="absolute top-5 right-6 btn btn-lg btn-circle btn-ghost"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-12 px-12 py-16 items-center">
            <span className="text-heading-2xs">Add a New Contributor</span>
            <div className="flex flex-col gap-3 w-full">
              <span className="text-xl font-normal">Contact Information</span>

              <form onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
                    First Name
                  </label>
                  <input
                    className="w-full input rounded-none form-input-margin"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
                    Last Name
                  </label>
                  <input
                    className="w-full input rounded-none form-input-margin"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
                    Title
                  </label>
                  <select
                    className="w-full input select border-gray-200 rounded-none form-input-margin"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Title
                    </option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Sales Representative">Sales Representative</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
                    Email
                  </label>
                  <input
                    className="w-full input rounded-none form-input-margin"
                    name="email_address"
                    type="email"
                    id="email"
                    value={formData.email_address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb- ml-2 block text-lg text-gray-700 font-regular label-margin">
                    Permission Level
                  </label>
                  <select
                    className="w-full input select border-gray-200 rounded-none form-input-margin"
                    name="user_permission"
                    value={formData.user_permission}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Permission Level
                    </option>
                    <option value="Administrator">Administrator</option>
                    <option value="Editor">Editor</option>
                  </select>
                </div>

                <div className="hidden-element">
                  <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
                    User ID
                  </label>
                  <input
                    className="w-full input rounded-none"
                    name="partneruser_id"
                    value={formData.partneruser_id}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <div className="w-full text-center pt-8">
                  {isLoading ?
                  <Button type="submit" className="tz-md tz-primary !w-48" disabled>
                    Invite contributor
                  </Button>
                  :
                  <Button type="submit" className="tz-md tz-primary !w-48">
                    Invite contributor
                  </Button>
                  }

                </div>

                {uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      )}

      {isLoading && 
      <div className="absolute">
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#FF156D"></stop><stop offset=".3" stop-color="#FF156D" stop-opacity=".9"></stop><stop offset=".6" stop-color="#FF156D" stop-opacity=".6"></stop><stop offset=".8" stop-color="#FF156D" stop-opacity=".3"></stop><stop offset="1" stop-color="#FF156D" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FF156D" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
      </div>
      }
    </div>
  );
};

export default AddContributorModal;
