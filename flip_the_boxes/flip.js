$(()=>
{
    const cardArray=[
        {
            name:'fries',
            image:'images/fries.png'
        },
        {
            name:'fries',
            image:'images/fries.png'
        },
        {
            name:'hotdog',
            image:'images/hotdog.png'
        },
        {
            name:'hotdog',
            image:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            image:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            image:'images/ice-cream.png'
        },
        {
            name:'cheeseburger',
            image:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            image:'images/cheeseburger.png'
        },
        {
            name:'milkshake',
            image:'images/milkshake.png'
        },
        {
            name:'milkshake',
            image:'images/milkshake.png'
        },
        {
            name:'pizza',
            image:'images/pizza.png'
        },
        {
            name:'pizza',
            image:'images/pizza.png'
        },
        {
            name:'white',
            image:'images/white.png'
        },
        {
            name:'white',
            image:'images/white.png'
        },
        {
            name:'blank',
            image:'images/blank.png'
        },
        {
            name:'blank',
            image:'images/blank.png'
        }
    ]
    cardArray.sort(()=>0.5-Math.random());
    const div1=document.getElementById('div1');
    const result=document.getElementById('res');
    var cardschosen=[];
    var cardschosenid=[];
    const cardswon=[];
    function checkformatch()
    {
        var cards=document.querySelectorAll('image');
        const op1=cardschosenid[0];
        const op2=cardschosenid[1];
        if(cardschosen[0]==cardschosen[1])
        {
            alert('You found a match!');
            cards[op1].setAttribute('src','images/white.png')
            cards[op2].setAttribute('src','images/white.png')
            cardswon.push(cardschosen);
        }
        else
        {
            cards[op1].setAttribute('src','images/blank.png')
            cards[op2].setAttribute('src','images/blank.png')
            alert('Sorry!Try again.')
        }
        cardschosen=[];
        cardschosenid=[];
        result.textContent=cardswon.length;
        if(cardswon.length==cardArray.length/2)
        {
            result.textContent="Congratulations!You found them all";
        }
    }
    function flipcard()
    {
        var cardid=this.getAttribute('id');
        cardschosen.push(cardArray[cardid].name);
        cardschosenid.push(cardid);
        this.setAttribute('src',cardArray[cardid].image);
        if(cardschosen.length==2)
        {
            setTimeout(() => {
                checkformatch();
            }, 100);
        }
    }
    function createboard()
    {
        for(let i=0;i<cardArray.length;i++)
        {
            var card=document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('id',i);
            card.addEventListener('click',flipcard);
            div1.appendChild(card);
        }
    }
    createboard();
},false)