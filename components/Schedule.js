/* eslint-disable react/no-unknown-property */
import React from "react";
import styles from "../styles/Home.module.css";

function Schedule() {
    return(
        <>
            <div className="sppb-addon sppb-addon-raw-html "><div className="sppb-addon-content"><h2 className="h3 text-dark-brown underlined" id="current_a"><span className="underlined-text">DAY 1 - October 8, 2022 - Saturday</span><span className="underlined-line"></span></h2>

            <table  className={styles.table} border="white">
            <thead  className={styles.head}>
            <tr>
                <td align="center"><strong>Program</strong></td>
                <td align="center"><strong>Time (IST)</strong></td>
                <td align="center"><strong>Speaker &amp; Talk Title</strong></td>
                <td align="center"><strong>Time Slot (IST): QnA</strong></td>
            </tr></thead>
            <tbody>
            <tr>
                <td align="center"><strong>Breakfast</strong></td>
                <td align="center">9:00</td>
                <td align="center"> </td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Inaugural Session</strong></td>
                <td align="center">10:00 - 10:15</td>
                <td align="center">Director and HoD</td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Talk 1 (IITH)</strong><br/></td>
                <td align="center">10:15 - 11:00</td>
                <td align="center">Dr. Raji (Wequity)</td>
                <td align="center"> 10:45 - 11:00</td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Tea Break: 11:00 - 11:15</strong></div></td>
            </tr>
            <tr>
                <td align="center"><strong>Talk 2 (Google Hyderabad)</strong><br/></td>
                <td align="center">11:15 - 12:00</td>
                <td align="center">Sasi Challa - Director Of Engineering</td>
                <td align="center">11:45 - 12:00</td>
            </tr>
            <tr>
                <td align="center"><strong>Ask Me Anything / Open House Session</strong><br/></td>
                <td align="center">12:00 - 1:00</td>
                <td align="center">Charu (IIITH), Akansha (IITM), Pragati (BITS Pilani) (Theory vs ML) Mentoring for young phds</td>
                <td align="center"></td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Lunch Break (12:25 - 3:00)</strong></div></td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Social Hour@ Gather.Town (3:00-5:00)</strong></div></td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Activity 1: Mentorship in Groups (5:45 - 6:30)</strong><br/>Moderator: ACM Student Volunteers; Mentors in individual breakout rooms</div></td>
                </tr>
            <tr>
                <td align="center"><strong>IBM Interaction with Students</strong><br/>Chair: Heena Timani (iAnanya Datalytix Pvt. Ltd.)</td>
                <td align="center">6:30 - 7:00</td>
                <td align="center">Renuka Sindhgatta Rajan</td>
                <td align="center"></td>
                </tr>
            <tr>
                <td align="center"><strong>Keynote 2</strong><br/>Chair: Sushmita Gupta (IMSc)</td>
                <td align="center">7:00 - 8:00</td>
                <td align="center">Barna Saha (UCSD) -- Sublinear Time Algorithms for Edit Distance -- 7:00 - 7:45</td>
                <td align="center">7:45 - 8:00</td>
            </tr>
            <tr>
                <td align="center"><strong>Past, Present and Future of Women in Science &amp; Engineering</strong><br/>Chair: Pallavi Jain (IIT Jodhpur)</td>
                <td align="center">8:00 - 9:15</td>
                <td align="center">Abha Sur (MIT) -- 8:00 - 8:30 &amp; Hema Murthy (IIT Madras) -- 8:30 - 9:00</td>
                <td align="center">9:00 - 9:15</td>
            </tr>
            <tr>
                    <td colSpan="4" align="center"><div ><strong>End of Day 1 (9:15 - 9:20)</strong></div></td>
            </tr>
            </tbody>
            </table>
            <br />
            
            <h2 ><span >DAY 2 - July 22, 2022 </span><span></span></h2>

            <table className={styles.table} border="white">
            <thead className={styles.head}>
            <tr>
                <td align="center"><strong>Program</strong></td>
                <td align="center"><strong>Time (IST)</strong></td>
                <td align="center"><strong>Speaker &amp; Talk Title</strong></td>
                <td align="center"><strong>Time Slot (IST): QnA</strong></td>
            </tr></thead>
            <tbody>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Starting Day 2 (9:15 - 9:30)</strong></div></td>
                
            </tr>
            <tr>
                <td align="center"><strong>Keynote 3: Emerging Memory Technologies Challenges and Research Directions</strong><br/>Chair: Renuka Rajan (IBM)</td>
                <td align="center">9:30 - 10:30</td>
                <td align="center">Hemangee Kapoor (IIT Guwahati)</td><td align="center"> 10:15 - 10:30</td>
            </tr>
            <tr>
                <td align="center"><strong>Study Abroad: Opportunities, Scholarships, etc.</strong><br/>Chair: Neeldhara Misra (IIT Gandhinagar)</td>
                <td align="center">10:30 -11:10</td>
                <td align="center">Sushmita Gupta (IMSc)</td><td align="center">11:00 - 11:10</td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Coffee Break (11:10 - 11:25)</strong></div></td>
            </tr>
            <tr>
                <td rowSpan="2" align="center"><strong>Importance of Conversations in Academia &amp; Industry</strong><br/>Chair: Lawqueen Kanesh (IIT Jodhpur)</td>
                <td rowSpan="2" align="center">11:25 -12:45</td>
                <td align="center">Sriparna Saha (IIT Patna) -- Summarization Systems --11:25 - 11:55</td>
                <td align="center">11:55 - 12:05</td>
            </tr>
            <tr>
                <td align="center">Jayashree Mohan (Microsoft) --The power of conversations : Talk your way to opportunities --12:05 - 12:35</td>
                <td align="center">12:35 - 12:45</td>
            </tr>
            
            <tr>
                <td colSpan="4" align="center"><div ><strong>Lunch (12:45 - 2:00)</strong></div></td>
            </tr>
            <tr>
                <td align="center"><strong>Activity on Mental Health: Dealing with Stress, Anxiety, etc. &amp; General Wellbeing</strong><br/>Chair: Pallavi Jain (IIT Jodhpur)</td>
                <td align="center">2:00 - 2:45</td>
                <td align="center">Shipra Singh --Mental Health Matters</td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Balancing Personal and Professional Lives</strong><br/>Chair: 	Mitali Mukerjee (IIT Jodhpur)</td>
                <td align="center">2:45 - 3:15</td>
                <td align="center">Suchetana Chakraborty (IIT Jodhpur) -- Balancing work-life in Academics</td>
                <td align="center">3:15 - 3:25</td>
            </tr>
            <tr>
                <td rowSpan="2" align="center"><strong>Breaking Barriers: Inspiring Stories</strong><br/>Chair: Romi Banerjee (IIT Jodhpur)</td>
                <td rowSpan="2" align="center">3:25 - 4:45</td>
                <td align="center">Arpita Patra (IISc) -- Miles to Go before I sleep... -- 3:25 - 3:55</td>
                <td align="center">3:55 - 4:05</td>
                </tr>
                <tr>
                <td align="center">Shukla Bose (Parikrma Humanity Foundation) -- 4:05 - 4:35</td>
                <td align="center">4:35 - 4:45</td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Activity 3: Ask me anything! (4:45-5:30)</strong><br/> Moderator: Richa Singh (IIT Jodhpur)</div></td>
                
                </tr>
                <tr>
                <td colSpan="4" align="center"><div ><strong>Closing of Event (5:30 - 5:45)</strong></div></td>
            </tr>
            </tbody>
            </table>
            </div></div>
        </>
    )
}

export default Schedule;