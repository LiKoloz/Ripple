<script>
    import {Card, CardHeader, CardBody, CardTitle, CardText,CardFooter,CardSubtitle, Input, Button, Form} from '@sveltestrap/sveltestrap';

    let {data} = $props()

    let post = data.post
    let new_comment = $state('')
    let validated = false;
    
    let add_like = async (post_id) => {
        let res = await fetch('http://localhost:3000/posts/like/' + post_id, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({'user_id': localStorage.getItem('id')})
        });
        if(res.ok) {
            location.reload();
        }
        else {
            console.log(res)
        }
    }

    let add_comment = async (post_id) => {
        if(new_comment.length == 0) return
        let res = await fetch('http://localhost:3000/comments/add/' + post_id, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({'user_id': localStorage.getItem('id'), 'content': new_comment})
        });
        if(res.ok) {
            location.reload();
        }
        else {
            console.log(res)
        }
    }
    let delete_comment = async (comment_id) => {
        let res = await fetch('http://localhost:3000/comments/delete/' + comment_id, {method: 'DELETE'});
        if(res.ok) {
            location.reload();
        }
        else {
            console.log(res)
        }
    }
</script>
<div class="pt-3 pb-3">
    <Card >
        <CardHeader>
            <CardTitle>
                <a href="/profile/{post.author_id}" class="text-decoration-none text-black">{post.author}</a>
            </CardTitle>
        </CardHeader>
        <CardBody>
            <CardSubtitle>{post.title}</CardSubtitle>
            <CardText>{post.content}</CardText>
        </CardBody>
        <CardFooter class="d-flex justify-content-around">
            <div class="d-flex align-items-center flex-row gap-2">
              <button type="button" onclick={() => add_like(post.id)} class="btn btn-outline"> 
                <div class="d-flex align-items-center flex-row gap-2"> 
                    <i class="bi bi-heart"></i> {post.likes_count}
                </div>
              </button>
            </div>
            <div class="d-flex align-items-center flex-row gap-2">
                <button type="button" onclick={() => add_like(post.id)} class="btn btn-outline"> 
                  <div class="d-flex align-items-center flex-row gap-2"> 
                    <i class="bi bi-reply"></i> {post.repost_count}
                  </div>
                </button>
              </div>
        </CardFooter>
    </Card>
    <hr>
    {#each post.comments as comment}
        <div class="pt-2 d-flex" style="max-width: 90vh; ">
            <Card class="w-100">
                <CardHeader>
                    {#if comment.user.is_admin == true}
                    <CardTitle >
                        <a href="/profile/{comment.userId}" class="text-decoration-none text-black">{comment.user.first_name} {comment.user.last_name}</a>
                        <i class="bi bi-check2-circle text-primary"></i>
                    </CardTitle>
                    {:else}
                    <CardTitle color="danger">
                        <a href="/profile/{comment.userId}" class="text-decoration-none text-black">{comment.user.first_name} {comment.user.last_name}</a>
                    </CardTitle>
                    {/if}
                </CardHeader>   
                <CardBody>
                    <CardText>{comment.content}</CardText>
                </CardBody>
                {#if localStorage.getItem('is_admin') == 'true' || localStorage.getItem('id') == comment.userId}
                <CardFooter class="d-flex justify-content-center">
                    <Button onclick={async () => await delete_comment(comment.id)} class="ms-2 " color=""><i class="bi bi-trash"></i></Button>
                </CardFooter>
                {/if}
            </Card>
        </div>
    {/each}
    <Form class="d-flex flex-row gap-1 " {validated} on:submit={(e) => e.preventDefault()}>
        <Input class="area mt-2" 
        placeholder="Введите комментарии"
         bind:value={new_comment}
         required 
         feedback="Введите комментарии"></Input>
        <Button on:click={() => add_comment(post.id)} class="mt-2  h-25 "><i class="bi bi-send"></i></Button>
    </Form>
</div>