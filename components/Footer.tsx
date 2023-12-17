const Footer = () => {
	return (
		<footer className="py-10 bg-secondColor">
			<div className="flex flex-col sml:flex-row sml:justify-between justify-center items-center max-w-container mx-auto px-5 mdl:px-20">
				<div className="">
					<p className="text-textDark">
						Designed & Build by <span>Pawan Pradhan</span>
					</p>
				</div>

				<div className="mt-4 sml:mt-0">
					<div className="support-box text-textGreen">
						<a
							href="https://www.buymeacoffee.com/pawanpradhan"
							className="px-3 py-2 flex items-center text-sm border border-textGreen rounded-md hover:bg-hoverColor/10 duration-200 ease">
							{"<"}
							Buy me a coffee{"/>"}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
