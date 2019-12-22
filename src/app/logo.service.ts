import { Injectable } from '@angular/core';
import { Logo } from './logo';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  logo: Logo;
  constructor() {
    this.logo = new Logo();
/*
    this.logo.name = "MyBrand";
    this.logo.image = "../../assets/logos/shield.svg";
    this.logo.font = "Courier New, monospace";
    this.logo.color = ["red","blue"];*/
  }

  addName(name) {
    this.logo.name = name;
  }
  addColor(color1, color2) {
    this.logo.color.push(color1, color2);
  }
  addFont(font) {
    this.logo.font = font;
  }
  addImage(image) {
    this.logo.image = image;
  }

  getLogo() {
    return this.logo;
  }
}
