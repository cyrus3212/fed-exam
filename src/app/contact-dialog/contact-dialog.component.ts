import { Component, OnInit, Inject, HostListener, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // console.log(this.data);
  }

  isOwnPool = false;

  phoneNumber = '';
  userName = '';
  email = '';

  toggleOwnPool() {
    this.isOwnPool = !this.isOwnPool;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
