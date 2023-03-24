import{P}from"./PaginationView-b1e9d057.js";import{M as x}from"./bootstrap.esm-726e85d3.js";import{_ as k,o as s,d as o,e as t,t as i,Y as y,F as p,B as O,bu as w,bh as C,r as m,f,n as V}from"./index-8fbcde8d.js";import{D}from"./DeleteModal-8fc10543.js";import{S as u}from"./sweetalert2.all-0d055531.js";const I={props:["order"],data(){return{selectOrder:{},modal:"",isPaid:!1}},mounted(){this.modal=new x(document.querySelector("#orderModal"),{backdrop:"static",keyboard:!1})},watch:{order(){this.selectOrder=this.order}}},R={id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"},B={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"訂單明細")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},T={class:"row"},A={class:"col-md-4"},q=t("h3",null,"用戶資料",-1),N={class:"table"},j={key:0},F=t("th",{style:{width:"40%"}},"姓名",-1),H=t("th",{style:{width:"40%"}},"電子郵件",-1),z=t("th",{style:{width:"40%"}},"電話",-1),Y=t("th",{style:{width:"40%"}},"地址",-1),G={class:"col-md-8"},J=t("h3",null,"訂單明細",-1),K={class:"table"},Q=t("th",{style:{width:"100px"}},"訂單編號",-1),W=t("th",{style:{width:"100px"}},"下單時間",-1),X=t("th",{style:{width:"100px"}},"付款時間",-1),Z={key:0},tt={key:1},et=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},ot={key:1,class:"text-muted"},it=t("th",null,"總金額",-1),nt=t("h3",null,"選購商品",-1),lt={class:"table"},dt={class:"text-end"},at={class:"d-flex justify-content-end"},rt={class:"form-check"},ct={class:"form-check-label",for:"isPaidCheck"},ht={key:0},_t={key:1},ut={class:"modal-body d-flex justify-content-end"},pt=t("button",{type:"button",class:"btn btn-outline-primary me-2","data-bs-dismiss":"modal"}," 取消 ",-1);function mt(n,l,r,_,e,h){return s(),o("div",R,[t("div",B,[t("div",E,[S,t("div",U,[t("div",T,[t("div",A,[q,t("table",N,[e.selectOrder.user?(s(),o("tbody",j,[t("tr",null,[F,t("td",null,i(e.selectOrder.user.name),1)]),t("tr",null,[H,t("td",null,i(e.selectOrder.user.email),1)]),t("tr",null,[z,t("td",null,i(e.selectOrder.user.tel),1)]),t("tr",null,[Y,t("td",null,i(e.selectOrder.user.address),1)])])):y("",!0)])]),t("div",G,[J,t("table",K,[t("tbody",null,[t("tr",null,[Q,t("td",null,i(e.selectOrder.id),1)]),t("tr",null,[W,t("td",null,i(n.$filters.date(e.selectOrder.create_at)),1)]),t("tr",null,[X,t("td",null,[e.selectOrder.paid_date?(s(),o("span",Z,i(n.$filters.date(e.selectOrder.paid_date)),1)):(s(),o("span",tt,"時間不正確"))])]),t("tr",null,[et,t("td",null,[e.selectOrder.is_paid?(s(),o("span",st,"已付款")):(s(),o("span",ot,"未付款"))])]),t("tr",null,[it,t("td",null,i(n.$filters.currency(e.selectOrder.total)),1)])])]),nt,t("table",lt,[t("tbody",null,[(s(!0),o(p,null,O(e.selectOrder.products,a=>(s(),o("tr",{key:a.id},[t("th",null,i(a.product.title),1),t("td",null,i(a.qty)+" / "+i(a.product.unit),1),t("td",dt,i(a.total),1)]))),128))])]),t("div",at,[t("div",rt,[w(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPaidCheck","onUpdate:modelValue":l[0]||(l[0]=a=>e.selectOrder.is_paid=a)},null,512),[[C,e.selectOrder.is_paid]]),t("label",ct,[e.selectOrder.is_paid?(s(),o("span",ht,"已付款")):(s(),o("span",_t,"未付款"))])])])])])]),t("div",ut,[pt,t("button",{type:"button",class:"btn btn-primary",onClick:l[1]||(l[1]=a=>n.$emit("update-order",e.selectOrder))}," 確認 ")])])])],512)}const ft=k(I,[["render",mt]]),{VITE_URL:b,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"sasimi1327",BASE_URL:"/Idoshou/",MODE:"production",DEV:!1,PROD:!0},bt={data(){return{orders:[],pagination:{},selectOrder:{},currentPage:1,isLoading:!1}},methods:{getOrders(n=1){const l=`${b}/api/${g}/admin/orders?page=${n}`;this.isLoading=!0,this.$http.get(l).then(r=>{this.isLoading=!1,this.orders=r.data.orders,this.pagination=r.data.pagination}).catch(r=>{this.isLoading=!1,u.fire({position:"top-end",icon:"error",title:r.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})},updatePaidStatus(n){const l=`${b}/api/${g}/admin/order/${n.id}`,r={is_paid:n.is_paid};this.isLoading=!0,this.$http.put(l,{data:r}).then(_=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$refs.orderModal.modal.hide(),u.fire({position:"top-end",icon:"success",text:_.data.message,color:"#C0362D",toast:!0,width:300,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"},hideClass:{popup:"animate__animated animate__fadeOutRight"}})}).catch(_=>{this.isLoading=!1,u.fire({position:"top-end",icon:"error",title:_.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})},openModal(n){this.selectOrder={...n},this.$refs.orderModal.modal.show()},openDelModal(n){this.selectOrder={...n},this.$refs.delModal.modal.show()},deleteOrder(){const n=`${b}/api/${g}/admin/order/${this.selectOrder.id}`;this.isLoading=!0,this.$http.delete(n).then(l=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$refs.delModal.modal.hide(),u.fire({position:"top-end",icon:"success",text:l.data.message,color:"#C0362D",toast:!0,width:300,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"},hideClass:{popup:"animate__animated animate__fadeOutRight"}})}).catch(l=>{this.isLoading=!1,u.fire({position:"top-end",icon:"error",title:l.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})}},components:{PaginationView:P,OrderModal:ft,DeleteModal:D},mounted(){this.getOrders()}},gt={class:"container"},yt={class:"table mt-4"},Ot=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"電子郵件"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),kt={key:0},wt={class:"list-unstyled"},Ct={class:"form-check form-switch"},vt=["onUpdate:modelValue","onChange"],Mt={class:"form-check-label",for:"`paidSwitch_${order.id}`"},$t={key:0},Lt={key:1},Pt={class:"btn-group"},xt=["onClick"],Vt=["onClick"];function Dt(n,l,r,_,e,h){const a=m("LoadingView"),v=m("PaginationView"),M=m("OrderModal"),$=m("DeleteModal");return s(),o(p,null,[t("div",gt,[f(a,{active:e.isLoading,"onUpdate:active":l[0]||(l[0]=d=>e.isLoading=d)},null,8,["active"]),t("table",yt,[Ot,t("tbody",null,[(s(!0),o(p,null,O(e.orders,d=>(s(),o(p,{key:d.id},[e.orders.length?(s(),o("tr",{key:0,class:V({"text-muted":d.is_paid})},[t("td",null,i(n.$filters.date(d.create_at)),1),t("td",null,[d.user?(s(),o("span",kt,i(d.user.email),1)):y("",!0)]),t("td",null,[t("ul",wt,[(s(!0),o(p,null,O(d.products,(c,L)=>(s(),o("li",{key:L},i(c.product.title)+" / "+i(c.qty)+i(c.product.unit),1))),128))])]),t("td",null,i(d.total),1),t("td",null,[t("div",Ct,[w(t("input",{class:"form-check-input",type:"checkbox",id:"`paidSwitch_${order.id}`","onUpdate:modelValue":c=>d.is_paid=c,onChange:c=>h.updatePaidStatus(d)},null,40,vt),[[C,d.is_paid]])]),t("label",Mt,[d.is_paid?(s(),o("span",$t,"已付款")):(s(),o("span",Lt,"未付款"))])]),t("td",null,[t("div",Pt,[t("button",{type:"button",onClick:c=>h.openModal(d),class:"btn btn-outline-primary btn-sm"}," 檢視 ",8,xt),t("button",{type:"button",onClick:c=>h.openDelModal(d),class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,Vt)])])],2)):y("",!0)],64))),128))])]),f(v,{pages:e.pagination,onEmitPage:h.getOrders},null,8,["pages","onEmitPage"])]),f(M,{ref:"orderModal",order:e.selectOrder,onUpdateOrder:h.updatePaidStatus},null,8,["order","onUpdateOrder"]),f($,{ref:"delModal",item:e.selectOrder,onDelItem:h.deleteOrder},null,8,["item","onDelItem"])],64)}const Ut=k(bt,[["render",Dt]]);export{Ut as default};