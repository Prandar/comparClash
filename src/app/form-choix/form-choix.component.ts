import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { emailDomainAllowedValidator} from "./email.validator";

@Component({
  selector: 'app-form-choix',
  templateUrl: './form-choix.component.html',
  styleUrls: ['./form-choix.component.css']
})
export class FormChoixComponent implements OnInit {
  model: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = this.formBuilder.group({
        email: ['',[
            Validators.required,
            Validators.email,
            emailDomainAllowedValidator('epsi.fr')
        ]],
        choix: this.formBuilder.array([])
    });
  }

  get choixChienChat() {
    return this.model.get('choix') as FormArray;
  }

  addChoixChienChat() {
    const choix = this.formBuilder.group({
        lechoix: []
    });
    this.choixChienChat.push(choix);
  }
}
