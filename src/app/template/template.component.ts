import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild('f', {static:false}) mojaForma: NgForm;

  defaultKlub = 'Crvena Zvezda';
  komentar = '';
  polovi=['muski', 'zenski'];

  korisnik={
    ime:"",
    email:"",
    klub:"",
    komentar:"",
    pol:""
  }
  poslato = false;
  
  constructor() { }

  predlozi(){
    let ime="Petar";

    this.mojaForma.form.patchValue(
      {podaciKorisnika:{
      ime:ime
    }});
  }

  OnPosalji(){
    //console.log(forma);
    this.poslato = true;
    this.korisnik.ime = this.mojaForma.value.podaciKorisnika.ime;
    this.korisnik.email = this.mojaForma.value.podaciKorisnika.email;
    this.korisnik.klub = this.mojaForma.value.podaciKorisnika.klub;
    this.korisnik.komentar = this.mojaForma.value.podaciKorisnika.komentar;
    this.korisnik.pol = this.mojaForma.value.podaciKorisnika.pol;

    this.mojaForma.reset();
  }

  ngOnInit(): void {
  }

}
