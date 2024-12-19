<script>
    import { Input,Button } from '@sveltestrap/sveltestrap';

    (function proverka() {
        if(localStorage.getItem('jwt') == null) {
            window.location.href = "/"
        }
    })()

    let title = $state('')
    let mainText = $state('')

    async function create_post() {
        var res = await fetch('217.114.0.104:3003/posts/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'title': title, 
                'content': mainText,
                'user_id': localStorage.getItem('id'),
                'token': localStorage.getItem('jwt')
            })
        })
        if(res.ok) {
            title = ''
            mainText = ''
            alert('Пост создан')
        }
    }
</script>

<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center" >
    <h2 class="">Создание поста</h2>
    <hr class="mb-3 mt-2">
    <div class="area mt-5">
        <h3 >Заголовок</h3>
        <Input class="area mt-2" 
            bind:value={title} 
            placeholder="Введите заголовок"></Input>
    </div>
    <div class="area mt-3">
        <h3>Содержание</h3>
        <Input type="textarea" class="area mt-2  "
        style="height: 30vh;"
            bind:value={mainText} 
            placeholder="Введите содержание"></Input>
    </div>
    <Button outline color="secondary"   on:click={async ()=> await create_post()} class="mt-3 w-25 align-self-center">Опубликовать</Button>
</div>

<style>

    h2,h3{
        text-align: center;
        font-family: 'Maki-Sans';
    }
</style>