import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { CompanyFontComponent } from '../company-font/company-font.component';
import {LogoService} from '../logo.service';

@Component({
  selector: 'app-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.css']
})
export class CompanyNameComponent implements OnInit {
  CompanyName = new FormControl('');
  selectedFont: any;
  generatedLogo = false;
  y: number;

  constructor(private router: Router, private logoService: LogoService) { }

  ngOnInit() {
  }

  generated() {
    return this.generatedLogo;
  }

  GenerateLogo() {
    let x = Math.floor((Math.random() * 5) + 1);
    this.y = x;
    this.generated();
    return this.y;
  }

 /* addHero(c: string) {
    if (c) {
      this.CompanyName = c;
    }
  }
*/

  addName(value) {
    this.logoService.addName(value);
    this.router.navigate(['/font']);
  }
}
