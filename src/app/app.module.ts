import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatInputModule } from "@angular/material";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatButtonModule, MatInputModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
