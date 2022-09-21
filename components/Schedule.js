/* eslint-disable react/no-unknown-property */
import React from "react";
import styles from "../styles/Home.module.css";

function Schedule() {
    return(
        <>
            <div className="sppb-addon sppb-addon-raw-html "><div className="sppb-addon-content"><h2 className="h3 text-dark-brown underlined" id="current_a"><span className="underlined-text">8th October, 2022 - Saturday</span><span className="underlined-line"></span></h2>

            <table  className={styles.table} border="white">
            <thead  className={styles.head}>
            <tr>
                <td align="center"><strong>Program</strong></td>
                <td align="center"><strong>Time (IST)</strong></td>
                <td align="center"><strong>Speaker &amp; Talk Title</strong></td>
                <td align="center"><strong>Time Slot (IST): QnA</strong></td>
            </tr></thead>
            <tbody>
            {/* <tr>
                <td align="center"><strong>Breakfast</strong></td>
                <td align="center">9:00</td>
                <td align="center"> </td>
                <td align="center"></td>
            </tr> */}
            <tr>
                <td align="center"><strong>Inaugural Session</strong></td>
                <td align="center">10:00 - 10:15</td>
                <td align="center">Director and HoD</td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Talk 1 (IITH)</strong><br/></td>
                <td align="center">10:15 - 11:00</td>
                <td align="center">Dr. Raji (IITH)</td>
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
                <td colSpan="4" align="center"><div ><strong>Lunch Break (1:00 - 2:00)</strong></div></td>
            </tr>
            <tr>
                <td align="center"><div ><strong>Talk 3 (MSR, Banglore)</strong></div></td>
                <td align="center">2:00 - 2:45</td>
                <td align="center">Sunanya - NLP (overview of her technical/research journey/how is to work at a research lab) </td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Talk 4 (IITH)</strong></td>
                <td align="center">2:45-3:30</td>
                <td align="center">Mahiti (IITH) (Mental health for women in science)</td>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center"><strong>Past, Present and Future of Women in Science &amp; Engineering</strong><br/>Chair: Pallavi Jain (IIT Jodhpur)</td>
                <td align="center">2:45-3:15</td>
                <td align="center">Abha Sur (MIT) -- 8:00 - 8:30 &amp; Hema Murthy (IIT Madras) -- 8:30 - 9:00</td>
                <td align="center">9:00 - 9:15</td>
            </tr>
            <tr>
                <td colSpan="4" align="center"><div ><strong>Tea Break (3:30 - 3:45)</strong></div></td>
            </tr>
            
            </tbody>
            </table>
            

            
            </div></div>
        </>
    )
}

export default Schedule;