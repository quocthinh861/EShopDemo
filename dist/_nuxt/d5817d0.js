(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{426:function(t,e,r){"use strict";r(33);var c=r(27),o=r(400),n=r.n(o),l=(r(401),{components:{LightBox:n.a},props:{product:{type:Object,default:function(){return{sm_pictures:[],pictures:[]}}}},data:function(){return{currentIndex:0}},computed:{lightBoxMedia:function(){var t=this;return this.product.pictures.reduce((function(e,r){return[].concat(Object(c.a)(e),[{thumb:"".concat(r.url),src:"".concat(r.url),caption:t.product.name}])}),[])}},methods:{changePicture:function(t){this.currentIndex=t},openLightBox:function(){this.$refs.lightbox.showImage(this.currentIndex)}}}),d=r(6),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-gallery product-gallery-vertical"},[r("div",{staticClass:"row m-0"},[r("figure",{staticClass:"product-main-image"},[0===t.product.stock?r("span",{staticClass:"product-label label-out"},[t._v("Out Of Stock")]):t._e(),t._v(" "),t.product.pictures[t.currentIndex]?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.product.pictures[t.currentIndex].url,expression:"`${product.pictures[currentIndex].url}`"}],attrs:{id:"product-zoom",alt:"product",width:t.product.pictures[t.currentIndex].width,height:t.product.pictures[t.currentIndex].height}}):t._e(),t._v(" "),r("a",{staticClass:"btn-product-gallery",attrs:{href:"#",id:"btn-product-gallery"},on:{click:function(e){return e.preventDefault(),t.openLightBox(e)}}},[r("i",{staticClass:"icon-arrows"})])]),t._v(" "),r("div",{staticClass:"product-image-gallery",attrs:{id:"product-zoom-gallery"}},t._l(t.product.sm_pictures,(function(e,c){return r("a",{key:c,staticClass:"product-gallery-item h-100 h-lg-auto carousel-dot",class:{active:t.currentIndex==c},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePicture(c)}}},[r("img",{attrs:{src:""+e.url,width:e.width,height:e.height,alt:"product side"}})])})),0),t._v(" "),t.product.pictures[0]?r("light-box",{ref:"lightbox",staticClass:"light-box",attrs:{media:t.lightBoxMedia,"show-caption":!0,"show-light-box":!1}}):t._e()],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},616:function(t,e,r){"use strict";r.r(e);r(17),r(11),r(12),r(7),r(16);var c=r(27),o=(r(18),r(4)),n=r(2),l=r(5),d=r(426),h=(r(63),r(33),r(384)),v=r(390),m=r(45);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{VueSlideToggle:h.a,QuantityInput:v.a},props:{product:{type:Object}},data:function(){return{baseUrl:m.a,variationGroup:[],selectableGroup:[],sizeArray:[],colorArray:[],selectedVariant:{color:null,colorName:null,price:null,size:null},maxPrice:0,minPrice:99999,qty:1}},computed:_(_(_(_({},Object(l.c)("cart",["canAddToCart"])),Object(l.c)("wishlist",["isInWishlist"])),Object(l.c)("compare",["isInCompare"])),{},{showClear:function(){return!(!this.selectedVariant.color&&!this.selectedVariant.size)},showVariationPrice:function(){return!(!this.selectedVariant.color||!this.selectedVariant.size)}}),created:function(){var t=this.minPrice,e=this.maxPrice;this.variationGroup=this.product.variants.reduce((function(r,c){return c.size.map((function(t){r.push({color:c.color,colorName:c.color_name,size:t.name,price:c.price})})),t>c.price&&(t=c.price),e<c.price&&(e=c.price),r}),[]),0==this.product.variants.length&&(t=this.product.sale_price?this.product.sale_price:this.product.price,e=this.product.price),this.minPrice=t,this.maxPrice=e,this.refreshSelectableGroup()},methods:_(_(_(_({},Object(l.b)("cart",["addToCart"])),Object(l.b)("wishlist",["addToWishlist"])),Object(l.b)("compare",["addToCompare"])),{},{refreshSelectableGroup:function(){var t=this,e=Object(c.a)(this.variationGroup);this.selectedVariant.color&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.color!==r.color?e:[].concat(Object(c.a)(e),[r])}),[])),this.sizeArray=e.reduce((function(t,e){return-1!==t.findIndex((function(t){return t.size==e.size}))?t:[].concat(Object(c.a)(t),[e])}),[]),e=Object(c.a)(this.variationGroup),this.selectedVariant.size&&(e=this.variationGroup.reduce((function(e,r){return t.selectedVariant.size!==r.size?e:[].concat(Object(c.a)(e),[r])}),[])),this.colorArray=this.product.variants.reduce((function(t,r){return-1==e.findIndex((function(t){return t.color==r.color}))?[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!0}]):[].concat(Object(c.a)(t),[{color:r.color,colorName:r.color_name,price:r.price,disabled:!1}])}),[])},selectColor:function(t){t.color==this.selectedVariant.color?this.selectedVariant=_(_({},this.selectedVariant),{},{color:null,colorName:null,price:t.price}):this.selectedVariant=_(_({},this.selectedVariant),{},{color:t.color,colorName:t.colorName,price:t.price}),this.refreshSelectableGroup()},selectSize:function(){"null"==this.selectedVariant.size&&(this.selectedVariant=_(_({},this.selectedVariant),{},{size:null})),this.refreshSelectableGroup()},changeQty:function(t){this.qty=t},clearSelection:function(){this.selectedVariant=_(_({},this.selectedVariant),{},{color:null,colorName:null,size:null}),this.refreshSelectableGroup()},addCart:function(){var t=_({},this.product);this.product.variants.length>0&&(t=_(_({},this.product),{},{name:this.product.name+" - "+this.selectedVariant.colorName+", "+this.selectedVariant.size,price:this.selectedVariant.price})),this.addToCart({product:t,qty:this.qty})}})},C=r(6),O=Object(C.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"product-details product-details-centered"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"ratings-container"},[r("div",{staticClass:"ratings"},[r("div",{staticClass:"ratings-val",style:{width:20*t.product.ratings+"%"}}),t._v(" "),r("span",{staticClass:"tooltip-text"},[t._v(t._s(t.product.ratings.toFixed(0)))])]),t._v(" "),r("span",{staticClass:"ratings-text mt-0"},[t._v("( "+t._s(t.product.review)+" Reviews )")])]),t._v(" "),0==t.product.stock?r("div",{key:"outPrice",staticClass:"product-price"},[r("span",{staticClass:"out-price"},[t._v(t._s(t.formatPrice(t.product.price)))])]):[t.minPrice==t.maxPrice?r("div",{staticClass:"product-price"},[t._v("\n            "+t._s(t.formatPrice(t.minPrice))+"\n        ")]):[0==t.product.variants.length?r("div",{staticClass:"product-price"},[r("span",{staticClass:"new-price"},[t._v(t._s(t.formatPrice(t.minPrice)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v(t._s(t.formatPrice(t.maxPrice)))])]):r("div",{staticClass:"product-price"},[t._v("\n                "+t._s(t.formatPrice(t.minPrice))+" - "+t._s(t.formatPrice(t.maxPrice))+"\n            ")])]],t._v(" "),r("div",{staticClass:"product-content"},[r("p",[t._v(t._s(t.product.short_desc))])]),t._v(" "),t.product.variants.length>0?[r("div",{staticClass:"details-filter-row details-row-size"},[r("label",[t._v("Color:")]),t._v(" "),r("div",{staticClass:"product-nav product-nav-dots"},t._l(t.colorArray,(function(e,c){return r("a",{key:c,class:{active:e.color==t.selectedVariant.color,disabled:e.disabled},style:{"background-color":e.color},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.selectColor(e)}}})})),0)]),t._v(" "),r("div",{staticClass:"details-filter-row details-row-size"},[r("label",{attrs:{for:"size"}},[t._v("Size:")]),t._v(" "),r("div",{staticClass:"select-custom"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariant.size,expression:"selectedVariant.size"}],staticClass:"form-control",attrs:{name:"size",id:"size"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedVariant,"size",e.target.multiple?r:r[0])},t.selectSize]}},[r("option",{attrs:{value:"null"}},[t._v("Select a size")]),t._v(" "),t._l(t.sizeArray,(function(e,c){return r("option",{key:c,domProps:{value:e.size}},[t._v(t._s(e.size))])}))],2)]),t._v(" "),t._m(0),t._v(" "),t.showClear?r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearSelection(e)}}},[t._v("clear")]):t._e()]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.showVariationPrice}},[r("div",{staticClass:"product-price"},[t._v("\n                "+t._s(t.formatPrice(t.selectedVariant.price))+"\n            ")])])]:t._e(),t._v(" "),r("div",{staticClass:"product-details-action"},[r("div",{staticClass:"details-action-col"},[r("quantity-input",{staticClass:"mr-3 mr-sm-4",attrs:{product:t.product},on:{"change-qty":t.changeQty}}),t._v(" "),r("a",{staticClass:"btn-product btn-cart ml-sm-2",class:{"btn-disabled":!t.canAddToCart(t.product,t.qty)||t.product.variants.length>0&&!t.showVariationPrice},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addCart(e)}}},[r("span",[t._v("thêm vào giỏ hàng")])])],1),t._v(" "),r("div",{staticClass:"details-action-wrapper"},[t.isInWishlist(t.product)?r("nuxt-link",{key:"inWishlist",staticClass:"btn-product btn-wishlist added-to-wishlist",attrs:{to:"/shop/wishlist",title:"Wishlist"}},[r("span",[t._v("Xem trong yêu thích")])]):r("a",{key:"notInWishlist",staticClass:"btn-product btn-wishlist",attrs:{href:"#",title:"Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[r("span",[t._v("Thêm vào yêu thích")])])],1)]),t._v(" "),r("div",{staticClass:"product-details-footer"},[r("div",{staticClass:"product-cat"},[r("span",[t._v("Category:")]),t._v(" "),t._l(t.product.category,(function(e,c){return r("span",{key:c},[r("nuxt-link",{attrs:{to:{path:"/shop/sidebar/list",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                "+t._s(c<t.product.category.length-1?",":"")+"\n            ")],1)}))],2),t._v(" "),t._m(1)])],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"size-guide mr-4",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-th-list"}),this._v("size guide\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons social-icons-sm"},[e("span",{staticClass:"social-label"},[this._v("Share:")]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Facebook",target:"_blank"}},[e("i",{staticClass:"icon-facebook-f"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Twitter",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Instagram",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})]),this._v(" "),e("a",{staticClass:"social-icon",attrs:{href:"javascript:;",title:"Pinterest",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])}],!1,null,null,null).exports,P=r(413),w=r(393),j=r(394);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k,V={components:{DetailTwo:O,InfoOne:P.a,Breadcrumb:w.a,GalleryVertical:d.a,RelatedProductsOne:j.a},data:function(){return{product:null,prevProduct:null,nextProduct:null,relatedProducts:[],loaded:!1}},computed:z({},Object(l.c)("demo",["currentDemo"])),created:function(){this.getProduct()},methods:{getProduct:(k=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,m.b.get("".concat(m.a,"/products/").concat(this.$route.params.slug),{params:{demo:this.currentDemo}}).then((function(t){e.product=z({},t.data.product),e.relatedProducts=Object(c.a)(t.data.relatedProducts),e.prevProduct=t.data.prevProduct,e.nextProduct=t.data.nextProduct,e.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)})}},I=Object(C.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("breadcrumb",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct,current:"Centered"}}),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"container skeleton-body"},[r("div",{staticClass:"product-details-top"},[r("div",{staticClass:"row skel-pro-single",class:{loaded:t.loaded}},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-product-gallery"}),t._v(" "),r("gallery-vertical",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),t.product?r("detail-two",{attrs:{product:t.product}}):t._e()],1)])]),t._v(" "),r("info-one"),t._v(" "),r("related-products-one",{attrs:{products:t.relatedProducts}})],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry-summary row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary1 mt-2 mt-md-0"})]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"entry-summary2"})])])}],!1,null,null,null);e.default=I.exports}}]);