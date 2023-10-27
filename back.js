document.getElementById('back').addEventListener('click', animate3);

function animate3() {

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
    const personalinfo=appeardiv('personalinfo');
    const getpersonalinfo=appeardiv('getpersonalinfo');
    const next=appeardiv('next');

    const token = document.getElementById('tokenfield').value

    document.getElementById('roomlist').innerHTML = '';
    document.getElementById('member').innerHTML = '';
    document.getElementById('personalinfo').innerHTML = '';
}

function appeardiv (id) {
    return document.getElementById(id).style.display="unset";
}

function hidedive (id) {
    return document.getElementById(id).style.display="none";
}