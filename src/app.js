//Progression 1 - create a Manager array and return it


let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var manager_details = [managerName, managerAge, currentTeam, trophiesWon];
  return manager_details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if (formation.length == 0)
    return null;
    let formationobj = {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    };
    return formationobj;
}




// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
   var debuplayer = [];
  for(var i=0;i < players.length;i++)
  {
    if(players[i].debut==year)
    {
      debuplayer.push(players[i]);
    }
  }
  return debuplayer;
}

//Progression 4 - Filter players that play at the position _______

function  filterByPosition(position){
  var player_position = [];
  for(var i=0;i < players.length;i++)
  {
    if(players[i].position==position)
    {
      player_position.push(players[i]);
    }
  }
  return player_position;
}

//Progression 5 - Filter players that have won ______ award

function  filterByAward(awardName){
  var player_awards = [];
  var j;
  for(var i=0;i < players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      {
        player_awards.push(players[i]);
      }
    }
  }
  return player_awards;
}

//Progression 6 - Filter players that won ______ award ____ times

  function filterByAwardxTimes(awardName, noOfTimes)
{
  var player_awards = [];
  var count = 0;
  var number_of_times = [];
  if(awardName == "" || noOfTimes == NaN)
    return [];

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName)
        count++;
    }
    number_of_times[i] = count;
    count =0;
  }
 
  for(var i=0; i<players.length; i++)
  {
    if(number_of_times[i] == noOfTimes)
    {
      player_awards.push(players[i]);
    }
  }
  return player_awards;
}




//Progression 7 - Filter players that won ______ award and belong to ______ country


function  filterByAwardxCountry(awardName,country){
  var player_country = [];
  var j;
  for(var i=0;i < players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName && players[i].country==country)
      {
        player_country.push(players[i]);
      }
    }
  }
  return player_country;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var player_update = [];

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name != null && players[i].team == team && players[i].age < age)
      {
          player_update.push(players[i]);
      }
    }
  }
  return player_update;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
    for(var i=0; i<players.length; i++)
    {
      for(var j=0; j<players.length; j++)
      {
        if(players[j].age < players[j+1].age)
        {
          var temp = players[j];
          players[j] = players[j+1]; 
          players[j+1] = temp;
        }
      }
    }
    return players;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var aw = [], tm=[], j=0;
  for(i=0;i<players.length; i++){
    if(players[i]["team"]==team){
      tm[j] = players[i];
      j++;
    }}
  tm.sort(function(a, b){return b.awards.length - a.awards.length});
  for(i=0;i<tm.length; i++)
  {aw[i]=tm[i]["name"]}
  return aw;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


