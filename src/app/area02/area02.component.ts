import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-area02',
  templateUrl: './area02.component.html',
  styleUrls: ['./area02.component.css']
})
export class Area02Component implements OnInit {

  constructor() { }
  checkedStatus: boolean = true;

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
    "Соответствовать", "Стыдить (ся)", "Избегать", "Затягивать", "Обесценивать", "Жалеть", "Сомневаться", "Запрещать", "Бояться", "Тревожиться", "Смиряться", "Выбирать (делать выбор)", "Улучшать/совершенствовать", "Жаловаться", "Бездействовать", "Пытаться", "Подражать/копировать", "Ограничивать", "Ухаживать", "Прятать/скрывать", "Паниковать", "Проверять", "Обвинять", "Отказывать (ся)", "Общаться", "Лениться", "Наказывать", "Мечтать", "Обижать (ся)", "Ошибаться", "Ненавидеть", "Радовать (ся)",  "Терять", "Надеяться", "Обманывать (ся)", "Освобождать (ся)", "Терпеть", "Настаивать/требовать", "Молчать", "Прояснять (вносить ясность)", "Обещать", "Менять (ся)", "Подчинять (ся)", "Соревноваться", "Работать", "Решать (принимать решение)", "Баловать", "Расти/развиваться", "Рассчитывать/взвешивать", "Угрожать", "Уставать", "Умирать", "Учить (ся)", "Преследовать", "Стесняться", "Разочаровывать (ся)", "Хотеть", "Планировать", "Ревновать", "Чувствовать", "Управлять", "Удивлять (ся)", "Учитывать", "Притворяться", "Хвалить", "Шантажировать/ставить условия", "Сравнивать", "Удовлетворять", "Фантазировать/придумывать", "Прощать", "Плакать", "Преувеличивать", "Предвосхищать", "Провоцировать", "Раздражать (ся)", "Разрешать", "Развлекать (ся)", "Намекать", "Помогать", "Мстить", "Отделять (ся)", "Спешить", "Уважать", "Нуждаться", "Заботиться", "Любить", "Говорить", "Организовывать (ся)", "Инвестировать/вкладывать", "Страдать", "Игнорировать", "Критиковать/осуждать", "Контрактировать (заключать договор)", "Зависеть", "Клясться", "Идеализировать", "Болеть", "Бороться", "Заявлять/выражать", "Бить/убивать/разрушать", "Гневаться", "Возмущаться", "Делать/действовать", "Грустить/печалиться", "Кричать", "Дистанцироваться/отдаляться", "Скучать", "Казаться (показалось, кажется)", "Доказывать", "Манипулировать", "Советовать (ся)", "Творить/создавать", "Думать", "Воспитывать", "Доверять", "Спасать", "Контролировать", "Копить", "Стараться", "Жить", "Ждать", "Заставлять", "Завидовать", "Жертвовать", "Дарить", "Защищать (ся)", "Восхищать (ся)", "Богатеть", "Анализировать", "Просить"
  ];

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
  hiddenMode = false;
  handleChange(event,) {
    console.log(event);
    if (event.checked) {
      this.hiddenMode = !event.checked;
      this.showCardImage();
    }
    if (!event.checked) {
      this.hiddenMode = event.checked;
      this.hideCardImage();
    }
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

    if (event.target.classList.contains('img-card')) {
      this.currentTarget = event.target.parentElement;
    }

    if (event.target.classList.contains('word-block')) {
      this.currentTarget = event.target;
    }

    if (this.zIndex != this.currentTarget.style.zIndex) {
      this.zIndex = this.zIndex + 1;
      this.currentTarget.style.zIndex = this.zIndex;
    };

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

  onClick(event) {
    let img = false;
    let word = false;
    if (event.target.classList.contains('img-card')) {
      this.currentTarget = event.target.parentElement;
      img = true;
    }

    if (event.target.classList.contains('word-block')) {
      this.currentTarget = event.target;
      word = true;
    }

    if (event.ctrlKey == true) {
        this.currentTarget.classList.remove('moved');
        this.currentTarget.removeAttribute('style');
      if (this.hiddenMode && img) {
        event.target.classList.add('img-card-hidden');
      }
    }

    if (event.altKey == true) {
      if (img) {
        let cardHiddenStatus = event.target.classList.contains('img-card-hidden');
        if (cardHiddenStatus && img) {
          event.target.classList.remove('img-card-hidden');
        } else {
          event.target.classList.add('img-card-hidden');
        }
      }
    }
  }

  hideCardImage() {
    this.hiddenMode = true;
    let arrayCards = document.querySelectorAll( 'img.img-card');
    for (let i = 0; i < arrayCards.length; i++) {
      if (arrayCards[i].parentElement.classList.contains('moved')) {
        continue;
      }
      arrayCards[i].classList.add('img-card-hidden');
    }
  }

  showCardImage() {
    this.hiddenMode = false;
    let arrayCards = document.querySelectorAll('img.img-card');
    for (let i = 0; i < arrayCards.length; i++) {
      if (arrayCards[i].parentElement.classList.contains('moved')) {
        continue;
      }
      arrayCards[i].classList.remove('img-card-hidden');
    }
  }

  hideShowImage(selector) {
    console.log(this.hiddenMode);
    this.hiddenMode = !this.hiddenMode;
    let arrayCards = document.querySelectorAll( 'div.'+ selector + ' img.img-card');
    for (let i = 0; i < arrayCards.length; i++) {
      if (this.hiddenMode) {
        if (arrayCards[i].parentElement.classList.contains('moved')) {
          continue;
        }
        arrayCards[i].classList.add('img-card-hidden');
      } else {
        if (arrayCards[i].parentElement.classList.contains('moved')) {
          continue;
        }
        arrayCards[i].classList.remove('img-card-hidden');
      }
    }
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
