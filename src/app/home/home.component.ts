import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DealersService } from '../service/dealers/dealers.service';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private dealersService: DealersService
  ) { }

  ngOnInit() {
    this.getDealers(); 
  }

  commercialType = false;
  serviceType = false;
  isLoading = false;

  dealers = [];
  filteredDealers = [];
  checkboxTypes = [];
  filterTypes = [
    {
      name: 'Service',
      value: 'Service Pro'
    },
    {
      name: 'Installation',
      value: 'Installation Pro'
    },
    {
      name: 'Residential',
      value: 'Residential Pro'
    },
    {
      name: 'Commercial',
      value: 'Commercial Pro'
    }
  ]

  // GET DEALERS
  getDealers() {

    // SHOW LOADING
    this.isLoading = true;

    this.dealersService.getDealers().subscribe(data => {
      
      // HIDE LOADING
      this.isLoading = false;

      // RE STRUCTURE JSON DATA
      for(let i = 0; i < data.dealers.length; i++){

        let dealer = data.dealers[i].data;

        this.dealers.push(dealer);
        this.filteredDealers.push(dealer);

      }

    });
  }

  // ON CHANGE CHECKBOXES
  onChangeCheckbox(type){

    // SHOW LOADING
    this.isLoading = true;

    let index = this.checkboxTypes.indexOf(type);  

    if (index !== -1) {
        this.checkboxTypes.splice(index, 1);
    }else{
      this.checkboxTypes.push(type);
    }
      
    let tempDealers = [];
    
    for(let i = 0; i < this.dealers.length; i++){

      let dealer = this.dealers[i];
      let cert = this.dealers[i].certifications;

      let comparison = this.checkboxTypes.some(val => cert.indexOf(val) === -1);

      if(!comparison){
        tempDealers.push(dealer);
      }

    }
    
    // ADD DELAY IN FETCHING DATA
    setTimeout(()=>{ 

      // HIDE LOADING
      this.isLoading = false;
      this.filteredDealers = tempDealers; 
    }, 1300)

  }

  openContactDialog (dealer) {
    let dialogRef = this.dialog.open(ContactDialogComponent, {
      data: dealer,
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }

}
