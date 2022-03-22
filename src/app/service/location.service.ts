import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = environment.baseUrlLocation;

  constructor(
      private http: HttpClient
  ) { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  getLocation(lat: string, lng: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '&latlng=' + lat + ',' + lng);
  }

}
