import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  

  @Input() card!: any;
  constructor(public dialog: MatDialog) {}

  openDialog(card:any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        lucha: card,
      },
      backdropClass: 'dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    console.log(this.card) 
  }

}
