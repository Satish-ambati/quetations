const quetelist=[
    {
        quote:"A rose by any other name would smell as sweet.",
        author:"William Shakespeare"
    },
    {
        quote:"All that glitters is not gold.",
        author:"William Shakespeare"
    },
    {
        quote:"All the world’s a stage, and all the men and women merely players.",
        author:"William Shakespeare"
    },
    {
        quote:"Ask not what your country can do for you; ask what you can do for your country.",
        author:"John Kennedy"
    },
    {
        quote:"Ask, and it shall be given you; seek, and you shall find.",
        author:"the Bible"
    },
    {
        quote:"Eighty percent of success is showing up.",
        author:"Woody Allen"
    },
    {
        quote:"For those to whom much is given, much is required.",
        author:"the Bible"
    },
    {
        quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
        author:"Thomas Edison"
    },
    {
        quote:"Go ahead, make my day.",
        author:"Harry Callahan"
    },{
        quote:"He travels the fastest who travels alone.",
        author:"Rudyard Kipling"
    },
    {
        quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        author:"Martin Luther King	"
    },
    {
        quote:"If at first you don’t succeed, try, try again.",
        author:"W. E. Hickson"
    },
    {
        quote:"If you are going through hell, keep going.	",
        author:"Winston Churchill"
    },
    {
        quote:"Knowledge is power.",
        author:"Sir Francis Bacon"
    },
    {
        quote:"Life is like a box of chocolates. You never know what you’re gonna get.",
        author:"Forrest Gump"
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author:"Albert Einstein	"
    },
    {
        quote:"No one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Not all those who wander are lost.",
        author:"J. R. R. Tolkein"
    },
    {
        quote:"Nothing is certain except for death and taxes.",
        author:"Benjamin Franklin"
    },
    {
        quote:"Parting is such sweet sorrow",
        author:"William Shakespeare"
    },
    {
        quote:"Speak softly and carry a big stick",
        author:"Theodore Roosevelt"
    },
    {
        quote:"That’s one small step for a man, a giant leap for mankind.",
        author:"Neil Armstrong"
    },
    {
        quote:"The love of money is the root of all evil.",
        author:"the Bible"  
    },

    {
        quote:"The only thing we have to fear is fear itself",
        author:"Franklin D. Roosevelt"
    },
    {
        quote:"The truth will set you free.",
        author:"the Bible"
    },
    {
        quote:"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        author:"Robert Frost"
    },
    {
        quote:"To thine own self, be true.",
        author:"William Shakespeare"
    },
    {
        quote:"United we stand, divided we fall",
        author:"Aesop"
    },
    {
        quote:"What we've got here is failure to communicate. Some men you just can't reach.",
        author:"Abraham Lincoln"
    },
    {
        quote:"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time",
        author:"Abraham Lincoln"
    },
    {
        quote:"You must be the change you wish to see in the world.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all",
        author:" Oscar Wilde"
    },
    {
        quote:"That it will never come again is what makes life so sweet",
        author:"Emily Dickinson"
    },
    {
        quote:"It is never too late to be what you might have been",
        author:"George Eliot"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"Pain is inevitable. Suffering is optional",
        author:"Haruki Murakami"
    },
    {
        quote:"All the world's a stage, and all the men and women merely players",
        author:"William Shakespeare"
    },
    {
        quote:"Be kind, for everyone you meet is fighting a hard battle.",
        author:"Plato"
    },
    {
        quote:"Unable are the loved to die for love is immortality.",
        author:" Emily Dickinson"
    },
    {
        quote:"Let me live, love, and say it well in good sentences.",
        author:" Sylvia Plath"
    },

    {
        quote:"Don't let your happiness depend on something you may lose",
        author:" C.S. Lewis"
    },
    {
        quote:"We are all broken, that's how the light gets in",
        author:"Ernest Hemingway"
    },
    {
        quote:"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well",
        author:"Voltaire"
    },

    {
        quote:"Life is tough my darling, but so are you",
        author:"Stephanie Bennett Henry"
    },{
        quote:"Self-awareness and self-love matter. Who we are is how we lead.",
        author:"Brene Brown"
    },
    {
        quote:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work",
        author:"Stephen King"
    }
]
const quetee=document.getElementsByClassName('quetee')[0];
const authors=document.getElementsByClassName('authors')[0];
//console.log(quetee);
//console.log(authors);
function generate(){
    const index=Math.floor(Math.random()*quetelist.length);
    quetee.textContent = `“${quetelist[index].quote}”`;
    authors.textContent = `— ${quetelist[index].author}`;
}
generate();
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quetee.innerHTML+authors.innerHTML,"tweet window","width=600 , height=500");
}