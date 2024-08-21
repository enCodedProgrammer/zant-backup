import Button from "@/components/button"
import { useState, ChangeEvent, FormEvent, useRef } from "react"
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';

export default function InviteStudentModal() {

	const buttonRef = useRef<any>(null);
	const notifySuccess = () => toast.success(uploadStatus || "Invite processing", 
		{position: "bottom-left"},
		

	);
	const notifyError = () => toast.error(uploadStatus || "File format error",
		{position: "bottom-left"}

	);

	const [value, setValue] = useState('');
	const [pdfFile, setPdfFile] = useState<any | null>(null);
	const [uploadStatus, setUploadStatus] = useState<string | null>(null);
	const [fileSelected, setFileSelected] = useState<boolean>(false);	

	const authToken = Cookies.get("authToken");

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
		  setFileSelected(true);
		  setPdfFile(e.target.files[0]);
		}
	  };

	  const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const emailArray = value.split(',').map((email) => email.trim());
	
		try {
		  const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/upload/csv_array', {
			email_address: emailArray },
			{		
		  headers: {
			'Authorization': `Bearer ${authToken}`
		  }
		});
		  console.log('Response:', response.data);

		  	if (response.data.email_address) {
					
			setUploadStatus('Invite Processing');
			buttonRef.current.click()
			notifySuccess()
			console.log('Server response:', response);
		  } else {
			setUploadStatus('File format error');			
			console.error('Server error:', response);
			notifyError()
		  }
		} catch (error) {
		  console.error('Error sending emails:', error);
		  notifyError()
		}
	  }


	  const handleCSVSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
	

	
		const formData = new FormData();
		formData.append('file', pdfFile);		
		

		console.log(formData)
		try {
		  const response = await fetch('/api/upload', {
			method: 'POST',
			body: formData,
			headers: {
				'Authorization': `Bearer ${authToken}`
			  },
		  });
	
		  const result = await response.json();
	
		  if (response.ok) {
			setUploadStatus('Invite Processing');
			notifySuccess()
			buttonRef.current.click()
			console.log('Server response:', result);
		  } else {
			setUploadStatus('Failed to upload file');
			notifyError()
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
				<form method="dialog" id="close-invite dialog">
					<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost" ref={buttonRef}>
						✕
					</button>
				</form>
				
				<div className="flex flex-col gap-4 px-12 py-16 items-center">
					<span className="text-heading-2xs">Invite Members</span>
					<form onSubmit={handleSubmit} className="form-align">
						<input
							className="input input-bordered rounded-none w-full"
							placeholder="Email, comma seperated"
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
							}}
						/>

						<Button className="tz-md tz-primary !w-48 align-invite-button" disabled={value.length == 0 || pdfFile !== null} type="submit">Invite users</Button>
						</form>

						<div className="flex flex-col gap-4 items-center">
						<span className="text-sm text-gray-700">Or</span>
						<form onSubmit={handleCSVSubmit}>
						{!fileSelected ?

						<div style={{ position: 'relative', display: 'inline-block' }}>
						<input
						type="file"
						accept=".csv"
						className="w-full input rounded-none custom-file-upload"
						onChange={handleFileChange}
						id="file-upload-pdf"
						/>
												
							<Button className="tz-md tz-teriary !w-48">Import .csv</Button>	
						</div>						
							
						:
							<>
							<label className="mb-1 ml-2 block text-lg text-gray-700 font-regular file-input-align">
								{pdfFile?.name}
							  </label>
							<div className="w-full text-center pt-4">
							  <Button className="tz-md tz-primary !w-64" type="submit">
								Upload CSV
							  </Button>
							</div>
							</>  
						}

						{uploadStatus && <p className="text-center pt-4">{uploadStatus}</p>}
						</form>
						</div>
	
				</div>									
			</div>
		</dialog>
	)
}