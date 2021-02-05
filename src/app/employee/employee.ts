export interface Employee {
  id: number;
  EmployeeName: string;
  EmployeeAdvances: EmployeeAdvance[];
}

export interface EmployeeAdvance {
  Amount: number;
}