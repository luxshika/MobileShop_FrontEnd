import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from 'src/app/models/phone.model';
import { PhonesService } from '../services/phones.service';
// import { PhoneEditComponent } from '../phone-edit/phone-edit.component';
// import { PhoneViewComponent } from '../phone-view/phone-view.component';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
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
    this.phonesService.getAllPhones()
    .subscribe({
      next:(phones) => {
        // console.log(phones);
        this.phones = phones;
      },
      error:(response) =>
        {
          console.log(response);
        }
    });

    this.phones.push();

  }

  deletePhone(id: number) {
    if (confirm('Are you sure you want to delete this phone?')) {
      this.phonesService.deletePhone(id).subscribe({
        next: () => {
         
          this.phones = this.phones.filter(phone => phone.id !== id);
        },
        error: (error) => {
          console.error('Error deleting phone:', error);
        }
      });
    }
  }

  // openEditModal(phone: Phone): void {
  //   const modalRef = this.phonesService.open(PhoneEditComponent);
  //   modalRef.componentInstance.phone = phone;

  //   modalRef.result.then((result) => {
  //     if (result) {
  //       // Update the phone details in the list
  //       const index = this.phones.findIndex(p => p.id === phone.id);
  //       if (index !== -1) {
  //         this.phones[index] = { ...this.phones[index], ...result };
  //       }
  //     }
  //   }).catch((error) => {
  //     console.log('Edit modal dismissed', error);
  //   });
  // }

  // openViewModal(phone: Phone): void {
  //   const modalRef = this.phonesService.open(PhoneViewComponent);
  //   modalRef.componentInstance.phone = phone;
  // }
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
  openModel(phone:any) {
    const modelDiv = document.getElementById('mymodel');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
    
      this.userForm.patchValue({
        productName: phone.productName,
        brandName: phone.brandName,
        price: phone.price,
        quantity: phone.quantity,
        madein: phone.madein,
        feature: phone.feature,
        image: phone.image
      });
    

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
