import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area01',
  templateUrl: './area01.component.html',
  styleUrls: ['./area01.component.css']
})
export class Area01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputArray: string[] = [];
  areaSize = {
    height: null,
    width: null
  };

  mousePos = {
    X: null,
    Y: null
  };

  targetProperties = {
    X: null,
    Y: null,
    height: null,
    width: null
  };

  currentObjPosX : number = null;
  currentObjPosY : number = null;
  zIndex : number = null;
  currentTarget;
  
  addInput(event) {
    console.log(event);
    let data = event.target.value;
    this.inputArray.push(data);
    console.log(this.inputArray);
    event.target.value = '';
  }

  getParentBySelector(child, selector) {
    var node = child;
    while (node && !node.classList.contains(selector)) {
      node = node.parentElement;
    }
    this.currentTarget = node;
  }

  onCkick(event) {
    if (event.target.classList.contains("header") && event.ctrlKey == true){
      this.getParentBySelector(event.target, "text-area");
      console.dir(event);
      console.dir(this.currentTarget);
      this.currentTarget.style.display = 'none';
      //this.currentTarget.remove();  //удаляем элемент
    }
  }

  dragStart(event) {

    let area = document.querySelector('#dropZone');
    let box = event.target.getBoundingClientRect();
    this.getParentBySelector(event.target, "text-area");

    this.targetProperties = {
      X: box.left + pageXOffset,
      Y: box.top + pageYOffset,
      height: box.height,
      width: box.width
    };

    this.areaSize = {
      height: area.clientHeight,
      width: area.clientWidth
    };

    this.mousePos = {
      X: event.clientX,
      Y: event.clientY
    };
  }

  drag(event) {
    this.getCurrentPosition(event);
    this.setStylPositionAttribyte();
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
  }

  dragEnd(event) {
    this.setStylPositionAttribyte();
  }

  setStylPositionAttribyte() {
    if (this.currentObjPosY >= 0 && this.currentObjPosY <= this.areaSize.height - this.targetProperties.height && this.currentObjPosX >= 0 && this.currentObjPosX <= this.areaSize.width - this.targetProperties.width) {
      this.currentTarget.style.left = this.currentObjPosX + 'px'
      this.currentTarget.style.top = this.currentObjPosY + 'px';
    }
  }

  getCurrentPosition(event) {
    let offsetX = this.mousePos.X - event.clientX;
    let offsetY = this.mousePos.Y - event.clientY;
    this.currentObjPosX = this.targetProperties.X - offsetX;
    this.currentObjPosY = this.targetProperties.Y - offsetY;
  }
}
