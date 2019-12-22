import {Component, Input, OnInit} from '@angular/core';
import {LogoService} from '../logo.service';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent implements OnInit {

  constructor(public logo: LogoService) { }

  ImageStyle = {
    fill: this.logo.getLogo().color[0],
  };
  NameStyle = {
    color: this.logo.getLogo().color[1],
    'font-family': this.logo.getLogo().font,
  };
  ngOnInit() {
  }

}
