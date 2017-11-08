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
  //currentTarget: string = '';


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

    //this.currentTarget = event.target.className;

    this.mousePos = {
      X: event.clientX,
      Y: event.clientY
    };

    if (this.zIndex != event.target.style.zIndex) {
      this.zIndex = this.zIndex + 1;
      event.target.style.zIndex = this.zIndex;
    };
  }

  drag(event) {
    this.getCurrentPosition(event);
    event.target.style.top = this.currentObjPosY + 'px';
    event.target.style.left = this.currentObjPosX + 'px';
    if (event.target.classList.contains('moved') == false) {
      event.target.classList.add('moved');
    }
  }

  dragEnd(event) {
    this.getCurrentPosition(event);
    event.target.style.top = this.currentObjPosY + 'px';
    event.target.style.left = this.currentObjPosX + 'px';
  }

  onClick(event) {
    if (event.ctrlKey == true) {
      event.target.classList.remove('moved');
      event.target.removeAttribute('style');
    }
    //let box = event.target.getBoundingClientRect();
    //console.dir(event);
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
