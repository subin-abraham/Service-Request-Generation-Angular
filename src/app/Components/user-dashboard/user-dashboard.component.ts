import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface userData {
  id: number;
  serviceRequest: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})


export class UserDashboardComponent {
  newItem: userData = {
    id: 0,
    serviceRequest: '',
  };
  getUserValue: string = '';
  user: userData[] = [];
  getUserInput = () => {
    this.newItem.id = this.user.length + 1;
    this.newItem.serviceRequest = this.getUserValue;
    this.user.push({ ...this.newItem });

  }
  deleteUserInput = (id: number) => {
    this.user = this.user.filter(user => user.id !== id);
    console.log(this.user);
  }
  updateUserInput = () => {
    document.getElementById('fer')?.click();
  }
}

