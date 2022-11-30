
function write(){
  
console.log("It's working");
    

    
var Time = document.getElementById('Time').value;
console.log(Time);
    
var Name = document.getElementById('AName').value;
console.log(Name);  
    
var Anothername = document.getElementById('AnotherName').value;
console.log(Anothername);
    
var ChooseOne = document.getElementById('MomDad').value;
console.log(ChooseOne);  

var Food = document.getElementById('Somethingyoueat').value;
console.log(Food)
    
var Delivers = document.getElementById('Deliversthings').value;
console.log(Delivers);    
    
var Object = document.getElementById('Object').value;
console.log(Object);   
    
var ChooseOneagain = document.getElementById('PersonorAnimal').value;
console.log(ChooseOneagain);
    
var seas = document.querySelector('input[name="Horrormovies"]:checked').value;
console.log(seas); 
 
var Chair = document.getElementById('typeChair').value;
console.log(Chair);
    
var Weekday = document.getElementById('Weekday').value;
console.log(Weekday);   
    
    
var seasMessage; 
    
if(seas=="Halloween"){
    seasMessage = " It was the boogeyman. ";
}else if(seas=="Child's Play"){
    seasMessage = " A True classic never goes out of style. ";
}else if(seas=="Evil Dead"){
    seasMessage = " Groovy. ";
}else if(seas=="Friday The 13th"){
    seasMessage = " You're going to Camp Blood, ain't ya? You'll never come back again. It's got a death curse! ";
}else if(seas=="Terrifer"){
    seasMessage = " It's always the quiet ones. ";
}else if(seas=="Scream"){
    seasMessage = " Do you like scary movies? ";
}else if(seas=="Candyman"){
    seasMessage = " Your death will be a tale to frighten children. To make the lovers cling closer in their rapture. ";
}                
    
console.log(seasMessage);      
  
document.getElementById('output').innerHTML += " Quote from movie: "+seasMessage; 

document.getElementById('output').innerHTML += ' It was '+Time+' pm on a '+Weekday+' best friends '+Name+' and '+Anothername+' were watching '+seas+' while '+ChooseOne+' was making '+Food+' for dinner. While the boys were watching their show the doorbell rang. '+Name+' got up to answer the door. It was the '+Delivers+' dropping off a package "Here you go" says the man then he left. '+Name+' grabbed the package and closed the door. '+Name+' walked back to the living room and sat down on the '+Chair+' and proceeded to open the package. There was a '+Object+' in the box '+Name+' grabbed the '+Object+' and started inspecting it "Who sends a '+Object+' to someones house this late?" said '+Name+'. He showed '+Anothername+', '+Anothername+' was also confused '+Anothername+' grabbed the '+Object+'. "Whoa this is the same '+Object+' that the killer uses in the movie" yelled '+Anothername+'. '+Name+' and '+Anothername+' were getting scared at this point they had no idea who sent the package or where it came from. All of a sudden the doorbell rang again '+Name+' and '+Anothername+' looked at each other in terror neither of them wanted to open the door but knew that one of them would have to. '+Anothername+' got up off the floor and walked to the door he stood in front of the door for a couple of minutes then proceeded to open the door. "Please dont be a '+ChooseOneagain+'" cried '+Anothername+' as he slowly opened the door. There was a strange '+ChooseOneagain+' outside wearing a jumpsuit and wearing a mask "Ahhhhhh" screamed '+Anothername+' "The '+ChooseOneagain+' is real and their here to kill us." '+Anothername+' and '+Name+' started screaming. '+Name+' woke up turns out it was just a nightmare '+Name+' fell asleep while watching '+seas+'. '+Name+' was so happy that none of that was real. This is why '+Name+' doesnt watch horror movies. '

}

































