$(document).ready(function () {
	$("#form").submit(function (event) {
		event.preventDefault();

		let username = $("#username").val();

		searchUsers(username);
	});

	function searchUsers(username) {
		$.get("https://api.github.com/users/" + username, function (data) {
			if (typeof data) {
				document.getElementById("no-result").innerHTML = "";
			}

			let photo = data.avatar_url;
			document.getElementById(
				"info-photo"
			).innerHTML = `<img class="photo" src="${photo}">`;

			let name = data.name;
			document.getElementById("name").innerHTML = `${name}`;

			let username = data.login;
			document.getElementById("username2").innerHTML = `@${username}`;

			let joinDateRaw = data.created_at;
			let joinDateObj = new Date(joinDateRaw);
			let joinDate = joinDateObj.toDateString().slice(4, 15);
			document.getElementById("date").innerHTML = `Joined: ${joinDate}`;

			let description = data.bio;
			if (description == null) {
				description = "This profile has no bio";
			}
			document.getElementById("description").innerHTML = `${description}`;

			let repos = data.public_repos;
			document.getElementById("repos-number").innerHTML = `${repos}`;

			let followers = data.followers;
			document.getElementById(
				"followers-number"
			).innerHTML = `${followers}`;

			let following = data.following;
			document.getElementById(
				"following-number"
			).innerHTML = `${following}`;

			let location = data.location;
			if (location == null) {
				location = "Not Available";
			}
			document.getElementById("location-text").innerHTML = `${location}`;

			let twitter = data.twitter_username;
			if (twitter == null) {
				twitter = "Not Available";
			}
			document.getElementById("twitter-text").innerHTML = `${twitter}`;

			let website = data.blog;
			if (website == null) {
				website = "Not Available";
			}
			document.getElementById(
				"website-link"
			).innerHTML = `<a href="${website}" id="website-text">${website}</a>`;

			let company = data.company;
			if (company == null) {
				company = "Not Available";
			}
			document.getElementById("company-text").innerHTML = `${company}`;
		});
		document.getElementById("no-result").innerHTML = `No results`;
	}
});

//+ "+in:user"
