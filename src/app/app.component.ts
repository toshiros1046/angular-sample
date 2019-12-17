import { Component } from '@angular/core';

// ① 型定義
declare function Hello(): void;
// 型定義はこれ↓でも良い
// declare var Hello: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample';

  // ② hello.jsのHello()を呼び出し
  constructor() {
  Hello();
  }
  
}
