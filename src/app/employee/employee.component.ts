import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Employee } from './employee';
import { EmployeeAdvance } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { this.employees = [];}

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            Employee {
              EmployeeName
              EmployeeAdvances {
                Amount
              }
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.employees = data && data.Employee;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }

  getAuthorNames(advances: EmployeeAdvance[]) {
    if (advances.length > 1) {
      // return advances.reduce((acc, cur) => acc.Amount + ", " + cur.Amount);
      var total = 0;
        advances.forEach(function (value:EmployeeAdvance) {
        total += value.Amount;
      });
      return total;
      /*
      var total = advances.reduce(function(a, b){
        console.log("a.Amount : " + a.Amount );
        console.log("b.Amount : " + b.Amount );
        return a.Amount + b.Amount; 
      });
      console.log("total is : " + total );
      return total;
      */
    }
    else return advances[0].Amount;
  }
}
