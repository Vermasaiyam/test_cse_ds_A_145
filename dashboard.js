const fetchGithubUsers = async () => {
    try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        if (!Array.isArray(users)) {
            throw new Error("Unexpected response format");
        }

        console.log(users);

        const top10Users = users.slice(0, 10);

        top10Users.forEach(user => console.log(user.login));

        console.log(top10Users);

        const userDetailsDiv = document.querySelector('.user-details');
        userDetailsDiv.innerHTML = "";

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
        alert("Failed to fetch GitHub users. Please try again later.");
    }
};

const logout = () => {
    window.location.href = "./index.html";
}