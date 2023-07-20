import React from "react";
import Button from "./Button";

const ContactPage = () => {
	return (
		<section className="max-w-container mx-auto text-textLight">
			<div className="mt-10">
				<div className="flex items-center">
					<div className="contact-info-container">
						<p className="text-xl">
							If you have any questions, feel free to contact
							me by the info provided below. <br />I will reply
							to your message as soon as possible.
						</p>

						<div className="mt-10 flex flex-col lgl:flex-row gap-5 items-center">
							<a
								className="email_btn"
								href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pawanpradhanpc671@gmail.com">
								<Button
									text="Send an email"
									style={"py-3 px-5 text-[18px]"}
								/>
							</a>

							<span>OR</span>

							<a
								className="call_btn"
								href="tel: +91 6009404703">
								<Button
									text="Voice call"
									style={"py-3 px-5 text-[18px]"}
								/>
							</a>
						</div>
					</div>

					<div className="contact-img-block"></div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
