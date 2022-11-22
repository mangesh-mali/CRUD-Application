import { Component, OnInit } from '@angular/core';
import { Ser2Service } from '../Service/ser2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  user: any;
  namefromTS: any;
  jobfromTS: any;
  id: any;
  showUpdatebtn: boolean = false;
  showSubmit: boolean = true;
  constructor(private ser: Ser2Service) { }

  ngOnInit(): void {
    console.log(this.ser.getUser());
    this.ser.getUser().subscribe((res) => {
      console.log(res);
      this.user = res;
      this.user = this.user.data;
      console.log(this.user);
    },
      (err) => {
        console.log(err);
      });
  }

  onSub(f: any) {
    console.log(f.value);
    this.ser.createUser(f.value).subscribe(
      (res) => { console.log(res) },
      (err) => { console.log(err); })
  }

  editUser(a: any) {
    this.showUpdatebtn = true;
    this.showSubmit = false;
    console.log(a);
    this.id = a.id;
    console.log(a.first_name);
    this.namefromTS = a.first_name + " " + a.last_name;
    this.jobfromTS = a.email;
  }

  onUp(a: any) {
    this.showUpdatebtn = false;
    this.showSubmit = true;
    console.log(a.value);

    this.ser.updateUser(a.value, this.id).subscribe(
      (res) => { console.log(res) },
      (err) => { console.log(err) }
    )
  }

  delUser(z: any) {
    console.log(z);
    console.log(z.id);

    this.ser.delete(z.id).subscribe(
      (res) => { console.log(res) },
      (err) => { console.log(err) }
    )
  }

}
