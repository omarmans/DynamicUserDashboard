import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/services/user-services.service';
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-user-deatails',
  templateUrl: './user-deatails.component.html',
  styleUrls: ['./user-deatails.component.scss'],
})
export class UserDeatailsComponent implements OnInit {
  user!: User;
  show_spinner = false;

  constructor(
    private serv: UserServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show_spinner = true;
    setTimeout(() => {
      //to get id from url
      this.route.paramMap.subscribe((params) => {
        const idParam = params.get('id');
        if (idParam) {
          // to transform from string to number
          const userId = +idParam;
          //check not equl zero
          if (userId > 0) {
            this.serv.getUser(userId).subscribe((data) => {
              console.log(data); //

              this.user = data.data;
            });
          }
        }
        this.show_spinner = false;
      });
    }, 1000);
  }
}
