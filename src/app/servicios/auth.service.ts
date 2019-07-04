import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //en el constructor inyectamos una instancia del módulo AngularFireAuth
  //inyecto la clase angularfireauth, hablando en cordobés...
  constructor(private AFauth: AngularFireAuth) { }

  login(email:string, password: string){
    //el método signinwithemailandpassword() ya devuelve un objeto promesa
    //estaba haciendo promesa de promesa al vicio
    return this.AFauth.auth.signInWithEmailAndPassword(email, password);

    //LAS PROMESAS son para manejar el error de forma elegante 
    //creo un nuevo objeto Promesa, para manejar la respuesta del server a la app
    // return new Promise((resolve, rejected)=>{
    //   this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user=>{
    //     resolve(user)
    //   }).catch(err=>rejected(err) )
    // });

    /*
    //AFauth al ser de tipo AngularFireAuth, accedemos a todoas las funcio0nes
    //que nos dá este módulo
    this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res=>{
      //si el método tuvo éxito, nos va a devolver una respuesta res
      //si no, imprimo error
      console.log(res)
    }).catch(err=>console.log('Error: '+err));
    */
  }
}
