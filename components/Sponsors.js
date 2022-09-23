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
		{ img: pic1, id: 1 ,h:152,w:600},
		{ img: pic2, id: 2 ,h:400,w:600},
		{ img: pic3, id: 3 ,h:156,w:600},
		{ img: pic7, id: 4 ,h: 600,w:600},
		{ img: pic4, id: 5 ,h:205,w:600},
		{ img: pic5, id: 6 ,h:247.45,w:600},
		{ img: pic6, id: 7 ,h:240,w:600},
	];
	return (
		<>
			<div vertical layout className={styles.sponsors_outer}   >
			 
				{data.map((com) => {
					return (
						
						<div vertical layout key={com.id}  >
							<Image src={com.img}
							width={com?.w}
							height={com?.h}
							/>
						</div>	
						
 
					);
					
					
				})}
			</div>
		</>
	);
}
 
export default Sponsors;