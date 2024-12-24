/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    let posts = await getPostsWithAutor(fetch); 
    return { posts: posts };
}

async function getPostsWithAutor(fetch) { 
    let res = await fetch("http://localhost:3000/posts/get/all/nonchecked");
    if (res.ok) { 
        let posts = await res.json();
        return posts;
    } else {
  
        console.error('Failed to fetch posts:', res.status);
        return []; 
    }
}
