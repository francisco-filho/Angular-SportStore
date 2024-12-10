import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { AuthService } from "../model/auth.services";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    username?: string
    password?: string
    errorMessage?: string

    constructor(private router: Router, private auth: AuthService){}

    authenticate(form: NgForm){
        if (form.valid){
            this.auth.authenticate(this.username ?? "", this.password ?? "")
                .subscribe( res => {
                    if (res)
                        this.router.navigateByUrl("/admin/main") 
                })
            return
        }
        this.errorMessage = "Form Data Invalid"
    }
}