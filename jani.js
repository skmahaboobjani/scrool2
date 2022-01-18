const ACCESS_KEY ="7gz9zYsDmdmKXIxUzdAYkWEvGvKivQC4AdtFOWuFE7Q";
const SECRET_KEY ="deSUfE1FwfguRG0MGlnHyqbUNZER214DtNtLqVp8VD0";




const exec= function(){

    const f=fetch(`https://dog.ceo/api/breeds/image/random=${ACCESS_KEY}`);
    // const f=fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

    f.then( (resp) =>{
        return resp.json();
    }).then ((r) =>{

        console.log(r);

        r.forEach((elem) =>{
            const container=document.getElementById("container");
            console.log(elem.urls.regular);
            const img_loc=elem.links.download;
            const div=document.createElement('div');
            const img=document.createElement('img');
            img.src=img_loc;
            div.appendChild(img);
            container.appendChild(div);});
    }).catch( (e) =>{
        console.log("Something error in fetching");
    });


}

exec();




const random_images= function(){
    var lower = 0;
    var upper = 10;

    for(i=0;i<10;i++){

        const container=document.getElementById("container");
        const img_loc="https://picsum.photos/500/300?random="+(Math.floor(Math.random()*(upper-lower))+lower);
        console.log(img_loc);
        const div=document.createElement('div');
        const img=document.createElement('img');
        img.src=img_loc;
        div.appendChild(img);
        container.appendChild(div);


    


    }



}


const body=document.getElementsByTagName("body")[0];
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(random_images(),2000);

	}
});