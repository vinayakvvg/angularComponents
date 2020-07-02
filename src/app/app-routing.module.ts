import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { PaginatorComponent } from "./paginator/paginator.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/datePicker" },
  {
    path: "datePicker",
    pathMatch: "full",
    component: DatePickerComponent,
  },
  {
    path: "paginator",
    pathMatch: "full",
    component: PaginatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
