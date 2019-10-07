import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public backjpgUrl = 'assets/img/background.jpeg';
  public color = 'white';
  public buttonList = ['CREATE', 'UPDATE', 'DELETE'];
  public myVal = '';
  public tableName = '表格名称';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  form() {
    this.router.navigateByUrl('/form');
  }
  search(seachInfo) {
    console.log(seachInfo);
  }
}
