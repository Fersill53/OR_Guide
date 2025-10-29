import { link } from "react-router-dom";
import SectionLayout from "../../layouts/SectionLayout.jsx";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <SectionLayout
            title="OR Guide"
            intro="Quick accurate OR setup for new employees and students."
            actions={<Link className={styles.cta} to="/specialties">Browse Specialties</Link>}
        >
            <div className={styles.heroCard}>
                <h2>What you can do here</h2>
                <ul>
                    <li>Browse procedure by specialty</li>
                    <li>Open a case for positioning, instruments, supplies</li>
                    <li>See meds, sutures, and closing preferences</li>
                </ul>
            </div>
        </SectionLayout>
    );
}