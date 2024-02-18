import styles from './style.module.scss';
import burgerMenu from '../img/burgur-menu.svg';
import githubIcon from '../img/github-icon.svg';
import navList from './Header_NavList';

function GlobalBar() {
    return (
        <div className={styles.globalBar}>
            <div className={styles.globalBar_start}>
                <button
                    className={styles.globalBar__sidePanel}
                    aria-label='Side Panel'
                >
                    <img
                        className={styles.globalBar__burgerMenu}
                        src={burgerMenu}
                        alt='Side Panel'
                        aria-hidden
                    ></img>
                </button>
                <a
                    className={styles.globalBar__homeButton}
                    href='https://github.com'
                    aria-label='Homepage'
                >
                    <img
                        className={styles.globalBar__githubIcon}
                        src={githubIcon}
                        alt='Homepage'
                        aria-hidden
                    ></img>
                </a>
                <div
                    className={styles.globalBar__breadcrumb}
                    aria-label='Breadcrumb'
                >
                    <span className={styles.repos}>kfbkhw</span>
                    <span className={styles.seperator} aria-hidden>
                        /
                    </span>
                    <span className={styles.currentRepos}>zerobase-fe-22</span>
                </div>
            </div>
            <div className={styles.globalBar_end}></div>
        </div>
    );
}

function LocalBar() {
    const currentTab = { name: 'Issues', count: '1' };

    return (
        <div className={styles.localBar}>
            <nav className={styles.localBar_nav}>
                <ul className={styles.localBar__navList}>
                    {navList.map((e) => (
                        <li
                            className={
                                e.name === currentTab.name
                                    ? styles.localBar__navItem__current
                                    : styles.localBar__navItem
                            }
                            key={e.name}
                        >
                            <img
                                className={styles.icon}
                                src={e.src}
                                alt=''
                                aria-hidden
                            />
                            {e.name}
                            {e.name === currentTab.name && (
                                <span>{currentTab.count}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default function Header() {
    return (
        <header className={styles.Header}>
            <GlobalBar />
            <LocalBar />
        </header>
    );
}
