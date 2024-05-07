import React from "react";
import {
TwitterIcon,
GithubIcon,
DiscordIcon,
HeartFilledIcon,
SearchIcon,
} from "@/components/icons";
import { MenuItemType , MenuItems} from "./assets/config";
import { useRouter } from "next/router";
import { Button, Image } from "@nextui-org/react";
import { FaFacebook , FaLine } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import ResponsiveMenu from "./conponents/menu";
import { contactInformation } from "@/config/information";

const Navbar : React.FC = () => {
	const router = useRouter()
	const [isOpen ,setIsOpen] = React.useState(false);
	return (
		<article className={`w-full h-[100px]  absolute z-20 text-white`}>
			<div className="max-w-[1000px] p-3  h-full m-auto flex justify-between items-center">
				<div id = "logo" className="cursor-pointer" onClick={() => router.push('/')}>
					<Image
					width={130}
					src = "./logo.png"
					/>
				</div>
				<div id = "menu-tabs" className="gap-8 text-lg min-[700px]:flex hidden">
					{MenuItems?.map((item:MenuItemType) => 
						<button 
						key = {item.label}
						className=" hover:underline"
						onClick={() => router.push(item.route)}
						>
							{item.label}
						</button>
					)}
					<div className="flex gap-1 ">
						<Button isIconOnly variant="light" className="text-white" onClick={() => window.open(contactInformation.facebook, '_blank')}>
							<FaFacebook size={25}/>
						</Button>
						<Button isIconOnly variant="light" className="text-white" onClick={() => window.open(contactInformation.line, '_blank')}>
							<FaLine size={25}/>
						</Button>
					</div>
				</div>
				<div className="min-[700px]:hidden block">
					<Button isIconOnly variant="light" className="text-white" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <IoCloseOutline size={25}/>  : <RxHamburgerMenu size={25}/>}
					</Button>
				</div>
			</div>
			{isOpen && <ResponsiveMenu setIsOpen = {setIsOpen}/>}
		</article>
	)
};

export {Navbar}
