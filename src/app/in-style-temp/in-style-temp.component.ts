import { Component } from '@angular/core';

@Component({
  selector: 'app-in-style-temp',
  template: `
    <h2 class="text">
      Using Inline-style and Inline-Template!
    </h2>
  `,
  styles: `.text{color:blue}`
})
export class InStyleTempComponent {

}
