async function login (){
    const user = {
        username: usernameInput.value, 
        password: passwordInput.value, 
    };

    const response await fetch("http://localhost:3000/api/players/login", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify(user), 
    });

    const data = await response.json();
    console.log(data);
}