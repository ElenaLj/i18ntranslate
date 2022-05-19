import { Component, OnInit } from "@angular/core";
import { LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";

import { of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  currentDate = new Date();
  dateFormat = "dd MMM yyyy";
  formattedDate = formatDate(this.currentDate, this.dateFormat, this.locale);
  messages: string[] = [
    ''
  ]
  messageMapping: {[k: string]: string} = {
    // '=0': $localize`No messages`,
    '1': $localize`:@@single:One message`,
    // 'other': $localize`Many messages`
  }

  fruits: string[] = [

  ]

  fruitMapping: {[k: string]: string} = {
    '=0': $localize`:@@rien:No fruit`,
    '=1': $localize`:@@fruit:Strawberry`,
    'other': $localize`:@@fruit:Strawberries`
  }

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(){
    alert(this.fruitMapping['=0']);
  }
}
