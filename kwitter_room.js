var firebaseConfig = {
      apiKey: "AIzaSyCEzMbRTvSY6d9BZ3PLMrPsndxL6tM5zTc",
      authDomain: "kwitter-6d579.firebaseapp.com",
      databaseURL: "https://kwitter-6d579-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d579",
      storageBucket: "kwitter-6d579.appspot.com",
      messagingSenderId: "822624067609",
      appId: "1:822624067609:web:b7551a44199e83c8600a88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
                  //End code

            });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}
