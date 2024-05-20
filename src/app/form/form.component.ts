import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../models/phone.model';
import { PhonesService } from '../services/phones.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  phones: Phone[] = [];
  
  constructor(private phonesService: PhonesService) { }
  userForm !: FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      'productName': new FormControl(null, Validators.required),
      'brandName': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'madein': new FormControl(null, Validators.required),
      'feature': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required)
    });
  }
  onsubmit() {
    // console.log(this.userForm.value);
   this.phonesService.addPhone(this.userForm.value)
   .subscribe({
    next:(phone) => {
      // console.log(phones);
      this.phones.push(phone);
      
    },
    error:(response) =>
      {
        console.log(response);
      }
  });

    this.userForm.reset();
    

  }
  openModel() {
    const modelDiv = document.getElementById('mymodel');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModel() {
    const modelDiv = document.getElementById('mymodel');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';

    }
  }
  
  brandnames = [
    { "brandName": "Samsung" },
    { "brandName": "Huawei" },
    { "brandName": "Nokia" },
    { "brandName": "Apple" },
    { "brandName": "BlackBerry" },
    { "brandName": "Vivo" },
    { "brandName": "Sony" },
    { "brandName": "Oppo" },

  ];
}
