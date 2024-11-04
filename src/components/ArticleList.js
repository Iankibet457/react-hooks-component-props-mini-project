import Article from "./Article"
function ArticleList({posts}){
    return(
        <div>
            <main>
            {posts.map((post,index)=>
            <Article
            title={post.title}
            date={post.date}
            preview={post.preview}
            key = {index}
            
            />
            )}    

            </main>
        </div>
    )
}


export default ArticleList