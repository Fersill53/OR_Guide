import styles from "./SectionCard.module.css";

export default function SectionCard({ title, subtitle, children, onClick}) {
    return (
        <div className={styles.card} onClick={onClick} role={onClick ? "button" : undefined}>
            <div className={styles.head}>
                <h3>{title}</h3>
                {subtitle && <p className={styles.sub}>{subtitle}</p>}
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    );
}