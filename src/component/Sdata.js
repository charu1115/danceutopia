const Sdata= [
    {
        imgsrc:"https://picsum.photos/seed/picsum/200/300",
        title:"title1",
         text:"helo1" ,
         btnu:"btn1",
        
    },
    {
         imgsrc:"https://picsum.photos/seed/picsum/200/300",
        title:"title2",
         text:"helo2",
          btnu:"btn2",
    },
];
export default Sdata;
//<Card 
//imgsrc={Sdata[1].imgsrc} 
//title={Sdata[0].title} 
//text={Sdata[0].text} 
//btnu={Sdata[0].btnu}
///>
//<Card 

//using mapping
//inside render div   ={Sdata.map(ncard)}

//outside class app
//function ncard(val)
//{
  //return(
  //<Card 
  //imgsrc={val.imgsrc} 
  //title={val.title} 
  //text={val.text} 
  //btnu={val.btnu}
 // />
//);
//}