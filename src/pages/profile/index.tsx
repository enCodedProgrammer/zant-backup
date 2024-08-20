import EditIcon from "@/asset/icons/system/Pen.svg";
import Avatar from "@/components/avatar";
import IconButton from "@/components/button/icon";
import SearchInput from "@/components/input/search";
import ProfileMembersTab from "@/components/section/profile/members.tab";
import AddDocumentModal from "@/components/section/profile/modal/addDocument.modal";
import ProfileOverviewTab from "@/components/section/profile/overview.tab";
import ProfileSettingsTab from "@/components/section/profile/settings.tab";
import AddProfilePictureModal from "@/components/section/profile/modal/addProfilePicture";
import TabPanel from "@/components/tab";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface UserData {
  partnerimage: {
    url: string;
  };
  Display_name: string;
}

export default function ProfilePage() {
  const [tab, setTab] = useState<string>("Organization");
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showProfilePictureModal, setShowProfilePictureModal] = useState<boolean>(false);
  const [authenticationToken, setAuthenticationToken] = useState<string>("")

  const router = useRouter();

  const onSelectTab = (selected: string) => {
    router.push({
      pathname: router.pathname,
      query: { tab: selected },
    });
    setTab(selected);
  };

  useEffect(() => {
    const selected = router.query.tab;
    if (selected && tab !== selected) onSelectTab(selected as string);
  }, [router.query]);

  const fetchData = async () => {
    try {
      const authToken = Cookies.get("authToken");

      if (!authToken) {
        throw new Error("No auth token found, please login.");
      }

	  setAuthenticationToken(authToken);
      const response = await axios.get<UserData>("https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/auth/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      setData(response.data);
      console.log("userData", response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenProfilePictureModal = () => {
    setShowProfilePictureModal(true);
    console.log(showProfilePictureModal);
  };

  if (loading) return <div style={{fontSize:"28px", display:"flex", alignItems:"center", justifyContent: "center", height:"90vh", fontWeight: "700"}}>Loading...</div>;
  if (!data) {
	router.push('/auth/login');
    return <div>Error loading data</div>;
	
  }

  return (
    <div className="flex flex-col mt-24 modal-relative">
      <div className="fixed pl-8 left-56 right-40 top-5 z-50">
        <SearchInput white placeholder="Search" />
      </div>
      <div className="flex gap-24 items-center px-8 py-5 relative justify-between">
        <div className="flex flex-col p-8 gap-2 border-gray-50 border rounded-2xl !w-[21rem]">
          <span className="text-display-xs text-center">$1000</span>
          <span className="text-xl text-center">Funded Sessions</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-60 h-60 relative">
            <Avatar url={data.partnerimage?.url} />
            <IconButton className="absolute bottom-5 right-5 tz-sm tz-circle !w-10 !h-10" onClick={handleOpenProfilePictureModal}>
              <Image src={EditIcon} alt="edit icon" />
            </IconButton>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-heading-2xl font-medium">{data?.Display_name}</p>
            <span className="text-heading-xs font-regular">Zant Partner</span>
          </div>
        </div>

        <div className="flex flex-col p-8 gap-2 border-gray-50 border rounded-2xl !w-[21rem]">
          <span className="text-display-xs text-center">590</span>
          <span className="text-xl text-center">Individuals Impacted</span>
        </div>
      </div>

      <TabPanel
        tabs={["Organization", "Settings", "Contact"]}
        tab={tab}
        onSelected={(t: string) => onSelectTab(t)}
        className="border-b-2 border-b-gray-50 justify-between px-32"
      />

      <div hidden={tab !== "Organization"}>
        <ProfileOverviewTab userData={data} setData={setData} auth={authenticationToken} />
      </div>
      <div hidden={tab !== "Contact"}>
        <ProfileMembersTab />
      </div>
      <div hidden={tab !== "Settings"}>
        <ProfileSettingsTab userData={data} setData={setData} auth={authenticationToken} />
      </div>


      {showProfilePictureModal && (
        <div id="add_contributor_modal" className="modal-contributors">
          <AddProfilePictureModal
            data={data}
			setData={setData}
			auth={authenticationToken}
            showProfilePictureModal={showProfilePictureModal}
            setShowProfilePictureModal={setShowProfilePictureModal}
          />
        </div>
      )}
    </div>
  );
}
