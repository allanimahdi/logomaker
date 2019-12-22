import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogoService} from '../logo.service';

@Component({
  selector: 'app-company-image',
  templateUrl: './company-image.component.html',
  styleUrls: ['./company-image.component.css']
})
export class CompanyImageComponent implements OnInit {
  items =  [
            {id: 1, url: '../../assets/logos/hexagon.svg'},
            {id: 2, url: '../../assets/logos/square-1.svg'},
            {id: 3, url: '../../assets/logos/rhombus-2.svg'},
            {id: 4, url: '../../assets/logos/circle-1.svg'},
            {id: 5, url: '../../assets/logos/circle-2.svg' },
            {id: 6, url: '../../assets/logos/circle-3.svg'},
            {id: 7, url: '../../assets/logos/triangle-7.svg'},
            {id: 8, url: '../../assets/logos/hexagon-2.svg' }
            ];
   selectedEntry: any;

  constructor(private router: Router, private logo: LogoService) {

  }

  ngOnInit() {
  }
  onSelectionChange(entry: any) {
    this.selectedEntry = entry;
  }
  generate(image) {
    this.logo.addImage(image);
    this.router.navigate(['/logo']);
  }


}
