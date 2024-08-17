import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface AddContributorModalProps {
  data: {
    id: number;
  };
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
}

const AddContributorModal: React.FC<AddContributorModalProps> = ({
  data,
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
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/partnercontributor', formData);
      console.log('Response:', response.data);
      // Handle success (e.g., display a message, clear the form, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div id="add_contributor_modal" className={showModal ? 'modal-contributors' : 'modal-add-contributors-hide'}>
      {showModal && (
        <div className="p-0 modal-box max-w-[30rem]">
          <div>
            <button
              className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost"
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
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                    First Name
                  </label>
                  <input
                    className="w-full input rounded-none"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                    Last Name
                  </label>
                  <input
                    className="w-full input rounded-none"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                    Title
                  </label>
                  <select
                    className="w-full select border-gray-200 rounded-none"
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
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                    Email
                  </label>
                  <input
                    className="w-full input rounded-none"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                    Permission Level
                  </label>
                  <select
                    className="w-full select border-gray-200 rounded-none"
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
                  <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
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
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContributorModal;
