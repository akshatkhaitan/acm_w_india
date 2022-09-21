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
					<div className={styles.map_subHeadingName}>
						<span>Campus Location:</span>
						<p>
							<h3>How to reach</h3>
							Campus Address
							Birla Institute of Technology & Science, Pilani
							Hyderabad Campus
							Jawahar Nagar, Kapra Mandal
							Medchal District - 500 078
							Telangana, India
						</p>
						<p>

							Campus Location: BITS-Pilani, Hyderabad Campus is about 25 Kms from Secunderabad Central Railway station, on the  Rajiv Rahadari (Karimnagar Highway) near Hakimpet Air Force station. The campus is in a serene atmosphere amidst scenic terrain with small hillocks and urban forest, near Shameerpet lake. The campus spreads across 200 acres of land. The campus is situated in the vicinity of institutions like ICICI Knowledge Park, NALSAR Law University, SP Bio-Tech Park etc.
						</p>
						<p><h3>How to reach BITS-Pilani, Hyderabad Campus from Secunderabad.</h3>

							From Secunderabad railway station to BITS-Pilani, Hyderabad Campus one has to travel 22 KM on Rajiv Rahadari/ Karim Nagar Highway, up to Dongala Mysamma Junction after Alankruta Resorts in Thumkunta Village and take a right turn towards Ghatkesar. After travelling 1.5 KMs on this road, there is again a diversion to the right leading to the Campus. BITS sign boards indicating the directions are available on the way.

							There is a direct Bus No. 212 from Secunderabad Railway station (Gurudwara Point) to BITS-Pilani Hyderabad Campus main gate. Besides there are city buses having numbers 211S, 211A, 211C, 211D, 211E, 211J, 211K, 211T, 211U, 567, 568, 569 which ply from Secunderabad Railway Station to various destinations to the Campus side. Further, there are many APSRTC buses from Secunderabad, Jubilee bus stand to Karim Nagar, Siddhipet, Ramagundam, Gajwel, Cheriyal etc. People can board any of these buses, get down either at Thumkunta or Dongala Mysamma junction which is 1KM away and take an auto to the campus.
						</p>
						<p><h3>How to reach BITS-Pilani, Hyderabad Campus from Airport.</h3>

							One can take a pre-paid a taxi from the airport to the campus. Tell the destination is BITS Pilani, Shameerpet. If one comes through the city, the fare will be around Rs. 1100 and it will take around 1 hr 45 mins. If one takes the Outer Ring Road (ORR), the fare will be Rs 1600 including the toll and it will take less than an hour to reach the campus.
							Or otherwise, one can take an AC bus from airport to Secunderabad and then change to Bus No. 212 which terminates at BITS campus. The travel time is more but much cheaper</p>					</div>
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
