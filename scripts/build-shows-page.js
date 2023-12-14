async function generateShowsSection() {
    const showsContainer = document.getElementById('showsContainer');
    //const bandSiteApi = new BandSiteApi(apiKey);

    const showsData = [
        { date: '2021-09-06', venue: 'Ronald Lane', location: 'San Francisco, CA', link: '#' },
        { date: '2021-09-21', venue: 'Pier 3 East', location: 'San Francisco, CA', link: '#' },
        { date: '2021-10-15', venue: 'View Lounge', location: 'San Francisco, CA', link: '#' },
        { date: '2021-11-06', venue: 'Hyatt Agency', location: 'San Francisco, CA', link: '#' },
        { date: '2021-11-26', venue: 'Moscow Center', location: 'San Francisco, CA', link: '#' },
        { date: '2021-12-15', venue: 'Press Club', location: 'San Francisco, CA', link: '#' }
    ];

    // try {
    //     const showsData = await bandSiteApi.getShows();

    // shows section
    const showsSection = document.createElement('section');
    showsSection.classList.add('shows');

    // shows all container
    const showsAllDiv = document.createElement('div');
    showsAllDiv.classList.add('shows__all');

    // heading
    const h2 = document.createElement('h2');
    h2.classList.add('shows__all--heading');
    h2.textContent = 'Shows';

    // container for shows
    const showsContainerDiv = document.createElement('div');
    showsContainerDiv.classList.add('shows__container');

    // invisible row for labels
    const invisibleRowDiv = document.createElement('div');
    invisibleRowDiv.classList.add('shows__invisible-row');

    const invisibleRowEqDiv = document.createElement('div');
    invisibleRowEqDiv.classList.add('shows__invisible-row--eq');

    const dateLabelH3 = document.createElement('h3');
    dateLabelH3.classList.add('shows__invisible-row--label');
    dateLabelH3.textContent = 'DATE';

    const invisibleRowVenloDiv = document.createElement('div');
    invisibleRowVenloDiv.classList.add('shows__invisible-row--venlo');

    const venueLabelH3 = document.createElement('h3');
    venueLabelH3.classList.add('shows__invisible-row--label');
    venueLabelH3.textContent = 'VENUE';

    const locationLabelH3 = document.createElement('h3');
    locationLabelH3.classList.add('shows__invisible-row--label');
    locationLabelH3.textContent = 'LOCATION';

    invisibleRowVenloDiv.appendChild(venueLabelH3);
    invisibleRowVenloDiv.appendChild(locationLabelH3);

    invisibleRowEqDiv.appendChild(dateLabelH3);
    invisibleRowEqDiv.appendChild(invisibleRowVenloDiv);

    invisibleRowDiv.appendChild(invisibleRowEqDiv);

    // accessibility label for buy buttons
    const accessibilityLabelP = document.createElement('p');
    accessibilityLabelP.classList.add('shows__invisible-row--accessibility-label');
    accessibilityLabelP.textContent = 'BUY BUTTONS';

    invisibleRowDiv.appendChild(accessibilityLabelP);

    showsContainerDiv.appendChild(invisibleRowDiv);

    // show articles
    showsData.forEach(show => {
        const showArticle = document.createElement('article');
        showArticle.classList.add('shows__show');

        const eqDiv = document.createElement('div');
        eqDiv.classList.add('shows__eq');

        // Date
        const dateH3 = document.createElement('h3');
        dateH3.classList.add('shows__gone');
        dateH3.textContent = 'DATE';

        const dateElement = document.createElement('time');
        dateElement.classList.add('shows__show--date');
        dateElement.setAttribute('datetime', show.date);
        dateElement.textContent = new Date(show.date).toDateString();

        // Venue and Location
        const venloDiv = document.createElement('div');
        venloDiv.classList.add('shows__eq--venlo');

        const venueH3 = document.createElement('h3');
        venueH3.classList.add('shows__gone');
        venueH3.textContent = 'VENUE';

        const venuePar = document.createElement('p');
        venuePar.classList.add('shows__show--par');
        venuePar.textContent = show.venue;

        const locationH3 = document.createElement('h3');
        locationH3.classList.add('shows__gone');
        locationH3.textContent = 'LOCATION';

        const locationPar = document.createElement('p');
        locationPar.classList.add('shows__show--par');
        locationPar.textContent = show.location;

        venloDiv.appendChild(venueH3);
        venloDiv.appendChild(venuePar);
        venloDiv.appendChild(locationH3);
        venloDiv.appendChild(locationPar);

        // Buy Tickets Button
        const button = document.createElement('button');
        button.classList.add('shows__show--button');
        const link = document.createElement('a');
        link.href = show.link;
        link.title = 'Only few left! Buy now!';
        link.textContent = 'BUY TICKETS';
        button.appendChild(link);

        eqDiv.appendChild(dateH3);
        eqDiv.appendChild(dateElement);
        eqDiv.appendChild(venloDiv);

        showArticle.appendChild(eqDiv);
        showArticle.appendChild(button);

        showsContainerDiv.appendChild(showArticle);
    });

    // append elements to the shows section
    showsAllDiv.appendChild(h2);
    showsAllDiv.appendChild(showsContainerDiv);
    showsSection.appendChild(showsAllDiv);

    // append the shows section to the container
    showsContainer.appendChild(showsSection);
}
// } catch (error) {
//     console.error('Error fetching shows:', error);
// }
// }

generateShowsSection();