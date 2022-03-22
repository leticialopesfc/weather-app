import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './service/weather.service';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        LeftBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        WeatherService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
