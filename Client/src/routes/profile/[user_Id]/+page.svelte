<script>
    import { Input, Button} from '@sveltestrap/sveltestrap';

    let {data} = $props()

    let first_name = $state(data.first_name)
    let second_name = $state(data.last_name)
    let email = $state(data.email)
    let password = $state('')

    let profile_nick = $state(data.nick)
    let profile_email = $state(data.email)
    let profile_password = $state(data.password);
    (function get_user_data() {
        password = localStorage.getItem('password')
    })()
</script>

<div class="d-flex flex-column justify-content-center align-items-center"  style="max-width: 50vh; width: 100%;">
    <div class="mt-3">
        <h5>Имя</h5>
        <Input value ={first_name} disabled={true}/>
    </div>
    <div class="mt-3">
        <h5>Фамилию</h5>
        <Input value ={second_name} disabled={true}/>
    </div>
    <div class="mt-3">
        <h5>Почта</h5>
        <Input value ={email} disabled={true}/>
    </div>
    {#if data.id == localStorage.getItem('id')}
    <div class="mt-3">
        <h5>Пароль</h5> 
        <Input value ={password} disabled={true} />
    </div>
        <Button outline color="secondary"  on:click={ () => {localStorage.clear(); window.location.href = "/"}} class="mt-3 w-25 align-self-center">Выйти</Button>
    {/if}
</div>

    <style>
    div{
        width: 100%;
    }
</style>