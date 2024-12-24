/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let post = await getPostsWithAutor(params); 
    return { post: post };
}

async function getPostsWithAutor(params) { 
    let res = await fetch("http://localhost:3000/posts/get/" + params.post_Id);
    if (res.ok) { 
        let comments = await fetch("http://localhost:3000/comments/get/" + params.post_Id);
        if(comments.ok) {
            let post = await res.json();
            post.comments = await comments.json();
            let author = await fetch("http://localhost:3000/users/get/" + post.userId).then(res => res.json());
            post.author = author.first_name + ' ' + author.last_name;
            console.log(post.author)
            for await(let comment of post.comments) {
                let user = await fetch("http://localhost:3000/users/get/" + comment.userId);
                if(user.ok) {
                    comment.user = await user.json();
                }
            }
            return post;
        }
        else {
            console.error('Failed to fetch comments:', comments.status);
            return
        }
    } else {
        console.error('Failed to fetch posts:', res.status);
        return []; 
    }
}
