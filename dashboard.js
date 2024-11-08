const fetchGithubUsers = async () => {
    try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        const top10Users = users.slice(0, 10);

        top10Users.forEach(user => console.log(user.login));

        const userDetailsDiv = document.querySelector('.user-details');
        // userDetailsDiv.innerHTML = "";

        top10Users.forEach(user => {
            const userLink = document.createElement('a');
            userLink.href = user.html_url;
            userLink.textContent = user.login;
            userLink.target = "_blank";
            userLink.style.display = "block";

            userDetailsDiv.appendChild(userLink);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
