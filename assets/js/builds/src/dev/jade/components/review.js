// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.review');
goog.require('cljs.core');
goog.require('jade.components.header');
goog.require('jade.components.image_view');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.components.image_view');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');
jade.components.review.order_c = (function order_c(height){
var data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sour Diesel",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3.5g","x2","/","$100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OG Kush",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3.5g","","/","$50"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","$150"], null)], null)], null);
var order_maker = cljs.core.partial.call(null,cljs.core.zipmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"order","order",-1254677256)], null));
return cljs.core.mapv.call(null,((function (data,order_maker){
return (function (p1__18256_SHARP_){
return cljs.core.assoc.call(null,p1__18256_SHARP_,new cljs.core.Keyword(null,"c-height","c-height",557519589),height,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgb( 195, 214, 206 )");
});})(data,order_maker))
,cljs.core.mapv.call(null,order_maker,data));
});
jade.components.review.revs = (function (){var reviewer = cljs.core.partial.call(null,cljs.core.zipmap,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"src","src",-1651076051)], null));
return cljs.core.map.call(null,((function (reviewer){
return (function (p1__18257_SHARP_){
return cljs.core.assoc.call(null,p1__18257_SHARP_,new cljs.core.Keyword(null,"header-bg","header-bg",-923267153),"review-header",new cljs.core.Keyword(null,"h-height","h-height",158526209),(36),new cljs.core.Keyword(null,"c-height","c-height",557519589),(75));
});})(reviewer))
,cljs.core.mapv.call(null,reviewer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ADDRESS","241 Taaffe Pl. Apt. 704","","img/chevron-right.png"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PAYMENT METHOD","Mastercard","... 1234","img/chevron-right.png"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DELIVERY","ASAP","ABOUT 20 MIN","img/chevron-right.png"], null)], null)));
})();
jade.components.review.order_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),"YOUR ORDER",new cljs.core.Keyword(null,"h-height","h-height",158526209),(36),new cljs.core.Keyword(null,"header-bg","header-bg",-923267153),"review-order",new cljs.core.Keyword(null,"orders","orders",-1032870176),jade.components.review.order_c.call(null,(75))], null);

var component_fnk__7745__auto___18276 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18262 = schema.core.Any;
var input_schema18263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18261","map18261",-1690113880,null))], null);
var input_checker18264 = schema.core.checker.call(null,input_schema18263);
var output_checker18265 = schema.core.checker.call(null,output_schema18262);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function constructor18259(G__18266){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18266], null);
var temp__4388__auto___18278 = input_checker18264.call(null,args__5938__auto___18277);
if(cljs.core.truth_(temp__4388__auto___18278)){
var error__5939__auto___18279 = temp__4388__auto___18278;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18259","constructor18259",624344379,null),cljs.core.pr_str.call(null,error__5939__auto___18279)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18263,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18277,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18279], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18261 = G__18266;
while(true){
if(cljs.core.map_QMARK_.call(null,map18261)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18261)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18261,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18261,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18261,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18261,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.review.t18270 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.review.t18270 = (function (validate__5937__auto__,owner,data,G__18266,map18261,input_checker18264,state,output_checker18265,output_schema18262,constructor18259,opts,ufv__,input_schema18263,meta18271){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.G__18266 = G__18266;
this.map18261 = map18261;
this.input_checker18264 = input_checker18264;
this.state = state;
this.output_checker18265 = output_checker18265;
this.output_schema18262 = output_schema18262;
this.constructor18259 = constructor18259;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema18263 = input_schema18263;
this.meta18271 = meta18271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.review.t18270.prototype.om$core$IDisplayName$ = true;

jade.components.review.t18270.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function (_){
var self__ = this;
var ___$1 = this;
return "r-header";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

jade.components.review.t18270.prototype.om$core$IRender$ = true;

jade.components.review.t18270.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"h-height","h-height",158526209).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join('')), "width": "100%"}, "className": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"header-bg","header-bg",-923267153).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(" flex gothic gsize review-neutral regular")].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"style": {"height": "100%", "width": "90%"}, "className": "flex-start"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

jade.components.review.t18270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function (_18272){
var self__ = this;
var _18272__$1 = this;
return self__.meta18271;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

jade.components.review.t18270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function (_18272,meta18271__$1){
var self__ = this;
var _18272__$1 = this;
return (new jade.components.review.t18270(self__.validate__5937__auto__,self__.owner,self__.data,self__.G__18266,self__.map18261,self__.input_checker18264,self__.state,self__.output_checker18265,self__.output_schema18262,self__.constructor18259,self__.opts,self__.ufv__,self__.input_schema18263,meta18271__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

jade.components.review.t18270.cljs$lang$type = true;

jade.components.review.t18270.cljs$lang$ctorStr = "jade.components.review/t18270";

jade.components.review.t18270.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.review/t18270");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

jade.components.review.__GT_t18270 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265){
return (function __GT_t18270(validate__5937__auto____$1,owner__$1,data__$1,G__18266__$1,map18261__$1,input_checker18264__$1,state__$1,output_checker18265__$1,output_schema18262__$1,constructor18259__$1,opts__$1,ufv____$1,input_schema18263__$1,meta18271){
return (new jade.components.review.t18270(validate__5937__auto____$1,owner__$1,data__$1,G__18266__$1,map18261__$1,input_checker18264__$1,state__$1,output_checker18265__$1,output_schema18262__$1,constructor18259__$1,opts__$1,ufv____$1,input_schema18263__$1,meta18271));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
;

}

return (new jade.components.review.t18270(validate__5937__auto__,owner,data,G__18266,map18261,input_checker18264,state,output_checker18265,output_schema18262,constructor18259,opts,ufv__,input_schema18263,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18280 = output_checker18265.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18280)){
var error__5939__auto___18281 = temp__4388__auto___18280;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18259","constructor18259",624344379,null),cljs.core.pr_str.call(null,error__5939__auto___18281)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18262,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18281], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18262,input_schema18263,input_checker18264,output_checker18265))
,schema.core.make_fn_schema.call(null,output_schema18262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18263], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.review.r_header = ((function (component_fnk__7745__auto___18276){
return (function() { 
var r_header__delegate = function (data__7746__auto__,owner18258,p__18273){
var vec__18275 = p__18273;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18275,(0),null);
return component_fnk__7745__auto___18276.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18258),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18258,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var r_header = function (data__7746__auto__,owner18258,var_args){
var p__18273 = null;
if (arguments.length > 2) {
  p__18273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return r_header__delegate.call(this,data__7746__auto__,owner18258,p__18273);};
r_header.cljs$lang$maxFixedArity = 2;
r_header.cljs$lang$applyTo = (function (arglist__18282){
var data__7746__auto__ = cljs.core.first(arglist__18282);
arglist__18282 = cljs.core.next(arglist__18282);
var owner18258 = cljs.core.first(arglist__18282);
var p__18273 = cljs.core.rest(arglist__18282);
return r_header__delegate(data__7746__auto__,owner18258,p__18273);
});
r_header.cljs$core$IFn$_invoke$arity$variadic = r_header__delegate;
return r_header;
})()
;})(component_fnk__7745__auto___18276))
;

jade.components.review.__GT_r_header = (function() {
var __GT_r_header = null;
var __GT_r_header__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.review.r_header,cursor__7714__auto__);
});
var __GT_r_header__2 = (function (cursor__7714__auto__,m18260){
return om.core.build.call(null,jade.components.review.r_header,cursor__7714__auto__,m18260);
});
__GT_r_header = function(cursor__7714__auto__,m18260){
switch(arguments.length){
case 1:
return __GT_r_header__1.call(this,cursor__7714__auto__);
case 2:
return __GT_r_header__2.call(this,cursor__7714__auto__,m18260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_r_header.cljs$core$IFn$_invoke$arity$1 = __GT_r_header__1;
__GT_r_header.cljs$core$IFn$_invoke$arity$2 = __GT_r_header__2;
return __GT_r_header;
})()
;

var component_fnk__7745__auto___18303 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18287 = schema.core.Any;
var input_schema18288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18286","map18286",-1032872535,null))], null);
var input_checker18289 = schema.core.checker.call(null,input_schema18288);
var output_checker18290 = schema.core.checker.call(null,output_schema18287);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function constructor18284(G__18291){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18291], null);
var temp__4388__auto___18305 = input_checker18289.call(null,args__5938__auto___18304);
if(cljs.core.truth_(temp__4388__auto___18305)){
var error__5939__auto___18306 = temp__4388__auto___18305;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18284","constructor18284",326501755,null),cljs.core.pr_str.call(null,error__5939__auto___18306)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18288,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18304,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18306], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18286 = G__18291;
while(true){
if(cljs.core.map_QMARK_.call(null,map18286)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18286)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18286,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18286,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18286,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18286,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.review.t18296 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.review.t18296 = (function (output_schema18287,validate__5937__auto__,owner,data,map18286,input_checker18289,G__18291,state,constructor18284,opts,output_checker18290,ufv__,input_schema18288,meta18297){
this.output_schema18287 = output_schema18287;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.map18286 = map18286;
this.input_checker18289 = input_checker18289;
this.G__18291 = G__18291;
this.state = state;
this.constructor18284 = constructor18284;
this.opts = opts;
this.output_checker18290 = output_checker18290;
this.ufv__ = ufv__;
this.input_schema18288 = input_schema18288;
this.meta18297 = meta18297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.review.t18296.prototype.om$core$IDisplayName$ = true;

jade.components.review.t18296.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function (_){
var self__ = this;
var ___$1 = this;
return "r-content";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

jade.components.review.t18296.prototype.om$core$IRender$ = true;

jade.components.review.t18296.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"c-height","c-height",557519589).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join('')), "borderBottom": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"border","border",1444987323).cljs$core$IFn$_invoke$arity$1(self__.data)), "width": "90%"}, "className": "flex-between bert size large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.PersistentVector.EMPTY),(function (){var temp__4386__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(temp__4386__auto__)){
var vec__18299 = temp__4386__auto__;
var weight = cljs.core.nth.call(null,vec__18299,(0),null);
var amt = cljs.core.nth.call(null,vec__18299,(1),null);
var spacer = cljs.core.nth.call(null,vec__18299,(2),null);
var total = cljs.core.nth.call(null,vec__18299,(3),null);
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[weight],null)))),cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[amt],null)))),cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[spacer],null)))),cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[total],null))))],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.PersistentVector.EMPTY),React.DOM.img({"src": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(self__.data)), "style": {"opacity": 0.3, "height": "20%", "marginLeft": ".5rem"}})],null))));
}
})()],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

jade.components.review.t18296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function (_18298){
var self__ = this;
var _18298__$1 = this;
return self__.meta18297;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

jade.components.review.t18296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function (_18298,meta18297__$1){
var self__ = this;
var _18298__$1 = this;
return (new jade.components.review.t18296(self__.output_schema18287,self__.validate__5937__auto__,self__.owner,self__.data,self__.map18286,self__.input_checker18289,self__.G__18291,self__.state,self__.constructor18284,self__.opts,self__.output_checker18290,self__.ufv__,self__.input_schema18288,meta18297__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

jade.components.review.t18296.cljs$lang$type = true;

jade.components.review.t18296.cljs$lang$ctorStr = "jade.components.review/t18296";

jade.components.review.t18296.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.review/t18296");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

jade.components.review.__GT_t18296 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290){
return (function __GT_t18296(output_schema18287__$1,validate__5937__auto____$1,owner__$1,data__$1,map18286__$1,input_checker18289__$1,G__18291__$1,state__$1,constructor18284__$1,opts__$1,output_checker18290__$1,ufv____$1,input_schema18288__$1,meta18297){
return (new jade.components.review.t18296(output_schema18287__$1,validate__5937__auto____$1,owner__$1,data__$1,map18286__$1,input_checker18289__$1,G__18291__$1,state__$1,constructor18284__$1,opts__$1,output_checker18290__$1,ufv____$1,input_schema18288__$1,meta18297));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
;

}

return (new jade.components.review.t18296(output_schema18287,validate__5937__auto__,owner,data,map18286,input_checker18289,G__18291,state,constructor18284,opts,output_checker18290,ufv__,input_schema18288,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18307 = output_checker18290.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18307)){
var error__5939__auto___18308 = temp__4388__auto___18307;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18284","constructor18284",326501755,null),cljs.core.pr_str.call(null,error__5939__auto___18308)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18287,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18308], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18287,input_schema18288,input_checker18289,output_checker18290))
,schema.core.make_fn_schema.call(null,output_schema18287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18288], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.review.r_content = ((function (component_fnk__7745__auto___18303){
return (function() { 
var r_content__delegate = function (data__7746__auto__,owner18283,p__18300){
var vec__18302 = p__18300;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18302,(0),null);
return component_fnk__7745__auto___18303.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18283),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18283,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var r_content = function (data__7746__auto__,owner18283,var_args){
var p__18300 = null;
if (arguments.length > 2) {
  p__18300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return r_content__delegate.call(this,data__7746__auto__,owner18283,p__18300);};
r_content.cljs$lang$maxFixedArity = 2;
r_content.cljs$lang$applyTo = (function (arglist__18309){
var data__7746__auto__ = cljs.core.first(arglist__18309);
arglist__18309 = cljs.core.next(arglist__18309);
var owner18283 = cljs.core.first(arglist__18309);
var p__18300 = cljs.core.rest(arglist__18309);
return r_content__delegate(data__7746__auto__,owner18283,p__18300);
});
r_content.cljs$core$IFn$_invoke$arity$variadic = r_content__delegate;
return r_content;
})()
;})(component_fnk__7745__auto___18303))
;

jade.components.review.__GT_r_content = (function() {
var __GT_r_content = null;
var __GT_r_content__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.review.r_content,cursor__7714__auto__);
});
var __GT_r_content__2 = (function (cursor__7714__auto__,m18285){
return om.core.build.call(null,jade.components.review.r_content,cursor__7714__auto__,m18285);
});
__GT_r_content = function(cursor__7714__auto__,m18285){
switch(arguments.length){
case 1:
return __GT_r_content__1.call(this,cursor__7714__auto__);
case 2:
return __GT_r_content__2.call(this,cursor__7714__auto__,m18285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_r_content.cljs$core$IFn$_invoke$arity$1 = __GT_r_content__1;
__GT_r_content.cljs$core$IFn$_invoke$arity$2 = __GT_r_content__2;
return __GT_r_content;
})()
;

var component_fnk__7745__auto___18329 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18315 = schema.core.Any;
var input_schema18316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18314","map18314",53387374,null))], null);
var input_checker18317 = schema.core.checker.call(null,input_schema18316);
var output_checker18318 = schema.core.checker.call(null,output_schema18315);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function constructor18312(G__18319){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18319], null);
var temp__4388__auto___18331 = input_checker18317.call(null,args__5938__auto___18330);
if(cljs.core.truth_(temp__4388__auto___18331)){
var error__5939__auto___18332 = temp__4388__auto___18331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18312","constructor18312",-1471355685,null),cljs.core.pr_str.call(null,error__5939__auto___18332)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18316,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18330,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18332], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18314 = G__18319;
while(true){
if(cljs.core.map_QMARK_.call(null,map18314)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18314)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18314,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18314,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18314,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18314,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.review.t18323 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.review.t18323 = (function (validate__5937__auto__,owner,input_checker18317,data,output_schema18315,input_schema18316,map18314,output_checker18318,state,constructor18312,G__18319,opts,ufv__,meta18324){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.input_checker18317 = input_checker18317;
this.data = data;
this.output_schema18315 = output_schema18315;
this.input_schema18316 = input_schema18316;
this.map18314 = map18314;
this.output_checker18318 = output_checker18318;
this.state = state;
this.constructor18312 = constructor18312;
this.G__18319 = G__18319;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18324 = meta18324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.review.t18323.prototype.om$core$IDisplayName$ = true;

jade.components.review.t18323.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (_){
var self__ = this;
var ___$1 = this;
return "orders-section";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

jade.components.review.t18323.prototype.om$core$IRender$ = true;

jade.components.review.t18323.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.section,{"style": {"width": "100%"}, "className": "flex column large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.review.__GT_r_header.call(null,self__.data),cljs.core.map.call(null,((function (___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (p1__18310_SHARP_){
return jade.components.review.__GT_r_content.call(null,p1__18310_SHARP_);
});})(___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
,new cljs.core.Keyword(null,"orders","orders",-1032870176).cljs$core$IFn$_invoke$arity$1(self__.data))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

jade.components.review.t18323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (_18325){
var self__ = this;
var _18325__$1 = this;
return self__.meta18324;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

jade.components.review.t18323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (_18325,meta18324__$1){
var self__ = this;
var _18325__$1 = this;
return (new jade.components.review.t18323(self__.validate__5937__auto__,self__.owner,self__.input_checker18317,self__.data,self__.output_schema18315,self__.input_schema18316,self__.map18314,self__.output_checker18318,self__.state,self__.constructor18312,self__.G__18319,self__.opts,self__.ufv__,meta18324__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

jade.components.review.t18323.cljs$lang$type = true;

jade.components.review.t18323.cljs$lang$ctorStr = "jade.components.review/t18323";

jade.components.review.t18323.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.review/t18323");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

jade.components.review.__GT_t18323 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318){
return (function __GT_t18323(validate__5937__auto____$1,owner__$1,input_checker18317__$1,data__$1,output_schema18315__$1,input_schema18316__$1,map18314__$1,output_checker18318__$1,state__$1,constructor18312__$1,G__18319__$1,opts__$1,ufv____$1,meta18324){
return (new jade.components.review.t18323(validate__5937__auto____$1,owner__$1,input_checker18317__$1,data__$1,output_schema18315__$1,input_schema18316__$1,map18314__$1,output_checker18318__$1,state__$1,constructor18312__$1,G__18319__$1,opts__$1,ufv____$1,meta18324));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
;

}

return (new jade.components.review.t18323(validate__5937__auto__,owner,input_checker18317,data,output_schema18315,input_schema18316,map18314,output_checker18318,state,constructor18312,G__18319,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18333 = output_checker18318.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18333)){
var error__5939__auto___18334 = temp__4388__auto___18333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18312","constructor18312",-1471355685,null),cljs.core.pr_str.call(null,error__5939__auto___18334)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18315,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18334], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18315,input_schema18316,input_checker18317,output_checker18318))
,schema.core.make_fn_schema.call(null,output_schema18315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18316], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.review.orders_section = ((function (component_fnk__7745__auto___18329){
return (function() { 
var orders_section__delegate = function (data__7746__auto__,owner18311,p__18326){
var vec__18328 = p__18326;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18328,(0),null);
return component_fnk__7745__auto___18329.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18311),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18311,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var orders_section = function (data__7746__auto__,owner18311,var_args){
var p__18326 = null;
if (arguments.length > 2) {
  p__18326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return orders_section__delegate.call(this,data__7746__auto__,owner18311,p__18326);};
orders_section.cljs$lang$maxFixedArity = 2;
orders_section.cljs$lang$applyTo = (function (arglist__18335){
var data__7746__auto__ = cljs.core.first(arglist__18335);
arglist__18335 = cljs.core.next(arglist__18335);
var owner18311 = cljs.core.first(arglist__18335);
var p__18326 = cljs.core.rest(arglist__18335);
return orders_section__delegate(data__7746__auto__,owner18311,p__18326);
});
orders_section.cljs$core$IFn$_invoke$arity$variadic = orders_section__delegate;
return orders_section;
})()
;})(component_fnk__7745__auto___18329))
;

jade.components.review.__GT_orders_section = (function() {
var __GT_orders_section = null;
var __GT_orders_section__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.review.orders_section,cursor__7714__auto__);
});
var __GT_orders_section__2 = (function (cursor__7714__auto__,m18313){
return om.core.build.call(null,jade.components.review.orders_section,cursor__7714__auto__,m18313);
});
__GT_orders_section = function(cursor__7714__auto__,m18313){
switch(arguments.length){
case 1:
return __GT_orders_section__1.call(this,cursor__7714__auto__);
case 2:
return __GT_orders_section__2.call(this,cursor__7714__auto__,m18313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_orders_section.cljs$core$IFn$_invoke$arity$1 = __GT_orders_section__1;
__GT_orders_section.cljs$core$IFn$_invoke$arity$2 = __GT_orders_section__2;
return __GT_orders_section;
})()
;

var component_fnk__7745__auto___18354 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18340 = schema.core.Any;
var input_schema18341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18339","map18339",-940291750,null))], null);
var input_checker18342 = schema.core.checker.call(null,input_schema18341);
var output_checker18343 = schema.core.checker.call(null,output_schema18340);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function constructor18337(G__18344){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18344], null);
var temp__4388__auto___18356 = input_checker18342.call(null,args__5938__auto___18355);
if(cljs.core.truth_(temp__4388__auto___18356)){
var error__5939__auto___18357 = temp__4388__auto___18356;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18337","constructor18337",-2017270186,null),cljs.core.pr_str.call(null,error__5939__auto___18357)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18341,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18355,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18357], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18339 = G__18344;
while(true){
if(cljs.core.map_QMARK_.call(null,map18339)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18339)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18339,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18339,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18339,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18339,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.review.t18348 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.review.t18348 = (function (validate__5937__auto__,owner,data,output_schema18340,output_checker18343,state,G__18344,constructor18337,input_schema18341,map18339,opts,input_checker18342,ufv__,meta18349){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_schema18340 = output_schema18340;
this.output_checker18343 = output_checker18343;
this.state = state;
this.G__18344 = G__18344;
this.constructor18337 = constructor18337;
this.input_schema18341 = input_schema18341;
this.map18339 = map18339;
this.opts = opts;
this.input_checker18342 = input_checker18342;
this.ufv__ = ufv__;
this.meta18349 = meta18349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.review.t18348.prototype.om$core$IDisplayName$ = true;

jade.components.review.t18348.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function (_){
var self__ = this;
var ___$1 = this;
return "review-section";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

jade.components.review.t18348.prototype.om$core$IRender$ = true;

jade.components.review.t18348.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.section,{"style": {"width": "100%"}, "className": "flex column large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.review.__GT_r_header.call(null,self__.data),jade.components.review.__GT_r_content.call(null,self__.data)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

jade.components.review.t18348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function (_18350){
var self__ = this;
var _18350__$1 = this;
return self__.meta18349;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

jade.components.review.t18348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function (_18350,meta18349__$1){
var self__ = this;
var _18350__$1 = this;
return (new jade.components.review.t18348(self__.validate__5937__auto__,self__.owner,self__.data,self__.output_schema18340,self__.output_checker18343,self__.state,self__.G__18344,self__.constructor18337,self__.input_schema18341,self__.map18339,self__.opts,self__.input_checker18342,self__.ufv__,meta18349__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

jade.components.review.t18348.cljs$lang$type = true;

jade.components.review.t18348.cljs$lang$ctorStr = "jade.components.review/t18348";

jade.components.review.t18348.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.review/t18348");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

jade.components.review.__GT_t18348 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343){
return (function __GT_t18348(validate__5937__auto____$1,owner__$1,data__$1,output_schema18340__$1,output_checker18343__$1,state__$1,G__18344__$1,constructor18337__$1,input_schema18341__$1,map18339__$1,opts__$1,input_checker18342__$1,ufv____$1,meta18349){
return (new jade.components.review.t18348(validate__5937__auto____$1,owner__$1,data__$1,output_schema18340__$1,output_checker18343__$1,state__$1,G__18344__$1,constructor18337__$1,input_schema18341__$1,map18339__$1,opts__$1,input_checker18342__$1,ufv____$1,meta18349));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
;

}

return (new jade.components.review.t18348(validate__5937__auto__,owner,data,output_schema18340,output_checker18343,state,G__18344,constructor18337,input_schema18341,map18339,opts,input_checker18342,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18358 = output_checker18343.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18358)){
var error__5939__auto___18359 = temp__4388__auto___18358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18337","constructor18337",-2017270186,null),cljs.core.pr_str.call(null,error__5939__auto___18359)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18340,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18359], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18340,input_schema18341,input_checker18342,output_checker18343))
,schema.core.make_fn_schema.call(null,output_schema18340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18341], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.review.review_section = ((function (component_fnk__7745__auto___18354){
return (function() { 
var review_section__delegate = function (data__7746__auto__,owner18336,p__18351){
var vec__18353 = p__18351;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18353,(0),null);
return component_fnk__7745__auto___18354.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18336),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18336,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var review_section = function (data__7746__auto__,owner18336,var_args){
var p__18351 = null;
if (arguments.length > 2) {
  p__18351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return review_section__delegate.call(this,data__7746__auto__,owner18336,p__18351);};
review_section.cljs$lang$maxFixedArity = 2;
review_section.cljs$lang$applyTo = (function (arglist__18360){
var data__7746__auto__ = cljs.core.first(arglist__18360);
arglist__18360 = cljs.core.next(arglist__18360);
var owner18336 = cljs.core.first(arglist__18360);
var p__18351 = cljs.core.rest(arglist__18360);
return review_section__delegate(data__7746__auto__,owner18336,p__18351);
});
review_section.cljs$core$IFn$_invoke$arity$variadic = review_section__delegate;
return review_section;
})()
;})(component_fnk__7745__auto___18354))
;

jade.components.review.__GT_review_section = (function() {
var __GT_review_section = null;
var __GT_review_section__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.review.review_section,cursor__7714__auto__);
});
var __GT_review_section__2 = (function (cursor__7714__auto__,m18338){
return om.core.build.call(null,jade.components.review.review_section,cursor__7714__auto__,m18338);
});
__GT_review_section = function(cursor__7714__auto__,m18338){
switch(arguments.length){
case 1:
return __GT_review_section__1.call(this,cursor__7714__auto__);
case 2:
return __GT_review_section__2.call(this,cursor__7714__auto__,m18338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_review_section.cljs$core$IFn$_invoke$arity$1 = __GT_review_section__1;
__GT_review_section.cljs$core$IFn$_invoke$arity$2 = __GT_review_section__2;
return __GT_review_section;
})()
;

//# sourceMappingURL=review.js.map?rel=1545283549870