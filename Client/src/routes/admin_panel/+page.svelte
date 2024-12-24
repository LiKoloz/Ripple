<script>
    import {Card, CardHeader, CardBody, CardTitle, CardFooter,CardText,CardSubtitle, Button} from '@sveltestrap/sveltestrap';

    let {data} = $props()
    let posts = data.posts

    let accept_post = async (post_id, reload = false) => {
        let res = await fetch('http://localhost:3000/posts/check/' + post_id, {method: 'GET'});
        if(res.ok && reload == true) {
            location.reload();
        }
        else {
            console.log(res)
        }
    }
    let reject_post = async (post_id, reload = false) => {
        let res = await fetch('http://localhost:3000/posts/delete/' + post_id, {method: 'GET'});
        if(res.ok && reload == true) {
            location.reload();
        }
        else{
            console.log(res)
        }
    }
    let accept_all_posts = async () => {
        for await (let post of posts) {
            await accept_post(post.id)
        }
        location.reload();
    }
    let reject_all_posts = async () => {
        for await (let post of posts) {
            await reject_post(post.id)
        }
        location.reload();
    }
</script>
<div>
    <div class="d-flex justify-content-center">
        <Button onclick={async () => await accept_all_posts()} class="ms-2 border border-dark" color =""> Опубликовать все посты <i class="bi bi-check-circle"></i></Button>
        <Button onclick={async () => await reject_all_posts()} class="ms-2 border border-dark" color="">Удалить все посты <i class="bi bi-x-circle"></i></Button>
    </div>
   
    <div class="pt-3 pb-3">
        {#each posts as post} 
            <div class="pt-2" style="max-width: 90vh;">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <a href="/profile/{post.author_id}" class="text-decoration-none text-black">{post.author}</a>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle>{post.title}</CardSubtitle>
                        <CardText>{post.content}</CardText>
                    </CardBody>
                    <CardFooter class="d-flex justify-content-center">
                        <Button onclick={async () => await accept_post(post.id, true)} color ="success"><i class="bi bi-check-circle"></i></Button>
                        <Button onclick={async () => await reject_post(post.id, true)} class="ms-2" color="danger"><i class="bi bi-x-circle"></i></Button>
                    </CardFooter>
                </Card>
            </div>
           
        {/each}
    </div>
</div>