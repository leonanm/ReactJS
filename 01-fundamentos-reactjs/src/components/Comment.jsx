import styles from './Comment.module.css';
import { ThumbsUp, Trash }from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){

    const[likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

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

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>
                

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}