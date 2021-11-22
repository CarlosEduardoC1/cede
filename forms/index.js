

function sendMail() {
    event.preventDefault()
    let url = "https://api-mail-cede.herokuapp.com/send-mail";
    // let url = "http://192.168.1.5:4000/send-mail";
    let nome = document.getElementById("name").value;
    let assunto = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("message").value;
    let body = { nome: nome, email: email, assunto: assunto, mensagem: mensagem }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        
    // let request = new XMLHttpRequest()

    // request.open("POST", url, true)
    // request.setRequestHeader("content-type", "application/json")
    // request.send(JSON.stringify(body));
    // console.log(body);

    // request.onload = function () {
    //     console.log(this.responseText);
    // }
    // return request.responseText;
    // req
}