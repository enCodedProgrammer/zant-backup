import Button from "@/components/button"
import { useRef } from "react";
import { toast } from 'react-toastify';


interface DownloadProps {
	data: any;
}

const DownloadModal : React.FC<DownloadProps> = ({data}) => {

	const buttonRef = useRef<any>(null);

	const notifySuccess = () => toast.success("Users details downladed", 
		{position: "bottom-left"},		
	);


	const downloadCSV = () => {

	const csvData = data.map(item => ({
		first_name: item.first_name,
		last_name: item.last_name,
		type: item.is_provider ? 'Provider' : 'Client',
		session: item._session_of_user,
		status: item.status ? 'Active' : 'Inactive'
	  }));
	
	  const headers = ['first_name', 'last_name', 'type', 'session', 'status'];
	  const csvContent = [
		headers.join(','),
		...csvData.map(row => headers.map(header => row[header]).join(','))
	  ].join('\n');
	
	  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
	  const link = document.createElement('a');
	  const url = URL.createObjectURL(blob);
	  link.href = url;
	  link.setAttribute('download', 'data.csv');
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	  buttonRef.current.click()
	  notifySuccess()

	};





	return (
		<dialog id="download_modal" className="modal">
			<div className="p-0 modal-box min-w-[33rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost" ref={buttonRef}>
						✕
					</button>
				</form>
				<div className="px-12 py-16 flex flex-col gap-8 items-center">
					<div className="flex flex-col gap-3">
						<h4 className="text-center text-heading-2xs">
							Are you sure you want to download?
						</h4>
						<span className="text-md text-center text-gray-700">
							Click download to export the selected client information.
						</span>
					</div>
					<Button className="tz-md tz-primary !w-64" onClick={downloadCSV}>
						Download
					</Button>
				</div>
			</div>
		</dialog>
	)
}


export default DownloadModal;
