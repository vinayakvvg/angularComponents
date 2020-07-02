import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openDatePicker() {
    this.router.navigate(["datePicker"]);
  }
}
