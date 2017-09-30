
function RandomNumber(x){
    var y = Math.floor(Math.random() * x.length);
    document.getElementById("demo").innerHTML = x[y];
}
words = ["Fantastic", "Awesome", "Marvelous", "Fabulous", "Rad", "Cool", "The Cooliest", "Fantabulous", "Wonderful", "Excellent", "Spectacular", "Awesome Sauce", ]
words.push("lame", "Banana", "Gnarly", "Sick Nasty", "Tubular", "A1", )