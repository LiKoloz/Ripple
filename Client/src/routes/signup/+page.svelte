<script>
    ( function proverka() {
        if(localStorage.getItem('jwt') != null) {
            window.location.href = "/"
        }
    })()
    import { Input,Button } from '@sveltestrap/sveltestrap';

    let login = $state('')
    let password = $state('')
    let email = $state((Math.random() + 10000).toString(36).substring(7))

    async function registration () {
        if(!login || !password) {
            alert('Заполните все поля!')
            return
        }
        else {
            await fetch('http://217.114.0.104:3003/users/sign_up/default', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'first_name': login, 
                    'last_name': " ",
                    'email': email,
                    'password': password,
                    'is_admin': 'false'
                })
            }).then( async (response) => {
                if (response.ok) {
                    var user = await response.json();
                    for (let i in user) {
                        localStorage.setItem(i, user[i]);
                    }
                    window.location.href = "/";
                }
            })
        }
    }
</script>

<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center" style="width: 100%;">
    <h2 class="">Регистрация</h2>
    <hr class="mb-3 mt-2">
    <div class="area mt-5">
        <h3 >Логин</h3>
        <Input class="area mt-2" 
            bind:value={login} 
            placeholder="Введите никнейм"></Input>
    </div>
    <div class="mt-2">
        <h3 >Почта</h3>
        <Input class="area mt-2" 
            disabled
            value={email}
            placeholder="Введите почту"></Input>
    </div>
    <div class="mt-3">
        <h3>Пароль</h3>
        <Input class="area mt-2" v
            bind:value={password} 
            placeholder="Введите пароль"></Input>
    </div>
    <Button outline color="secondary"  on:click={registration} class="mt-3 w-25 align-self-center">Регистрация</Button>
    <p class="pt-4">Есть аккаунт? <br><a href="/signin">Войти!</a></p>
</div>

<style>

    h2,h3,a,p{
        text-align: center;
        font-family: 'Maki-Sans';
    }
</style>