import Image from "next/image";
import SidebarIcons from "./SidebarIcons";

const Sidebar = ({ rightALign }) => {
    return (
        <div className={`sidebarMain col-span-4 ${rightALign} fixSideBar`} >
            <div className="flex items-center">
                <Image src="/images/fb.png" width={40} height={40} /> &nbsp;&nbsp;
                <h2 className="text-2xl font-bold">User Interaction</h2>
            </div>
            <div className="sidebarContent">
                <SidebarIcons image="/images/multiple-users-silhouette.png" text="Multiple Users" />
                <SidebarIcons image="/images/video-player.png" text="Video Player" />
                <SidebarIcons image="/images/sidebar/calendar.png" text="Calender" />
                <SidebarIcons image="/images/sidebar/clock (1).png" text="Clock" />
                <SidebarIcons image="/images/sidebar/online-shop.png" text="Online Shop" />
                <SidebarIcons image="/images/sidebar/padlock.png" text="Padlocks" />
            </div>
        </div >
    );
}

export default Sidebar;