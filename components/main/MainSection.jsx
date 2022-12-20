import MainContent from "./content/MainContent";
import RSidebar from "./rightsidebar/RSidebar";
import Sidebar from "./sidebar/Sidebar";

export default function Main() {
    return (
        <div className="grid grid-cols-12 px-3 bg-[#F1F3F4] pt-5 mtTop">
            <Sidebar />
            <MainContent />
            <RSidebar />
        </div>
    )
}
