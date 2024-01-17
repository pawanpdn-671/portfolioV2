import React from "react";
import Button from "./Button";
import Image from "next/image";

const ContactPage = () => {
	return (
		<section className="max-w-container mx-auto text-textLight">
			<div className="mt-20">
				<div className="flex items-center w-full justify-between ">
					<div className="contact-info-container">
						<p className="text-md lgl:text-xl">
							If you have any questions, feel free to contact me by the info provided below. <br />I will reply
							to your message as soon as possible.
						</p>

						<div className="mt-20 ">
							<a
								className="email_btn"
								href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pawanpradhanpc671@gmail.com">
								<Button text="Send an email" style={"py-2 px-3 lgl:py-3 lgl:px-5 text-sm lgl:text-[18px]"} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
