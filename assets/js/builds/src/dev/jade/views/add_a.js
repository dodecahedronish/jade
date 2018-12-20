// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.add_a');
goog.require('cljs.core');
goog.require('jade.components.dheader');
goog.require('jade.components.input');
goog.require('jade.components.header');
goog.require('jade.components.footer');
goog.require('jade.components.panel');
goog.require('jade.components.dispensary');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.dispensary');
goog.require('jade.config');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('jade.components.footer');
goog.require('om_tools.core');
goog.require('jade.components.input');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('jade.components.dheader');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18120 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18106 = schema.core.Any;
var input_schema18107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18105","map18105",2046757306,null))], null);
var input_checker18108 = schema.core.checker.call(null,input_schema18107);
var output_checker18109 = schema.core.checker.call(null,output_schema18106);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function constructor18103(G__18110){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18110], null);
var temp__4388__auto___18122 = input_checker18108.call(null,args__5938__auto___18121);
if(cljs.core.truth_(temp__4388__auto___18122)){
var error__5939__auto___18123 = temp__4388__auto___18122;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18103","constructor18103",847187716,null),cljs.core.pr_str.call(null,error__5939__auto___18123)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18107,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18121,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18123], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18105 = G__18110;
while(true){
if(cljs.core.map_QMARK_.call(null,map18105)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18105)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18105,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18105,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18105,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18105,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.add_a.t18114 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.add_a.t18114 = (function (output_schema18106,validate__5937__auto__,input_schema18107,owner,constructor18103,input_checker18108,data,output_checker18109,G__18110,state,map18105,opts,ufv__,meta18115){
this.output_schema18106 = output_schema18106;
this.validate__5937__auto__ = validate__5937__auto__;
this.input_schema18107 = input_schema18107;
this.owner = owner;
this.constructor18103 = constructor18103;
this.input_checker18108 = input_checker18108;
this.data = data;
this.output_checker18109 = output_checker18109;
this.G__18110 = G__18110;
this.state = state;
this.map18105 = map18105;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18115 = meta18115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.add_a.t18114.prototype.om$core$IDisplayName$ = true;

jade.views.add_a.t18114.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function (_){
var self__ = this;
var ___$1 = this;
return "credit-card*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

jade.views.add_a.t18114.prototype.om$core$IRender$ = true;

jade.views.add_a.t18114.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.section,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"chevron-left",new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"prompt","prompt",-78109487),"ADD A CREDIT CARD"], null)),cljs.core.apply.call(null,React.DOM.section,{"style": {"height": "80%", "width": "100%"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(90),new cljs.core.Keyword(null,"default","default",-1987822328),"Card#"], null)),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "auto", "width": "90%"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"hor-stack","hor-stack",-521302244),true,new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(100),new cljs.core.Keyword(null,"default","default",-1987822328),"mm/yy"], null)),jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(100),new cljs.core.Keyword(null,"hor-stack","hor-stack",-521302244),true,new cljs.core.Keyword(null,"default","default",-1987822328),"CVV"], null))],null))))],null)))),jade.components.footer.__GT_footer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"copy","copy",-1077617309),"DONE",new cljs.core.Keyword(null,"c-height","c-height",557519589),(15),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null),p_opts)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

jade.views.add_a.t18114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function (_18116){
var self__ = this;
var _18116__$1 = this;
return self__.meta18115;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

jade.views.add_a.t18114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function (_18116,meta18115__$1){
var self__ = this;
var _18116__$1 = this;
return (new jade.views.add_a.t18114(self__.output_schema18106,self__.validate__5937__auto__,self__.input_schema18107,self__.owner,self__.constructor18103,self__.input_checker18108,self__.data,self__.output_checker18109,self__.G__18110,self__.state,self__.map18105,self__.opts,self__.ufv__,meta18115__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

jade.views.add_a.t18114.cljs$lang$type = true;

jade.views.add_a.t18114.cljs$lang$ctorStr = "jade.views.add-a/t18114";

jade.views.add_a.t18114.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.add-a/t18114");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

jade.views.add_a.__GT_t18114 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109){
return (function __GT_t18114(output_schema18106__$1,validate__5937__auto____$1,input_schema18107__$1,owner__$1,constructor18103__$1,input_checker18108__$1,data__$1,output_checker18109__$1,G__18110__$1,state__$1,map18105__$1,opts__$1,ufv____$1,meta18115){
return (new jade.views.add_a.t18114(output_schema18106__$1,validate__5937__auto____$1,input_schema18107__$1,owner__$1,constructor18103__$1,input_checker18108__$1,data__$1,output_checker18109__$1,G__18110__$1,state__$1,map18105__$1,opts__$1,ufv____$1,meta18115));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
;

}

return (new jade.views.add_a.t18114(output_schema18106,validate__5937__auto__,input_schema18107,owner,constructor18103,input_checker18108,data,output_checker18109,G__18110,state,map18105,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18124 = output_checker18109.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18124)){
var error__5939__auto___18125 = temp__4388__auto___18124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18103","constructor18103",847187716,null),cljs.core.pr_str.call(null,error__5939__auto___18125)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18106,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18125], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18106,input_schema18107,input_checker18108,output_checker18109))
,schema.core.make_fn_schema.call(null,output_schema18106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18107], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.add_a.credit_card_STAR_ = ((function (component_fnk__7745__auto___18120){
return (function() { 
var credit_card_STAR___delegate = function (data__7746__auto__,owner18102,p__18117){
var vec__18119 = p__18117;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18119,(0),null);
return component_fnk__7745__auto___18120.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18102),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18102,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var credit_card_STAR_ = function (data__7746__auto__,owner18102,var_args){
var p__18117 = null;
if (arguments.length > 2) {
  p__18117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return credit_card_STAR___delegate.call(this,data__7746__auto__,owner18102,p__18117);};
credit_card_STAR_.cljs$lang$maxFixedArity = 2;
credit_card_STAR_.cljs$lang$applyTo = (function (arglist__18126){
var data__7746__auto__ = cljs.core.first(arglist__18126);
arglist__18126 = cljs.core.next(arglist__18126);
var owner18102 = cljs.core.first(arglist__18126);
var p__18117 = cljs.core.rest(arglist__18126);
return credit_card_STAR___delegate(data__7746__auto__,owner18102,p__18117);
});
credit_card_STAR_.cljs$core$IFn$_invoke$arity$variadic = credit_card_STAR___delegate;
return credit_card_STAR_;
})()
;})(component_fnk__7745__auto___18120))
;

jade.views.add_a.__GT_credit_card_STAR_ = (function() {
var __GT_credit_card_STAR_ = null;
var __GT_credit_card_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.add_a.credit_card_STAR_,cursor__7714__auto__);
});
var __GT_credit_card_STAR___2 = (function (cursor__7714__auto__,m18104){
return om.core.build.call(null,jade.views.add_a.credit_card_STAR_,cursor__7714__auto__,m18104);
});
__GT_credit_card_STAR_ = function(cursor__7714__auto__,m18104){
switch(arguments.length){
case 1:
return __GT_credit_card_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_credit_card_STAR___2.call(this,cursor__7714__auto__,m18104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_credit_card_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_credit_card_STAR___1;
__GT_credit_card_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_credit_card_STAR___2;
return __GT_credit_card_STAR_;
})()
;

var component_fnk__7745__auto___18145 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18131 = schema.core.Any;
var input_schema18132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18130","map18130",-208904489,null))], null);
var input_checker18133 = schema.core.checker.call(null,input_schema18132);
var output_checker18134 = schema.core.checker.call(null,output_schema18131);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function constructor18128(G__18135){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18135], null);
var temp__4388__auto___18147 = input_checker18133.call(null,args__5938__auto___18146);
if(cljs.core.truth_(temp__4388__auto___18147)){
var error__5939__auto___18148 = temp__4388__auto___18147;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18128","constructor18128",-257067712,null),cljs.core.pr_str.call(null,error__5939__auto___18148)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18132,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18146,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18148], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18130 = G__18135;
while(true){
if(cljs.core.map_QMARK_.call(null,map18130)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18130)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18130,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18130,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18130,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18130,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.add_a.t18139 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.add_a.t18139 = (function (constructor18128,validate__5937__auto__,owner,data,output_checker18134,G__18135,input_checker18133,output_schema18131,state,map18130,input_schema18132,opts,ufv__,meta18140){
this.constructor18128 = constructor18128;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_checker18134 = output_checker18134;
this.G__18135 = G__18135;
this.input_checker18133 = input_checker18133;
this.output_schema18131 = output_schema18131;
this.state = state;
this.map18130 = map18130;
this.input_schema18132 = input_schema18132;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18140 = meta18140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.add_a.t18139.prototype.om$core$IDisplayName$ = true;

jade.views.add_a.t18139.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function (_){
var self__ = this;
var ___$1 = this;
return "address*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

jade.views.add_a.t18139.prototype.om$core$IRender$ = true;

jade.views.add_a.t18139.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.section,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"chevron-left",new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"prompt","prompt",-78109487),"ADD AN ADDRESS"], null)),cljs.core.apply.call(null,React.DOM.section,{"style": {"height": "80%", "width": "100%"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(90),new cljs.core.Keyword(null,"default","default",-1987822328),"Street Address"], null)),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "auto", "width": "90%"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"hor-stack","hor-stack",-521302244),true,new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(100),new cljs.core.Keyword(null,"default","default",-1987822328),"Apt/Suite #"], null)),jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(100),new cljs.core.Keyword(null,"hor-stack","hor-stack",-521302244),true,new cljs.core.Keyword(null,"default","default",-1987822328),"ZIP"], null))],null))))],null)))),jade.components.footer.__GT_footer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"copy","copy",-1077617309),"DONE",new cljs.core.Keyword(null,"c-height","c-height",557519589),(15),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null),p_opts)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

jade.views.add_a.t18139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function (_18141){
var self__ = this;
var _18141__$1 = this;
return self__.meta18140;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

jade.views.add_a.t18139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function (_18141,meta18140__$1){
var self__ = this;
var _18141__$1 = this;
return (new jade.views.add_a.t18139(self__.constructor18128,self__.validate__5937__auto__,self__.owner,self__.data,self__.output_checker18134,self__.G__18135,self__.input_checker18133,self__.output_schema18131,self__.state,self__.map18130,self__.input_schema18132,self__.opts,self__.ufv__,meta18140__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

jade.views.add_a.t18139.cljs$lang$type = true;

jade.views.add_a.t18139.cljs$lang$ctorStr = "jade.views.add-a/t18139";

jade.views.add_a.t18139.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.add-a/t18139");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

jade.views.add_a.__GT_t18139 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134){
return (function __GT_t18139(constructor18128__$1,validate__5937__auto____$1,owner__$1,data__$1,output_checker18134__$1,G__18135__$1,input_checker18133__$1,output_schema18131__$1,state__$1,map18130__$1,input_schema18132__$1,opts__$1,ufv____$1,meta18140){
return (new jade.views.add_a.t18139(constructor18128__$1,validate__5937__auto____$1,owner__$1,data__$1,output_checker18134__$1,G__18135__$1,input_checker18133__$1,output_schema18131__$1,state__$1,map18130__$1,input_schema18132__$1,opts__$1,ufv____$1,meta18140));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
;

}

return (new jade.views.add_a.t18139(constructor18128,validate__5937__auto__,owner,data,output_checker18134,G__18135,input_checker18133,output_schema18131,state,map18130,input_schema18132,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18149 = output_checker18134.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18149)){
var error__5939__auto___18150 = temp__4388__auto___18149;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18128","constructor18128",-257067712,null),cljs.core.pr_str.call(null,error__5939__auto___18150)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18131,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18150], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18131,input_schema18132,input_checker18133,output_checker18134))
,schema.core.make_fn_schema.call(null,output_schema18131,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18132], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.add_a.address_STAR_ = ((function (component_fnk__7745__auto___18145){
return (function() { 
var address_STAR___delegate = function (data__7746__auto__,owner18127,p__18142){
var vec__18144 = p__18142;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18144,(0),null);
return component_fnk__7745__auto___18145.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18127),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18127,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var address_STAR_ = function (data__7746__auto__,owner18127,var_args){
var p__18142 = null;
if (arguments.length > 2) {
  p__18142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return address_STAR___delegate.call(this,data__7746__auto__,owner18127,p__18142);};
address_STAR_.cljs$lang$maxFixedArity = 2;
address_STAR_.cljs$lang$applyTo = (function (arglist__18151){
var data__7746__auto__ = cljs.core.first(arglist__18151);
arglist__18151 = cljs.core.next(arglist__18151);
var owner18127 = cljs.core.first(arglist__18151);
var p__18142 = cljs.core.rest(arglist__18151);
return address_STAR___delegate(data__7746__auto__,owner18127,p__18142);
});
address_STAR_.cljs$core$IFn$_invoke$arity$variadic = address_STAR___delegate;
return address_STAR_;
})()
;})(component_fnk__7745__auto___18145))
;

jade.views.add_a.__GT_address_STAR_ = (function() {
var __GT_address_STAR_ = null;
var __GT_address_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.add_a.address_STAR_,cursor__7714__auto__);
});
var __GT_address_STAR___2 = (function (cursor__7714__auto__,m18129){
return om.core.build.call(null,jade.views.add_a.address_STAR_,cursor__7714__auto__,m18129);
});
__GT_address_STAR_ = function(cursor__7714__auto__,m18129){
switch(arguments.length){
case 1:
return __GT_address_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_address_STAR___2.call(this,cursor__7714__auto__,m18129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_address_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_address_STAR___1;
__GT_address_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_address_STAR___2;
return __GT_address_STAR_;
})()
;

var component_fnk__7745__auto___18170 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18156 = schema.core.Any;
var input_schema18157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18155","map18155",906412266,null))], null);
var input_checker18158 = schema.core.checker.call(null,input_schema18157);
var output_checker18159 = schema.core.checker.call(null,output_schema18156);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function constructor18153(G__18160){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18160], null);
var temp__4388__auto___18172 = input_checker18158.call(null,args__5938__auto___18171);
if(cljs.core.truth_(temp__4388__auto___18172)){
var error__5939__auto___18173 = temp__4388__auto___18172;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18153","constructor18153",-430485024,null),cljs.core.pr_str.call(null,error__5939__auto___18173)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18157,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18171,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18173], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18155 = G__18160;
while(true){
if(cljs.core.map_QMARK_.call(null,map18155)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18155)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18155,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18155,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18155,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18155,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.add_a.t18164 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.add_a.t18164 = (function (constructor18153,validate__5937__auto__,owner,data,output_schema18156,map18155,G__18160,state,input_checker18158,output_checker18159,input_schema18157,opts,ufv__,meta18165){
this.constructor18153 = constructor18153;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_schema18156 = output_schema18156;
this.map18155 = map18155;
this.G__18160 = G__18160;
this.state = state;
this.input_checker18158 = input_checker18158;
this.output_checker18159 = output_checker18159;
this.input_schema18157 = input_schema18157;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18165 = meta18165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.add_a.t18164.prototype.om$core$IDisplayName$ = true;

jade.views.add_a.t18164.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function (_){
var self__ = this;
var ___$1 = this;
return "credit-card";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

jade.views.add_a.t18164.prototype.om$core$IRender$ = true;

jade.views.add_a.t18164.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.add_a.credit_card_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout,new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

jade.views.add_a.t18164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function (_18166){
var self__ = this;
var _18166__$1 = this;
return self__.meta18165;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

jade.views.add_a.t18164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function (_18166,meta18165__$1){
var self__ = this;
var _18166__$1 = this;
return (new jade.views.add_a.t18164(self__.constructor18153,self__.validate__5937__auto__,self__.owner,self__.data,self__.output_schema18156,self__.map18155,self__.G__18160,self__.state,self__.input_checker18158,self__.output_checker18159,self__.input_schema18157,self__.opts,self__.ufv__,meta18165__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

jade.views.add_a.t18164.cljs$lang$type = true;

jade.views.add_a.t18164.cljs$lang$ctorStr = "jade.views.add-a/t18164";

jade.views.add_a.t18164.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.add-a/t18164");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

jade.views.add_a.__GT_t18164 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159){
return (function __GT_t18164(constructor18153__$1,validate__5937__auto____$1,owner__$1,data__$1,output_schema18156__$1,map18155__$1,G__18160__$1,state__$1,input_checker18158__$1,output_checker18159__$1,input_schema18157__$1,opts__$1,ufv____$1,meta18165){
return (new jade.views.add_a.t18164(constructor18153__$1,validate__5937__auto____$1,owner__$1,data__$1,output_schema18156__$1,map18155__$1,G__18160__$1,state__$1,input_checker18158__$1,output_checker18159__$1,input_schema18157__$1,opts__$1,ufv____$1,meta18165));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
;

}

return (new jade.views.add_a.t18164(constructor18153,validate__5937__auto__,owner,data,output_schema18156,map18155,G__18160,state,input_checker18158,output_checker18159,input_schema18157,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18174 = output_checker18159.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18174)){
var error__5939__auto___18175 = temp__4388__auto___18174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18153","constructor18153",-430485024,null),cljs.core.pr_str.call(null,error__5939__auto___18175)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18156,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18175], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18156,input_schema18157,input_checker18158,output_checker18159))
,schema.core.make_fn_schema.call(null,output_schema18156,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18157], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.add_a.credit_card = ((function (component_fnk__7745__auto___18170){
return (function() { 
var credit_card__delegate = function (data__7746__auto__,owner18152,p__18167){
var vec__18169 = p__18167;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18169,(0),null);
return component_fnk__7745__auto___18170.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18152),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18152,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var credit_card = function (data__7746__auto__,owner18152,var_args){
var p__18167 = null;
if (arguments.length > 2) {
  p__18167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return credit_card__delegate.call(this,data__7746__auto__,owner18152,p__18167);};
credit_card.cljs$lang$maxFixedArity = 2;
credit_card.cljs$lang$applyTo = (function (arglist__18176){
var data__7746__auto__ = cljs.core.first(arglist__18176);
arglist__18176 = cljs.core.next(arglist__18176);
var owner18152 = cljs.core.first(arglist__18176);
var p__18167 = cljs.core.rest(arglist__18176);
return credit_card__delegate(data__7746__auto__,owner18152,p__18167);
});
credit_card.cljs$core$IFn$_invoke$arity$variadic = credit_card__delegate;
return credit_card;
})()
;})(component_fnk__7745__auto___18170))
;

jade.views.add_a.__GT_credit_card = (function() {
var __GT_credit_card = null;
var __GT_credit_card__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.add_a.credit_card,cursor__7714__auto__);
});
var __GT_credit_card__2 = (function (cursor__7714__auto__,m18154){
return om.core.build.call(null,jade.views.add_a.credit_card,cursor__7714__auto__,m18154);
});
__GT_credit_card = function(cursor__7714__auto__,m18154){
switch(arguments.length){
case 1:
return __GT_credit_card__1.call(this,cursor__7714__auto__);
case 2:
return __GT_credit_card__2.call(this,cursor__7714__auto__,m18154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_credit_card.cljs$core$IFn$_invoke$arity$1 = __GT_credit_card__1;
__GT_credit_card.cljs$core$IFn$_invoke$arity$2 = __GT_credit_card__2;
return __GT_credit_card;
})()
;

var component_fnk__7745__auto___18195 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18181 = schema.core.Any;
var input_schema18182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18180","map18180",71350479,null))], null);
var input_checker18183 = schema.core.checker.call(null,input_schema18182);
var output_checker18184 = schema.core.checker.call(null,output_schema18181);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function constructor18178(G__18185){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18185], null);
var temp__4388__auto___18197 = input_checker18183.call(null,args__5938__auto___18196);
if(cljs.core.truth_(temp__4388__auto___18197)){
var error__5939__auto___18198 = temp__4388__auto___18197;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18178","constructor18178",-1592840036,null),cljs.core.pr_str.call(null,error__5939__auto___18198)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18182,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18196,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18198], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18180 = G__18185;
while(true){
if(cljs.core.map_QMARK_.call(null,map18180)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18180)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18180,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18180,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18180,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18180,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.add_a.t18189 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.add_a.t18189 = (function (validate__5937__auto__,input_schema18182,output_schema18181,owner,data,map18180,output_checker18184,G__18185,state,input_checker18183,constructor18178,opts,ufv__,meta18190){
this.validate__5937__auto__ = validate__5937__auto__;
this.input_schema18182 = input_schema18182;
this.output_schema18181 = output_schema18181;
this.owner = owner;
this.data = data;
this.map18180 = map18180;
this.output_checker18184 = output_checker18184;
this.G__18185 = G__18185;
this.state = state;
this.input_checker18183 = input_checker18183;
this.constructor18178 = constructor18178;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18190 = meta18190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.add_a.t18189.prototype.om$core$IDisplayName$ = true;

jade.views.add_a.t18189.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function (_){
var self__ = this;
var ___$1 = this;
return "address";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

jade.views.add_a.t18189.prototype.om$core$IRender$ = true;

jade.views.add_a.t18189.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.add_a.address_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null)], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout,new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

jade.views.add_a.t18189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function (_18191){
var self__ = this;
var _18191__$1 = this;
return self__.meta18190;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

jade.views.add_a.t18189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function (_18191,meta18190__$1){
var self__ = this;
var _18191__$1 = this;
return (new jade.views.add_a.t18189(self__.validate__5937__auto__,self__.input_schema18182,self__.output_schema18181,self__.owner,self__.data,self__.map18180,self__.output_checker18184,self__.G__18185,self__.state,self__.input_checker18183,self__.constructor18178,self__.opts,self__.ufv__,meta18190__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

jade.views.add_a.t18189.cljs$lang$type = true;

jade.views.add_a.t18189.cljs$lang$ctorStr = "jade.views.add-a/t18189";

jade.views.add_a.t18189.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.add-a/t18189");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

jade.views.add_a.__GT_t18189 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184){
return (function __GT_t18189(validate__5937__auto____$1,input_schema18182__$1,output_schema18181__$1,owner__$1,data__$1,map18180__$1,output_checker18184__$1,G__18185__$1,state__$1,input_checker18183__$1,constructor18178__$1,opts__$1,ufv____$1,meta18190){
return (new jade.views.add_a.t18189(validate__5937__auto____$1,input_schema18182__$1,output_schema18181__$1,owner__$1,data__$1,map18180__$1,output_checker18184__$1,G__18185__$1,state__$1,input_checker18183__$1,constructor18178__$1,opts__$1,ufv____$1,meta18190));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
;

}

return (new jade.views.add_a.t18189(validate__5937__auto__,input_schema18182,output_schema18181,owner,data,map18180,output_checker18184,G__18185,state,input_checker18183,constructor18178,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18199 = output_checker18184.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18199)){
var error__5939__auto___18200 = temp__4388__auto___18199;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18178","constructor18178",-1592840036,null),cljs.core.pr_str.call(null,error__5939__auto___18200)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18181,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18200], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18181,input_schema18182,input_checker18183,output_checker18184))
,schema.core.make_fn_schema.call(null,output_schema18181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18182], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.add_a.address = ((function (component_fnk__7745__auto___18195){
return (function() { 
var address__delegate = function (data__7746__auto__,owner18177,p__18192){
var vec__18194 = p__18192;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18194,(0),null);
return component_fnk__7745__auto___18195.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18177),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18177,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var address = function (data__7746__auto__,owner18177,var_args){
var p__18192 = null;
if (arguments.length > 2) {
  p__18192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return address__delegate.call(this,data__7746__auto__,owner18177,p__18192);};
address.cljs$lang$maxFixedArity = 2;
address.cljs$lang$applyTo = (function (arglist__18201){
var data__7746__auto__ = cljs.core.first(arglist__18201);
arglist__18201 = cljs.core.next(arglist__18201);
var owner18177 = cljs.core.first(arglist__18201);
var p__18192 = cljs.core.rest(arglist__18201);
return address__delegate(data__7746__auto__,owner18177,p__18192);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;})(component_fnk__7745__auto___18195))
;

jade.views.add_a.__GT_address = (function() {
var __GT_address = null;
var __GT_address__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.add_a.address,cursor__7714__auto__);
});
var __GT_address__2 = (function (cursor__7714__auto__,m18179){
return om.core.build.call(null,jade.views.add_a.address,cursor__7714__auto__,m18179);
});
__GT_address = function(cursor__7714__auto__,m18179){
switch(arguments.length){
case 1:
return __GT_address__1.call(this,cursor__7714__auto__);
case 2:
return __GT_address__2.call(this,cursor__7714__auto__,m18179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_address.cljs$core$IFn$_invoke$arity$1 = __GT_address__1;
__GT_address.cljs$core$IFn$_invoke$arity$2 = __GT_address__2;
return __GT_address;
})()
;

//# sourceMappingURL=add_a.js.map?rel=1545283549522