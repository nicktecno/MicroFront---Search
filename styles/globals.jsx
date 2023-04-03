import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

//imagens

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css?family=Poppins:400,700,900');
}
  :root {

    --input-border-color: ${(props) => props.colors[0]["input-border-color"]};
    --input-border-color-hover: ${(props) =>
      props.colors[0]["input-border-color-hover"]};
    --menu-sandwich-header: ${(props) =>
      props.colors[0]["menu-sandwich-header"]};
    --menu-sandwich-body: ${(props) => props.colors[0]["menu-sandwich-body"]};
    --title-modal-color: ${(props) => props.colors[0]["title-modal-color"]};
    --header-color: ${(props) => props.colors[0]["header-color"]};
    --header-font-color:${(props) => props.colors[0]["header-font-color"]};
    --card-background:${(props) => props.colors[0]["card-background"]};
    --card-color-price:${(props) => props.colors[0]["card-color-price"]};
    --card-color-price-hover:${(props) =>
      props.colors[0]["card-color-price-hover"]};
    --card-color-details:${(props) => props.colors[0]["card-color-details"]};
    --card-color-details-hover:${(props) =>
      props.colors[0]["card-color-details-hover"]};
    --profile-card-color:${(props) => props.colors[0]["profile-card-color"]};
    --profile-card-color-hover:${(props) =>
      props.colors[0]["profile-card-color-hover"]};
    --default-color: ${(props) => props.colors[0]["default-color"]};
    --default-color-hover: ${(props) => props.colors[0]["default-color-hover"]};
    --default-color-icons: ${(props) => props.colors[0]["default-color-icons"]}
    --title-color: ${(props) => props.colors[0]["title-color"]};
    --box-shadow:  ${(props) => props.colors[0]["box-shadow"]};
    --input-background: #f4f3f4;
    --bt-positive-color:  ${(props) => props.colors[0]["bt-positive-color"]};
    --bt-positive-color-hover:  ${(props) =>
      props.colors[0]["bt-positive-color-hover"]};

    --configurable-attributes-color:  ${(props) =>
      props.colors[0]["configurable-attributes-colorr"]};
    --configurable-attributes-color-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-color-hover"]};

    --configurable-attributes-bgcolor:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor"]};
    --configurable-attributes-bgcolor-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor-hover"]};



    --bt-positive-text-color: ${(props) =>
      props.colors[0]["bt-positive-text-color"]};
    --bt-positive-text-color-hover: ${(props) =>
      props.colors[0]["bt-positive-text-color-hover"]};

    --bt-negative-color:  ${(props) => props.colors[0]["bt-negative-color"]};
    --bt-negative-color-hover:${(props) =>
      props.colors[0]["bt-negative-color-hover"]};
    --bt-negative-text-color:  ${(props) =>
      props.colors[0]["bt-negative-text-color"]};
    --bt-negative-text-color-hover:${(props) =>
      props.colors[0]["bt-negative-text-color-hover"]};
    
    --negative-button-border: ${(props) =>
      props.colors[0]["negative-button-border"]};

    --footer-title-color: ${(props) => props.colors[0]["footer-title-color"]};
    --footer-text-color: ${(props) => props.colors[0]["footer-text-color"]};
    --footer-background-color:${(props) =>
      props.colors[0]["footer-background-color"]};
    --bt-purchase-color:${(props) => props.colors[0]["bt-purchase-color"]};
    --bt-purchase-color-hover:${(props) =>
      props.colors[0]["bt-purchase-color-hover"]};
    --bt-purchase-text-color:${(props) =>
      props.colors[0]["bt-purchase-text-color"]};
    --bt-purchase-text-color-hover:${(props) =>
      props.colors[0]["bt-purchase-text-color-hover"]};
    --explore-block-color: ${(props) => props.colors[0]["explore-block-color"]};
    --explore-block-color-hover: ${(props) =>
      props.colors[0]["explore-block-color-hover"]};
    --explore-block-text-color: ${(props) =>
      props.colors[0]["explore-block-text-color"]};
    --explore-block-text-color-hover: ${(props) =>
      props.colors[0]["explore-block-text-color-hover"]};
    --box-shadow: ${(props) => props.colors[0]["box-shadow"]};
    --card-background: ${(props) => props.colors[0]["card-background"]};
    --card-background-hover: ${(props) =>
      props.colors[0]["card-background-hover"]};
    --font-color: ${(props) => props.colors[0]["font-color"]};
    --font-color-hover:  ${(props) => props.colors[0]["font-color-hover"]};
    //fonts
    --main-font: 'Poppins', sans-serif;;
    --title-font: bold 'Poppins', sans-serif;
  }



  .positiveButton {
    background-color: var(--bt-positive-color);
    font-family: var(--main-font);
    font-weight: bold;
    box-shadow:   var(--box-shadow);
    color: var(--bt-positive-text-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
  }
  .positiveButton:hover {
    color: var(--bt-positive-text-color-hover);
    background-color: var(--bt-positive-color-hover);
  }

  .negativeButton {
    background-color: var(--bt-negative-color);
    font-family: var(--main-font);
    font-weight: bold;
    box-shadow:   var(--box-shadow);
    color: var(--bt-negative-text-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
    svg{
        color: var(--bt-negative-text-color) !important;
    }
  }
  .negativeButton:hover {
    background-color: var(--bt-negative-color-hover);
    color: var(--bt-negative-text-color-hover);
    border: 2px solid transparent !important;
    svg{
        color: var(--bt-negative-text-color-hover) !important;
    }
  }

  .cursor-pointer{
    cursor: pointer;
  }









  *{
        box-sizing: border-box;
        outline: none;
        font-family:  'Poppins' !important;
    }


    body {
        display:flex;
        flex-direction:column;
        line-height: 1;
        width:100%;
        overflow-x: hidden;
        padding-top: 60px;
        padding-bottom: 50px;
         margin:0px;
        height:100%;


        ${customMedia.lessThan("tablet")`
            // padding-top: 80px;
        `}
    }

    input,button,textarea,html,body{
       
        resize:none;
        color: #292929;
        font-size: 14px;
        line-height: 18px;
    }
    ol, ul {
        list-style: none;
    }
    a{
        color: #292929;
        &:hover{
            color: #333;
            text-decoration: none;
        }
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .cursor-pointer{
        cursor: pointer;
    }

    h1{
        color: blue;
        font-size: 72px;
    }

   
    .contentFull{
        margin-top:30px;
        display: flex;
        min-height:100vh;
        height:100%;
        flex-direction: column;
     
    }



    .produtos-txt{
        font-size: 25px;
        color: #333031;
        font-weight: 500;
        margin: 30px 0px 40px;
  ;

        &.first{
            margin: 0px 0px 40px;
        }

        ${customMedia.lessThan("tablet")`
            margin: 20px auto;
        `}
    }


    .imgresponsiva{
        max-width: 100%;
        height: auto;
    }

  

    .box-slide{
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        min-height: 120px;
        border: 2px solid #fff;
        color: #7F7F7F;
        position: relative;

        img{
            max-height: 80px;
        }
    }
    
    .carousel{
        padding-bottom: 40px;
      
    }
    .carousel-inner{
        display:flex;
        height:100%;

    }

   

    .modal-adicionar{
        padding:0px;
        background:white !important;
        border-radius:0px !important;
       

      


    }

    .modal-header{
        border-radius:0px;
        border: none;
    }
    .modal-footer{
        border: none;
    }
    .mbody img{
        width: 100%;
    }


    .bt-red-rinnai{
        background-color: #ce171f;
        border: none;
        font-size: 14px;

        width: 100%;
        max-width: 250px;
        height: 50px;
        display: inline-block;
        color: #fff !important;

        &.m-10{
            margin: 10px;
        }

        &.center{
            margin: 10px auto;
            display: block;
        }

        &.w-7{
            max-width: 207px;
            height: 41px;
        }

        &.padd{
            padding: 5px 15px;
            font-size: 11px;
            width: 100%;
            display: block;
            max-width: 320px;
            height: initial;
            cursor: pointer;
        }

        &.normal{
            max-width: 180px;
            font-weight: 400;
            margin: 5px;
            display: inline-block;
        }

        &.radius{
            border-radius: 10px;
        }

        &.full-radius{
            border-radius: 100px;
        }

        &.full{
            max-width: 100%;
        }

        &.transp{
            background-color: transparent;
            height: initial;
        }
    }

    .bt-gray-rinnai{
        background-color: #28a745;
        border: none;
        font-size: 14px;
        font-weight:bold;
        width: 100%;
        max-width: 320px;
        height: auto;
        padding:10px;
        display: inline-block;
        color: #fff !important;
        font-size: 16px;
        &.m-10{
            margin: 10px;
        }

        &.center{
            margin: 10px auto;
            display: block;
        }

        &.w-7{
            max-width: 207px;
            height: 41px;
        }

        &.padd{
            padding: 5px 15px;
            font-size: 11px;
            width: 100%;
            display: block;
            max-width: 320px;
            height: initial;
            cursor: pointer;
        }

        &.normal{
            max-width: 180px;
            font-weight: 400;
            margin: 5px;
            display: inline-block;
        }

        &.radius{
            border-radius: 10px;
        }

        &.full-radius{
            border-radius: 100px;
        }

        &.full{
            max-width: 100%;
        }

        &.transp{
            background-color: transparent;
            height: initial;
        }
    }
    

    .flex-top{
        flex: 1 1;
        display: flex;
        white-space: nowrap;
        padding: 0px 5px;
        align-items: center;
        cursor: pointer;
    }

    .flex-cart{
        flex: 1 1;
        display: flex;
        white-space: nowrap;
        padding: 0px 5px;
        align-items: center;
        cursor: pointer;
    }

   

    .menu-modal{
        top:90px;
      padding-left:0px !important;

        ${customMedia.lessThan("tablet")`
          z-index:999;
      `}

   
    

    }
    .header-menu-modal{
        background-color: var(--menu-sandwich-header);
        ${customMedia.lessThan("tablet")`
            background-color: var(--menu-sandwich-header);
            
            
        `}
          ${customMedia.lessThan("pobre")`
      padding-right:0px !important;
      width:100%;
       
    `}
      
    }
    .header-menu-modal .close{
        text-shadow: initial;
        opacity: 1;
        color: var(--title-color);
        font-size:30px;
        
          ${customMedia.lessThan("pobre")`
       margin-right:18px;
       
    `}

    }
    .body-menu-modal{
        padding: initial;
        
     
    }
    .menu-modal .modal-content{
        width: 320px;
        border: none;
${customMedia.lessThan("mobile")` 
width: 95%;
min-width: 320px;

`}
      
      
    }
    .modal-dialog{
        max-width:98%;
        margin-top:-5px;
        ${customMedia.lessThan("mobile")`
        margin:auto;
     
    `}
  
    }


    .addedCartModal {
    margin-top: 40px;
${customMedia.lessThan("notebook")` 

margin-top:0px;
`}
  }

    .modal-backdrop{
      display:none;
      
    }
  

    .modal-dialog.modal-sm.modal-aviso{
        max-width: 400px;
        border: 0px;
        font-size: 12px;
      
        .modal-content{
           
           
            border-bottom: 10px;
            border:0px !important;
          
            .modal-body{
                padding: 0px;
               
                overflow: hidden;
                border-bottom: 1px solid #eee;
            }

            .modal-footer{
              
                text-align: center;
                align-items: center;
                justify-content: center;
                background-color: #eee;
                padding-bottom:20px;
               
            }
        }


     
        
        .button-sucesso{
            background-color: green;
            color: #fff;
            border: 0px;
            margin: 15px auto;
            display: block;
            width: 100%;
            max-width: 250px;
            border-radius: 15px;
            padding: 5px 25px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;

            &:hover{
                opacity: 0.9;
            }

            &.padrao{
                background-color: #ccc;
                color: #333;
            }
        }

        .button-erro{
            background-color: #ce171f;
            color: #fff;
            border: 0px;
            text-transform: uppercase;
   
            margin: 5px 5px -30px;

            &:hover{
                opacity: 0.9;
            }
        }
        
        .button-close{
            background-color: #333;
            color: #fff;
            border: 0px;
            text-transform: uppercase;
        
            margin: 5px 5px -30px;

            &:hover{
                opacity: 0.9;
            }
        }
        
    }
   
  

    .modalProduct{
        padding-top: 15px;
        img{
            max-width: 800px;
            margin: 0 auto;
            display: block;
        }

        .modal-content{
            border-radius: 15px;
        } 
    }

    .pointer{
        cursor: pointer;
    }

    .hidden-mob{
        display: flex;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .visible-mob{
        display: none;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }


    @media (max-width: 768px){

        .hidden-mob{
            display: none !important;
        }

        .visible-mob{
            display: block;
        }

      

        .mob{
            margin-bottom: 30px;
        }

        .hits-empty-state{
            padding-bottom: 40px;
        }

        .hits-empty-state svg {
            margin-bottom: 0px !important;
        }
    }

 
    .ajustWidth{
        display: block;
        width: 100%;
        margin: 15px 0px;
        padding: 0px 25px; 
        height: 30px;
        margin-top: 40px;
    }

    .visible-xs{
        display: none;
    }

    @media (max-width: 899px){

        .visible-xs{
            display: initial;
        }

        .ais-RefinementList-list {
           display:flex;
           flex-direction:column;
        }
    }

    .selectSearch{
        width: 100%;
        max-width: 320px;
        display: block;
        margin: 0 auto;
        font-size: 11px;
        color: #333 !important;
        text-transform: uppercase;
        border-color: #ce171f;
        strong{
            color: #ff9196;
        }

        p{
            color: #fff;
            margin: 10px 0px;
        }
    }

    .hits-empty-state{
        text-align: center;

        svg{
            margin-bottom: 15px;
        }
    }

    .infos-plus{
        color: #333 !important;
        margin: 0px 0 0 10px !important;
        font-size: 11px !important;
    }

  

    .circle{
        width: 15px;
        height: 15px;
        border-radius: 15px;
        border: 1px solid #cfcfcf;
        position: relative;
        float: right;

        &.Branco{
            background-color: #fff;
        }

        &.Prata{
            background-color: #bec2cb;
        }

        &.Preto{
            background-color: #000;
        }

        &.left{
            float: left;
            margin-right: 5px;
        }
    }



    .accordion{
        button{
            width: 100%;
            display: block;
            background-color: transparent;
            border:0px;
            padding: 10px 0px;
            text-align: left;
    
            font-size: 16px;
            color: #333;
        }

        .collapse.show{
            border-bottom: 1px solid #efefef;
            margin-bottom: 20px;
            padding-bottom: 20px;
        }
    }


.image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
  height: 30px;
  width: 30px;
}

.image-gallery-thumbnail{
  width:100px;
  height:100px;

  margin-right: 5px;
  display:flex;
  justify-content: center;
  align-items:center;



}

.image-gallery-content  {

  &.fullscreen{
    .image-gallery-slide{
      img {
        width: 100%;
        height: 100%;
        object-fit: contain !important;
      }
    }
  }
}


.image-gallery-slide {

  display:flex;
  width: 100%;
  min-height: 500px;
  height:500px;
  max-height: 500px;

  ${customMedia.lessThan("mobile")`
            min-height: 300px;
      height:300px;
      max-height: 300px;
        `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
}


.image-gallery-thumbnail-inner{
  width:95px;
  height:95px;
  display:flex !important;
}
.image-gallery-thumbnail-image{
  width:100%;
  height:100%;
  object-fit:cover;

}

.image-gallery-thumbnail.active, .image-gallery-thumbnail:focus{
  border:2px solid  var(--default-color);
  transition:0s;
}
.image-gallery-thumbnail:hover{
  border:3px solid   var(--default-color);
}
.image-gallery-icon:hover{
  color:  var(--default-color);
}


@media (max-width: 576px){
  .image-gallery-fullscreen-button .image-gallery-svg, .image-gallery-play-button .image-gallery-svg {
    height: 24px;
    width: 24px;
  }
}


.center-img{
        display: block;
        margin: 15px auto;
    }

    .selectCategory{
        font-size: 12px;
        padding: 10px;
        align-self: center;
        background-color: #F7F7F7;
        border: none;
        height: 35px;
        margin: 10px 0px;
        width: 100%;

        &.inputCount{
            width: 50%;
            text-align: center;
        }

        &.xs{
            font-size: 13px;
            padding: 4px 0px;
            width: 40px;
            text-align: center;
        }
    }

    .box-select {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        max-width: 450px;
        width:100%;
        margin:0;
        align-self: center;
        justify-self: center;
        .select-name {
        font-size: 18px;
        color: var(--black);
        }
    }

    .success-payment {
        text-align: center;

        svg {
        width: 56px;
        display: block;
        margin: 15px auto;
        }

        strong {
        font-size: 15px;
        }
    }

    .final-pagamento{

        .btn-primary{
            background-color: #333;
            border-color: #333;
        }

        .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
            background-color: #000;
            border-color: #000;
        }

        .btn-primary:hover {
            color: #fff;
            background-color: #000;
            border-color: #000;
        }
    }

    .canceled {
        background-color: red !important;
    }

    .success {
        background-color: green !important;
    }

    .pending_payment {
        background-color: #d7bd3f !important;
    }

    .awaiting_confirmation {
        background-color: #3fc2d7 !important;
    }

    .billed {
        background-color: #69a162 !important;
    }
    .shipped {
        background-color: #69a162 !important;
    }
    .completed {
        background-color: #207a15 !important;
    }

    .item-mb-10{
        margin-bottom: 10px;
    }

    .banner-topo{
        position: relative;
        display: block;
        width: 100%;

        .absoluta{
            width: 100%;
            display:  block;
            position: absolute;
            bottom: 30px;
            font-size: 32px;
          
            color: #fff;
        }
    }

    .modal-open .modal {
            overflow-y:hidden !important;
            padding-right:0px !important
        }

 
    

 

    .icon{
        pointer-events: none !important;
    }


   

    .bt-limpa-filtro{
        background-color: #333;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        font: inherit;
        font-size: 0.75rem;
   
        justify-content: center;
        padding: 12px;
        text-align: center;
        width: 100%;
        margin: 0px;
        border-radius: 25px !important;
        color: #fff;
    }

    //material ui changes
    .Mui-selected{
    background: var(--configurable-attributes-bgcolor-hover) !important;
 
  }

  
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--default-color) !important;

  }

   

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focusedd{
    outline-color: var(--default-color) !important;
  }
   
//   .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root .MuiListItemText-root{
//       color: #fff !important;
//   }
//   .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked{
//     color: #fff !important;
//   }


  /* Global Search page styles */

  [class^="ais-"] {
  box-sizing: border-box;
  font-size: 0.9rem;
}

a[class^="ais-"] {
  color: var(--font-color);
  text-decoration: none;
}

/*We need to target the root element because Angular InstantSearch
    creates web components which are not targetable with the "*" selector.*/
[class^='ais-'][class$='--disabled'],
  /*
    We need to target all elements for widgets containing
    multiple sub elements (e.g. RangeSlider)
  */
  [class^='ais-'][class$='--disabled'] * {
  cursor: not-allowed;
}

.ais-HitsPerPage-select {
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 220px !important;
  background: url("/images/icon-errow-down.png") 95% center no-repeat !important;
}

.ais-HierarchicalMenu-list {
  margin-top: 5px;
  padding: 5px 0px 5px 5px;
}

.ais-ClearRefinements {
  .ais-ClearRefinements-button {
    background-color: var(--bt-positive-color);
    color: var(--bt-positive-text-color) !important;
    font-weight: 500;
    cursor:pointer;
    padding: 5px 20px;
    border: 0px;
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    font-size: 12px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    @media (min-width: 768px) and (max-width: 900px) {
    }

    @media (max-width: 767px) {
      padding: 10px 20px;
    }

    svg {
      margin-right: 5px;
    }
  }

  .ais-ClearRefinements-button:hover {
    background-color: var(--bt-positive-color-hover);
    color: var(--bt-positive-text-color-hover);
  }

  .ais-ClearRefinements-button--disabled {
    display: none !important;
  }
}

/* Menus */
.ais-RefinementList-item,
.ais-Menu-item,
.ais-HierarchicalMenu-item,
.ais-RatingMenu-item {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ais-RefinementList-item,
  /*
   The refinement list item in InstantSearch.js contains a wrapping "div" because of
   the template behavior. We therefore need to apply the styles to all the elements
   in a refinement list.
  */
  .ais-RefinementList-item *,
  .ais-RatingMenu-item {
  cursor: pointer;
}

.ais-HierarchicalMenu-link,
.ais-RatingMenu-item,
.ais-RefinementList-item {
  padding-bottom: 1rem;
}

.ais-Breadcrumb-item--selected,
.ais-HierarchicalMenu-item--selected,
.ais-Menu-item--selected {
  font-weight: bold;

  span {
    color: black !important;

    &.ais-HierarchicalMenu-count {
      color: var(--title-color) !important;
    }
  }
}

/* Menus */

.ais-RefinementList-item--selected .ais-RefinementList-checkbox {
  background-color: var(--default-color);
}

.ais-RefinementList-item--selected .ais-RefinementList-checkbox::after {
  background-color: #fff;
  border-radius: 4px;
  content: "";
  height: 4px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-2px) translateY(-2px);
  width: 4px;
}

.ais-HierarchicalMenu-list {
  font-weight: normal;
}


/* Selectors */

.ais-SortBy-select,
.ais-HitsPerPage-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  color: var(--font-color);
  font-family: inherit;
}

/* Hide all mobile-specific design on desktop */

@media (min-width: 900px) {
  [data-layout="mobile"] {
    display: none;
  }
}

@media (max-width: 899px) {
  /* Filters overlay */

  .container-filters .container-header,
  .container-filters .container-body {
    padding: 2rem 2rem 0 2rem;
  }

  .filtering .header {
    /*
        Closing panel on outter click didn't work on mobile safari.
        This is one of the workarounds from the following:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
      */
    cursor: pointer;
  }

  .filtering .header-logo {
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 1.5rem;
    transform: translateX(-50%);
  }


  /* Hide all desktop-specific design on mobile */


}

.ais-RangeSlider .slider-rail {
  background-color: rgba(65, 66, 71, 0.08);
  border-radius: 3px;
  cursor: pointer;
  height: 3px;
  position: absolute;
  width: 100%;
}

.ais-RangeSlider .slider-track {
  background-color: var(--default-color);
  border-radius: 3px;
  cursor: pointer;
  height: 3px;
  position: absolute;
}

.ais-RangeSlider .slider-tick {
  cursor: grab;
  display: flex;
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  text-align: center;
  top: -28px;
  transform: translateX(-50%);
  user-select: none;
}

.ais-RangeSlider .slider-handle {
  background-image: linear-gradient(to top, #f5f5fa, #fff);
  border-radius: 50%;
  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15),
    0 2px 3px 0 rgba(93, 100, 148, 0.2);
  cursor: grab;
  height: 16px;
  outline: none;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  z-index: 1;
}

@media (max-width: 899px) {
  .ais-RangeSlider .slider-handle {
    height: 1.5rem;
    width: 1.5rem;
  }
}

div.hits-empty-state {
  align-self: center;
}

    footer.container-filters-footer {
        display: none;
    }

    body.filtering {
      overflow: hidden !important;
        div.stopScrollMob {
            z-index: 9;
        }

        div.container-filters {
            ${customMedia.lessThan("tablet")`
                position: absolute;
                transform: translateY(4rem);
                box-shadow: 0 -10px 10px rgb(0 0 0 / 12%);
            `}
            }


        footer.container-filters-footer {
            ${customMedia.lessThan("tablet")`
                    background-color: #fff;
                    border-top: 1px solid #ebecf3;
                    bottom: 0;
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    left: 0;
                    padding: 20px 15px 0px;
                    position: fixed;
                    width: 100%;
                    height: 80px;
                    z-index: 8;
                    right: 0;
                    top: initial;
                    box-shadow: 0px -10px 10px #0000001f;
                    border-radius: 0px;
                    z-index: 10; /* avoid collision with slider UI */

                .ais-ClearRefinements-button,
                    .button-primary {
                        border-radius: 0px !important;
                        width: 100%;
                        color: var(--font-color);
                        border: 0px !important;
                        font-size: 12px;
                    }
            `}
                               .container-filters-footer-button-wrapper {
                        width: calc(50% - 0.5rem);

                        .bt-close {
                            position: absolute;
                            bottom: 70px;
                            border-radius: 60px;
                            right: 5px;
                            width: 30px;
                            height: 30px;

                            background-color: var(--default-color);
                            color: var(--font-color);
                            font-size: 18px;
                        }
                    }

                     .ais-ClearRefinements-button,
                     .button {
                        border: 0px !important;
                        cursor: pointer;
                        display: flex;
                        font: inherit;
                        font-size: 14px;
                        font-weight: bold;
                        justify-content: center;
                        padding: 12px;
                        text-align: center;
                        width: 100%;
                        margin: 0px;
                    }

                    .button-primary {
                        background-color: var(--bt-positive-color);
                        color: var(--bt-positive-text-color);
                    }
                    .button-primary:hover {
                        background-color: var(--bt-positive-color-hover);
                        color: var(--bt-positive-text-color-hover);
                    }
                    /* Filters button that triggers the overlay */

                    .order-button {
                        align-items: center;
                        background-color: var(--default-color);
                        border: none;
                        border-radius: 0px;
                        bottom: 10px;
                        box-shadow: 0 4px 22px 0 #a09d918e;
                        color: var(--title-color);
                        cursor: pointer;
                        display: flex;
                        font: inherit;
                        font-size: 0.875rem;
                        font-weight: bold;
                        justify-content: center;
                        left: 30%;
                        min-height: 40px;
                        min-width: 112px;
                        position: fixed;
                        z-index: 8;
                        transform: translateX(-50%);
                        transition: 0.3s;

                        @media screen and (max-width: 768px) {
                        bottom: 95px;
                        }
                    }

                    .order-button:hover {
                        background: var(--default-color-hover);
                    }

                    .order-button svg {
                        height: 14px;

                        margin-right: 8px;
                        width: 16px;
                    }

                    .container-options {
                        display: none;
                    }

                    .ais-SearchBox .ais-SearchBox-input,
                    .ais-RefinementList .ais-SearchBox-input {
                        font-size: 1rem;
                    }

                    .ais-RefinementList .ais-SearchBox-input {
                        min-height: 48px;
                    }
        }
    }

    
`;

export default GlobalStyles;
