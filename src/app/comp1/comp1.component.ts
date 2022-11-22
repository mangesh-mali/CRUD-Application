import { Component, OnInit } from '@angular/core';
import { Ser1Service } from '../Service/ser1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  data: any;
  nmts: any;
  jb: any;
  upbtn: boolean = false;
  subbtn: boolean = true;
  id: any;
  constructor(private ser: Ser1Service) { }

  ngOnInit(): void {
    this.ser.getData().subscribe(
      (res) => {
        console.log(res);
        this.data = res;
        this.data = this.data.data
        console.log(this.data);
      },
      (err) => { console.log(err) }
    )
  }

  createUser(f: any) {
    console.log(f.value);
    this.ser.createDt(f.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => { console.log(err) }
    )
  }

  updusr(a: any) {
    this.upbtn = true;
    console.log(a);
    this.nmts = a.first_name + " " + a.last_name;
    this.jb = a.email;
    this.id = a.id;
    this.subbtn = false;
  }
  updateUser(f: any) {
    this.upbtn = false;
    this.subbtn = true;
    this.ser.updateDT(f.value, this.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => { console.log(err) }
    )
  }

  delusr(a: any) {
    console.log(a.id);
    this.id = a.id;
    this.ser.delDT(a.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => { console.log(err) }
    )
  }

}
