from django.shortcuts import render, redirect
from .models import Journey
from urllib.parse import quote

def journey_page(request):

    if request.method == "POST":
        source = request.POST.get("source", "").strip()
        destination = request.POST.get("destination", "").strip()
        transport = request.POST.get("transport", "Car").strip()

        print(f"[Journey] source={source}, dest={destination}, transport={transport}")

        if source and destination:
            Journey.objects.create(
                source=source,
                destination=destination,
                transport_mode=transport
            )

            travel_mode = "driving"
            if transport in ["Bus", "Train"]:
                travel_mode = "transit"

            google_url = (
                "https://www.google.com/maps/dir/?api=1"
                f"&origin={quote(source)}"
                f"&destination={quote(destination)}"
                f"&travelmode={travel_mode}"
            )

            print(f"[Journey] Redirecting to: {google_url}")
            return redirect(google_url)

    journeys = Journey.objects.all().order_by("-id")
    return render(request, "start_journey.html", {"journeys": journeys})
