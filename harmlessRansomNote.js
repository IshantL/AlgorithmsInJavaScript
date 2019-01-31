
//to check if we have enough word in magzine to create note will return true or false
//try to solve it in o(n)
function harmlessRansomNote(noteText, MagzineText){
    var noteTextArray = noteText.split(" ");
    var MagzineTextArray = MagzineText.split(" ");
    var magzineWordCount = {};
    MagzineTextArray.forEach((temp) => {
        if(!magzineWordCount[temp]){
            magzineWordCount[temp] = 0;
    } else{
        magzineWordCount[temp]++;
    }
    });
    var noteIsPossible = true;
    noteTextArray.forEach( temp =>{
        if(magzineWordCount[temp]){
            magzineWordCount[temp]--;
                if(magzineWordCount[temp] < 0)
                    noteIsPossible = false;
        }
        else{
            noteIsPossible = false;
        }
    });
    return noteIsPossible;
}
var ans  =harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
console.log(ans);

