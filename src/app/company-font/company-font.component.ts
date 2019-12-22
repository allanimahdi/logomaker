import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogoService} from '../logo.service';

@Component({
  selector: 'app-company-font',
  templateUrl: './company-font.component.html',
  styleUrls: ['./company-font.component.css']
})
export class CompanyFontComponent implements OnInit {

  constructor(private router: Router, private logoService: LogoService) { }
  selectedFont;
  fonts = [
    {id: 1, name: 'Courier New, monospace'},
    {id: 2, name: 'Arial, sans-serif'},
    {id: 3, name: 'Gill Sans, sans-serif'},
    {id: 4, name: 'Lucida, sans-serif'},
    {id: 5, name: 'Helvetica Narrow, sans-serif' },
    {id: 6, name: 'sans-serif'},
    {id: 7, name: 'Times, serif' },
    {id: 8, name: 'Times New Roman, serif'},
    {id: 9, name: 'Palatino, serif' },
    {id: 10, name: 'Bookman, serif'},
    {id: 11, name: 'New Century Schoolbook, serif' },
    {id: 12, name: 'Andale Mono, monospace'},
    {id: 13, name: 'Courier New, monospace' },
    {id: 14, name: 'Courier, monospace'},
    {id: 15, name: 'Lucidatypewriter, monospace'},
    {id: 16, name: 'Fixed, monospace'},
    {id: 17, name: 'monospace' },
    {id: 18, name: 'Comic Sans, Comic Sans MS, cursive'},
    {id: 19, name: 'Zapf Chancery, cursive' },
    {id: 20, name: 'Coronetscript, cursive'},
    {id: 21, name: 'Florence, cursive' },
    {id: 22, name: 'Parkavenue, cursive'},
    {id: 23, name: 'cursive' },
    {id: 24, name: 'Impact, fantasy'},
    {id: 25, name: 'Arnoldboecklin, fantasy'},
    {id: 26, name: 'Oldtown, fantasy'},
    {id: 27, name: 'Blippo, fantasy' },
    {id: 28, name: 'Brushstroke, fantasy'},
    {id: 29, name: 'fantasy' }
  ];
  ngOnInit() {
    console.log(this.logoService.getLogo());
  }
  addFont(value){
    this.logoService.addFont(value);
    this.router.navigate(['/color']);
  }
}
