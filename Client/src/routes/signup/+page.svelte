<script>
    ( function proverka() {
        if(localStorage.getItem('jwt') != null) {
            window.location.href = "/"
        }
    })()
    import { Input,Button, Form, FormGroup} from '@sveltestrap/sveltestrap';
    let validated = false;

    let first_name = $state('')
    let second_name = $state('')
    let password = $state('')
    let email = $state((Math.random() + 10000).toString(36).substring(7) + '@gmail.com')
    let code = $state('')

   
    async function registration () {
        if(code == "1239") console.log("Вы админ!")
        if(!first_name || !password) {
            alert('Заполните все поля!')
            return
        }
        else {
            await fetch('http://localhost:3003/users/sign_up/default', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'first_name': first_name, 
                    'last_name': second_name,
                    'email': email,
                    'password': password,
                    'is_admin': code == "1239" ? "true" : "false"
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
    <Form {validated} on:submit={(e) => e.preventDefault()}>
    <FormGroup class="area mt-5">
        <h3 >Имя</h3>
        <Input class="area mt-2" 
            bind:value={first_name} 
            required
            placeholder="Введите Имя"></Input>
    </FormGroup>
    <FormGroup class="mt-2 ">
        <h3 >Фамилию</h3>
        <Input class="area mt-2" 
            bind:value={second_name} 
            required
            placeholder="Введите Фамилию"></Input>
    </FormGroup>
    <FormGroup class="mt-2">
        <h3 >Почта</h3>
        <Input class="area mt-2" 
            value={email}
            required
            type="email"
            placeholder="Введите почту"></Input>
    </FormGroup>
    <FormGroup class="mt-3">
        <h3>Пароль</h3>
        <Input class="area mt-2" v
            bind:value={password} 
            required
            placeholder="Введите пароль"></Input>
    </FormGroup>
    <FormGroup class="mt-3">
        <h3>Пригасительный код (если имеется)</h3>
        <Input class="area mt-2" 
            bind:value={code} 
            placeholder="Введите код"></Input>
    </FormGroup>
</Form>

    <Button outline color="secondary"  on:click={registration} class="mt-3 w-25 align-self-center">Регистрация</Button>
    <p class="pt-4">Есть аккаунт? <br><a href="/signin">Войти!</a></p>
</div>

<style>

    h2,h3,a,p{
        text-align: center;
        font-family: 'Maki-Sans';
    }
</style>