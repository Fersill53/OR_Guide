import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";

export default function TopNav() {
    return (
        <header className={styles.wrap}>
            <div className={styles.brand}>OR Guide</div>
            <nav className={styles.nav}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.link}>Home</NavLink>
                <NavLink to="/specialties" className={({isActive}) => isActive ? styles.active : styles.link}>Specialties</NavLink>
                <NavLink to="/procedures" className={({isActive}) => isActive ? styles.active : styles.link}>Procedures</NavLink>
            </nav>
        </header>
    );
}