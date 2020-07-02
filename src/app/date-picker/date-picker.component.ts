import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  datePickerenabler = "Disable";
  isDatePickerDisabled = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDatePicker() {
    this.isDatePickerDisabled = !this.isDatePickerDisabled;
    this.datePickerenabler = this.isDatePickerDisabled ? "Enable" : "Disable";
  }

  openPaginator() {
    this.router.navigate(['paginator']);
  }
}
