import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastController: ToastController) { 

  }

  async mostrarToast(mensaje){
    let toast=await this.toastController.create({
      message:mensaje,
      duration: 3000,
      position:'middle'
    });

    toast.present();
  }
}
