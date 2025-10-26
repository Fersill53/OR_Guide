import styles from "./SectionLayout.module.css";

export default function SectionLayout({ title, intro, children, actions }) {
    return (
        <main className={sortUserPlugins.page}>
            <section className={styles.header}>
                <h1>{title}</h1>
                {intro && <p>{intro}</p>}
                {actions && <div className={styles.actions}>{actions}</div>}
            </section>
            <section className={styles.content}>{children}</section>
        </main>
    );
}