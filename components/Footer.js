import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footer}>
				<div className={styles.footerLeft}>
					{/* <div className={styles.info}>
						<h2>ACM BPHC</h2>
						<p>Accociation For Computing Machinery</p>
					</div> */}
					<div className={styles.social}>
						<h1>Follow Us</h1>
						<div className={styles.icons}>
							<a
								rel="noopener noreferrer"
								href="https://www.instagram.com/acm_bphc/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a
								rel="noopener noreferrer"
								href="https://facebook.com/profile.php?id=100054318588641"
								target="_blank"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a
								rel="noopener noreferrer"
								href="https://twitter.com/AcmBphc"
								target="_blank"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								rel="noopener noreferrer"
								href="https://www.linkedin.com/company/acm-bphc-chapter/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
				<div className={styles.footerRight}>
					<div className={styles.contact}>
						<h1>Contact Us</h1>
						<a
							className={styles.mail}
							href="mailto:acm.bphc@hyderabad.bits-pilani.ac.in"
						>
							acm.bphc@hyderabad.bits-pilani.ac.in
						</a>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				Copyright 2022 All rights reserved. Designed by ACM BITS Pilani Hyderabad Student Chapter
			</div>
		</footer>
	);
}
