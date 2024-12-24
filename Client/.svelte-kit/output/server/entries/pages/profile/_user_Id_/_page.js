async function load({ params }) {
  let user = await getData(params.user_Id);
  console.log(user);
  return { id: params.user_Id, email: user.email, first_name: user.first_name, last_name: user.last_name, password: user.password };
}
async function getData(id) {
  const res = await fetch(`http://localhost:3000/users/get/${id}`);
  const user = await res.json();
  console.log(user);
  return user;
}
export {
  load
};
