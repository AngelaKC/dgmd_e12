let myEpisode, mySnd, myTruck, myBotd;
let api = "https://bobsburgers-api.herokuapp.com/"
let season;
let episodeUrl, sndUrl,truckUrl, botdUrl; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  seasonSel = createSelect();
  seasonSel.position(20, 25);
  for( let i =1; i< 13; i++){
    seasonSel.option(i);
  }
  seasonSel.changed(seasonSelEvent);
  textAlign(CENTER);
  background(255);

}
function seasonSelEvent() {
  season = seasonSel.value();
  // concatenate all the strings together to make the url
  episodeUrl = api + "episodes/?season=" + season;
  console.log(episodeUrl);
  sndUrl = api + "storeNextDoor/?season=" + season;
  console.log(sndUrl);
  truckUrl = api + "pestControlTruck/?season=" + season ;
  console.log(truckUrl);
  botdUrl  = api + "burgerOftheDay/?season=" + season ;
  console.log(botdUrl);

  // get data, call a callback function we called 'gotData' when data received
  loadJSON(episodeUrl, episodeData);
  loadJSON(sndUrl, sndData);
  loadJSON(truckUrl, truckData);
  loadJSON(botdUrl, botdData);
}

// the callback from loadJSON sends 'data' automatically!
function episodeData(myData) {
  myEpisode = myData;
}
// the callback from loadJSON sends 'data' automatically!
function sndData(myData) {
  mySnd = myData;
}
// the callback from loadJSON sends 'data' automatically!
function truckData(myData) {
  myTruck = myData;
}
// the callback from loadJSON sends 'data' automatically!
function botdData(myData) {
  myBotd = myData;
}
function draw() {
  // removeElements();

  if (myEpisode) {
    // make the temperature value the radius rather than diameter
    // text("Episode name: " + myEpisode.name,100,100);
    for (let i =0; i< myEpisode.length;i++){
      console.log(myEpisode.name[i]);
    }
  }
  // if (mySnd) {
  //   // make the temperature value the radius rather than diameter
  //   text("Store Next Door: " + mySnd.name,100,125);
  // }
  // if (myTruck) {
  //   // make the temperature value the radius rather than diameter
  //   text("Pest Control Truck: " +myTruck.name,100,150);
  // }
  // if (myBotd) {
  //   // make the temperature value the radius rather than diameter
  //   text("Burger of the day: " +myBotd.name,100,175);
  // }
}
