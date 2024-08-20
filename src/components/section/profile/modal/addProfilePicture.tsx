import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPictureFile(e.target.files[0]);
      setFileSelected(true);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!pictureFile) {
      alert("Please select a picture to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('partners_img', pictureFile);
    //formData.append('userId', data.id);

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
      setPicturechanged(true);    
      setShowProfilePictureModal(!showProfilePictureModal)  
      setUploadStatus('Picture uploaded successfully!');
      console.log('Upload response:', response.data);

    } catch (error) {
      setUploadStatus('Failed to upload picture.');
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


                <Button className="tz-md tz-primary !w-64" >
                  Choose file
                </Button>              
                
                </div>
              :
              <>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular label-margin">
              {pictureFile?.name}
              </label>

              <div className="w-full text-center pt-8">
                <Button className="tz-md tz-primary !w-64" type="submit">
                  Upload Picture
                </Button>
              </div>
              </>
              }

              {uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProfilePictureModal;
