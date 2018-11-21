var node_ssh = require('node-ssh');
var readline = require('readline-sync');

var evxIp = readline.question('EVX IP Address: ');
var evxPassword;

if (evxIp.startsWith("88.212.12") || evxIp.startsWith("88.212.13") || evxIp.startsWith("88.212.14")
) {
    evxPassword = "3v0lv1ng";
} else {
    evxPassword = "psdkreodds";
}

var ssh = new node_ssh();

ssh.connect({
    host: evxIp,
    username: 'root',
    password: evxPassword
}).then(function () {
    console.log('success');

    return ssh.execCommand('arp -n');
}).then(function (result) {
    console.log(result.stdout);
    ssh.dispose();
}).catch(console.log);




//get ip of eth1 for link 1



// function detectModem(output) {

//     if (output.contains("broadband router")) { //billion
//         print("admin /n 3volv1ng /n reboot")
//     } else if (" ") { //speedtouch
//         print("Administrator /n 3v0lv1ng /n system reboot")
//     } else if ("VMG1312-B10A%") { // zyxel
//         print("admin /n 3v0lv1ng /n reboot")
//     } else if ("password:") { //tp-link
//         print("3v0lv1ng /n sys reboot");
//     }
// }