import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

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



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();


    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const dummyImage = `https://singlecolorimage.com/get/${randomColor}/300x300`;



    const formDataToSend = new FormData();
  
    // Append form data fields
    for (const key in formData) {
      formDataToSend.append(key, formData[key as keyof typeof formData]);
    }
  
    // Append the contributor image URL (assuming img is the URL)
    formDataToSend.append("image_link", dummyImage);


    console.log(formData);
    
    try {
      const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/partnercontributor', formDataToSend);
      setUploadStatus("New Contributor Added")
      setContributorAdded(true)
      setShowModal(!showModal)
      console.log('Response:', response.data);
      // Handle success (e.g., display a message, clear the form, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      setUploadStatus("Error adding new contributor")
      // Handle error (e.g., display an error message)
    }

    const refetch = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    setData(refetch.data)  };

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

                {/* Predefined User ID Field */}
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
                  <Button type="submit" className="tz-md tz-primary !w-48">
                    Invite contributor
                  </Button>
                </div>

                {uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContributorModal;
