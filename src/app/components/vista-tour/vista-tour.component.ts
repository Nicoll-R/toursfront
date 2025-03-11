import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  
  selector: 'app-vista-tour',
  imports: [MatTableModule, MatPaginatorModule, MatSnackBarModule, MatButtonModule, MatCardModule],
  templateUrl: './vista-tour.component.html',
  styleUrl: './vista-tour.component.css'
})


export class VistaTourComponent {
  
}
