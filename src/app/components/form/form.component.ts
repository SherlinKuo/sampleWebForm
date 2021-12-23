import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // name = "王大明";

  profile = {
    name : '',
    sex : '',
    job : ''
  }

  jobList = ["學生", "老師", "工程師", "自由業", "其他"]
  constructor() { }

  ngOnInit(): void {
  }

  check(){

    // 一般使用 html 取值得方式，input 加入 屬性 id="name"
    /*
    let temp = <HTMLInputElement> document.getElementById("name");
    console.log(temp.value);
    */

    //雙向數據
    //console.log(this.name);

  }

}
