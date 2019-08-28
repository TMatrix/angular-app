import { Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../user.service';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[];
  currentSortField = 'id';
  currentSortDirection = 'asc';

  constructor(private userService: UserService) { 
    this.displayedColumns = ['id', 'firstname', 'lastname', 'email', 'year', 'password'];
  }

  ngOnInit() {
    this.dataSource = this.userService.getUsers();
  }
  
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  sort(field) {
    const sortDirection = this.setSortDirection(field);;
    this.dataSource.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (field) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'firstname': [propertyA, propertyB] = [a.firstname, b.firstname]; break;
        case 'lastname': [propertyA, propertyB] = [a.lastname, b.lastname]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
        case 'year': [propertyA, propertyB] = [a.year, b.year]; break;
      }
      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (sortDirection == 'asc' ? 1 : -1);
    }
    );
    this.table.renderRows();

  }
  setSortDirection(field) {
    if (field === this.currentSortField) {
      this.currentSortDirection = (this.currentSortDirection === 'asc') ?'desc' : 'asc';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.currentSortField = field;
    return this.currentSortDirection;
  }

}
