import React from "react";
import Image from "next/image";
import pic from "../assets/lady_ada_image.jpg";
import styles from "../styles/Home.module.css";
function Lady_Ada() {
	return (
		<>
			<div className={styles.lady_wrapper}>
				<div className={styles.lady_heading}>
					ACM-W India announces Lady Ada Programming Competition
				</div>
				<div className={styles.lady_line}></div>
				<div className={styles.lady_description}>
					ACM-W India is pleased to announce the launch of the Lady Ada
					Programming Contest for women (enrolled in undergraduate and masters
					level CS/IT courses). This coding contest will act both as a platform
					to develop and showcase coding talent, which will empower girl techies
					across India. <br /><br />
                    ACM-W helps create and promote opportunities for girls
					to explore, enhance and expand their coding skills. This coding
					contest happens in three levels, with the first two rounds online and
					the last round at BITS Pilani, Hyderabad Campus. Girl students across
					the nation are encouraged to participate in this flagship coding event
					of ACM-W India.
                    <br /> <br />
				</div>
				<div className={styles.lady_image}>
					<Image src={pic} height={1800} width ={1400} />
				</div>
			</div>
		</>
	);
}

export default Lady_Ada;
