export async function createUser(user){

    try {
        const myData = JSON.stringify(user);
        console.log(myData)
    const response = await fetch(`https://localhost:7099/api/User/Create`,{method:'POST', headers: {
        "Content-Type": "application/json",
      },
      body: myData,
    })
    } catch (error) {
        console.log('erro',error)
    }
}

export async function loginRequest(user){

    try {
        const myData = JSON.stringify(user)
        console.log(myData)
    const response = await fetch(`https://localhost:7099/api/User/loginRequest`,{method:'POST',headers: {
        "Content-Type": "application/json",
      },
      body: myData
    })
    if (response.ok) {
        const data = await response.json(); // Tentando parsear o JSON
        console.log(data);
        return data;
    } else {
        console.error('Erro ao fazer login:', response.status, response.statusText);
        return { success: false }; // Caso o status não seja 200
    }
    } catch (error) {
    
        console.error('Error',error)
        return {success: false};
    }

    
    

}



