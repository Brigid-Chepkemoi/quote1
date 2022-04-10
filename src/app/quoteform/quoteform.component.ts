import { Component, OnInit } from '@angular/core';
import { Details } from '../details';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.scss']
})
export class QuoteformComponent implements OnInit {
  quoteimage: string = 'assets/quote/quotation.png' ;


  published: boolean = false;
    likes: any = 0;
    dislikes: number = 0;
    date: any = new Date();
    users: Details[];
    showDetails: boolean = false;
    addUser(e: any, name: string, author: string, quote: string){
      e.preventDefault();
      if(name.length===0 || author.length===0 || quote.length===0){
        alert("Enter valid details");
      }else{
      this.users.unshift({quote:quote,author:author,name:name,hide:true,date: this.date});
  
      alert("Quote Published")
      e.target.reset();
  
      }
    }
    displayDetails(){
      this.showDetails = !true;
    }
    deleteQuote(li: any){
      let ask = confirm("Are you sure you want to delete? ");
      if(ask){
        li.remove();
      }
  
    }
    addLike(up: any){
      
      this.likes += 1;
      up.innerText = this.likes;
    }
    addDisLike(down: any){
          
      this.dislikes += 1;
      down.innerText = this.dislikes;
  
    }

  ngOnInit(): void {
  }

}
