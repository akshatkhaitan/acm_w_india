/* eslint-disable react/no-unknown-property */
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import schedule from "../assets/schedule.png";
function Schedule() {
	return (
		<>
			<div align="center" style={{ margin: "auto auto" }}>
					<Image src={schedule} />
				</div>
		</>
	);
}

export default Schedule;
