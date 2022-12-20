import Image from "next/image";

const HeadRightIcon = ({image}) => {
    return (
        <div className="mx-2 px-2 py-2 bg-slate-100 rounded-full">
            <Image src={image} width={20} height={20} />
        </div>
    );
}

export default HeadRightIcon;