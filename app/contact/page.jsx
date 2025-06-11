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
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300"], // İnce ağırlıklar
});

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-20 md:mt-24" >
      {/* Left side */}
      <div className="flex flex-col ">
        {/* Text container */}
        <div className="flex flex-col  ">
          <h1 className="pt-10 text-5xl lg:text-8xl mb-20 font-extrabold tracking-wide   ">contact.</h1>
          <p className={`${inter.className} text-xl mb-10 `}>
            Get in touch with me via social media or send me an email.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5 pb-10  ">
          {/* GitHub */}
          <Link href="https://github.com">
            <FontAwesomeIcon icon={faGithub} width={30} height={30} />
          </Link>

          {/* Instagram */}
          <Link href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} width={30} height={30} />
          </Link>

          {/* LinkedIn */}
          <Link href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} width={30} height={30} />
          </Link>

          {/* Dribbble */}
          <Link href="https://dribbble.com">
            <FontAwesomeIcon icon={faDribbble} width={30} height={30} />
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
