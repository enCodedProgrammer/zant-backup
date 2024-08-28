import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'react-toastify';


interface AddProfilePictureModalProps {
  data: any;
  setData: any,
  auth: string,
  showProfilePictureModal: boolean;
  setShowProfilePictureModal: (show: boolean) => void;
}

const AddProfilePictureModal: React.FC<AddProfilePictureModalProps> = ({
  data,
  setData,
  auth,
  showProfilePictureModal,
  setShowProfilePictureModal,
}) => {
  const [pictureFile, setPictureFile] = useState<File | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [pictureChanged, setPicturechanged] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);



  const notifySuccess = () => toast.success(uploadStatus || "Picture uploaded successfully", 
		{position: "bottom-left"},
		

	);
	const notifyError = () => toast.error(uploadStatus || "Failed to upload picture",
		{position: "bottom-left"}

	);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPictureFile(e.target.files[0]);
      setFileSelected(true);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    if (!pictureFile) {
      alert("Please select a picture to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('partners_img', pictureFile);

    try {
      const response = await axios.patch('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/editpartnerprofile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth}`,
        },
      });
      const refetch = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      setData(refetch.data)
      localStorage.setItem("ZANT_USER", JSON.stringify(refetch.data));
      setPicturechanged(true);    
      setShowProfilePictureModal(!showProfilePictureModal)  
      setUploadStatus('Picture uploaded successfully!');
      notifySuccess()
      setIsLoading(false)
      console.log('Upload response:', response.data);

    } catch (error) {
      setUploadStatus('Failed to upload picture.');
      notifyError()
      setIsLoading(false)
      console.error('Upload error:', error);
    }
  };

  return (
    <div className={!pictureChanged && showProfilePictureModal ? 'modal-contributors' : 'modal-add-contributors-hide'} >
      {showProfilePictureModal && !pictureChanged &&  (
        <div className="p-0 modal-box min-w-[33rem]">
          <div>
            <button
              className="absolute top-9 right-6 btn btn-sm modal-close-btn btn-circle btn-ghost"
              onClick={() => {
                setShowProfilePictureModal(!showProfilePictureModal);
              }}>
              ✕
            </button>
          </div>
          <div className="px-12 py-16 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-3">
              <h4 className="text-center text-heading-2xs">
                Upload a new profile picture            
              </h4>
              <span className="text-md text-center text-gray-700">
                Click button below to upload a JPEG, PNG, or SVG
              </span>
            </div>

            <form onSubmit={handleSubmit}>

              {!fileSelected ? 
              <div style={{ position: 'relative', display: 'inline-block' }}>

                <input
                  type="file"
                  accept="image/jpeg, image/png, image/svg+xml"
                  className="w-full input rounded-none custom-file-upload"
                  onChange={handleFileChange}
                  id="file-upload"
                />

        
                <Button className="tz-md tz-primary !w-64">
                  Choose file
                </Button> 
                
                </div>
              :
              <>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
              {pictureFile?.name}
              </label>

              <div className="w-full text-center pt-8">
              {isLoading ?
                <Button className="tz-md tz-primary !w-64" type="submit" disabled>
                  Upload Picture
                </Button>
                :
                <Button className="tz-md tz-primary !w-64" type="submit">
                  Upload Picture
                </Button>
                }
              </div>
              </>
              }

              {uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
            </form>
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

export default AddProfilePictureModal;
