import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'react-toastify';


interface AddDocumentModalProps {
  data: any;
  auth: any;
  setData: any;
  showDocumentModal: boolean;
  setShowDocumentModal: (show: boolean) => void;
}

const AddDocumentModal: React.FC<AddDocumentModalProps> = ({
  data,
  setData,
  auth,
  showDocumentModal,
  setShowDocumentModal,
}) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [pictureChanged, setPicturechanged] = useState<boolean>(false);

  const notifySuccess = () => toast.success(uploadStatus || "PDF Uploaded Successfully", 
		{position: "bottom-left"},
		

	);
	const notifyError = () => toast.error(uploadStatus || "Failed to upload PDF",
		{position: "bottom-left"}

	);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileSelected(true);
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please select a PDF file to upload.");
      return;
    }

    const path = `/uploads/${pdfFile.name}`;
    const mime = pdfFile.type;
    const meta = JSON.stringify({ uploadedBy: 'User', timestamp: new Date().toISOString() });

    const formData = new FormData();
    formData.append('content', pdfFile);

    try {
      const response = await axios.patch('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/pdf_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth}`,          
        },
      });
      const authResponse = await axios.get("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      setData(authResponse.data);
      setPicturechanged(true);    
      setShowDocumentModal(!showDocumentModal)       
      setUploadStatus('PDF uploaded successfully!');
      notifySuccess()
      console.log('Upload response:', response.data);
    } catch (error) {
      setUploadStatus('Failed to upload PDF.');
      notifyError()
      console.error('Upload error:', error);
    }
  };

  return (
    <div className={showDocumentModal && !pictureChanged ? 'modal-contributors' : 'modal-add-contributors-hide'}>
      {showDocumentModal && !pictureChanged && (
        <div className="p-0 modal-box min-w-[33rem]">
          <div>
            <button
              className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost modal-close-btn"
              onClick={() => {
                setShowDocumentModal(!showDocumentModal);
              }}>
              ✕
            </button>
          </div>
          <div className="px-12 py-16 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-3">
              <h4 className="text-center text-heading-2xs">
                Are you sure you want to upload
                <br />
                a new document?
              </h4>
              <span className="text-md text-center text-gray-700">
                Click button below to upload a PDF file.
              </span>
            </div>

            <form onSubmit={handleSubmit}>
            {!fileSelected ? 
              <div style={{ position: 'relative', display: 'inline-block' }}>

                <input
                  type="file"
                  accept="application/pdf"
                  className="w-full input rounded-none custom-file-upload"
                  onChange={handleFileChange}
                  id="file-upload-pdf"

                />

                <Button className="tz-md tz-primary !w-64" >
                    Choose file
                 </Button> 

              </div>



              :

              <>
              <label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
                  {pdfFile?.name}
                </label>
              <div className="w-full text-center pt-8">
                <Button className="tz-md tz-primary !w-64" type="submit">
                  Upload PDF
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

export default AddDocumentModal;
