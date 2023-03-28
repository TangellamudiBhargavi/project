import { bookingService } from '../booking.service';
import { booking } from '../booking';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  booking: booking = new booking();
  submitted = false;

  constructor(private bookingService: bookingService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.booking = new booking();
  }

  save() {
    this.bookingService
    .createEmployee(this.booking).subscribe(data => {
      console.log(data)
      this.booking = new booking();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/BookingDetails']);
  }
}
