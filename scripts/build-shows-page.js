const showsData = [
    { date: "2021-09-06", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "2021-09-21", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "2021-10-15", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "2021-11-06", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "2021-11-26", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "2021-12-15", venue: "Press Club", location: "San Francisco, CA" },
];

// Function to create a show element
function createShowElement(show) {
    const showElement = document.createElement("article");
    showElement.className = "shows__show";

    showElement.innerHTML = `
    <div class="shows__eq">
        <h3 class="shows__gone">DATE</h3>
        <time class="shows__show--date" datetime="${show.date}">${new Date(
        show.date
    ).toDateString()}</time>

        <div class="shows__eq--venlo">
        <h3 class="shows__gone">VENUE</h3>
        <p class="shows__show--par">${show.venue}</p>
        <h3 class="shows__gone">LOCATION</h3>
        <p class="shows__show--par">${show.location}</p>
        </div>
    </div>

    <button><a href="" title="only few left! buy now!">BUY TICKETS</a></button>
    `;
    return showElement;
}

// Function to append show elements to the shows container
function appendShowsToContainer(shows) {
    const showsContainer = document.querySelector(".shows__container");

    shows.forEach((show) => {
        const showElement = createShowElement(show);
        showsContainer.appendChild(showElement);
    });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    const showsContainer = document.querySelector(".shows");

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "shows__all--heading";
    heading.textContent = "Shows";
    showsContainer.appendChild(heading);

    // Create container
    const container = document.createElement("div");
    container.className = "shows__container";
    showsContainer.appendChild(container);

    // Append shows to the container
    appendShowsToContainer(showsData);
});
