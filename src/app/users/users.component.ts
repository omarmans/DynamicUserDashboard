import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/services/user-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  Users_data: any[] = [];
  filtered_data: any[] = [];
  total_pages: any;
  show_spinner = false;
  @ViewChild('search') search!: ElementRef;
  constructor(private serv: UserServicesService) {}
  ngAfterViewInit(): void {
    //to get value of input
    this.search.nativeElement.addEventListener('input', () => {
      const SearchValue = this.search.nativeElement.value.toLowerCase();
      //to filter bu ID
      this.filtered_data = this.Users_data.filter((user) => {
        return user.id.toString().includes(SearchValue);
      });
    });
  }
  ngOnInit(): void {
    this.getUsers(1);
  }
  getUsers(number: any) {
    this.show_spinner = true;
    //here i get data and late for 1.5s to show spinner
    setTimeout(() => {
      this.serv.getUsers(number).subscribe((data: any) => {
        console.log(data);
        console.log(data.data);
        console.log(data.total_pages);
        this.Users_data = data.data;
        this.filtered_data = data.data; //here
        //to get numbers of pages
        const array = [];
        for (let i = 1; i <= data.total_pages; i++) {
          array.push(i);
          this.total_pages = array;
        }
      });
      this.show_spinner = false;
    }, 1500);
  }
}
