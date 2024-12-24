<script>
    let {children} = $props()
    import { Container, Icon } from '@sveltestrap/sveltestrap';
    import { on } from 'svelte/events';
    import { get } from 'svelte/store';


    let is_admin = $state(localStorage.getItem('is_admin'))
    async function checkJwt (jwt) {
        return await fetch('http://localhost:3003/users/check_token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({token: jwt})} , {
        })
    }

    async function checkIfAuth  () {
        let jwtToken = localStorage.getItem('jwt');
        await console.log(jwtToken)
        console.log('jwtToken', jwtToken)
        
        if(jwtToken == null || jwtToken == undefined)  {
            console.log('jwtToken', jwtToken)
            window.location.href = '/signin'
            return
        }
        else {
            console.log('jwtToken VOT ETOTO'+' '+ jwtToken)
            await checkJwt(jwtToken).then( (res) =>{
                if(res.status == 500){
                    console.log('jwtToken', jwtToken)
                    window.location.href = '/signin'
                } else {
                    window.location.href = '/profile/'+ localStorage.getItem('id');
                }
            })
        }
    }
</script>

<div class="d-flex" style="flex-direction: column; height: 100%;">
    <div style="background-color: #D3D3D3; flex: 0 0 7%; border-bottom: 1px solid #000"> 
        <div class="container pt-2" style="margin-bottom: -0.5em;">
            <div class="row">
            <div class="col">
                <Container fluid  style="margin-left: -50% !important;">
                    <div>
                    <a href="/">
                        <h2 class='d-inline' style="font-family: 'Tesla'; ">Ripple</h2>
                    </a>
                    </div>
                    </Container>
            </div>
            <div class="col-9"></div> 
            <div class="col d-flex justify-content-center align-items-center">
                <a onclick={async () => await checkIfAuth()} href="/" aria-label="toProfile">
                    <i class="bi bi-person-circle"></i>
                </a>
                {#if localStorage.getItem('jwt') != null && is_admin == 'true'}
                <a href="/admin_panel" id='archive' aria-label="toProfile">
                    <i class="bi bi-archive"></i>
                </a>
                {/if}
            </div>
            </div>

        </div>
    </div>
    <div style="background-color: #E0E0E0; flex: 0 0 83%;" class="d-flex justify-content-center" >
        <div class="w-25"></div>
            <div class="flex-grow-1 pt-3 pb-3">
                {@render children()}
            </div>
        <div class="w-25"></div>
    </div>
    <footer class="pt-2" style="flex: 0 0 10%;">
        <div style="font-family: 'Tesla';">
            <h3 style="padding-top: 10%; padding-left: 10%; " >@Ripple</h3>
        </div>
        <div>
            <p>Контакты:  <b style="font-family: 'Tesla';">support@ripple.com </b>   
            <br>Следите за нами в социальных сетях:  <b style="font-family: 'Tesla';">@RippleSocial</b>
            </p>
        </div>
    </footer>

</div>

<style>
    i{
       font-size: 1.3em;
       cursor: pointer;
    }
    footer{
        border-top: 1px solid #000;
        background-color: #D3D3D3;
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
        justify-content: space-around;
    }
    p{
        white-space: pre-line;
        text-align: center;
    }
    a{
        text-decoration: none;
        color: #000
    }
    #archive{
        margin-left: 2vh;
    }
</style>
