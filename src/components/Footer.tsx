const Footer = () => {
    return (
			<footer className="w-full bg-black flex flex-col justify-center items-center gap-2 py-5">
				<img className="w-8 lg:w-12" src="/logo.png" alt="logo" />
				<p className="text-[#D1D5DB] text-xs lg:text-sm">
					© {new Date().getFullYear()} Wellness App. All rights reserved
				</p>
			</footer>
		);
}

export default Footer;