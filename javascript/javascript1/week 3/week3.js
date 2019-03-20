/*
Homework #1
Item array removal
*/
const numbersArray=[1,2,3,4,5,6,7,8,9,10];
const randomNumber=parseInt(Math.random()*11);

for(let c=0;c< numbersArray.length;c++){
    let numbersToRemove=1;
    if(numbersArray[c]==randomNumber){
        numbersArray.splice(c,numbersToRemove);
    }
}
console.log("Remove value="+ randomNumber+ " result ="+ String(numbersArray));

//Series duration in my life
const seriesDurations=[
{
    title:"Game of thrones",
    days:3,
    hours:1,
    minutes:0,
},
{
    title:"Sopranos",
    days:3,
    hours:14,
    minutes:0,
},
{
    title:"The wire",
    days:2,
    hours:12,
    minutes:0,
}
];
const minutesInMyLife=(80*(24*365))*60;
let percentInMyLife=0;
for(let serie of seriesDurations){
    let minutesForSerie=(((serie.days*24)+serie.hours)*60)+serie.minutes;
    let percentForSerie=(minutesForSerie*100/minutesInMyLife).toFixed(3);
    percentInMyLife+=Number(percentForSerie);
    console.log(serie.title + " took "+ percentForSerie + "% of my Life \n");
}
console.log("In total that is "+ percentInMyLife + "% of my Life \n");
/*
Homework#2
My Favorite songs
*/
const songDatabase=[
    {
        songId:1,
        title:"My Baby",
        artist:"Socky Socks"
    },
    {
        songId:2,
        title:"3 Nails in woods",
        artist:"The Carpenters"
    },
    {
        songId:3,
        title:"Blacker than black",
        artist:"Instant coffee"
    },
    {
        songId:4,
        title:"When is enough too little?",
        artist:"The spies girls"
    }
];
const myPlaylist=[];
function addSongToDataBase(song){
    song.songId=songDatabase.length+1;
    songDatabase.push(song);
    return songDatabase.length;
}
function getSongByTitle(title){
    for(song of songDatabase){
        if(song.title==title){
            return song;
        }
    }
    return;
}
addSongToDataBase({ title:"Let it be",artist:"Ayawaddy"});
const searchSong=getSongByTitle("Let it be");
console.log(JSON.stringify(searchSong));

function addSongToMyPlaylist(title){
    let song=getSongByTitle(title);
    if(song!==undefined){
        myPlaylist.push(song);
    }
}
addSongToMyPlaylist("Let it be");
addSongToMyPlaylist("My Baby");
addSongToMyPlaylist("Blacker than black");
console.log(JSON.stringify(myPlaylist));
/*
Homework #3 : Notes
*/
let notes=[];
let firstSentence="The note with id: ";
let secondSentence="has the following note text";
function addNote(content,id) {
    if(id==undefined){
        id=notes.length+1;
    }
    notes.push({
        "content": content,
        "id":id
    });
}
function getNoteFromId(id){
    for(let i=0;i<notes.length; i++) {
        if(notes[i].id==id){
            return JSON.stringify(notes[i]);
        }
    }
    return "Note id " + id + " not found!";
}
function logOutNotesFormatted() {
    let i=0;
    while(i<notes.length){
        console.log(firstSentence + notes[i].id+ ","+secondSentence+":\"" + notes[i].content + "\"");
        i+=1;
    }
}
//unique feature
function removeNoteById(id) {
    for(let i=0;i<notes.length; i++) {
        if(notes[i].id==id){
            notes.splice(i,1);
        }
    }
}
function changeNoteById(id,content) {
    for(let i=0;i<notes.length; i++) {
        if(notes[i].id==id){
            notes[i].content=content;
        }
    }
}
function changeSentence(first,second){
    if(first!==undefined){
        firstSentence=first;
    }
    if(second!==undefined){
        secondSentence=second;
    }
}
//add note
addNote("Meet with friends in Copenhegen at 8.00pm",1);
addNote("Dinner with elon musk! at luxury hotel");
console.log(getNoteFromId(1));
console.log(getNoteFromId(3)); //note not found
addNote("Pick up my daughter at school",3);
//log all note
console.log(JSON.stringify(notes));
//log out notes
logOutNotesFormatted();
//use unique feature
removeNoteById(2);
changeNoteById(3,"Dinner with my daughter at Japanese restuarant!");
changeSentence("Log No:","Todo");
logOutNotesFormatted();
/*
Homework#4
CactusIO-interactive
*/
let activities=[];
let limitActivities=0;
function addActivity(date,activity,duration){
    if(date==undefined){
        date=new Date();
    }
    activities.push({
        "date":new Date(date),
        "activity":activity,
        "duration":duration
    });
}
function autoSetActivityNotOverLimit() {
    if(activities.length==0){
        console.log("Add some activities before calling this function!");
        return;
    }
    if(limitActivities>0){
        while(limitActivities<sumActivities(activities,false)){
            let usageMost=0;
            let mostActivity=0;
            for(let a=0;a<activities.length;a++){
                if(Number(activities[a].duration)>usageMost){
                    usageMost=activities[a].duration;
                    mostActivity=a;            
                }
            }
            activities.splice(mostActivity,1);    
        }
        console.log(JSON.stringify(activities));    
    }
}
function getMostUsageActivity(activities){
    if(activities.length==0){
        console.log("Add some activities before calling this function!");
        return;
    }
    let usageMost=0;
    let mostActivity=0;
    for(let a=0;a<activities.length;a++){
        if(Number(activities[a].duration)>usageMost){
            usageMost=activities[a].duration;
            mostActivity=a;            
        }
    }
    return activities[mostActivity];
    console.log("Most usage activity is " + activities[mostActivity].activity+ " duration " + activities[mostActivity].duration + " min. of usage");
}
function setLimitActivities(num){
    limitActivities=num;
}
function sumActivities(activities,checkLimit=true){
    let totalActivities=0;
    let sumUsage=0;
    for(let a=0;a<activities.length;a++){
        totalActivities+=1;
        sumUsage+=Number(activities[a].duration);
        if(checkLimit){
            if(limitActivities>0){
                if(sumUsage>=limitActivities){
                    console.log("You have reached your limit, no more smartphoning for you!");
                    return sumUsage;
                }
            }    
        }
    }
    return sumUsage;
    console.log("You have added " + totalActivities+ " activities. They amount to " + sumUsage + " min. of usage");
}
function showStatus(activities,ondate){
    if(activities.length==0){
        console.log("Add some activities before calling showStatus");
        return;
    }
    if(ondate!==undefined){
        let dateActivities=activities.filter(function(data){
            return new Date(data.date).getDate()==new Date(ondate).getDate();
        });
        sumActivities(dateActivities);
    } else {
        sumActivities(activities);
    }
}
//case when no activities add
showStatus(activities);
//add some activities
addActivity("2019-03-18","facebook","30");
addActivity("2019-03-18","youtube","20");
//add without date (default is today)
addActivity(null,"twitter","80");
addActivity(null,"skype","90");
//log all activities added
console.log(JSON.stringify(activities));
//show status activities
showStatus(activities);
//show activities on date
showStatus(activities,"2019-03-19");
//set limit activities
setLimitActivities(140);
//show status with over limit
showStatus(activities);
//find most usage activities
console.log(JSON.stringify(getMostUsageActivity(activities)));
//unique feature remove most usage until not over limit
autoSetActivityNotOverLimit();