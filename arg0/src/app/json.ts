
export class fromJson {

public  boxes = [];

 // http://www.argumenty.net/jarg.php?/g/n/58
 // cat = 58 - newest
 public cat58 = 
 { 
   catid:58, 
   topnews: 1,
   art: {
     id:"2580",
     title:"Kredyty \u201efrankowe\u201d w wojnie hybrydowej",
     content:"<p>Rola pieni\u0105dza we wszystkich konfliktach jest coraz wi\u0119ksza......<\/p>"
   }
 };

 // http://www.argumenty.net/jarg.php?/g/n/60
 public cat60 = 
 {
   catid:60,
   topnews: 0,
   art: {
    id:"1894",
    title:"Optymistycznie o Grecji",
    content:"<p>W Grecji wypadki tocz\u0105 si\u0119 szybko. Wkr\u00f3tce b\u0119d\u0105 nowe wybory. ...<\/p>"
   }
 };

 constructor() {
    this.boxes.push(this.cat58);
    this.boxes.push(this.cat60);
 }
}
