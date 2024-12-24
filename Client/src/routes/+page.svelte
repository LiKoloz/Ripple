<script>
    import {Card, CardHeader, CardBody, CardTitle, CardText,CardFooter,CardSubtitle} from '@sveltestrap/sveltestrap';

    let {data} = $props()

    let posts = data.posts

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
</script>
<div class="d-flex justify-content-center">
{#if localStorage.getItem('jwt') != null}
    <a href="/create_post" aria-label="create_post">
        <i class="bi bi-patch-plus" ></i>
    </a>
{/if}
</div>
<div class="pt-3 pb-3">
    {#each posts as post} 
        <div class="pt-2" style="max-width: 90vh;">
            <Card >
                <CardHeader>
                    <CardTitle>
                        <a href="/profile/{post.author_id}">{post.author}</a>
                    </CardTitle>
                </CardHeader>
                <CardBody onclick={() => location.href = "/post/" + post.id }>
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
        </div>
    {/each}
</div>

<style>
    i{
       font-size: 1.3em;
       cursor: pointer;
    }
    a{
        text-decoration: none;
        color: #000
    }
</style>