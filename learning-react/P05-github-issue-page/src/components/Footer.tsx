import styles from './style.module.scss';
import githubIcon from '../img/github-icon-footer.svg';

export default function Footer() {
    const navList = [
        'Terms',
        'Privacy',
        'Security',
        'Status',
        'Docs',
        'Contact',
        'Manage cookies',
        'Do not share my personal information',
    ];

    return (
        <footer className={styles.Footer}>
            <h2 className={styles.sr_only}>Footer</h2>
            <div className={styles.footer}>
                <div className={styles.footer_title}>
                    <a
                        className={styles.footer__icon}
                        href='https://github.com'
                        title='GitHub'
                        aria-label='Homepage'
                    >
                        <img src={githubIcon} alt='Homepage' aria-hidden />
                    </a>
                    <span>© 2024 GitHub,&nbsp;Inc.</span>
                </div>
                <nav className={styles.footer_nav} aria-label='Footer'>
                    <h3 className={styles.sr_only}>Footer navigation</h3>
                    <ul className={styles.footer__navList}>
                        {navList.map((e) => (
                            <li className={styles.footer__navItem} key={e}>
                                <a href='https://github.com'>{e}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
