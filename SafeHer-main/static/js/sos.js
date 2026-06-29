let seconds = 10;
let timer = null;

// Get Current Location

document.addEventListener("DOMContentLoaded", function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                document.getElementById("latitude").value = lat;
                document.getElementById("longitude").value = lon;

                fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
                    .then(response => response.json())
                    .then(data => {

                        document.getElementById("location").value = data.display_name;

                    })
                    .catch(error => {

                        console.log(error);

                    });

            },

            function () {

                alert("Unable to access your location.");

            }

        );

    }
    else {

        alert("Geolocation is not supported.");

    }

});

// Start SOS Countdown

function startSOS() {

    document.getElementById("countdownText").style.display = "block";

    const btn = document.getElementById("sosBtn");

    btn.innerHTML = "❌ CANCEL SOS";

    btn.onclick = cancelSOS;

    document.body.style.background = "#ffe6e6";

    seconds = 10;

    document.getElementById("countdown").innerHTML = seconds;

    timer = setInterval(function () {

        seconds--;

        document.getElementById("countdown").innerHTML = seconds;

        if (seconds <= 0) {

            clearInterval(timer);

            alert("SOS Sent Successfully!");

            document.getElementById("sosForm").submit();

        }

    }, 1000);

}

// Cancel SOS

function cancelSOS() {

    clearInterval(timer);

    seconds = 10;

    document.getElementById("countdown").innerHTML = "10";

    document.getElementById("countdownText").style.display = "none";

    const btn = document.getElementById("sosBtn");

    btn.innerHTML = "🚨 SEND SOS";

    btn.onclick = startSOS;

    document.body.style.background = "white";

}