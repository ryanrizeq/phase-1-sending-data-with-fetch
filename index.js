function submitData(userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail
    };
    
    const configurationObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo),
    }
    
    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((object) => {
            const body = document.querySelector('body');
            const newID = document.createElement('p');
            newID.textContent = object['id'];
            body.appendChild(newID);
        })
        .catch((error) => {
            const body = document.querySelector('body');
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error['message'];
            body.appendChild(errorMessage);
        })
}
