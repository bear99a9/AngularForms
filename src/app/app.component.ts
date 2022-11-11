import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: this.defaultQuestion,
      questionAnswer: '',
      gender: this.genders[0]
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signUpForm);
  }

}
