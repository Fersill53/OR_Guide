import { Link } from "react-router-dom";
import SectionLayout from "../../layouts/SectionLayout.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import styles from "./Specialties.module.css";

const items = [
    { name: "Orthopedics", path: "/specialties/ortho", desc: "Joints, trauma, sports" },
    { name: "Neurosurgery", path: "/specialties/neuro", desc: "Spine, Crani" },
    //add General/Robots, Uro, Ob/gyn, Vascular later
];  

export default function Specialties(){
    return (
        <SectionLayout title="Specialties" intro="Choose a specialty to explore procedures.">
            {items.map(s => (
                <Link key={s.name} to={s.path} className={styles.link}>
                    <SectionCard title={s.name} subtitle={s.desc}>
                        <div className={styles.meta}>Consistent layout - Per-page CSS</div>
                    </SectionCard>
                </Link>
            ))}
        </SectionLayout>
    );
}