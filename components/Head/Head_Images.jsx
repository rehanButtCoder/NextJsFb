import Image from "next/image";

const HeadImage = ({ image, active }) => {
    return (
        <div className={`px-6 py-2 hover:bg-slate-100 hover:rounded-full ${active && 'px-2 py-2 bg-slate-100 rounded-full'} `}>
            <Image src={image} width={20} height={20} />
        </div>
    );
}

export default HeadImage;