import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  board:string[] =Array(9).fill('');
  currentPlayer:string ='x';
  Winner:string |null= null;

  makeMove(index:number){

    if(this.board[index] || this.Winner){
      alert('enter in some other box or reset')
    } 
    else{
      this.board[index] = this.currentPlayer; 
    }

    if(this.checkWinner()){
      this.Winner =this.currentPlayer;
    
    }
    else{
      this.currentPlayer=this.currentPlayer === 'x' ? 'o' : 'x';

    }

  }

  ////////////////// logics////////////////////////////

    checkWinner():boolean{

      const winPattern = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6], 
       ]

      return winPattern.some(([a,b,c])=> 
       
        this.board[a] &&
        this.board[a] === this.board[b] && 
        this.board[a] === this.board[c]
        
      )
    }

    resetGame(){
      this.board.fill('')
      this.currentPlayer='x';
      this.Winner=null;
    }


  

}
