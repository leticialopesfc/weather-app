import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

    constructor(
        private weatherService: WeatherService
    ) { }

    ngOnInit(): void {
    }

    getWeather(): void {
        const location = this.weatherSearchForm.get('location').value;
        this.weatherService.getWeather(location, this.unit).subscribe(x => console.log(x));
    }


}
