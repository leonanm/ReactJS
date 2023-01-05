import {format , formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';    
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';


export function Post({author, publishedAt, content}){ 
    const [comments, setComments] = useState([
        'Post muito bacana, hein!?'
    ])

    const[newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR,
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })
    
    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    } 

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('');
    } 
    
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete){
        const commentsWhitoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWhitoutDeletedOne);
    }

    const isNewCommentEmpty= newCommentText.length == 0;

    

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content} >
                {content.map(line=> {
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>
            <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <div className={styles.feedback}> Deixe seu Feedback</div>
                <textarea
                    name = 'comment'
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid = {handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                   return <Comment key={comment} 
                   content={comment} 
                   onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}