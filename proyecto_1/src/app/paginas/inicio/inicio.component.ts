import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  formulario: FormGroup;
  formInvalido: boolean = true;
  minombre: string = ""

  constructor(private loginForm: FormBuilder) {
    this.formulario = this.loginForm.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }
 ngOnInit(): void {
    //  this.formInvalido = true;
    //  this.formulario.get('name')?.setValue('Juan');
    //  this.formulario.patchValue({
    //     name: 'Juan',  
    //     email: '',
    //     password: ''
    //   });

    this.formulario.valueChanges.subscribe(valor => {
      console.log(valor);
    }
    );
    this.formulario.get('name')?.valueChanges.subscribe(valor => {
      this.minombre = valor;
    });
 }
  validar(controlName: string, tipoError: string){
    return this.formulario.get(controlName)?.hasError(tipoError) && this.formulario.get(controlName)?.touched;
  }
  enviar() {
    console.log(this.formulario.value);
  }

}
