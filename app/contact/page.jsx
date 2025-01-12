import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ContactForm from "@/components/contactForm/contactForm";

// Add Font Awesome icons to the library
library.add(faGithub, faInstagram, faLinkedin, faDribbble);

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20" >
      {/* Left side */}
      <div className="flex flex-col space-y-20  ">
        {/* Text container */}
        <div className="flex flex-col space-y-10">
          <h1 className="text-8xl  ">contact</h1>
          <p className="text-2xl">
            Get in touch with me via social media or send me an email.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5  ">
          {/* GitHub */}
          <Link href="https://github.com">
            <FontAwesomeIcon icon={faGithub} width={25} height={25} />
          </Link>

          {/* Instagram */}
          <Link href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
          </Link>

          {/* LinkedIn */}
          <Link href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} width={25} height={25} />
          </Link>

          {/* Dribbble */}
          <Link href="https://dribbble.com">
            <FontAwesomeIcon icon={faDribbble} width={25} height={25} />
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className=" bg-gray-100 flex items-center justify-center mt-20  ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
