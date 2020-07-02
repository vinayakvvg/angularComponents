import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { PaginatorComponent } from './paginator/paginator.component';

// import { MatSliderModule } from "@angular/material/slider";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
// import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [AppComponent, DatePickerComponent, PaginatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    // MatFormFieldModule,
    // MatInputModule,
    // MatSliderModule,
    // MatDatepickerModule,
    // MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
