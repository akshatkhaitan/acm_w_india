import React from "react";
import styles from "../styles/Home.module.css";
import pic1 from "../assets/im_1.png";
import pic2 from "../assets/im_2.png";
import pic3 from "../assets/im_3.png";
import pic4 from "../assets/im_4.png";
import pic5 from "../assets/im_5.png";
import pic6 from "../assets/im_6.png";
import pic7 from "../assets/im_7.png";
import Image from "next/image";

function Sponsors() {
	const data = [
		{ img: pic1, id: 1 },
		{ img: pic2, id: 2 },
		{ img: pic3, id: 3 },
		{ img: pic7, id: 4 },
		{ img: pic4, id: 5 },
		{ img: pic5, id: 6 },
		{ img: pic6, id: 7 },
	];
	return (
		<>
			<div className={styles.sponsors_outer}>
				{data.map((com) => {
					return (
						<div key={com.id}>
							<Image src={com.img} height={100} width={200} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Sponsors;
