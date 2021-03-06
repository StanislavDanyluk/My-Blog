import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  email: string;
  

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  Alert() {
    alert('You must be logged to share new post!')
  }
}
