import React, { useState } from 'react';
import styles from '../../css/dashboard/BlogDisplay.module.css';

const BlogDisplay = ({ article }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.box}>
            <div className={styles.left}>
                <div className={styles.head}>
                    <span className={styles.title}> {article.title} </span>
                    <span className={styles.type}> {article.type} </span>
                </div>
                <p className={styles.desc} > {article.desc} </p>
                <p className={styles.date}> Last updated: {article.date} </p>
            </div>
            <div className={styles.right}>
                <div className={styles.iconBox} onClick={() => setOpen(prev => !prev)}>
                    <i className={`ri-more-2-line ${styles.icon}`}></i>
                </div>
                <div className={`${styles.float} ${open ? "" : styles.close}`}>
                    <button className={styles.bar}><i className="ri-eye-line"></i> View</button>
                    <button className={styles.bar}><i className="ri-eye-off-line"></i> Publish</button>
                    <button className={styles.bar}><i className="ri-pencil-line"></i> Edit</button>
                    <button className={`${styles.bar} ${styles.delete}`}><i className="ri-delete-bin-line"></i> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BlogDisplay
