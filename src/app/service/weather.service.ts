import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    private baseUrl = environment.baseUrlWeather;

  constructor(
      private http: HttpClient
  ) { }

  getWeather(location: string, unit: string): Observable<any> {
      return this.http.get<any>(this.baseUrl + '&query=' + location + '&units=' + unit);
  }
}
