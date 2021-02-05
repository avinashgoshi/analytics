import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { AttendanceComponent } from "./attendance/attendance.component";

const routes: Routes = [
  { path: "attendance", component: AttendanceComponent },
  { path: "", component: EmployeeComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
