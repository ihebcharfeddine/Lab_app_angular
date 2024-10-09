import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  dataSource: Event[] = [];
  displayedColumns: string[] = [
    'id',
    'titre',
    'datedebut',
    'datefin',
    'lieu',
    'icons',
  ];

  constructor(private es: EventService, private dialog: MatDialog) {}

  ngOnInit() {
    this.es.getAllEvent().subscribe((data) => {
      this.dataSource = data;
    });
  }
  open(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '300px',
      width: '700px',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
