
 import React, { Component } from 'react';
import '../styles/App.css';
 

import img_1 from '../img/room_1.jpg';
  import img_2 from '../img/room_2.jpg';
  import img_3 from '../img/room_3.jpg';
  import Berejkovska from '../mainimages/berejkovskanab/picture1.jpg';  
  import Berejkovska_2 from '../mainimages/berejkovskanab/picture2.jpg';  
  import Berejkovska_3 from '../mainimages/berejkovskanab/picture3.jpg';  
  import Berejkovska_4 from '../mainimages/berejkovskanab/picture4.jpg';  
  import Berejkovska_5 from '../mainimages/berejkovskanab/picture5.jpg';  
  import Berejkovska_6 from '../mainimages/berejkovskanab/picture6.jpg';  
  import Berejkovska_7 from '../mainimages/berejkovskanab/picture7.jpg';  

  import Berejkovska_8 from '../mainimages/berejkovskanab/picture8.jpg';  
  
  import Krasnoselskaya from '../mainimages/Krasnoselskaya/picture1.jpg';
  import Krasnoselskaya_2 from '../mainimages/Krasnoselskaya/picture2.jpg';
  import Krasnoselskaya_3 from '../mainimages/Krasnoselskaya/picture3.jpg';
  import Krasnoselskaya_4 from '../mainimages/Krasnoselskaya/picture4.jpg';
  import Krasnoselskaya_5 from '../mainimages/Krasnoselskaya/picture5.jpg';
  import Krasnoselskaya_6 from '../mainimages/Krasnoselskaya/picture6.jpg';
  import Krasnoselskaya_7 from '../mainimages/Krasnoselskaya/picture7.jpg';
  import Krasnoselskaya_8 from '../mainimages/Krasnoselskaya/picture8.jpg';

import Hlebnii from '../mainimages/Hlebnii/picture1.jpg';
 
import Hlebnii_2 from '../mainimages/Hlebnii/picture2.jpg';
 
import Hlebnii_3 from '../mainimages/Hlebnii/picture3.jpg';
 
import Hlebnii_4 from '../mainimages/Hlebnii/picture4.jpg';
 
import Hlebnii_5 from '../mainimages/Hlebnii/picture5.jpg';
 
import Hlebnii_6 from '../mainimages/Hlebnii/picture6.jpg';
 
import Hlebnii_7 from '../mainimages/Hlebnii/picture7.jpg';
 
import Hlebnii_8 from '../mainimages/Hlebnii/picture8.jpg';
  
  const imges=[
   {
     id:1,
     desc:'Бережковская 14-28',
     imgsrc:img_1,
     cost:5500,
     crossCost:6000,
     allImages:[
       
       Berejkovska,
       Berejkovska_2,
       Berejkovska_3,
       Berejkovska_4,
       Berejkovska_5,
       
       Berejkovska_6,
       Berejkovska_7,
       Berejkovska_8,
       
        ]
    },
   
   {
    id:2,
    cost:3500,
    crossCost:4000,
    desc:'1 Красносельский переулок',
    imgsrc:img_2,
    allImages:[
       
       Krasnoselskaya,
       Krasnoselskaya_2,
       Krasnoselskaya_3,
       Krasnoselskaya_4,
       Krasnoselskaya_5,
       Krasnoselskaya_6,
       Krasnoselskaya_7,
        
       Krasnoselskaya_8,
        
       
      ]
  },
  
  {
    id:3,
    cost:6500,
    crossCost:7000,
    desc:'Хлебный переулок д. 3',
    imgsrc:img_3,
    allImages:[
       
      Hlebnii,
      Hlebnii_2,
      Hlebnii_3,
      Hlebnii_4,
      Hlebnii_5,
      Hlebnii_6,
      Hlebnii_7,
      Hlebnii_8,
       ]
  }
 ];
 
 /*
   <div className="img-wrapper">
       <span className="img-cover"></span>
       <h3>
     квартира на мушинской
   </h3>
  
     <img src={imges[2].imgsrc} alt="a"  />
      </div>
 
*/
const Image=({name,sourse})=>(
   <div className="img-wrapper">
       <span className="img-cover"></span>
       <h3>
{
  name
}   </h3>
  
     <img src={sourse} alt="a"  />
      </div>
); 
 export default class Items extends Component{

  
  state={

    currentBox:0,
    isShown:false,
    SliderIndex:0,
    TotalLength:5,
    CurrentPicture:{
      
    },

  };
  
  ChangePicture=()=>{
   
     
return ()=>{ 
  if(this.state.SliderIndex<this.state.TotalLength-1){ 
    setTimeout(()=> 
 
    this.setState({SliderIndex:this.state.SliderIndex+1})
   
   ,1500);  
  }
  else {
    this.setState({SliderIndex:0});
  }
  }
       }
  onHandleChange=(id)=>{
  /*
  
      let x=arr.filter((el)=>{
        return  el.id===index 
         });
       return {
         currentImges:  x[0].allImages,
         crossCost:x[0].crossCost,
        cost:x[0].cost
      };      
     
  */ 
     return ()=>{
       

let currTotallLength=imges.filter(el=>el.id==id)[0].allImages.length;
let  Image=imges.filter(el=>el.id==id)[0];
this.setState({CurrentPicture:Image});    
 this.setState({isShown:!this.state.isShown}); 
       this.setState({currentBox:id});
       this.setState({TotalLength:currTotallLength});
    // this.setState({TotalLength:}); 
    };

    };
    
  render(){

    const {currentBox}=this.state;
    function FindBox(arr,index)
    {
    

      let x=arr.filter((el)=>{
        return  el.id===index 
         });
       return {
         currentImges:  x[0].allImages,
         crossCost:x[0].crossCost,
        cost:x[0].cost
      };      
      };
return (
<div className="main-container">
  <div className="item-container" >
    {
    
     imges.map((item,i)=>(
   <Item onHandleChange={this.onHandleChange(item.id)} 
   name={item.desc}
    sourse={item.imgsrc} key={i}/>
    ))
   }
   </div>
{this.state.isShown ? 
     <div className="flipped-container">

     <div className="mobile-slider-version">
  
          <div onClick={  
    this.ChangePicture() } className="mobile-slider">
  
  {

 FindBox(imges,currentBox).currentImges.map((item,i)=>(
   <div className={`item-${this.state.SliderIndex}`} key={i}> 
           <img  className="slider-image" src={item} />

    </div>

))
}
          </div>
       <div className="mobile-content-description">
          <h2 className=""></h2>
          <div className="mobile-content-costs">
                <span>{this.state.CurrentPicture.cost}</span>
                <span>{this.state.CurrentPicture.crossCost}</span>
          </div>
          <p>
            {
              this.state.CurrentPicture.desc
            }
           </p>
      
      </div>
    </div>
                <button 
                       onClick={()=>{this.setState({isShown:!this.state.isShown})}} 
                       className="cls-btn">X
                </button>


     <div className="flipped-container-content">


{ 
  
FindBox(imges,currentBox).currentImges.map((item,i)=>(
<div className="flipped-container-content-item" key={i}> 
<img  className="img-hover" src={item} />

</div>

))
  }

  <div className="description">
    <h3>{"Название текущей квартиры"}</h3>
   <h2>Цена</h2>
    <div className="cost-container">

      <p className="crossed"> <span className="cost" >{`${FindBox(imges,currentBox).crossCost}`}   </span><span  >&nbsp;&#8381;/сут</span></p>
       <p className="non-crossed"> 
        <span className="" > 
          {`${FindBox(imges,currentBox).cost}`}&nbsp;&#8381;/сут
        </span>
       </p>
  </div>
 </div> 
  
 </div>

  
  
   </div> :''
 }
</div>);
  };
}
    class  Item extends Component {

  render() {
    return (
      <div className="item">
           
      <Image name={this.props.name}
sourse={this.props.sourse}  //this.props.sourse
/>   
        <button onClick={this.props.onHandleChange} className="flat1">Посмотреть детали...</button>  
      
      </div>
    )
  }
}

        
//    {
//     gallery.map((item,i)=>(
//       this.state.currIndex==i? 
//      <div key={i} > 
//      <img  src="https://scontent-frt3-2.cdninstagram.com/vp/a72fe5e3118e21cef7f4a90711936f6c/5D8279AE/t51.2885-15/sh0.08/e35/p640x640/59789927_135404564303104_5580555231756356080_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&ig_cache_key=MjA1MTU3ODMzMjUxODAxOTA4Mg%3D%3D.2"/>
//    Not Emty                                        
//         </div>:

//      <div>
      
//        Empty</div>

//   ))

// }
    