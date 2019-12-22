import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LogoService} from '../logo.service';

@Component({
  selector: 'app-company-color',
  templateUrl: './company-color.component.html',
  styleUrls: ['./company-color.component.css']
})
export class CompanyColorComponent implements OnInit {
  color: any;
  colorTwo: any;

  constructor(private router: Router, private logoService: LogoService) { }

  ngOnInit() {
  }

  nextStep(color1, color2) {
    this.logoService.addColor(color1, color2)
    this.router.navigate(['/image']);
  }
}
