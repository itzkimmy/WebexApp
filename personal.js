document.getElementById('greenlogin').addEventListener('click', animate);

function animate() {
    const token = document.getElementById('tokenfield').value

    if (!token) {
        alert('Please enter a valid access token');
        return;
    }
    
    document.getElementById('darkoverlay').classList.add('darkoverlay2');

    const webexlogo=hidedive('webexlogo');
    const accesstokenlabel=hidedive('accesstokenlabel');
    const tokenfield=hidedive('tokenfield');
    const greenlogin=hidedive('greenlogin');
    const back=hidedive('back');
    const roomlist=hidedive('roomlist');
    const member=hidedive('member');
    const listmember=hidedive('listmember');
    const getmember=hidedive('getmember');
    const getroomsbutton=hidedive('getroomsbutton');
    const message=hidedive('message');
    const room=hidedive('room');
    const invite=hidedive('invite');

    document.getElementById('exit').addEventListener('click', exit);
    document.getElementById('getpersonalinfo').addEventListener('click', info);

    function info() {
        fetch('https://webexapis.com/v1/people/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
            let output = '';
                output = `
                        <b>User ID :</b><br>${data.id}<br>
                        <b>Display Name :</b><br>${data.displayName}<br>
                        <b>Nickname :</b><br>${data.nickName}<br>
                        <b>First Name :</b><br>${data.firstName}<br>
                        <b>Last Name :</b><br>${data.lastName}<br>
                        <b>Email :</b><br>${data.emails}<br>
                `
            document.getElementById('personalinfo').innerHTML = output;
        })
    }
}

function exit(){
    window.location.href = "AM2111010513.html";
}

function hidedive(id) {
    return document.getElementById(id).style.display="none"
}

