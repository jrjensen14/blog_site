async function loginFormHandler(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-login');
  const passwordEl = document.querySelector('#password-login');
  fetch("/api/user/login", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};
//   if (username && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'post',
//       body: JSON.stringify({
//         username,
//         password
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

async function signupFormHandler(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-signup');
  const passwordEl = document.querySelector('#password-signup');
  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};
//   if (username &&  password) {
//     const response = await fetch('/api/users', {
//       method: 'post',
//       body: JSON.stringify({
//         username,
//         // email,
//         password
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     if (response.ok) {
//       console.log('success');
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);