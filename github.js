class GitHub {
    constructor() {
      this.client_id = "4159775bf32d73e6d0cc";
      this.client_secret = "e61ffbf0bda9e2dd22c58e347fc9796107f52026";
      this.repos_count = 5;
      this.repos_sort = "created: asc";
    }

    async getUser(user) {
        
        const profileResponse = await fetch(
          `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const reposResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${
              this.repos_count
            }&&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
              this.client_secret
            }`
        );
          const profile = await profileResponse.json();
          const repos = await reposResponse.json();
      
          return {
            profile,
            repos
          };
    }
}