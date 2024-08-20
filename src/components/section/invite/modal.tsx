import Button from "@/components/button"
import { useState, ChangeEvent, FormEvent } from "react"

export default function InviteStudentModal() {
	const [value, setValue] = useState('');
	const [pdfFile, setPdfFile] = useState<File | null>(null);
	const [uploadStatus, setUploadStatus] = useState<string | null>(null);
	const [fileSelected, setFileSelected] = useState<boolean>(false);	

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
		  setFileSelected(true);
		  setPdfFile(e.target.files[0]);
		}
	  };


	  const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
	
		if (!pdfFile) {
		  setUploadStatus('Please select a CSV file');
		  return;
		}
	
		const formData = new FormData();
		formData.append('file', pdfFile);
	
		try {
		  const response = await fetch('/api/upload', {
			method: 'POST',
			body: formData,
		  });
	
		  const result = await response.json();
	
		  if (response.ok) {
			setUploadStatus('File uploaded successfully');
			console.log('Server response:', result);
		  } else {
			setUploadStatus('Failed to upload file');
			console.error('Server error:', result);
		  }
		} catch (error) {
		  setUploadStatus('Error uploading file');
		  console.error('Upload error:', error);
		}
	  };



	return (
		<dialog id="invite_student_modal" className="modal">
			<div className="p-0 modal-box max-w-[40]">
				<form method="dialog">
					<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-8 px-12 py-16 items-center">
					<span className="text-heading-2xs">Invite Members</span>
					<input
						className="input input-bordered rounded-none w-full"
						placeholder="Email, comma seperated"
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>

					<div className="flex flex-col gap-4 items-center">
						<Button className="tz-md tz-primary !w-48" disabled={value.length == 0 || pdfFile !== null} type="submit">Invite users</Button>
						<span className="text-sm text-gray-700">Or</span>
						<div style={{ position: 'relative', display: 'inline-block' }}>

						<input
						type="file"
						accept=".csv"
						className="w-full input rounded-none custom-file-upload"
						onChange={handleFileChange}
						id="file-upload-pdf"
						/>

							{!fileSelected ? 							
							<Button className="tz-md tz-teriary !w-48">Import .csv</Button>							
							:
							<>
							<label className="mb-1 ml-2 block text-lg text-gray-700 font-regular">
								{pdfFile?.name}
							  </label>
							<div className="w-full text-center pt-8">
							  <Button className="tz-md tz-primary !w-64" type="submit">
								Upload CSV
							  </Button>
							</div>
							</>  

							}
						</div>
					</div>
				</div>			
				</form>
			</div>
		</dialog>
	)
}
