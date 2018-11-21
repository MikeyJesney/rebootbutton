// var prompt = require('prompt');

// var evxIp = "";
// var modemIp = "";

//   prompt.start();

//   prompt.get(['EVX-IP', 'Modem-IP'], function (err, result) {
//     if (err) { return onErr(err); }
//     evxIp = result['EVX-IP'];
//     modemIp = result['Modem-IP'];
//     console.log('Command-line input received:');
//     console.log( 'EVX-IP ' + evxIp,  'Modem-IP ' + modemIp);
//   });

//   function onErr(err) {
//     console.log(err);
//     return 1;
//   }








  var Client = require('ssh2').Client;
 
var conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.shell(function(err, stream) {
    if (err) throw err;
    stream.on('close', function() {
      console.log('Stream :: close');
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
    stream.end('ls -l\nexit\n');
  });
}).connect({
  host: evxIp,
  username: 'root',
  password: "psdkreodds /n 3v0lv1ng /n"
});





// if(BA){
    
//     print("root /n psdkreodds /n")
//     modemscript();
// }else if(Nexus){
//     print("root /n 3v0lv1ng /n");
//     modemscript();
// }






// function modemscript(input){

//     if("broadband router%"){ //billion
//         print("admin /n 3volv1ng /n reboot")
//     }else if(" "){ //speedtouch
//         print("Administrator /n 3v0lv1ng /n system reboot")
//     }else if("VMG1312-B10A%"){ // zyxel
//         print("admin /n 3v0lv1ng /n reboot")
//     }else if("password:"){ //tp-link
//         print("3v0lv1ng /n sys reboot");
//     } }