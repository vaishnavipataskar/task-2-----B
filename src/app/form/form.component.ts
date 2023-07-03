import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  isHidden : boolean = true;
  isHidden2 : boolean = true;
  @ViewChild('ContactNum')contactNum : ElementRef | any;
  @ViewChild('ContactNum2')contactNum2 : ElementRef | any; 
  // myFunction(eve:any){
  //   if(this.contactNum.nativeElement.value === eve.target.value){
  //     this.isHidden = false;
  //     this.isHidden2 = true;
  //   }else if(this.contactNum2.nativeElement.value === eve.target.value){
  //     this.isHidden2 = false;
  //     this.isHidden = true;
  //   }
  // } 

  

  handleRadioClick1(){
    console.log('click event');
    console.log(this.contactNum.nativeElement.value);
    if(this.contactNum.nativeElement.value){
      this.isHidden = false;
      this.isHidden2 = true;
      this.contactNum.checked = true;
      this.contactNum2.checked = false;
    }
  }
  handleRadioClick2(){
    console.log('click event2');
    console.log(this.contactNum2.nativeElement.value);
    if(this.contactNum2.nativeElement.value){
      this.isHidden2 = false;
      this.isHidden = true;
      this.contactNum2.checked = true;
      this.contactNum.checked = false;
    }
  }
}

  

