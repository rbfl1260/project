class UI {
    constructor() {
      this.profile = document.getElementById("profile");
    }
  
    showProfile(user) {
      this.profile.innerHTML = `
      <div class="card">
        <div class="row">
          <div class="col1">
            <img class="image" src="${user.avatar_url}">
            <button type="button" class="btn" onclick="window.open('${
                user.html_url
              }')">View Profile</button>
          </div>
          <div class="col2">
          <div class="row2">
            <span class="show show-1">Public Repos: ${
              user.public_repos
            }</span>
            <span class="show show-2">Public Gists: ${
              user.public_gists
            }</span>
            <span class="show show-3">Followers: ${user.followers}</span>
            <span class="show show-4">Following: ${user.following}</span>
            </div>

            <br><br>

            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="latest">Latest Repos</h3>
      <div id="repos"></div>
      `;
    }
  
    showRepos(repos) {
      let output = "";
  
      repos.forEach(function(repo) {
        output += `
        <div class="card">
          <div class="row1">
            <div class="item1">
              <a style="color: rgb(56, 109, 252)">${repo.name}</a>
            </div>
            <div class="item2">
              <span class="show show-1">Stars: ${
                repo.stargazers_count
              }</span>
            <span class="show show-2">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="show show-3">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
        `;
      });

      document.getElementById("repos").innerHTML = output;
    }
  
    clearProfile() {
      this.profile.innerHTML = "";
    }
  }