import Image from "next/image";

const SidebarIcons = ({ image, text }) => {
    return (
        <div className={`my-7 flex items-center font-medium	text-sm`}>
            <Image src={image} width={20} height={20} />&nbsp;&nbsp;  <span>{text}</span>
        </div>
    );
}

export default SidebarIcons;