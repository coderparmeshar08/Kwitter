//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}