import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIcon,MatInputModule,ReactiveFormsModule,MatButtonModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
  image = "";
  openModal(image:string){
    this.image = image;
    console.log('onclick')
    const modal = document.getElementById("more-info__modal");
    
    if(modal != null){
      console.log('modal')
      modal.style.display = "block";
     
    }

  }
  close(modalName:string){
    const modal = document.getElementById(modalName);
    if(modal != null){
      modal.style.display = "none";
    }
  }
}
