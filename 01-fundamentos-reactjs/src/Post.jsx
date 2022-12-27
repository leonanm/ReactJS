export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

// export default Post - desta maneira, não importa o nome que eu estou exportando pq não dará erro.

// Default Exports vs Named Exports