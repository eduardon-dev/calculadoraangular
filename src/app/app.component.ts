import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

  elemento: string = ""

  calcular(num:string){
    this.elemento = this.elemento + num;
    if (this.elemento.length > 13){
      this.elemento = "ERRO"
      } setTimeout(this.limpar , 2000)
    }
  
  resultado(){
    this.elemento = eval(this.elemento);
  }

  limpar(){
    this.elemento = ""
  }
}