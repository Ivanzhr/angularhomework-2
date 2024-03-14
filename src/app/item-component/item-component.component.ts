import { Component } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent {
  arr = {
    name: 'airPods',
    img: '../../assets/2142094.jpeg',
    price: 100,
    desc: 'Найвищий рівень найнижчих звуків. Динамічний драйвер від Apple використовує спеціальний підсилювач, щоб відтворювати музику в усіх деталях. Ви почуєте повний спектр — від глибо­ких насичених басів до чистих високих нот.',
    short_desc: 'airPods безпровідні навушники',
    count: 21
  }
}
