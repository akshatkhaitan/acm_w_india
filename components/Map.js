import React from "react";
import styles from "../styles/Home.module.css";
function Map() {
	return (
		<>
			<div className={styles.o}>
				<div className={styles.map_heading}>
					<div className={styles.map_line}></div>
					<div className={styles.map_headingName}>
						How To Reach Bits Pilani, Hyderabad Campus
					</div>
				</div>
				<div className={styles.map_outer}>
					<div>
						<iframe
							src="https://www.google.com/maps/d/embed?mid=1i-23m9uSjuEhIT7NRm9yYv17u8Fz578&ehbc=2E312F"
							width="940"
							height="500"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;
