// Compiled by ClojureScript 0.0-2411
goog.provide('jade.core');
goog.require('cljs.core');
goog.require('jade.views.complete');
goog.require('jade.views.termsconditions');
goog.require('jade.views.details');
goog.require('jade.views.homescreen');
goog.require('jade.router');
goog.require('jade.views.browse');
goog.require('jade.components.panel');
goog.require('jade.views.review');
goog.require('jade.views.scanid');
goog.require('jade.views.select_dispensary');
goog.require('cljs.core.async');
goog.require('jade.views.order_details');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('jade.views.complete');
goog.require('goog.net.XhrIo');
goog.require('om_tools.dom');
goog.require('goog.net.XhrIo');
goog.require('jade.views.scanid');
goog.require('jade.router');
goog.require('jade.views.browse');
goog.require('goog.json');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.views.scanid');
goog.require('jade.views.homescreen');
goog.require('jade.views.add_a');
goog.require('goog.json');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('jade.views.termsconditions');
goog.require('goog.debug');
goog.require('goog.dom');
goog.require('goog.debug');
goog.require('jade.views.select_dispensary');
goog.require('jade.views.add_a');
goog.require('jade.views.order_details');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.views.homescreen');
goog.require('clojure.string');
goog.require('jade.views.details');
goog.require('clojure.string');
goog.require('jade.views.review');
goog.require('jade.views.browse');
goog.require('jade.components.panel');
cljs.core.enable_console_print_BANG_.call(null);
jade.core.view_sequence = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homescreen","homescreen",2103597315),new cljs.core.Keyword(null,"scanid","scanid",-1458580817),new cljs.core.Keyword(null,"scanmid","scanmid",9573294),new cljs.core.Keyword(null,"select-dispensary","select-dispensary",-1298212626),new cljs.core.Keyword(null,"termsconditions","termsconditions",1487040666),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"credit-card","credit-card",643068702),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"review","review",1101692435),new cljs.core.Keyword(null,"complete","complete",-500388775)], null);
/**
* hand a given view and return the next
*/
jade.core.view__GT_ = cljs.core.zipmap.call(null,jade.core.view_sequence,cljs.core.drop.call(null,(1),cljs.core.cycle.call(null,jade.core.view_sequence)));
/**
* hand a given view and return the previous
*/
jade.core._LT__view = clojure.set.map_invert.call(null,jade.core.view__GT_);
jade.core.views = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"homescreen","homescreen",2103597315),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"select-dispensary","select-dispensary",-1298212626),new cljs.core.Keyword(null,"scanmid","scanmid",9573294),new cljs.core.Keyword(null,"order-details","order-details",582680591),new cljs.core.Keyword(null,"scanid","scanid",-1458580817),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"review","review",1101692435),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"termsconditions","termsconditions",1487040666),new cljs.core.Keyword(null,"credit-card","credit-card",643068702)],[jade.views.add_a.__GT_address,jade.views.homescreen.__GT_homescreen,jade.views.browse.__GT_browse,jade.views.select_dispensary.__GT_select_dispensary,jade.views.scanid.__GT_scanmid,jade.views.order_details.__GT_order_details,jade.views.scanid.__GT_scanid,jade.views.details.__GT_details,jade.views.review.__GT_review,jade.views.complete.__GT_complete,jade.views.termsconditions.__GT_termsconditions,jade.views.add_a.__GT_credit_card]);
jade.core.core_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elephant","elephant",-1725469300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logo-path","logo-path",755834725),"elephant/slices/"], null),new cljs.core.Keyword(null,"lotus","lotus",-46123684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logo-path","logo-path",755834725),null], null)], null);

var component_fnk__7745__auto___16843 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16829 = schema.core.Any;
var input_schema16830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16828","map16828",791701922,null))], null);
var input_checker16831 = schema.core.checker.call(null,input_schema16830);
var output_checker16832 = schema.core.checker.call(null,output_schema16829);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function constructor16826(G__16833){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16833], null);
var temp__4388__auto___16845 = input_checker16831.call(null,args__5938__auto___16844);
if(cljs.core.truth_(temp__4388__auto___16845)){
var error__5939__auto___16846 = temp__4388__auto___16845;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16826","constructor16826",2119638443,null),cljs.core.pr_str.call(null,error__5939__auto___16846)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16830,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16844,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16846], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16828 = G__16833;
while(true){
if(cljs.core.map_QMARK_.call(null,map16828)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16828)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16828,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16828,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof jade.core.t16837 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.core.t16837 = (function (map16828,validate__5937__auto__,owner,data,output_schema16829,G__16833,input_schema16830,constructor16826,output_checker16832,input_checker16831,ufv__,meta16838){
this.map16828 = map16828;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_schema16829 = output_schema16829;
this.G__16833 = G__16833;
this.input_schema16830 = input_schema16830;
this.constructor16826 = constructor16826;
this.output_checker16832 = output_checker16832;
this.input_checker16831 = input_checker16831;
this.ufv__ = ufv__;
this.meta16838 = meta16838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.core.t16837.prototype.om$core$IDisplayName$ = true;

jade.core.t16837.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function (_){
var self__ = this;
var ___$1 = this;
return "root";
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

jade.core.t16837.prototype.om$core$IRender$ = true;

jade.core.t16837.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function (_){
var self__ = this;
var ___$1 = this;
return jade.router.__GT_router.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"homescreen","homescreen",2103597315),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lotus","lotus",-46123684),new cljs.core.Keyword(null,"core-opts","core-opts",-1777677520),jade.core.core_opts,new cljs.core.Keyword(null,"page-views","page-views",559529695),jade.core.views], null)], null));
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

jade.core.t16837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function (_16839){
var self__ = this;
var _16839__$1 = this;
return self__.meta16838;
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

jade.core.t16837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function (_16839,meta16838__$1){
var self__ = this;
var _16839__$1 = this;
return (new jade.core.t16837(self__.map16828,self__.validate__5937__auto__,self__.owner,self__.data,self__.output_schema16829,self__.G__16833,self__.input_schema16830,self__.constructor16826,self__.output_checker16832,self__.input_checker16831,self__.ufv__,meta16838__$1));
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

jade.core.t16837.cljs$lang$type = true;

jade.core.t16837.cljs$lang$ctorStr = "jade.core/t16837";

jade.core.t16837.cljs$lang$ctorPrWriter = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.core/t16837");
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

jade.core.__GT_t16837 = ((function (owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832){
return (function __GT_t16837(map16828__$1,validate__5937__auto____$1,owner__$1,data__$1,output_schema16829__$1,G__16833__$1,input_schema16830__$1,constructor16826__$1,output_checker16832__$1,input_checker16831__$1,ufv____$1,meta16838){
return (new jade.core.t16837(map16828__$1,validate__5937__auto____$1,owner__$1,data__$1,output_schema16829__$1,G__16833__$1,input_schema16830__$1,constructor16826__$1,output_checker16832__$1,input_checker16831__$1,ufv____$1,meta16838));
});})(owner,data,validate__5937__auto__,ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
;

}

return (new jade.core.t16837(map16828,validate__5937__auto__,owner,data,output_schema16829,G__16833,input_schema16830,constructor16826,output_checker16832,input_checker16831,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16847 = output_checker16832.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16847)){
var error__5939__auto___16848 = temp__4388__auto___16847;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16826","constructor16826",2119638443,null),cljs.core.pr_str.call(null,error__5939__auto___16848)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16829,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16848], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16829,input_schema16830,input_checker16831,output_checker16832))
,schema.core.make_fn_schema.call(null,output_schema16829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16830], null)));
})();
/**
* @param {...*} var_args
*/
jade.core.root = ((function (component_fnk__7745__auto___16843){
return (function() { 
var root__delegate = function (data__7746__auto__,owner16825,p__16840){
var vec__16842 = p__16840;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16842,(0),null);
return component_fnk__7745__auto___16843.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16825,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var root = function (data__7746__auto__,owner16825,var_args){
var p__16840 = null;
if (arguments.length > 2) {
  p__16840 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return root__delegate.call(this,data__7746__auto__,owner16825,p__16840);};
root.cljs$lang$maxFixedArity = 2;
root.cljs$lang$applyTo = (function (arglist__16849){
var data__7746__auto__ = cljs.core.first(arglist__16849);
arglist__16849 = cljs.core.next(arglist__16849);
var owner16825 = cljs.core.first(arglist__16849);
var p__16840 = cljs.core.rest(arglist__16849);
return root__delegate(data__7746__auto__,owner16825,p__16840);
});
root.cljs$core$IFn$_invoke$arity$variadic = root__delegate;
return root;
})()
;})(component_fnk__7745__auto___16843))
;

jade.core.__GT_root = (function() {
var __GT_root = null;
var __GT_root__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.core.root,cursor__7714__auto__);
});
var __GT_root__2 = (function (cursor__7714__auto__,m16827){
return om.core.build.call(null,jade.core.root,cursor__7714__auto__,m16827);
});
__GT_root = function(cursor__7714__auto__,m16827){
switch(arguments.length){
case 1:
return __GT_root__1.call(this,cursor__7714__auto__);
case 2:
return __GT_root__2.call(this,cursor__7714__auto__,m16827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_root.cljs$core$IFn$_invoke$arity$1 = __GT_root__1;
__GT_root.cljs$core$IFn$_invoke$arity$2 = __GT_root__2;
return __GT_root;
})()
;
jade.core.start_app = (function start_app(copy){
var transactions = cljs.core.async.chan.call(null);
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"products","products",1876973544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sour Diesel","3.5g","$50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OG Kush","3.5g","$50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hakuna Matata","3.5g","$50"], null)], null)], null));
var transactions_pub = cljs.core.async.pub.call(null,transactions,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return om.core.root.call(null,jade.core.root,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("app"),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),((function (transactions,state,transactions_pub){
return (function (tx){
return cljs.core.async.put_BANG_.call(null,transactions,tx);
});})(transactions,state,transactions_pub))
,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nav-tokens","nav-tokens",2011487007),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view->","view->",1967121669),jade.core.view__GT_,new cljs.core.Keyword(null,"<-view","<-view",688949288),jade.core._LT__view,new cljs.core.Keyword(null,"strands","strands",523667085),copy,new cljs.core.Keyword(null,"transroute","transroute",474736546),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"transactions-pub","transactions-pub",2142548862),transactions_pub], null)], null));
});
jade.core.strand_sort = (function strand_sort(strand,strands,strand_types){
var strand_type = strand_types.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(strand));
if(cljs.core.truth_(strand_type)){
return cljs.core.update_in.call(null,strands,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,strand_type)], null),cljs.core.conj,strand);
} else {
return strands;
}
});
/**
* grabs values from a google drive spreadsheet and pulls it into shared app-state
*/
jade.core.init = (function init(){
return goog.net.XhrIo.send("https://spreadsheets.google.com/feeds/list/1HoGBhv9cgwcXKLFPExbezgJR8BGcaw9Gs5UrlhEiFRQ/od6/public/values?alt=json",(function (e){
var copy_json = e.target.getResponseJson().feed.entry;
var copy_edn = cljs.core.js__GT_clj.call(null,copy_json,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758),true);
var parsed_edn_STAR_ = cljs.core.mapv.call(null,((function (copy_json,copy_edn){
return (function (p1__16850_SHARP_){
return cljs.core.select_keys.call(null,p1__16850_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","gsx$details","gsx$type","gsx$amount","gsx$price"], null));
});})(copy_json,copy_edn))
,copy_edn);
var parsed_edn = cljs.core.reduce.call(null,cljs.core.comp.call(null,((function (copy_json,copy_edn,parsed_edn_STAR_){
return (function (strands,strand_STAR_){
var vec__16857 = cljs.core.vals.call(null,strand_STAR_);
var map__16858 = cljs.core.nth.call(null,vec__16857,(0),null);
var map__16858__$1 = ((cljs.core.seq_QMARK_.call(null,map__16858))?cljs.core.apply.call(null,cljs.core.hash_map,map__16858):map__16858);
var title = cljs.core.get.call(null,map__16858__$1,"$t");
var map__16859 = cljs.core.nth.call(null,vec__16857,(1),null);
var map__16859__$1 = ((cljs.core.seq_QMARK_.call(null,map__16859))?cljs.core.apply.call(null,cljs.core.hash_map,map__16859):map__16859);
var copy = cljs.core.get.call(null,map__16859__$1,"$t");
var map__16860 = cljs.core.nth.call(null,vec__16857,(2),null);
var map__16860__$1 = ((cljs.core.seq_QMARK_.call(null,map__16860))?cljs.core.apply.call(null,cljs.core.hash_map,map__16860):map__16860);
var type = cljs.core.get.call(null,map__16860__$1,"$t");
var map__16861 = cljs.core.nth.call(null,vec__16857,(3),null);
var map__16861__$1 = ((cljs.core.seq_QMARK_.call(null,map__16861))?cljs.core.apply.call(null,cljs.core.hash_map,map__16861):map__16861);
var amount = cljs.core.get.call(null,map__16861__$1,"$t");
var map__16862 = cljs.core.nth.call(null,vec__16857,(4),null);
var map__16862__$1 = ((cljs.core.seq_QMARK_.call(null,map__16862))?cljs.core.apply.call(null,cljs.core.hash_map,map__16862):map__16862);
var price = cljs.core.get.call(null,map__16862__$1,"$t");
var strand = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"price","price",22129180)],[title,copy,type,amount,price]);
var strands__$1 = cljs.core.update_in.call(null,strands,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"All","All",-2078402587)], null),cljs.core.conj,strand);
return jade.core.strand_sort.call(null,strand,strands__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Sativa",null,"Hybrid",null,"JadeMeNow",null,"Indica",null], null), null));
});})(copy_json,copy_edn,parsed_edn_STAR_))
),cljs.core.PersistentArrayMap.EMPTY,parsed_edn_STAR_);
return jade.core.start_app.call(null,parsed_edn);
}));
});
goog.exportSymbol('jade.core.init', jade.core.init);

//# sourceMappingURL=core.js.map?rel=1545283547599