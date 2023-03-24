import{S as f}from"./sweetalert2.all-9750de90.js";import{_ as h,r as u,o as i,d as n,e as o,F as m,B as y,i as s,t as e,n as g,f as _,w as p,h as b}from"./index-0c372b4e.js";const{VITE_URL:z,VITE_PATH:v}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"sasimi1327",BASE_URL:"/Idoshou/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{order:{},products:{},user:{}}},methods:{getOrder(){const{id:r}=this.$route.params,c=`${z}/api/${v}/order/${r}`;this.$http.get(c).then(l=>{this.order={...l.data.order},this.products={...l.data.order.products},this.user={...l.data.order.user},console.log("order",this.order),console.log("products",this.user),console.log("user",this.user)}).catch(l=>{f.fire({position:"top-end",icon:"error",title:l.response.data.message,showConfirmButton:!1,timer:1500})})}},mounted(){this.getOrder()}},x=b('<div class="container-fluid header-picture d-flex flex-column justify-content-center"><div class="container"><ul class="row list-unstyled mb-0 justify-content-center align-items-center border border-1 border-dark text-center align-top"><li class="col-2 py-3 fz-6 word-nowrap text-primary"> Step.1 <div>購物車</div></li><li class="col-1 py-3 fz-6 text-primary"><i class="fa-solid fa-arrow-right"></i></li><li class="col-2 py-3 fz-6 word-nowrap text-primary"> Step.2 <div>訂單資訊</div></li><li class="col-1 py-3 fz-6 text-primary"><i class="fa-solid fa-arrow-right"></i></li><li class="col-2 py-3 fz-6 word-nowrap text-primary"> Step.3 <div>確認訂單</div></li><li class="col-1 py-3 fz-6 text-primary"><i class="fa-solid fa-arrow-right"></i></li><li class="col-2 py-3 fz-6 word-nowrap text-primary"> Step.4 <div>完成訂單</div></li></ul></div></div>',1),k={class:"container my-10 mb-md-20"},T=o("div",{class:"text-center pt-10 mb-6"},[o("h2",{class:"fz-2 lh-sm fw-normal"},"訂單資訊")],-1),S=b('<div class="d-none d-md-block"><ul class="row list-unstyled py-4 mb-0 border border-2 border-bottom-0 border-grey-66 fw-bold"><li class="col-md-6 text-center">商品資訊</li><li class="col-md-2">單件計價</li><li class="col-md-2">商品數量</li><li class="col-md-2">金額小計</li></ul></div>',1),V={class:"col-md-6 mb-4 mb-md-0"},C=["src","alt"],E={class:"col-md-2 mb-4 mb-md-0"},N=o("span",{class:"d-md-none fz-6 align-middle"},"單件計價：",-1),B={class:"col-md-2 mb-4 mb-md-0"},L=o("span",{class:"d-md-none fz-6 align-middle"},"商品數量：",-1),O={class:"col-md-2 mb-4 mb-md-0"},R=o("span",{class:"d-md-none fz-6 align-middle"},"金額小計：",-1),I={class:"row align-items-center mt-4"},j={class:"col-12 text-end fz-5 fw-normal"},D=o("span",{class:"fz-4 fw-bold mr-3"},"總計金額：",-1),H=o("div",{class:"text-center pt-10 mb-6"},[o("h2",{class:"fz-2 lh-sm fw-normal"},"確認訂單")],-1),U={class:"row align-items-center list-unstyled px-8 py-2 mb-0 border border-2 mb-n-1px border-grey-66 position-relative"},A=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 訂單時間 ",-1),P={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},$=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"訂單時間：",-1),F=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 訂單編號 ",-1),q={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},M=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"訂單編號：",-1),G=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 收件人姓名 ",-1),J={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},K=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"收件人姓名：",-1),Q=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 電子郵件 ",-1),W={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},X=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"電子郵件：",-1),Y=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 收件人電話 ",-1),Z={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},oo=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"收件人電話：",-1),so=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4 align-middle"}," 收件人地址 ",-1),eo={class:"col-md-6 p-4 border-bottom border-grey-d4 fz-5"},to=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"收件人地址：",-1),lo=o("li",{class:"col-md-6 d-none d-md-block fz-5 fw-bold my-4 align-middle"}," 付款狀態 ",-1),ro={class:"col-md-6 p-4 fz-6"},io=o("span",{class:"d-inline-block d-md-none fz-5 align-middle"},"付款狀態：",-1),no={class:"text-end mt-10"};function co(r,c,l,ao,d,mo){const a=u("RouterLink");return i(),n(m,null,[x,o("div",k,[T,o("div",null,[S,(i(!0),n(m,null,y(d.products,t=>(i(),n("div",{class:"row justify-content-center align-items-center list-unstyled p-4 mb-0 border border-2 mb-n-1px border-grey-66 position-relative",key:t.id},[o("li",V,[o("img",{src:t.product.imageUrl,class:"img-fluid w-40 h-40 object-fit-cover mr-5",alt:t.product.title},null,8,C),s(" "+e(t.product.title),1)]),o("li",E,[N,s(" NT$ "+e(t.product.price),1)]),o("li",B,[L,s(" "+e(t.qty),1)]),o("li",O,[R,s(" NT$ "+e(t.final_total),1)])]))),128)),o("div",I,[o("div",j,[D,s(" NT$ "+e(d.order.total),1)])])]),H,o("div",null,[o("ul",U,[A,o("li",P,[$,s(" "+e(r.$filters.date(d.order.create_at)),1)]),F,o("li",q,[M,s(" "+e(d.order.id),1)]),G,o("li",J,[K,s(" "+e(d.user.name),1)]),Q,o("li",W,[X,s(" "+e(d.user.email),1)]),Y,o("li",Z,[oo,s(" "+e(d.user.tel),1)]),so,o("li",eo,[to,s(" "+e(d.user.address),1)]),lo,o("li",ro,[io,o("span",{class:g({"text-success":d.order.is_paid})},e(d.order.is_paid?"付款完成":"尚未付款"),3)])])]),o("div",no,[_(a,{to:"/",type:"button",class:"btn border-primary p-4 btnCustomHover fw-bold mx-4 hvr-push"},{default:p(()=>[s("前往首頁")]),_:1}),_(a,{to:"/menu",type:"button",class:"btn btn-primary p-4 btnCustomHover fw-bold hvr-pop mx-4"},{default:p(()=>[s("繼續購物")]),_:1})])])],64)}const bo=h(w,[["render",co]]);export{bo as default};
