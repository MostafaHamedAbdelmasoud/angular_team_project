import { Component, OnInit } from '@angular/core';
import  Typed from 'typed.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  

  

  constructor() { 

    
  }

  ngOnInit() {

    
	$(".mi").click(function(){

		$(".mi ").css("border-bottom","1px solid black" )


		$(".cu ").css("border-bottom","none")

		$(".id ").css("border-bottom","none")

		$(".mi").css("color","blue")
		$(".cu").css("color","black")
		$(".id").css("color","black")

		$(".exped").show(200)

		$(".itae").hide(200)
		$(".eli").hide(200)


	})


	$(".cu").click(function(){

		$(".cu ").css("border-bottom","1px solid black")

		$(".mi ").css("border-bottom","none")



		$(".id ").css("border-bottom","none")

		$(".cu").css("color","blue")
		$(".mi").css("color","black")
		$(".id").css("color","black")

		$(".itae").show(200)

		$(".exped").hide(200)
		$(".eli").hide(200)


	})


	$(".id").click(function(){

		$(".id").css("border-bottom","1px solid black")

		$(".mi ").css("border-bottom","none")



		$(".cu ").css("border-bottom","none")


		$(".id").css("color","blue")
		$(".cu").css("color","black")
		$(".mi").css("color","black")

		$(".eli").show(200)

		$(".itae").hide(200)
		$(".exped").hide(200)


	})




	$(".al").click(function(){


		$(".al").css("border","1px solid blue","border-radius","50%")
		$(".br").css("border","none")
		$(".pd").css("border","none")
		$(".pac").css("border","none")
		$(".ui").css("border","none")



		$(".fyg").show(200)
		$(".hyg").show(200)
		$(".gyg").show(200)
		$(".qyg").show(200)
		$(".wyg").show(200)
		$(".byg").show(200)


	})

	$(".br").click(function(){

		$(".al").css("border","none")
		$(".br").css("border","1px solid blue","border-radius","50%")
		$(".pd").css("border","none")
		$(".pac").css("border","none")
		$(".ui").css("border","none")


		$(".byg").show(200)
		$(".fyg").hide(200)
		$(".gyg").show(200)
		$(".wyg").hide(200)
		$(".qyg").show(200)
		$(".hyg").hide(200)


	})


	$(".pd").click(function(){



		$(".al").css("border","none")
		$(".br").css("border","none")
		$(".pd").css("border","1px solid blue","border-radius","50%")
		$(".pac").css("border","none")
		$(".ui").css("border","none")




		$(".byg").hide(200)
		$(".fyg").show(200)
		$(".gyg").hide(200)
		$(".wyg").show(200)
		$(".qyg").hide(200)
		$(".hyg").show(200)


	})

	$(".pac").click(function(){

		$(".al").css("border","none")
		$(".br").css("border","none")
		$(".pd").css("border","none")
		$(".pac").css("border","1px solid blue","border-radius","50%")
		$(".ui").css("border","none")


		$(".byg").hide(200)
		$(".fyg").show(200)
		$(".gyg").show(200)
		$(".wyg").hide(200)
		$(".qyg").show(200)
		$(".hyg").show(200)


	})




	$(".ui").click(function(){
		
		
		$(".al").css("border","none")
		$(".br").css("border","none")
		$(".pd").css("border","none")
		$(".pac").css("border","none")
		$(".ui").css("border","1px solid blue","border-radius","50%")


		

		$(".byg").show(200)
		$(".fyg").hide(200)
		$(".gyg").hide(200)
		$(".wyg").show(200)
		$(".qyg").hide(200)
		$(".hyg").hide(200)


	})



	


    
    var typed = new Typed('.test1', {
      strings: ["apps", "websites","softwares"],
      typeSpeed:50,
      loop:true
    });


    
  
    
  
  
  
  
    
  


  }

}
