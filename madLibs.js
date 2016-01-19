window.onload = function() {
  console.log("reading js");
  document.f.onsubmit = processForm;
  document.f.onreset = resetPage;
    
  function processForm() {
    var userLocation = document.f.userLocation.value;
    var userFirstName = document.f.userFirstName.value;
    var userLastName = document.f.userLastName.value;
    var userTitleAdjective = document.f.userTitleAdjective.value;
    var userTitleNounA = document.f.userTitleNounA.value;
    var userTitleNounB = document.f.userTitleNounB.value;
    var userTime = document.f.userTime.value;
    var userVerb = document.f.userVerb.value;
    var userPlace = document.f.userPlace.value;
    var userNounA = document.f.userNounA.value;
    var userNounB = document.f.userNounB.value;
    var userNounC = document.f.userNounC.value;
    var userNameA = document.f.userNameA.value;
    var userEmotion = document.f.userEmotion.value;
    var userFood = document.f.userFood.value;
    var userNumber = document.f.userNumber.value;
      
    if (userLocation == "" || userFirstName == "" || userLastName == "" || userTitleAdjective == "" || userTitleNounA == "" || userTitleNounB == "" || userTime == "" || userVerb == "" || userPlace == "" || userNounA == "" || userNounB == "" || userNounC == "" || userNameA == "" || userEmotion == "" || userFood == "" || userNumber == "") {
       alert("Please, enter the rest of your research.");
    } else {
      var myMsgTitle = document.getElementById("myMsgTitle");
        myMsgTitle.innerHTML = "The " + userLocation + " Times";
      var myMsgAuthor = document.getElementById("myMsgAuthor");
        myMsgAuthor.innerHTML = "By " + userFirstName + " " + userLastName;
      var myMsgArticle = document.getElementById("myMsgArticle");
        myMsgArticle.innerHTML = "<em>" + userTitleAdjective + " " + userTitleNounA + " Attacks " + userTitleNounB + "</em><br><hr><br> Yesterday, at approximently " + userTime + " a " + userTitleNounB + " was " + userVerb + " in " + userPlace + ". Without warning, a " + userTitleNounA + " came out of a " + userNounA + " with a " + userNounB + " and attacked the " + userTitleNounB + ". The " + userTitleNounB + " currently is recovering in the " + userNounC + ". The " + userTitleNounB + " is expected to make a full recovery. " + userNameA + ", a close friend, says that the " + userTitleNounB + " is " + userEmotion + " and is happily eating a " + userFood + ". (Continue on page " + userNumber + ".)"; 
    }

      myMsgTitle.className = "show";
      myMsgAuthor.className = "show";
      myMsgArticle.className = "show";
    
        if (userTitleNounA == "sports" || userTitleNounA == "lacrosse" || userTitleNounA == "basketball" || userTitleNounA == "baseball" || userTitleNounA == "soccer" || userTitleNounA == "softball" || userTitleNounA == "football" ) { 
            document.getElementById("myMsgTitle").style.backgroundColor = "#b3ffb3";
            document.getElementById("myMsgArticle").style.backgroundColor = "#b3ffb3";
     document.getElementById("myMsgAuthor").style.backgroundColor = "#b3ffb3";
        
        } else {
      document.getElementById("myMsgTitle").style.backgroundColor = "#e3e3e3";
            document.getElementById("myMsgArticle").style.backgroundColor = "#e3e3e3";
     document.getElementById("myMsgAuthor").style.backgroundColor = "#e3e3e3";
    }
    return false;
      
  }

  function resetPage() {
    myMsgTitle.innerHTML = "";
    myMsgTitle.className = "hide";
    myMsgAuthor.className = "hide";
    myMsgAuthor.className = "hide";
    myMsgArticle.className = "hide";
    myMsgArticle.className = "hide";
    userFirstName.value = "";
    userLastName.value = "";

    return false;
  }

}
