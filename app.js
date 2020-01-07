document.querySelector('#get-jokes').addEventListener('click', getJokes);

function getJokes (e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const response = JSON.parse(this.responseText);


            let output = '';
            if(response.type === 'success' && number != '') {
                response.value.forEach(function (joke) {
                    output += `<li class="flow-text white-text">${joke.joke}</li><br>`;
                });
            } else {
                output += '<li">Something Went Wrong</li">'
            }

            xhr.onerror = function() {
                console.log()
            }
            document.querySelector('#jokes').innerHTML = output;
        }
    }


    xhr.send();

    e.preventDefault();
}