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

  removeTextAreaBlock(event) {
    if (event.ctrlKey == true) {
      event.target.parentElement.style.display = 'none';
    }
  }

  addTextAreaBlock(event) {
    console.log(event);
    let tmpl = document.querySelector(".text-area");
    let insertZone = document.querySelector(".insertZone");
    console.log(tmpl);
    let p_prime = document.importNode(tmpl, true);
    insertZone.appendChild(p_prime);
  }

  dragStart(event) {

    let area = document.querySelector('body');
    let box = event.target.getBoundingClientRect();

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

    if (event.target.classList.contains('text-area')) {
      this.currentTarget = event.target;
      this.currentTarget.style.zIndex = 1000;
    }
  }

  drag(event) {
    this.getCurrentPosition(event);
    this.currentTarget.style.top = this.currentObjPosY + 'px';
    this.currentTarget.style.left = this.currentObjPosX + 'px';
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
  }

  dragEnd(event) {
    this.getCurrentPosition(event);
    this.currentTarget.style.top = this.currentObjPosY + 'px';
    this.currentTarget.style.left = this.currentObjPosX + 'px';
  }

  getCurrentPosition(event) {
    let offsetX = this.mousePos.X - event.clientX;
    let offsetY = this.mousePos.Y - event.clientY;
    this.currentObjPosX = this.targetProperties.X - offsetX;
    this.currentObjPosY = this.targetProperties.Y - offsetY;
    if (this.currentObjPosX <= 0) {
      this.currentObjPosX = 0;
    }
    if (this.currentObjPosX >= this.areaSize.width - this.targetProperties.width) {
      this.currentObjPosX = this.areaSize.width - this.targetProperties.width;
    }
    if (this.currentObjPosY <= 0) {
      this.currentObjPosY = 0;
    }
    if (this.currentObjPosY >= this.areaSize.height - this.targetProperties.height) {
      this.currentObjPosY = this.areaSize.height - this.targetProperties.height;
    }
  }
}
