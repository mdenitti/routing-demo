import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../shared/users.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [JsonPipe],
  providers: [UsersService]
})
export class UserComponent implements OnInit, OnDestroy {
  userId: string = '';
  users!: Promise<any> [];
  singleUser: any;
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
   this.usersService.getUsers().then(data => {
     this.users = data
   });
    // Subscribe to parameter changes
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.usersService.getUserById(parseInt(this.userId)).then(data => {
        this.singleUser = data
      });
    });
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}