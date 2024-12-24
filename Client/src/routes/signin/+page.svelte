<script>
    import { Input,Button, Form, FormGroup } from '@sveltestrap/sveltestrap';

    (function proverka() {
        if(localStorage.getItem('jwt') != null) {
            window.location.href = "/"
        }
    })() 

    let login = $state('')
    let password = $state('')
    let validated = false;

    async function signIn () {
        let res = await fetch('http://localhost:3003/users/sign_in/default', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'email': login, 
                'password': password
            })
        })
        if(res.ok) {
            let data = await res.text();
            data = JSON.parse(JSON.parse(JSON.parse(JSON.stringify(data))))
            for(let i in data.user) {
                localStorage.setItem(i,data.user[i])
            }
            localStorage.setItem('jwt', data.token)
            window.location.href = "/"
        }
    }
</script>

<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center" >
    <h2 class="">Вход</h2>
    <hr class="mb-3 mt-2">
    <Form {validated} on:submit={(e) => e.preventDefault()}>
    <FormGroup class="area mt-5">
        <h3 >Email</h3>
        <Input class="area mt-2" 
            bind:value={login} 
            required
            type="email"
            placeholder="Введите никнейм"></Input>
    </FormGroup>
    <FormGroup class="area mt-3">
        <h3>Пароль</h3>
        <Input class="area mt-2"
            type="password"
            required
            bind:value={password} 
            placeholder="Введите пароль"></Input>
    </FormGroup>
    <div class="d-flex justify-content-center">
        <Button outline color="secondary" type="submit" on:click={async ()=> await signIn()} class="mt-3 w-25 align-self-center">Войти</Button>
    </div>
    </Form>
    <p class="pt-4">Нету аккаунта? <br><a href="/signup">Зарегиститруйтесь!</a></p>
</div>

<style>

    h2,h3,a,p{
        text-align: center;
        font-family: 'Maki-Sans';
    }
</style>