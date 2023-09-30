import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  parametros :any
  constructor(
    private dialogRef : MatDialogRef<DialogComponent>, @Inject (MAT_DIALOG_DATA) data:any
  ) {

    this.parametros = data
  }
  ngOnInit(): void {
    console.log(this.parametros)
  }
  cerrar(){
    this.dialogRef.close()
  }
}
