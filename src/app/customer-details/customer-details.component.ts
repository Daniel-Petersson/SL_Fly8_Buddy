// customer-details.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Define the Flight interface
interface Flight {
  name: string;
  source: string;
  destination: string;
  date: string;
  class: string;
}

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  search = {
    source: '',
    destination: '',
    date: '',
    adults: 0,
    children: 0,
    class: 'economy'
  };
  flights: Flight[] = []; // Use the Flight interface here
  confirmation = '';
  ticket = '';

  constructor(private http: HttpClient) {}

  searchFlights() {
    this.http.post<Flight[]>('/api/search', this.search).subscribe((flights) => {
      this.flights = flights;
    });
  }

  bookFlight(flight: Flight) { // And here
    this.http.post('/api/book', flight).subscribe((response: any) => {
      this.confirmation = response.message;
      this.ticket = response.ticket;
    });
  }
}