import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
}
