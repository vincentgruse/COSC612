import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SignInComponent } from "../sign-in/sign-in.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(private dialog: MatDialog) { }

  openSignInPopup() {
    this.dialog.open(SignInComponent);
  }

  closePopup() {
    this.dialog.closeAll();
  }
}
