//https://chatgpt.com/c/67ecbceb-0d24-800a-bc7f-207acc46c335

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  board:string[] =["","","","","","","","",""]
  winner :string|null=null;
  currentPlayer:string='x'
  
  makemove(i:any){

    if(this.board[i] || this.winner){
      alert("Enter in the other box or Reset the game")
      return;
      }
      else{
        this.board[i]= this.currentPlayer
      }

      if(this.checkWinner()){
        this.winner=this.currentPlayer;
      }
      else if(!this.board.includes("")){
        this.winner="No one its draw";
      }
      else{
        this.currentPlayer=this.currentPlayer==='x' ?'o':'x'
      }


  }

  checkWinner():boolean{
    const winPattern = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]
     ]
     return winPattern.some(([x,y,z])=>{
    return this.board[x] && this.board[x] === this.board[y] && this.board[x] === this.board[z]
        
     })
  }


  resetgame(){
  this.board=    ["","","","","","","","",""];
  this.winner=null;
  this.currentPlayer='x';
  }


  
}
