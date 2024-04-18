// search-flight.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  tripType: string = 'roundTrip';
  from: string = '';
  to: string = '';
  departureDate: string = '';
  numAdults: number = 1;
  numChildren: number = 0;
  travelClass: string = 'Economy';
  flights: Flight[] = [];
  airports: string[] = [];

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getMockFlights().subscribe(flights => {
      this.flights = flights;
      this.airports = Array.from(new Set(flights.map(flight => flight.origin).concat(flights.map(flight => flight.destination))));
    });
  }

  searchFlights() {
    // Navigate to the SearchResultsComponent and pass search criteria as query parameters
    this.router.navigate(['/search-results'], {
      queryParams: {
        tripType: this.tripType,
        from: this.from,
        to: this.to,
        departureDate: this.departureDate,
        numAdults: this.numAdults,
        numChildren: this.numChildren,
        travelClass: this.travelClass
      }
    });
  }
}