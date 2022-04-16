// set base api URL
let api = "https://www.boredapi.com/api/activity";
// Create variables for use in program
let myActivity;
let activityType, link;
// Create array to hold drop down values
let activityTypes = [
  "Choose Activity Type",
  "busywork",
  "charity",
  "cooking",
  "diy",
  "education",
  "music",
  "recreational",
  "relaxation",
  "social",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create drop down functionality for user
  activitySel = createSelect();
  activitySel.position(20, 120);
  // use array of values to create Select options
  for (let i = 0; i < activityTypes.length; i++) {
    activitySel.option(activityTypes[i]);
  }
  // create changed event
  activitySel.changed(typeSelEvent);
  // configure text
  fill(59, 43, 68);
  strokeWeight(0);
  textStyle(NORMAL);
  textSize(35);
  textFont("Arial");
}
// Action taken when user changes selection
function typeSelEvent() {
  activityType = activitySel.value();
  // concatenate user selected type to base api url
  typeUrl = api + "?type=" + activityType;
  // test url to see link applied
  // typeUrl = api + "?key=4522866" ;
  // get data, call a callback function we called 'gotData' when data received
  loadJSON(typeUrl, activityData);
}

// the callback from loadJSON sends 'data' automatically!
function activityData(myData) {
  myActivity = myData;
  // if data loads print to screen
  if (myActivity) {
    // make the temperature value the radius rather than diameter
    clear();
    fill(59, 43, 68);
    // create an anchor tag to hold value if link is populated
    link = createA(myActivity.link, myActivity.link);
    text(myActivity.activity, 16, 100);
    link.position(22, 250);
  }
}
// not needed for this application
function draw() {}
