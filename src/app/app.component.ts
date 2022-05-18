import { Component } from "@angular/core";
import { LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";

import { of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentDate = new Date();
  dateFormat = "dd MMM yyyy";
  formattedDate = formatDate(this.currentDate, this.dateFormat, this.locale);

  constructor(@Inject(LOCALE_ID) public locale: string) {}
}
