<script>
    import {Card, CardHeader, CardBody, CardTitle, CardText,CardSubtitle, Icon} from '@sveltestrap/sveltestrap';
    let {data} = $props()

    let posts = data.posts

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
            <Card>
                <CardHeader>
                    <CardTitle>{post.author} ({post.author_id})</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>{post.title}</CardSubtitle>
                    <CardText>{post.content}</CardText>
                </CardBody>
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