var path = process.argv;
// console.log(path[2]);
var fileName = path[2];
var newData;
var fs = require('fs');
fs.readFile(fileName, function(error, data) {
  if (error) {
    console.error('Error reading file: ' + error);
  } else {
    newData = data.toString();
    var myObj = parsing(newData);
    // savingInFile(myObj);

  }
});

var parsing = function(newData){
  var res = newData.split("\n");
  console.log(res);
  console.log("");
  function isCorrect(el){
    return el.trim();
  }
  function isNotComment(el){
    if(el.trim().charAt(0) === ";"){
    return false;
  }
    else{
      return true;
    }
  }
  var filtered = res.filter(isCorrect);
  filtered = filtered.filter(isNotComment);

  console.log(filtered);
  // res[0] = res[0].split("[");
  // res[0] = (res[0].toString()).split("]");
  // var key = res[0];
  // var obj = {};
  // var allObj = {};
  // res[1] = res[1].split("=");
  // allObj[res[1][0]]= res[1][1];

  // res[2] = res[2].split("=");
  // allObj[res[2][0]]= res[2][1];

  // res[3] = res[3].split("=");
  // allObj[res[3][0]]= res[3][1];
  // obj[key] = allObj;
  // console.log('File contents: ' +res[1][0]);
  // console.log(res);
  // console.log(obj);
  // return obj;
}
var savingInFile = function(iniObject){
  var result = JSON.stringify(iniObject);
  console.log(result);
  fs.writeFile("/home/maria/NodeJS HackBG/Node-JS---HackBulgaria/week0/result",result, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  });
}
