import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs= {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar Nova Conta',
  };

  private nameControl = new FormControl('',[Validators.required,Validators.minLength(3)]);

  constructor(private fb: FormBuilder) {}

  get nome(): FormControl{
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl> this.authForm.get('nome');
  }

  get email(): FormControl{
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl> this.authForm.get('email');
  }

  get password(): FormControl{
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl> this.authForm.get('password');
  }

  changeAuthAction(): void{
    this.configs.isSignIn = !this.configs.isSignIn;
    const{isSignIn} = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Cadastrar';
    this.configs.actionChange = isSignIn ? 'Criar Nova Conta' : 'Já tenho uma conta';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !isSignIn
      ? this.authForm.addControl('nome',this.nameControl)
      : this.authForm.removeControl('nome');
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void{
    console.log('AuthForm:', this.authForm.value);
  }






  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}
