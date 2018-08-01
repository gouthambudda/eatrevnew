import { Component, OnInit } from '@angular/core';
import { Address } from 'angular-google-place';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public options =  { types: ['(address)'], componentRestrictions: {country: 'US' } };
  getAddress(place: Address) {
    console.log('Address', place);
  }
  getFormattedAddress(event: any) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
