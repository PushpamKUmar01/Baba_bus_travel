document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const busList = document.getElementById('bus-list');
    const homeBusList = document.getElementById('home-bus-list');
    const ticketDetails = document.getElementById('ticket-details');
    let bookedSeat = null;

    const buses = [
        {
            number: 101,
            name: 'City Express',
            days: ['Monday', 'Wednesday', 'Friday'],
            image: 'img/Bus.jpeg',
            price: 20 // Price per seat
        },
        {
            number: 102,
            name: 'Town Cruiser',
            days: ['Tuesday', 'Thursday', 'Saturday'],
            image: 'img/bus1.jpeg',
            price: 15 // Price per seat
        },
        {
            number: 103,
            name: 'Interstate Shuttle',
            days: ['Monday', 'Wednesday', 'Friday'],
            image: 'img/bus2.jpeg',
            price: 30 // Price per seat
        },
        {
            number: 104,
            name: 'Town Cruiser',
            days: ['wednesday', 'sunday', 'monday'],
            image: 'img/bus3.jpeg',
            price: 27 // Price per seat
        },
        {
            number: 105,
            name: 'Interstate Shuttle',
            days: ['Monday', 'friday', 'saturday'],
            image: 'img/bus4.jpeg',
            price: 18 // Price per seat
        },
        {
            number: 106,
            name: 'Town Cruiser',
            days: ['tuesday', 'Thursday', 'sunday'],
            image: 'img/bus5.jpeg',
            price: 26 // Price per seat
        },
        {
            number: 107,
            name: 'Interstate Shuttle',
            days: ['Monday', 'wednesday', 'friday'],
            image: 'img/bus6.jpeg',
            price: 33 // Price per seat
        },
        {
            number: 108,
            name: 'Town Cruiser',
            days: ['friday', 'sunday', 'tuesday'],
            image: 'img/bus7.jpeg',
            price: 25 // Price per seat
        },
        {
            number: 109,
            name: 'Interstate Shuttle',
            days: ['Monday', 'wednesday', 'friday'],
            image: 'img/bus8.jpeg',
            price: 30 // Price per seat
        },
        {
            number: 110,
            name: 'Town Cruiser',
            days: ['sutersday', 'monday', 'thursday'],
            image: 'img/bus9.jpeg',
            price: 15 // Price per seat
        },
        {
            number: 111,
            name: 'Interstate Shuttle',
            days: ['tuesday', 'Thursday', 'saturday'],
            image: 'img/bus1.jpeg',
            price: 29 // Price per seat
        },
        {
            number: 112,
            name: 'Town Cruiser',
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            image: 'img/bus1.jpeg',
            price: 25 // Price per seat
        },
        
    ];

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    function showHome() {
        showSection('home');
        renderHomeBuses();
    }

    function showContact() {
        showSection('contact');
    }

    function showBuses() {
        showSection('buses');
        renderBuses();
    }

    function showYourTicket() {
        showSection('your-ticket');
        renderTicket();
    }

    function renderHomeBuses() {
        homeBusList.innerHTML = '';
        buses.forEach(bus => {
            const busElement = document.createElement('div');
            busElement.classList.add('bus');
            busElement.innerHTML = `
                <img src="${bus.image}" alt="${bus.name}">
                <h3>${bus.name} (${bus.number})</h3>
                <p>Runs on: ${bus.days.join(', ')}</p>
                <button onclick="showBusDetails(${bus.number})">More Details</button>
            `;
            homeBusList.appendChild(busElement);
        });
    }

    function renderBuses() {
        busList.innerHTML = '';
        buses.forEach(bus => {
            const busElement = document.createElement('div');
            busElement.classList.add('bus');
            busElement.innerHTML = `
                <img src="${bus.image}" alt="${bus.name}">
                <h3>${bus.name} (${bus.number})</h3>
                <p>Runs on: ${bus.days.join(', ')}</p>
                <p>Price per seat: $${bus.price}</p>
                <button onclick="bookSeat(${bus.number}, '${bus.name}', ${bus.price})">Book a Seat</button>
            `;
            busList.appendChild(busElement);
        });
    }

    function showBusDetails(number) {
        showBuses();
        setTimeout(() => {
            document.querySelectorAll('#bus-list .bus').forEach(busElement => {
                if (busElement.querySelector('h3').textContent.includes(`(${number})`)) {
                    busElement.scrollIntoView({ behavior: 'smooth' });
                    busElement.style.border = '2px solid #4CAF50'; // Highlight the bus
                    setTimeout(() => {
                        busElement.style.border = ''; // Remove highlight after a delay
                    }, 2000);
                }
            });
        }, 300); // Delay to ensure the bus list is rendered
    }

    function bookSeat(number, name, price) {
        if (bookedSeat) {
            alert('You have already booked a seat.');
            return;
        }

        const from = prompt('Enter your departure location:');
        const to = prompt('Enter your destination:');
        const seats = parseInt(prompt('How many seats do you want to book?'), 10);
        if (isNaN(seats) || seats <= 0) {
            alert('Invalid number of seats.');
            return;
        }

        const total = price * seats;
        bookedSeat = {
            busNumber: number,
            busName: name,
            from,
            to,
            seats,
            price,
            total
        };

        alert('Thank you for booking!');
        showYourTicket();
    }

    function renderTicket() {
        if (!bookedSeat) {
            ticketDetails.innerHTML = '<p>No ticket booked yet.</p>';
            return;
        }

        ticketDetails.innerHTML = `
            <h3>Your Ticket</h3>
            <p>Bus: ${bookedSeat.busName} (${bookedSeat.busNumber})</p>
            <p>From: ${bookedSeat.from}</p>
            <p>To: ${bookedSeat.to}</p>
            <p>Seats booked: ${bookedSeat.seats}</p>
            <p>Price per seat: $${bookedSeat.price}</p>
            <p>Total Price: $${bookedSeat.total}</p>
            <p>Thank you for booking!</p>
       ` ;
    }

    window.showHome = showHome;
    window.showContact = showContact;
    window.showBuses = showBuses;
    window.showYourTicket = showYourTicket;
    window.bookSeat = bookSeat;
    window.showBusDetails = showBusDetails;

    // Show the home section by default
    showHome();
});

//..........promotion-area...........


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 3000); // Change slide every 5 seconds



// footer
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('footer a');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});


