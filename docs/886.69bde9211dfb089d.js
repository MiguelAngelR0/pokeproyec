"use strict";(self.webpackChunkpokeProyec=self.webpackChunkpokeProyec||[]).push([[886],{3886:(q,p,c)=>{c.r(p),c.d(p,{RutaPageModule:()=>M});var l=c(6895),t=c(4650),d=c(414),u=c(9299),g=c(7392),m=c(4859);function _(e,o){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"img",10),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.s9C("src",n.pokemon.sprites.front_default,t.LSH)}}function f(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.generarPokemonAleatorio())}),t.TgZ(2,"mat-icon"),t._uU(3,"sync"),t.qZA()(),t._uU(4),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("disabled",n.remainingAttempts<=0),t.xp6(3),t.hij(" ",n.remainingAttempts," ")}}function k(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"No hay intentos restantes.\xa1Vuelve Ma\xf1ana!"),t.qZA())}function h(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("src",n.sprites.front_default,t.LSH)}}function A(e,o){if(1&e&&(t.ynx(0),t.YNc(1,h,2,1,"ng-container",17),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.pokemonListEasy)}}function v(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("src",n.sprites.front_default,t.LSH)}}function x(e,o){if(1&e&&(t.ynx(0),t.YNc(1,v,2,1,"ng-container",17),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.pokemonListMed)}}function Z(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("src",n.sprites.front_default,t.LSH)}}function C(e,o){if(1&e&&(t.ynx(0),t.YNc(1,Z,2,1,"ng-container",17),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.pokemonListH)}}function T(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",12)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"Escoge una dificultad:"),t.qZA()()(),t.TgZ(5,"div",4)(6,"div",13)(7,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.irABatalla(a.idPokemonsEasy,"e"))}),t._uU(8,"Facil"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"+100 xp"),t.qZA(),t.TgZ(11,"h5"),t._uU(12,"Pokeomns con los que puedes enfrentarte:"),t.qZA(),t.YNc(13,A,2,1,"ng-container",5),t.qZA(),t.TgZ(14,"div",13)(15,"button",15),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.irABatalla(a.idPokemonsMed,"m"))}),t._uU(16,"Medio"),t.qZA(),t.TgZ(17,"p"),t._uU(18,"+250 xp"),t.qZA(),t.TgZ(19,"h5"),t._uU(20,"Pokeomns con los que puedes enfrentarte:"),t.qZA(),t.YNc(21,x,2,1,"ng-container",5),t.qZA(),t.TgZ(22,"div",13)(23,"button",16),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.irABatalla(a.idPokemonsH,"d"))}),t._uU(24,"Dificil"),t.qZA(),t.TgZ(25,"p"),t._uU(26,"+500 xp"),t.qZA(),t.TgZ(27,"h5"),t._uU(28,"Pokeomns con los que puedes enfrentarte:"),t.qZA(),t.YNc(29,C,2,1,"ng-container",5),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(13),t.Q6J("ngIf",n.pokemonListEasy),t.xp6(8),t.Q6J("ngIf",n.pokemonListMed),t.xp6(8),t.Q6J("ngIf",n.pokemonListH)}}function S(e,o){1&e&&t._uU(0," Selecciona pokemon para luchar! ")}let y=(()=>{class e{constructor(n,i){this.pokemonService=n,this.router=i,this.pokemonListEasy=[],this.pokemonListMed=[],this.pokemonListH=[],this.idPokemonsEasy=[1,4,7,10,13],this.idPokemonsMed=[2,5,8,12,15],this.idPokemonsH=[6,9,3,150,146]}ngOnInit(){console.log("Cambios que te quedam",this.remainingAttempts),this.remainingAttempts=Number(localStorage.getItem("remainingAttempts")),console.log("Cambios que te quedam 2",this.remainingAttempts);const n=localStorage.getItem("lastSelectedDate"),i=(new Date).toDateString();console.log(i),console.log(n);const a=sessionStorage.getItem("user");console.log(a),n!==i&&(console.log("entra al dia de nuevo"),localStorage.setItem("lastSelectedDate",i),localStorage.setItem("remainingAttempts","4"),this.remainingAttempts=4),console.log("Cambios",this.remainingAttempts),localStorage.setItem("lastSelectedDate",i);for(const s of this.idPokemonsEasy)this.pokemonService.getById(s).then(r=>{this.pokemonListEasy.push(r)});for(const s of this.idPokemonsMed)this.pokemonService.getById(s).then(r=>{this.pokemonListMed.push(r)});for(const s of this.idPokemonsH)this.pokemonService.getById(s).then(r=>{this.pokemonListH.push(r)})}generarPokemonAleatorio(){const n=localStorage.getItem("lastSelectedDate"),i=new Date(2023,1,1).toDateString();if(console.log(n),console.log(i),n!==i)console.log("nuevo dia"),localStorage.setItem("lastSelectedDate",i),localStorage.setItem("remainingAttempts","4"),this.remainingAttempts=4;else{console.log("te quito intento"),this.remainingAttempts=Number(localStorage.getItem("remainingAttempts"))-1,localStorage.setItem("remainingAttempts",this.remainingAttempts.toString());const a=Math.floor(150*Math.random())+1;console.log(a),this.pokemonService.getById(a).then(s=>{this.pokemon=s})}this.remainingAttempts<0&&(this.remainingAttempts=0,localStorage.setItem("remainingAttempts","0"))}irABatalla(n,i){const s=n[Math.floor(Math.random()*n.length)];console.log(s),this.router.navigateByUrl(`/dashboard/battle/${this.pokemon?.id}/${s}/${i}`)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d._),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ruta"]],decls:23,vars:5,consts:[[1,"container"],[1,"row"],[1,"col"],["color","warn"],[1,"row","mt-5"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noIntentos",""],["class","div",4,"ngIf","ngIfElse"],["noHayPokemon",""],["alt","",1,"",3,"src"],["mat-icon-button","",3,"disabled","click"],[1,"div"],[1,"col-4"],["mat-stroked-button","","color","primary",3,"click"],["mat-stroked-button","","color","accent",3,"click"],["mat-stroked-button","","color","warn",3,"click"],[4,"ngFor","ngForOf"],["alt","",1,"pokemon-sprite",3,"src"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),t._uU(4,"favorite"),t.qZA(),t.TgZ(5,"mat-icon",3),t._uU(6,"favorite"),t.qZA(),t.TgZ(7,"mat-icon",3),t._uU(8,"favorite"),t.qZA()()(),t.TgZ(9,"div",4)(10,"div",2)(11,"div")(12,"h1"),t._uU(13,"Escoge un Pokemon: "),t.qZA(),t.YNc(14,_,2,1,"div",5),t.TgZ(15,"p"),t._uU(16,"Nunero de intentos: "),t.qZA(),t.YNc(17,f,5,2,"ng-container",6),t.YNc(18,k,2,0,"ng-template",null,7,t.W1O),t.qZA()()(),t.YNc(20,T,30,3,"div",8),t.YNc(21,S,1,0,"ng-template",null,9,t.W1O),t.qZA()),2&n){const a=t.MAs(19),s=t.MAs(22);t.xp6(14),t.Q6J("ngIf",i.pokemon),t.xp6(3),t.Q6J("ngIf",i.remainingAttempts>0)("ngIfElse",a),t.xp6(3),t.Q6J("ngIf",i.pokemon)("ngIfElse",s)}},dependencies:[l.sg,l.O5,g.Hw,m.lW,m.RK],styles:[".pokemon-sprite[_ngcontent-%COMP%]{filter:brightness(80%)}"]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ruta-page"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col"]],template:function(n,i){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Bienvenido a tu ruta pokemon"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2),t._UZ(5,"app-ruta"),t.qZA()()())},dependencies:[y]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,g.Ps,m.ot]}),e})();const P=[{path:"",component:I}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,u.Bz.forChild(P),R]}),e})()}}]);