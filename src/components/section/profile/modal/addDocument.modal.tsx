import Button from "@/components/button";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface AddDocumentModalProps {
  data: any;
  showDocumentModal: boolean;
  setShowDocumentModal: (show: boolean) => void;
}

const AddDocumentModal: React.FC<AddDocumentModalProps> = ({
  data,
  showDocumentModal,
  setShowDocumentModal,
}) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please select a PDF file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const response = await axios.post('https://your-xano-endpoint.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('PDF uploaded successfully!');
      console.log('Upload response:', response.data);
    } catch (error) {
      setUploadStatus('Failed to upload PDF.');
      console.error('Upload error:', error);
    }
  };

  return (
    <div className={showDocumentModal ? 'modal-contributors' : 'modal-add-contributors-hide'}>
      {showDocumentModal && (
        <div className="p-0 modal-box min-w-[33rem]">
          <div>
            <button
              className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost"
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
              <div>
                <label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
                  Upload PDF
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  className="w-full input rounded-none"
                  onChange={handleFileChange}
                />
              </div>

              <div className="w-full text-center pt-8">
                <Button className="tz-md tz-primary !w-64" type="submit">
                  Upload PDF
                </Button>
              </div>

              {uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDocumentModal;
