import React from "react";
import styles from "../styles/Home.module.css";
function Map() {
	return (
		<>
			<div className={styles.o}>
				<div className={styles.map_heading}>
					<div className={styles.map_line}></div>
					<div className={styles.map_headingName}>
						LOCATION: Bits Pilani, Hyderabad Campus
					</div>
				</div>
				<div className={styles.map_outer}>
					<div className={styles.map_subHeadingName}>
						<span>How To Reach:</span>
						<p>
							Campus Address
							<br></br>
							Birla Institute of Technology & Science, Pilani
							<br></br>
							Hyderabad Campus
							<br></br>
							Jawahar Nagar, Kapra Mandal
							<br></br>
							Medchal District - 500 078
							<br></br>
							Telangana, India
						</p>
					</div>
					<div>
						<iframe
							src="https://www.google.com/maps/d/embed?mid=1vUBOyBl6jiSNo0TbkT7BoNP7lZ1h2mg&hl=en&ehbc=2E312F"
							width="640"
							height="480"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;
