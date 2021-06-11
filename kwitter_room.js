var firebaseConfig = {
      apiKey: "AIzaSyBjwbDX5vZtuZm6dUPOidm9BkwRO4wV44w",
      authDomain: "kwitter-app-6e654.firebaseapp.com",
      databaseURL: "https://kwitter-app-6e654-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-6e654",
      storageBucket: "kwitter-app-6e654.appspot.com",
      messagingSenderId: "121322528205",
      appId: "1:121322528205:web:d55adef1fe79c5c16d7884",
      measurementId: "G-GF46EMQMY1"
    };
 user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name"), room_name;

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id = "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML +=row;
  //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page_html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}