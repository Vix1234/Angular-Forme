import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild('f', {static:false}) mojaForma: NgForm;

  korisnik={
    ime:"",
    email:"",
    klub:""
  }

  constructor() { }

  OnPosalji(forma: NgForm){
    console.log(forma);
  }

  ngOnInit(): void {
  }

}
