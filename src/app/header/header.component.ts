import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //Input คือรับมาจาก Component แม่มาใช้
  @Input("media_Query") mobileQueryMax!: boolean;


  //OUTPUT ไว้ให้component แม่ ใช้
  @Output("toggle") navToggle = new EventEmitter(); //ตั้งชื่อได้ในวงเล็บหลัง output
  @Output() sayHi = new EventEmitter<String>(); //กำหนด type ของตัวแปลงที่จะส่งไปได้ใน < >


  demoMailNoti = 50;
  demoNoti = 9;

  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navToggle.emit(); //emit คือส่งไป
    this.sayHi.emit("wow");
  }

}
