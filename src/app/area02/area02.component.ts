import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area02',
  templateUrl: './area02.component.html',
  styleUrls: ['./area02.component.css']
})
export class Area02Component implements OnInit {

  constructor() { }
  arrayCards = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png'
  ]
  ngOnInit() {
  }
  imgDict : {
    imgPosX:0,
    imgPosY:0
  };
  startMousePosX : number;
  startMousePosY : number;
  startImgPosX : number;
  startImgPosY : number;
  currentImgPosX : number;
  currentImgPosY : number;
  offsetX : number;
  offsetY : number;
  zIndex : number = 0;

  dragStart(event) {
    this.startMousePosX = event.clientX;
    this.startMousePosY = event.clientY;
    this.startImgPosX = event.target.x;
    this.startImgPosY = event.target.y;
  }

  drag(event) {

    let offsetX = this.startMousePosX - event.clientX;
    let offsetY = this.startMousePosY - event.clientY;
    this.currentImgPosX = this.startImgPosX - offsetX;
    this.currentImgPosY = this.startImgPosY - offsetY;

    event.target.style.position = 'absolute';
    event.target.style.top = this.currentImgPosY + 'px';
    event.target.style.left = this.currentImgPosX + 'px';
    event.target.style.height = 'auto';
    event.target.style.borderRadius = '10px';    
/*     console.log(this.startMousePosX + " " + this.startMousePosY + " " + this.startImgPosX + " " + this.startImgPosY);
    console.log(offsetX + " " + offsetY + ' !!!!'); */
  }

  dragEnd(event) {
    this.zIndex = this.zIndex + 1;
    let offsetX = this.startMousePosX - event.clientX;
    let offsetY = this.startMousePosY - event.clientY;
    this.currentImgPosX = this.startImgPosX - offsetX;
    this.currentImgPosY = this.startImgPosY - offsetY;
    event.target.style.position = 'absolute';
    event.target.style.top = this.currentImgPosY + 'px';
    event.target.style.left = this.currentImgPosX + 'px';
    event.target.style.height = 'auto';
    event.target.style.borderRadius = '10px';
    event.target.style.zIndex = this.zIndex;
  }
}
