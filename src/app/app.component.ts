import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTED';  
}


