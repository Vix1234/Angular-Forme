import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reaktivne',
  templateUrl: './reaktivne.component.html',
  styleUrls: ['./reaktivne.component.css']
})
export class ReaktivneComponent implements OnInit {
  polovi=['muski', 'zenski']
  mojaForma: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.mojaForma = new FormGroup({
      'ime': new FormControl("", Validators.required),
      'email':new FormControl("", [Validators.required, Validators.email]),
      'pol': new FormControl(this.polovi[0])
    });

    this.mojaForma.patchValue({
      'ime':"Ana"
    })
  }

    
  OnPosalji(){
    console.log(this.mojaForma);

    this.mojaForma.reset();
  }

}
