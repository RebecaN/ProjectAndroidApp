import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiService } from "src/app/api/api.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService]
})
export class ApiModule {}