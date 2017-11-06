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
  ];
  arrayWords = [
    'Один', 'Два', 'Три','Четыре', 'Пять', 'Шесть', 'Семь', 'Двадцать пять', 'склеенное', 'небесами', 'перетянуть', 'дачных', 'переспросил', 'пастушеской', 'недопитой', 'любопытной', 'подступить', 'бриллиант', 'претерпели', 'наловчился', 'предводимой', 'дне', 'одушевлены', 'выходка', 'сбрасывая', 'судят', 'властителем', 'отсчитывал', 'контрабандной', 'горничной', 'театральный', 'гранатном', 'угроз', 'засушенные', 'отдыхаешь', 'шестикрылый', 'остыл', 'вскрывается', 'боря', 'печать', 'хлева', 'запрет', 'захождение', 'хозяев', 'колокольни', 'теткой', 'бабушку', 'созналась', 'неравного', 'прищурясь', 'желающий', 'служащих', 'бревенчатыми', 'тонкие', 'есаулы', 'вольностью', 'кузнецов', 'лиходеева', 'заткнута', 'замедленных', 'божьей', 'забавлять', 'дивизиями'
  ];
  
  ngOnInit() {
  }
  imgDict : {
    imgPosX:0,
    imgPosY:0
  };
  startMousePosX : number;
  startMousePosY : number;
  startObjPosX : number;
  startObjPosY : number;
  currentObjPosX : number;
  currentObjPosY : number;
  zIndex : number = 0;
  currentTarget: string = '';
  

  dragStart(event) {
    this.currentTarget = event.target.className;
    this.startMousePosX = event.clientX;
    this.startMousePosY = event.clientY;
    this.startObjPosX = event.target.offsetLeft;
    this.startObjPosY = event.target.offsetTop;
    this.zIndex = this.zIndex + 1;
    event.target.style.zIndex = this.zIndex;
  }

  drag(event) {
      let offsetX = this.startMousePosX - event.clientX;
      let offsetY = this.startMousePosY - event.clientY;
      this.currentObjPosX = this.startObjPosX - offsetX;
      this.currentObjPosY = this.startObjPosY - offsetY;
      event.target.style.top = this.currentObjPosY + 'px';
      event.target.style.left = this.currentObjPosX + 'px';
      event.target.style.height = 'auto';
      event.target.style.borderRadius = '10px';
      event.target.style.position = 'absolute';
    }

  dragEnd(event) {
      let offsetX = this.startMousePosX - event.clientX;
      let offsetY = this.startMousePosY - event.clientY;
      let currentObjPosX = this.startObjPosX - offsetX;
      let currentObjPosY = this.startObjPosY - offsetY;
      event.target.style.top = currentObjPosY + 'px';
      event.target.style.left = currentObjPosX + 'px';
  }
  onClick(event) {
    if (event.ctrlKey == true) {
      event.target.style.position = '';
      event.target.style.top = '';
      event.target.style.left = '';
      event.target.style.height = '';
    }
  }

  // getCurrentPosition(event) {
  //   let offsetX = this.startMousePosX - event.clientX;
  //   let offsetY = this.startMousePosY - event.clientY;
  //   let currentObjPosX = this.startObjPosX - offsetX;
  //   let currentObjPosY = this.startObjPosY - offsetY;
  //   let dicPosotion = {"posX":currentObjPosX, "posY":currentObjPosY};
  //   return dicPosotion;
  // }
}
