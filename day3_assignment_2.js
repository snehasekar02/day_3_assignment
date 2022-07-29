let countries=[
    {
        cname:"delhi",
        population:5000
    },
    {
        cname:"kabul",
        population:1000
    },
    {
        cname:"dhaka",
        population:900
    },
    {
        cname:"thimpu",
        population:1500
    }
]
for(let i=0;i<countries.length;i++){
    if(countries[i].population<2000){
        console.log(countries[i].cname);
    }
}
