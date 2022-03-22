import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocationService } from 'src/app/service/location.service';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
    selector: 'app-left-bar',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

    showSearchInput = false;
    weatherSearchForm = new FormGroup({
        location: new FormControl('', {})
    });

    unit = 'f';
    location: string;

    constructor(
        private weatherService: WeatherService,
        private locationService: LocationService
    ) { }

    ngOnInit(): void {
    }

    getLocation(): void {
      this.locationService.getPosition().then(pos => {
        this.locationService.getLocation(pos.lat, pos.lng).subscribe(location => {
          this.location = location.results[0].address_components[2].short_name;
        });
      });
    }

    getWeather(): void {
        const location = this.weatherSearchForm.get('location').value;
        this.weatherService.getWeather(location, this.unit).subscribe(x => console.log(x));
    }


}
