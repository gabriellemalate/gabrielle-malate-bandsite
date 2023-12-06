    // Function that generates the shows section
    function generateShowsSection() {
        const showsContainer = document.getElementById('showsContainer');

        const showsData = [
            { date: '2021-09-06', venue: 'Ronald Lane', location: 'San Francisco, CA' },
            { date: '2021-09-21', venue: 'Pier 3 East', location: 'San Francisco, CA' },
            { date: '2021-10-15', venue: 'View Lounge', location: 'San Francisco, CA' },
            { date: '2021-11-06', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
            { date: '2021-11-26', venue: 'Moscow Center', location: 'San Francisco, CA' },
            { date: '2021-12-15', venue: 'Press Club', location: 'San Francisco, CA' }
        ];

        const showsSection = document.createElement('section');
        showsSection.classList.add('shows');

        const showsAllDiv = document.createElement('div');
        showsAllDiv.classList.add('shows__all');

        const h2 = document.createElement('h2');
        h2.textContent = 'Shows';

        const showsBoxesDiv = document.createElement('div');
        showsBoxesDiv.classList.add('shows__boxes');

        showsData.forEach(show => {
            const showArticle = document.createElement('article');
            showArticle.classList.add('shows__boxes--show');

            const showDate = document.createElement('time');
            showDate.setAttribute('datetime', show.date);
            showDate.textContent = new Date(show.date).toDateString();

            const venueParagraph = document.createElement('p');
            venueParagraph.textContent = show.venue;

            const locationParagraph = document.createElement('p');
            locationParagraph.innerHTML = `San Francisco, CA`;

            const buyTicketsButton = document.createElement('button');
            const buyTicketsLink = document.createElement('a');
            buyTicketsLink.setAttribute('href', '');
            buyTicketsLink.setAttribute('title', 'only few left! buy now!');
            buyTicketsLink.textContent = 'BUY TICKETS';
            buyTicketsButton.appendChild(buyTicketsLink);

            showArticle.appendChild(showDate);
            showArticle.appendChild(venueParagraph);
            showArticle.appendChild(locationParagraph);
            showArticle.appendChild(buyTicketsButton);

            showsBoxesDiv.appendChild(showArticle);

            // Add a horizontal line after each show
            const hr = document.createElement('hr');
            showsBoxesDiv.appendChild(hr);
        });

        showsAllDiv.appendChild(h2);
        showsAllDiv.appendChild(showsBoxesDiv);
        showsSection.appendChild(showsAllDiv);

        showsContainer.appendChild(showsSection);
    }

    // Call the function to generate the shows section
    generateShowsSection();