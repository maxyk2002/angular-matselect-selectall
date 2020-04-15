import {SelectItem } from   './select-item';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('allSelected') private allSelected: MatOption;
   selectedProdCat1: string[] = [];
   productCat1: SelectItem[];

    ngOnInit() {
       this.initializeData();
        
  }
 private initializeData() {
    this.resetDropDowns();
    this.productCat1 = this.getProductAsSelectItem();
    this.productCat1.forEach(x => this.selectedProdCat1.push(x.Value));
 }

 private resetDropDowns()
 {
   this.selectedProdCat1 = ['all'];
 }

tosslePerOne(all){ 
   if (this.allSelected.selected) {  
    this.allSelected.deselect();
   this.selectedProdCat1 = this.selectedProdCat1.filter(obj => obj !== 'all');
    return false;
}
alert(this.selectedProdCat1.length + ' : ' + this.productCat1.length);


  if(this.selectedProdCat1.length==this.productCat1.length)
  {
    this.allSelected.select();
    this.selectedProdCat1.push('all');
    this.productCat1.forEach(x => this.selectedProdCat1.push(x.Value));
  }

}

toggleAllSelection() {
    if (this.allSelected.selected) {
      this.productCat1 = this.getProductAsSelectItem();
    this.productCat1.forEach(x => this.selectedProdCat1.push(x.Value));
    } else {
      this.selectedProdCat1=[];
    }
  }
   private getProductAsSelectItem(): SelectItem[] {
      let prd: SelectItem[];
     prd=[
    {
      Name: 'Value1', Value: 'Value1',IsSelected :true,
    },
    {
      Name: 'Value2', Value: 'Value2',IsSelected :true,
    },
    {
      Name: 'Value3', Value: 'Value3',IsSelected :true,
    },
    {
      Name: 'Value4', Value: 'Value4',IsSelected :true,
    }
  ];

  return prd;
   }
}
