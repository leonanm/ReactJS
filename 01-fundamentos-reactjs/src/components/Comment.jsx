import styles from './Comment.module.css';
import { ThumbsUp, Trash }from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment({content}){
    return(
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
            <div className={styles.commentBox} >
                <div className={styles.commentContent} >
                    <header>
                        <div className={styles.authorAndTime} >
                            <strong>Diego Fernandes</strong>
                            <time title="27 de Dezembro às 14:50h" dateTime="2022-12-27 14:50" >Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>
                

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}