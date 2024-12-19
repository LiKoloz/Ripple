/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    let posts = await getPostsWithAutor(fetch); // Передаем fetch как параметр
    return { posts: posts };
}

async function getPostsWithAutor(fetch) { // Принимаем fetch как аргумент
    let res = await fetch("http://217.114.0.104:3000/posts/get/all");
    if (res.ok) { 
        let posts = await res.json();
        return posts;
    } else {
        // Обработка ошибки, если запрос за постами не удался
        console.error('Failed to fetch posts:', res.status);
        return []; // Возвращаем пустой массив или обрабатываем иначе
    }
}
