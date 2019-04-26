import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

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



  }

}
