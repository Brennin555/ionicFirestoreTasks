import { Injectable } from '@angular/core';
import {
  AlertController,
  AlertOptions,
  LoadingController,
  LoadingOptions,
  ToastController,
  ToastOptions,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async alert(options?: AlertOptions): Promise<any>{
    const alert = await this.alertCtrl.create;

    await alert.present();

    return alert;
  }

  async loading(options?: LoadingOptions): Promise<any>{
    const loading = await this.loadingCtrl.create({

      message: 'Loading....',
      ...options,
    });
    await loading.present();
    return loading;
  }

  async toast(options?: ToastOptions): Promise<any>{
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options,

    });

  }

}
