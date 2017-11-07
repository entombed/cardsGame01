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
  startObjPos = {
    X:0,
    Y:0
  };
  areaSize = {
    height:0,
    width:0
  };
  mousePosX : number;
  mousePosY : number;

  currentObjPosX : number;
  currentObjPosY : number;
  zIndex : number = 0;
  currentTarget: string = '';
  

  dragStart(event) {
    let area = document.querySelector('body');
    this.areaSize.height = area.clientHeight;
    this.areaSize.width = area.clientWidth;
    this.currentTarget = event.target.className;
    this.mousePosX = event.clientX;
    this.mousePosY = event.clientY;
    this.startObjPos.X = event.target.offsetLeft;
    this.startObjPos.Y = event.target.offsetTop;
    this.zIndex = this.zIndex + 1;
    event.target.style.zIndex = this.zIndex;
    // console.log(this.areaSize);
  }

  drag(event) {
    this.getCurrentPosition(event);
    event.target.style.top = this.currentObjPosY + 'px';
    event.target.style.left = this.currentObjPosX + 'px';
    event.target.style.height = 'auto';
    event.target.style.borderRadius = '10px';
    event.target.style.position = 'absolute';
    // console.log(this.currentObjPosX + ' ' + this.currentObjPosY);
  }

  dragEnd(event) {
    this.getCurrentPosition(event);
    event.target.style.top = this.currentObjPosY + 'px';
    event.target.style.left = this.currentObjPosX + 'px';
    // console.dir(event);
  }

  onClick(event) {
    if (event.ctrlKey == true) {
      event.target.style.position = '';
      event.target.style.top = '';
      event.target.style.left = '';
      event.target.style.height = '';
      event.target.style.borderRadius = '5px';
    }
  }

  getCurrentPosition(event) {
    let offsetX = this.mousePosX - event.clientX;
    let offsetY = this.mousePosY - event.clientY;
    this.currentObjPosX = this.startObjPos.X - offsetX;
    this.currentObjPosY = this.startObjPos.Y - offsetY;
    if (this.currentObjPosX <= 0) {
      this.currentObjPosX = 0;
    }
    if (this.currentObjPosX >= this.areaSize.width - event.target.clientWidth) {
      this.currentObjPosX = this.areaSize.width - event.target.clientWidth;
    }
    if (this.currentObjPosY <= 0) { 
      this.currentObjPosY = 0;
    }
    if (this.currentObjPosY >= this.areaSize.height - event.target.clientHeight) {
      this.currentObjPosY = this.areaSize.height - event.target.clientHeight;
    }
    console.log(this.areaSize);
    console.log(this.currentObjPosX + " " + this.currentObjPosY);
  }
}
