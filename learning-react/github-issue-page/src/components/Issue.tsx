import { useState } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function IssueMenu() {
    const [input, setInput] = useState('is:issue is:open ');
    const caretDown: IconProp = ['fas', 'caret-down'];
    const magnifyingGlass: IconProp = ['fas', 'magnifying-glass'];

    return (
        <div className={styles.issueMenu}>
            <search className={styles.issueMenu_search}>
                <button className={styles.issueMenu__filterButton}>
                    Filters
                    <FontAwesomeIcon
                        className={styles.issueMenu__filterIcon}
                        icon={caretDown}
                    />
                </button>
                <form
                    className={styles.issueMenu__searchForm}
                    action=''
                    method='get'
                >
                    <FontAwesomeIcon
                        className={styles.issueMenu__searchIcon}
                        icon={magnifyingGlass}
                    />
                    <input
                        className={styles.issueMenu__searchInput}
                        type='text'
                        name='q'
                        id='issue-search'
                        placeholder='Search all issues'
                        aria-label='Search all issues'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </search>
            <a
                className={styles.issueMenu_newIssue}
                href='/kfbkhw/zerobase-fe-22/issues/new/choose'
            >
                New issue
            </a>
        </div>
    );
}

function IssueContent() {
    const lightbulb: IconProp = ['fas', 'lightbulb'];
    return (
        <div className={styles.issueContent}>
            <div className={styles.issueContent_header}></div>
            <div className={styles.issueContent_list}></div>
            <div className={styles.issueContent_tip}>
                <FontAwesomeIcon icon={lightbulb} />
                <strong>ProTip!</strong>
                Click a checkbox on the left to edit multiple issues at once.
            </div>
        </div>
    );
}

export default function Issue() {
    return (
        <section className={styles.Issue}>
            <h1 className={styles.sr_only}>Issues: kfbkhw/zerobase-fe-22</h1>
            <IssueMenu />
            <IssueContent />
        </section>
    );
}
