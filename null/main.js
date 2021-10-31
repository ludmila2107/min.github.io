const area=document.getElementById('area');
let move = 0;

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
    move % 2 ===0 ? e.target.innerHTML = 'x' : e.target.innerHTML ='0'; move++;
check();


}
})
const check= ()=>{
    const boxes = document.getElementsByClassName('box');
    const arr =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
    ];
    for (i=0; i<arr.length; i++)
    {
        if(
            boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x'
        )


    }
}