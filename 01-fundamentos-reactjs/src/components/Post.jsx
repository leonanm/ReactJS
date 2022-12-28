import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/leonanm.png"/>
                    <div className={styles.authorInfo} >
                        <strong>Leonan Martins</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="27 de Dezembro às 14:50h" dateTime="2022-12-27 14:50" >Publicado há 1h</time>

            </header>

            <div className={styles.content} >
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '} <a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto </a>{' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <div className={styles.feedback}> Deixe seu Feedback</div>
                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}