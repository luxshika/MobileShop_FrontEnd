// import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Phone } from 'src/app/models/phone.model';

// @Component({
//   selector: 'app-phone-edit',
//   templateUrl: './phone-edit.component.html',
//   styleUrls: ['./phone-edit.component.css']
// })
// export class PhoneEditComponent implements OnInit {
//   @Input() phone: Phone;
//   userForm: FormGroup;

//   constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.userForm = this.fb.group({
//       productName: [this.phone.productName, Validators.required],
//       brandName: [this.phone.brandName, Validators.required],
//       price: [this.phone.price, Validators.required],
//       quantity: [this.phone.quantity, Validators.required],
//       madein: [this.phone.madein, Validators.required],
//       feature: [this.phone.feature, Validators.required],
//       image: [this.phone.image, Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.userForm.valid) {
//       this.activeModal.close(this.userForm.value);
//     }
//   }
// }
