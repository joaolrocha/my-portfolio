import { FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



import { Box } from "@chakra-ui/react";
import styles from './Footer.module.css';

export default function Footer() {

  return (
    <Box id="contact" width={'100%'} bg={{ base: "#e2e2e2", _dark: "#191919" }} >
      <div className={styles.footer}>
        <h1>Contact</h1>

        <div className={styles.contact}>
          <a
            href="tel:+5582993076113"
          >
            <FaPhoneAlt /> +55 82 99307-6113
          </a>

          <a
            href="https://wa.me/5582993076113?text=Olá%20João,%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> +55 82 99307-6113
          </a>

          <a>
            <MdEmail /> joaolrocha07@gmail.com
          </a>

          <a>
            <FaMapMarkerAlt /> Brazil, Alagoas, Maceió
          </a>
        </div>


        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/rochajoao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/joaolrocha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/joaolrocha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </Box>
  )
}