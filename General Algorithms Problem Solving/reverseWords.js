//reverse words

function reverseWords(string){
    var revArr = [];
    var arr = string.split(" ");
    arr.forEach(element => {
        var revstring = "";
        element.split('').forEach(tmp =>{
            revstring = tmp+revstring;
        });
        revArr.push(revstring);
    });
    return revArr.join(" ");
}
var ans = reverseWords("Hello my name is Ishant");
console.log(ans);
