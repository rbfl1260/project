const github = new GitHub();

const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
        console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      
    });
  } else {
    ui.clearProfile();
  }
});