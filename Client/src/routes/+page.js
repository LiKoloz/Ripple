/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let posts = await getPostsWithAutor(); 
    return { posts: posts };
}

async function getPostsWithAutor() { 
    let res = await fetch("http://localhost:3000/posts/get/all/checked");
    if (res.ok) { 
        let posts = await res.json();
        return posts;
    } else {
        console.error('Failed to fetch posts:', res.status);
        return []; 
    }
}
