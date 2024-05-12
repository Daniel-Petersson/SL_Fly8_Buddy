// flight.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  getMockFlights(): Observable<Flight[]> {
    // Generate mock flight data
    const flights: Flight[] = [
      { id: 230456, origin: 'London', destination: 'Paris', date: '2024-05-12', price: 11050 },
    { id: 240789, origin: 'Berlin', destination: 'Madrid', date: '2024-05-12', price: 11180 },
    { id: 250123, origin: 'Rome', destination: 'Amsterdam', date: '2024-05-12', price: 14220 },
    { id: 260456, origin: 'Vienna', destination: 'Dublin', date: '2024-05-12', price: 7250 },
    { id: 270789, origin: 'Athens', destination: 'Brussels', date: '2024-05-12', price: 12180 },
    { id: 280123, origin: 'Copenhagen', destination: 'Oslo', date: '2024-05-12', price: 10220 },
    { id: 290456, origin: 'Helsinki', destination: 'Stockholm', date: '2024-05-12', price: 15250 },
    { id: 300789, origin: 'Warsaw', destination: 'Prague', date: '2024-05-12', price: 14180 },
    { id: 310123, origin: 'Budapest', destination: 'Bucharest', date: '2024-05-12', price: 12220 },
    { id: 320456, origin: 'Sofia', destination: 'Belgrade', date: '2024-05-12', price: 23250 },
      // Add more mock flights here
    ];
    return of(flights);
  }
}
