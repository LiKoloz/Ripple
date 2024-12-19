/** @type {import('./$types').PageLoad} */
export async function load({params}){
    let user = await getData(params.user_Id);
    console.log(user)
    return {id: params.user_Id, email : user.email, nick: user.first_name, password: user.password};
}

async function getData(id) {
    const res = await fetch(`217.114.0.104:3000/users/get/${id}`);

    const user = await res.json(); // Используем json() для получения данных

    // Логируем полученные данные
    console.log(user);

    return user;
}