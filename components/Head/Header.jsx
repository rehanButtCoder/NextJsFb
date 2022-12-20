import Image from "next/image";
import HeadRightIcon from "./HeadRightIcon";
import HeadImage from "./Head_Images";

const Header = () => {
    return (
        <>
            <nav className="flex justify-between px-2 py-3 bg-[#FEFEFD] border-b-2">
                <div className="flex">
                    <Image src="/images/fb.png" width={40} height={40} />
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Image src="/images/search-interface-symbol.png" width={15} height={15} />
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search facebook..." type="text" name="search" />
                    </label>
                </div>
                <div className="flex items-center">
                    <HeadImage image="/images/house-location.png" active/>
                    <HeadImage image="/images/flag.png" />
                    <HeadImage image="/images/video-player.png" />
                    <HeadImage image="/images/shopping-cart.png" />
                    <HeadImage image="/images/multiple-users-silhouette.png" />
                </div>

                <div className="flex items-center">
                    {/* user image */}
                    <Image src="/images/fb.png" width={40} height={40} />
                    <HeadRightIcon image="/images/rNav/square.png" />
                    <HeadRightIcon image="/images/rNav/bubble-chat.png" />
                    <HeadRightIcon image="/images/rNav/menu.png" />
                    <HeadRightIcon image="/images/rNav/down-arrow.png" />
                </div>
            </nav>
        </>
    );
}

export default Header;