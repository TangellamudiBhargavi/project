import { bookingDetailsComponent } from '../booking-details/booking-details.component';
import { Observable } from "rxjs";
import { bookingService } from "./../booking.service";
import { booking } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-booking-list",
  templateUrl: "./booking-list.component.html",
  styleUrls: ["./booking-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private bookingService: bookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.bookingService.getBookingList();
  }

  deleteBooking(id: number) {
    this.bookingService.deletebooking(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookingDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatebooking(id: number){
    this.router.navigate(['update', id]);
  }
}
