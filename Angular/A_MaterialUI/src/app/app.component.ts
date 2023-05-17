import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A_MaterialUI';
  myForm!: FormGroup<any>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
   
  passwordMatchValidator(form: FormGroup) {
    const password = form.controls['password'].value;
    const confirmPassword = form.controls['confirmPassword'].value;

    if (password !== confirmPassword) {
      form.controls['confirmPassword'].setErrors({ 'mismatch': true });
    } else {
      form.controls['confirmPassword'].setErrors(null);
    }
  }

}
