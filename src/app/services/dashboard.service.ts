import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { SectionInterface } from "../interfaces/forms/section.interface";
import { environment } from "src/environments/environment";
import { DashboardInterfaceDto } from "../interfaces/dashboard/dashboard.interface";

@Injectable({
  providedIn: "root",
})
export class DashboardService extends BaseService {
  private readonly url: string = `${environment.api.path}/dashboard`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getdashboardata(
    startDate: Date,
    endDate: Date
  ): Observable<DashboardInterfaceDto> {
    return this.httpClient
      .get(`${this.url}/get-dashboardata`, {
        params: {
          ...(startDate
            ? { startDate: startDate.toISOString().split("T")[0] }
            : {}),
          ...(endDate ? { endDate: endDate.toISOString().split("T")[0] } : {}),
        },
        ...this.authorizedHeader(),
      })
      .pipe(map(this.resp), catchError(this.serviceError));
  }
}
