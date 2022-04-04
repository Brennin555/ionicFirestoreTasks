import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {User} from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


 /*
    private signInWithEmail({ email, password }): Promise<UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({ email, password }): Promise<auth.UserCredential>{
    return this.afAuth
    .createUserWithEmailAndPassword(email, password);
    .then(creeadentials =>
      credentials.user
        .updateProfile({displayName: name, photoUrl:null });
        .then(() => credentials)
    );
  }
  */
}
