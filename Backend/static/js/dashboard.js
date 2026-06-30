document.addEventListener("DOMContentLoaded", function () {

    console.log("Dashboard Loaded");

    // Welcome Greeting


    const hour = new Date().getHours();
    const heading = document.querySelector(".top-section h1");

    if (heading) {

        if (hour < 12) {
            heading.innerHTML = "🌞 Good Morning! Welcome to SafeHer";
        }
        else if (hour < 18) {
            heading.innerHTML = "☀️ Good Afternoon! Welcome to SafeHer";
        }
        else {
            heading.innerHTML = "🌙 Good Evening! Welcome to SafeHer";
        }

    }

    // Count Animation
    

    function animateCounter(id){

        const element = document.getElementById(id);

        if(!element) return;

        const target = parseInt(element.innerText);

        let current = 0;

        const timer = setInterval(function(){

            current++;

            element.innerText = current;

            if(current >= target){

                clearInterval(timer);

            }

        },40);

    }

    animateCounter("journeyCount");
    animateCounter("contactCount");
    animateCounter("sosCount");

    // Highlight Trusted Contacts//

    const contacts = document.querySelectorAll(".contact-box");

    contacts.forEach(function(contact){

        contact.addEventListener("mouseover",function(){

            contact.style.transform="scale(1.03)";
            contact.style.transition=".3s";

        });

        contact.addEventListener("mouseout",function(){

            contact.style.transform="scale(1)";

        });

    });

});