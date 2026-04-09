import React from 'react';
import styles from '../../css/dashboard/Articles.module.css';
import { useNavigate } from 'react-router';
import { useArticles } from "../../context/ArticleContext"
import BlogDisplay from './BlogDisplay';

const Articles = () => {

    const navigate = useNavigate();
    const { articles, setArticles } = useArticles();

    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.head}>Your Articles</h3>


            {
                articles.length <= 0 ? (
                    <div className={styles.noArticles}>
                        <i className={`ri-file-text-line ${styles.icon}`}></i>
                        <h4 className={styles.headTxt}>No articles yet</h4>
                        <p className={styles.subTxt}>
                            Start writing your first article
                        </p>
                        <button className={styles.button} onClick={() => navigate("/dashboard/new")}><i className="ri-add-line"></i> Create Article</button>
                    </div>
                ) : (
                    <BlogDisplay article={articles[0]} />
                )
            }

        </div>
    )
}

export default Articles
