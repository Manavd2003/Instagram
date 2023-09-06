console.log('connected');

// using the form data

// setting the image 
document.getElementById('img').addEventListener('change',(event)=>
{
    imageurl = URL.createObjectURL(event.target.files[0]);
    let img = new Image();
    img.src = imageurl;
    document.getElementById('circular-div').innerHTML='<img src="' + img.src + '" style="width:12vw; height:25vh; border-radius:100%; object-fit:cover;">';
})

let textname = '';

//removing the form
// function SignUps()
// {
//     //username = docuement.getElementById('username').value;
//     let username = document.getElementById('username').value;
//     console.log(username);
//     document.getElementById('profilename').innerText=username;

//     let arr = document.querySelectorAll('form div');
//     // arr.forEach(element => {
//     //     // element.style.animation='slideout 5s linear 2s infinite alternate';    
//     //     console.log(element);    
//     // });
// console.log(arr.length);

// function wait()
// {
//     console.log('started');
    
//     for(let i=0; i<7; i++)
//     {
//         arr[i].style.display = 'none';
//     }
    
// }

// for(let i=0; i<arr.length; i++)
// {
//     console.log('this the value' + arr[0].value);
//     if(arr[i].value !='' || arr[i].value == undefined)
//     {}
//     else
//     {
//     arr[i].style.animation = 'slideout 0.5s linear';
//     arr[i].style.animationFillMode = 'forwards';
//     arr[i].style.display = 'none';
//     document.getElementById('newform').style.display = 'block';
//     }
// }

// if (arr[0] == undefined)
// console.log('yes');

// // console.log('starting Timeout');
// // let timewait = setTimeout(wait,500);
// // console.log('waiting done');


// // document.getElementsByClassName('field')[0].style.animation='slideout 5s linear 2s infinite alternate';
// // console.log(document.getElementsByTagName('form')[0]);
// // document.getElementById('entry').style.display = 'none';

// }

function SignUps()
{
    let removeform = false;
    let lists = document.querySelectorAll('form div');
    let info = document.getElementsByClassName('info');

    console.log(info[0].value);
    
    // checking that the values are non-empty 
    for(let i=0; i<4; i++)
    {
        console.log('this is i = ' + i + ' ' + info[i].value + removeform);

        if(info[i].value==undefined || info[i].value == '')
        {

        // if something is empty 
            removeform = false;
            console.log('this is emoty');
            return(0);
        }
        else
        {
            removeform = true;
            console.log('this is  not empty');
        }
    }
    
    textname = info[0].value + ' ' + info[1].value;

    // removing the first form 
    
    if(removeform == true)
    for(let i=0; i<6; i++)
    {
        lists[i].style.display = 'none';

        // displaying the second form 
        document.getElementById('newform').style.display = 'block';
    }


}

function insta()
{

    removeform = false;
    let newformlist = document.querySelectorAll('.formnew');
    // checking the values in second form 
    for(let i=0; i<3; i++)
    {
        if(newformlist[i].value==undefined || newformlist[i].value == '')
        {
            console.log('this is because it is undefined');

        // if something is empty 
            removeform = false;
            console.log('this is emoty');
            return(0);
        }
        else
        {
            removeform = true;
            console.log('this is  not empty');
        }
    }

    console.log('this is before opening' + removeform);

    document.getElementById('profilename').innerText = newformlist[0].value;
    document.getElementById('bio').innerHTML = textname + '<br>' +  newformlist[1].value;

    // removing both the forms 
    if(removeform == true)
    document.getElementById('entry').style.display = 'none';
}

//INSTAGRAM main page

//border of posts, reels and tagged
function posts(){
    document.getElementById('tposts').style.borderTop="1px solid black";
    document.getElementById('treels').style.borderTop="none";
    document.getElementById('ttagged').style.borderTop="none";
    document.getElementById('posts').style.display="block";
    document.getElementById('reels').style.display="none";
    document.getElementById('tagged').style.display="none";
}

function reels(){
    document.getElementById('tposts').style.borderTop="none";
    document.getElementById('treels').style.borderTop="1px solid black";
    document.getElementById('ttagged').style.borderTop="none";
    document.getElementById('posts').style.display="none";
    document.getElementById('reels').style.display="block";
    document.getElementById('tagged').style.display="none";
    console.log('this is reels');
}

function tagged(){
    document.getElementById('tposts').style.borderTop="none";
    document.getElementById('treels').style.borderTop="none";
    document.getElementById('ttagged').style.borderTop="1px solid black";
    document.getElementById('posts').style.display="none";
    document.getElementById('reels').style.display="none";
    document.getElementById('tagged').style.display="block";
}

//changing the dp on clicking it
document.getElementById('file','img').addEventListener('change',(event)=>{

    console.log(event.target.files[0]);
    imageurl = URL.createObjectURL(event.target.files[0]);
    img = new Image();
    img.src = imageurl;
    document.getElementById('circular-div').innerHTML='<img src="' + img.src + '" style="width:12vw; height:25vh; border-radius:100%; object-fit:cover;">';
    console.log(document.getElementById('circular-div').innerHTML);
    closes();
})

let i = 0;
document.getElementById('newpost').addEventListener('change',(event)=>{
let newdiv = document.createElement('div');
    console.log(event.target.files[0]);
    console.log(i);
    if(i%3==0)
    {
        console.log('this is inside the if block');
        
        let br = document.createElement('br');
        document.getElementById('posts').insertBefore(br,document.getElementById('posts').children[0]);
        console.log('this is after the insertiioin of br: ' + document.getElementById('posts').children[0]);

        // creating a new div with d-flex
        let flexd = document.createElement('div');
        list = document.getElementById('posts');
        flexd.className = 'flexd container-fluid d-flex';
        list.insertBefore(flexd,list.children[0]);

        console.log(document.getElementsByClassName('flexd'));
    }
    imageurl = URL.createObjectURL(event.target.files[0]);
    let img = new Image();
    img.src = imageurl;
    // newdiv.style.height="50vh";
    // newdiv.style.width="30%";
    // newdiv.className = 'h';
    newdiv.style.border="1px solid grey";
    newdiv.className = "container-fluid h p-0";  

    newdiv.innerHTML = "<img src='" + img.src + "' style='object-fit: cover; height:100%; width: 100%;'>";

    // newdiv.innerHTML='<img src="' + img.src + '" height=90% width=30% style="padding-right:5%; object-fit: cover;">';
    list = document.getElementsByClassName('flexd')[0];
    document.getElementsByClassName('flexd')[0].insertBefore(newdiv,list.children[0]);
    i++;
})

function modals(){
   document.getElementById('modal').style.display = "flex";
   document.getElementById('modal').style.justifyContent = "center";
   document.getElementById('modal').style.alignItems = "center";
}

document.getElementsByTagName('span')[0].addEventListener('click',()=>{
    document.getElementById('modal').style.display='none';
})

// this can be made as with the above function
function opens(){
    document.getElementById('dp').style.display = "flex";
    document.getElementById('dp').style.justifyContent = "center";
    document.getElementById('dp').style.alignItems = "center";
    console.log('this is something');
}

function closes(){
    document.getElementById('dp').style.display="none";
}


function nodp(){
        document.getElementById('circular-div').innerHTML='<img src="icon.png" style="object-fit: fill; height: 100%; width: 100%; ">';

}
