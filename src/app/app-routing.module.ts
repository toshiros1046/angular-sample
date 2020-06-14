import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartDetailComponent } from "./chart-detail/chart-detail.component";
import { ChartTestComponent } from "./chart-test/chart-test.component";

const routes: Routes = [
  { path: "", redirectTo: "/test", pathMatch: "full" },
  { path: "chart-detail", component: ChartDetailComponent },
  { path: "test", component: ChartTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
