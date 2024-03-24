const header = document.querySelectorAll('.Tabs_Header')[0];
const Tabs_Color = document.querySelectorAll('.Tabs_Color')[0];
const Tabs_Details = document.querySelectorAll('.Tabs_Details')[0];

const headerArray = Array.from(header.children);
const Tabs_ColorArray = Array.from(Tabs_Color.children);
const Tabs_DetailsArray = Array.from(Tabs_Details.children);


headerArray.forEach((item, index) => {
    item.addEventListener('click', () => {
        headerArray.forEach((itm, indx) => {
            if (indx === index) {
                itm.classList.add('Active');
                Tabs_ColorArray[indx].classList.add('Active');
                Tabs_DetailsArray[indx].classList.add('Active');
            } else {

                itm.classList.remove('Active');
                Tabs_ColorArray[indx].classList.remove('Active');
                Tabs_DetailsArray[indx].classList.remove('Active');
            }

        });

        // alert(index)
    });
});





// <!-- Second_Tabs_Start -->
const Main_img_Box = document.querySelectorAll('.Big_img_Box')[0]
const MAin_Small_img_Box = document.querySelectorAll('.Small_img_Box')[0]

const Main_img_Box_Array = Array.from(Main_img_Box.children);
const MAin_Small_img_Box_Array = Array.from(MAin_Small_img_Box.children);

// MAin_Small_img_Box_Array.forEach((item, index) => {
// item.addEventListener('click', ()=>{
// alert(index)

// });});

MAin_Small_img_Box_Array.forEach((it, ind) => {
    it.addEventListener('click', () => {
        MAin_Small_img_Box_Array.forEach((itm, indx) => {
            if (indx === ind) {
                itm.classList.add('Ac');
                Main_img_Box_Array[indx].classList.add('Ac');
                
            } else {

                itm.classList.remove('Ac');
                Main_img_Box_Array[indx].classList.remove('Ac');
               
            }

        });

        // alert(index)
    });
});