document.getElementById('next').addEventListener('click', animate2);

function animate2() {

    const webexlogo=hidedive('webexlogo');
    const accesstokenlabel=hidedive('accesstokenlabel');
    const tokenfield=hidedive('tokenfield');
    const greenlogin=hidedive('greenlogin');
    const personalinfo=hidedive('personalinfo');
    const getpersonalinfo=hidedive('getpersonalinfo');
    const next=hidedive('next');
    const back=appeardiv('back');
    const roomlist=appeardiv('roomlist');
    const member=appeardiv('member');
    const listmember=appeardiv('listmember');
    const getmember=appeardiv('getmember');
    const getroomsbutton=appeardiv('getroomsbutton');
    const message=appeardiv('message');
    const room=appeardiv('room');
    const invite=appeardiv('invite');

    const token = document.getElementById('tokenfield').value

    document.getElementById('exit').addEventListener('click', exit);
    document.getElementById('getroomsbutton').addEventListener('click', getroom);

    function getroom(){
        fetch('https://webexapis.com/v1/rooms', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res)=> res.json())
        .then((data)=> {
            let output = '';
            for(let i = 0; i < data.items.length; i++) {
            if (i === 5) {
                break;
            }
            output += `
                <b>Room ID : </b>${data.items[i].id}<br>
                <b>Title : </b>${data.items[i].title}<br>
                <b>Date Created : </b>${data.items[i].created}<br>
                <b>Last Activity : </b>${data.items[i].lastActivity}<br><br>
            `
            }
            document.getElementById('roomlist').innerHTML = output;
        })
    }
    document.getElementById('formid').addEventListener('submit', sendText);

    function sendText(e){
        e.preventDefault();

        const token = document.getElementById('tokenfield').value
        let message = document.getElementById('messagetext').value;
        let roomid = document.getElementById('roomid').value;

        if (!roomid) {
            alert('Please enter a room ID');
            return;
        }

        fetch('https://webexapis.com/v1/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'roomId': roomid,
                'text': message
            })
            })
            .then (function (response) {
                return response.json()
            })
            .then (function (data) {
                console.log(data);
            })
    }
    document.getElementById('createroom').addEventListener('click', create);

    function create(e){
        e.preventDefault();

        const token = document.getElementById('tokenfield').value
        let room = document.getElementById('roomName').value;

        if (!room) {
            alert('Please enter a room name');
            return;
        }

        fetch('https://webexapis.com/v1/rooms', {
            method: 'POST',
            headers:
                {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            body:JSON.stringify({
                'title': room
            })
        })
            .then(function (res){
                return res.json()
            })
            .then(function(data){
                console.log(data);
            })
    }
    
    document.getElementById('inviteppl').addEventListener('click', invPpl);

    function invPpl(e){
        e.preventDefault();

        const token = document.getElementById('tokenfield').value
        let roomId2 = document.getElementById('roomid2').value
        let email = document.getElementById('emailid').value

        if (!roomId2 && !email) {
            alert('Please enter room ID and Email');
            return;
        }
        

        fetch ('https://webexapis.com/v1/memberships', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'roomId' : roomId2,
                'personEmail' : email
                })
            })
            .then (function (response) {
                return response.json()
            })
            .then (function (data) {
                console.log(data);
        })
    }

    document.getElementById('getmember').addEventListener('click', listMember);

    function listMember(e){
        e.preventDefault();

        const token = document.getElementById('tokenfield').value
        let roomId = document.getElementById('roomid3').value

        if (!roomId) {
            alert('Please enter a Room ID');
            return;
        }

        fetch(`https://webexapis.com/v1/memberships?roomId=${roomId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res)=> res.json())
        .then((data)=> {
            let output = '';
            for(let i = 0; i < data.items.length; i++) {    
            output += `
            <b>Room ID : </b>${data.items[i].roomId}<br>
            <b>Person Email:</b> ${data.items[i].personEmail}<br>
            <b>Display Name : </b>${data.items[i].personDisplayName}<br><br>
            `
            }
            document.getElementById('member').innerHTML = output;
            
        })
    }
}

function appeardiv (id) {
    return document.getElementById(id).style.display="unset";
}

function hidedive (id) {
    return document.getElementById(id).style.display="none";
}