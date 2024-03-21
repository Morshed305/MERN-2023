const header=document.querySelectorAll('.Tabs_Header')[0];
const Tabs_Color=document.querySelectorAll('.Tabs_Color')[0];
const Tabs_Details=document.querySelectorAll('.Tabs_Details')[0];

const headerArray=Array.from(header.children);
const Tabs_ColorArray=Array.from(Tabs_Color.children);
const Tabs_DetailsArray=Array.from(Tabs_Details.children);


headerArray.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        headerArray.forEach((itm,indx)=>{
if(indx===index){
    itm.classList.add( 'Active' );
    Tabs_ColorArray[indx].classList.add( 'Active' );
    Tabs_DetailsArray[indx].classList.add( 'Active' );
}else{

    itm.classList.remove( 'Active' );
    Tabs_ColorArray[indx].classList.remove( 'Active' );
    Tabs_DetailsArray[indx].classList.remove( 'Active' );
}

        });

// alert(index)
    });
});

