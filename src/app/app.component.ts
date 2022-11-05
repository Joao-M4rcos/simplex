import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  simplexMaxForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.inicializarFormSimplexMax();
  }

  inicializarFormSimplexMax = () => {
    this.simplexMaxForm = this.formBuilder.group({
      Ax: [null],
      Ay: [null],
      AA: [null],
      AB: [null],
      AC: [null],
      ARs: [null],
      Bx: [null],
      By: [null],
      BA: [null],
      BB: [null],
      BC: [null],
      BRs: [null],
      Cx: [null],
      Cy: [null],
      CA: [null],
      CB: [null],
      CC: [null],
      CRs: [null],
      Zx: [null, [Validators.pattern('^[0-9]*$')]],
      Zy: [null],
      ZA: [null],
      ZB: [null],
      ZC: [null],
      ZRs: [null],
    });
  };

  identificarMenorElemento = () => {
    const Zx = this.simplexMaxForm.get('Zx').value;
    const Zy = this.simplexMaxForm.get('Zy').value;
    // const ZA = this.simplexMaxForm.get('ZA').value;
    // const ZB = this.simplexMaxForm.get('ZB').value;
    // const ZC = this.simplexMaxForm.get('ZC').value;
    // const ZRs = this.simplexMaxForm.get('ZRs').value;

    let menorValor;

    let elementos = [];

    menorValor = Zx;

    if (Zy < Zx) menorValor = Zy;
    if (menorValor > 0) this.toastr.warning('O valor deve ser negativo!');
    elementos.push(parseInt(Zy));
    // elementos.push(ZA);
    // elementos.push(ZB);
    // elementos.push(ZC);

    console.log(menorValor);
  };

  calcular = () => {
    this.identificarMenorElemento();
  };
}
