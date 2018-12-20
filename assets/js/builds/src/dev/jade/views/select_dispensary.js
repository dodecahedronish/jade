// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.select_dispensary');
goog.require('cljs.core');
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
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___17085 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17071 = schema.core.Any;
var input_schema17072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17070","map17070",654016899,null))], null);
var input_checker17073 = schema.core.checker.call(null,input_schema17072);
var output_checker17074 = schema.core.checker.call(null,output_schema17071);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function constructor17068(G__17075){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17075], null);
var temp__4388__auto___17087 = input_checker17073.call(null,args__5938__auto___17086);
if(cljs.core.truth_(temp__4388__auto___17087)){
var error__5939__auto___17088 = temp__4388__auto___17087;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17068","constructor17068",-1554045642,null),cljs.core.pr_str.call(null,error__5939__auto___17088)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17072,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17086,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17088], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17070 = G__17075;
while(true){
if(cljs.core.map_QMARK_.call(null,map17070)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17070)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17070,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17070,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17070,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17070,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.select_dispensary.t17079 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.select_dispensary.t17079 = (function (validate__5937__auto__,map17070,owner,input_checker17073,data,G__17075,output_schema17071,input_schema17072,state,constructor17068,opts,ufv__,output_checker17074,meta17080){
this.validate__5937__auto__ = validate__5937__auto__;
this.map17070 = map17070;
this.owner = owner;
this.input_checker17073 = input_checker17073;
this.data = data;
this.G__17075 = G__17075;
this.output_schema17071 = output_schema17071;
this.input_schema17072 = input_schema17072;
this.state = state;
this.constructor17068 = constructor17068;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker17074 = output_checker17074;
this.meta17080 = meta17080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.select_dispensary.t17079.prototype.om$core$IDisplayName$ = true;

jade.views.select_dispensary.t17079.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select-dispensary*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

jade.views.select_dispensary.t17079.prototype.om$core$IRender$ = true;

jade.views.select_dispensary.t17079.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),"SELECT YOUR PRIMARY CARE VENDORS",new cljs.core.Keyword(null,"size","size",1098693007),"1.71428571rem",new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"chevron-left",new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),"search"], null),p_opts),cljs.core.apply.call(null,React.DOM.div,{"style": {"top": "7.5%", "overflowY": "scroll", "height": "81.5%", "width": "100%", "position": "absolute"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (p_opts,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (data__$1){
return jade.components.dispensary.__GT_dispensary.call(null,data__$1);
});})(p_opts,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
,cljs.core.repeat.call(null,(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exhale Medical Center"," 980 N La Cinega Blvd #102 West Hollywyood, CA 90069"], null)))],null)))),jade.components.footer.__GT_footer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"copy","copy",-1077617309),"CONFIRM",new cljs.core.Keyword(null,"c-height","c-height",557519589),14.78,new cljs.core.Keyword(null,"height","height",1025178622),(45)], null),p_opts)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

jade.views.select_dispensary.t17079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (_17081){
var self__ = this;
var _17081__$1 = this;
return self__.meta17080;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

jade.views.select_dispensary.t17079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (_17081,meta17080__$1){
var self__ = this;
var _17081__$1 = this;
return (new jade.views.select_dispensary.t17079(self__.validate__5937__auto__,self__.map17070,self__.owner,self__.input_checker17073,self__.data,self__.G__17075,self__.output_schema17071,self__.input_schema17072,self__.state,self__.constructor17068,self__.opts,self__.ufv__,self__.output_checker17074,meta17080__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

jade.views.select_dispensary.t17079.cljs$lang$type = true;

jade.views.select_dispensary.t17079.cljs$lang$ctorStr = "jade.views.select-dispensary/t17079";

jade.views.select_dispensary.t17079.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.select-dispensary/t17079");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

jade.views.select_dispensary.__GT_t17079 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074){
return (function __GT_t17079(validate__5937__auto____$1,map17070__$1,owner__$1,input_checker17073__$1,data__$1,G__17075__$1,output_schema17071__$1,input_schema17072__$1,state__$1,constructor17068__$1,opts__$1,ufv____$1,output_checker17074__$1,meta17080){
return (new jade.views.select_dispensary.t17079(validate__5937__auto____$1,map17070__$1,owner__$1,input_checker17073__$1,data__$1,G__17075__$1,output_schema17071__$1,input_schema17072__$1,state__$1,constructor17068__$1,opts__$1,ufv____$1,output_checker17074__$1,meta17080));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
;

}

return (new jade.views.select_dispensary.t17079(validate__5937__auto__,map17070,owner,input_checker17073,data,G__17075,output_schema17071,input_schema17072,state,constructor17068,opts,ufv__,output_checker17074,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17089 = output_checker17074.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17089)){
var error__5939__auto___17090 = temp__4388__auto___17089;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17068","constructor17068",-1554045642,null),cljs.core.pr_str.call(null,error__5939__auto___17090)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17071,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17090], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17071,input_schema17072,input_checker17073,output_checker17074))
,schema.core.make_fn_schema.call(null,output_schema17071,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17072], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.select_dispensary.select_dispensary_STAR_ = ((function (component_fnk__7745__auto___17085){
return (function() { 
var select_dispensary_STAR___delegate = function (data__7746__auto__,owner17067,p__17082){
var vec__17084 = p__17082;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17084,(0),null);
return component_fnk__7745__auto___17085.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17067),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17067,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var select_dispensary_STAR_ = function (data__7746__auto__,owner17067,var_args){
var p__17082 = null;
if (arguments.length > 2) {
  p__17082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return select_dispensary_STAR___delegate.call(this,data__7746__auto__,owner17067,p__17082);};
select_dispensary_STAR_.cljs$lang$maxFixedArity = 2;
select_dispensary_STAR_.cljs$lang$applyTo = (function (arglist__17091){
var data__7746__auto__ = cljs.core.first(arglist__17091);
arglist__17091 = cljs.core.next(arglist__17091);
var owner17067 = cljs.core.first(arglist__17091);
var p__17082 = cljs.core.rest(arglist__17091);
return select_dispensary_STAR___delegate(data__7746__auto__,owner17067,p__17082);
});
select_dispensary_STAR_.cljs$core$IFn$_invoke$arity$variadic = select_dispensary_STAR___delegate;
return select_dispensary_STAR_;
})()
;})(component_fnk__7745__auto___17085))
;

jade.views.select_dispensary.__GT_select_dispensary_STAR_ = (function() {
var __GT_select_dispensary_STAR_ = null;
var __GT_select_dispensary_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.select_dispensary.select_dispensary_STAR_,cursor__7714__auto__);
});
var __GT_select_dispensary_STAR___2 = (function (cursor__7714__auto__,m17069){
return om.core.build.call(null,jade.views.select_dispensary.select_dispensary_STAR_,cursor__7714__auto__,m17069);
});
__GT_select_dispensary_STAR_ = function(cursor__7714__auto__,m17069){
switch(arguments.length){
case 1:
return __GT_select_dispensary_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_select_dispensary_STAR___2.call(this,cursor__7714__auto__,m17069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_dispensary_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_select_dispensary_STAR___1;
__GT_select_dispensary_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_select_dispensary_STAR___2;
return __GT_select_dispensary_STAR_;
})()
;

var component_fnk__7745__auto___17110 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17096 = schema.core.Any;
var input_schema17097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17095","map17095",1427440609,null))], null);
var input_checker17098 = schema.core.checker.call(null,input_schema17097);
var output_checker17099 = schema.core.checker.call(null,output_schema17096);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function constructor17093(G__17100){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17100], null);
var temp__4388__auto___17112 = input_checker17098.call(null,args__5938__auto___17111);
if(cljs.core.truth_(temp__4388__auto___17112)){
var error__5939__auto___17113 = temp__4388__auto___17112;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17093","constructor17093",-585547621,null),cljs.core.pr_str.call(null,error__5939__auto___17113)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17097,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17111,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17113], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17095 = G__17100;
while(true){
if(cljs.core.map_QMARK_.call(null,map17095)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17095)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17095,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17095,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17095,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17095,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.select_dispensary.t17104 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.select_dispensary.t17104 = (function (input_schema17097,map17095,validate__5937__auto__,output_schema17096,owner,data,G__17100,state,input_checker17098,constructor17093,opts,ufv__,output_checker17099,meta17105){
this.input_schema17097 = input_schema17097;
this.map17095 = map17095;
this.validate__5937__auto__ = validate__5937__auto__;
this.output_schema17096 = output_schema17096;
this.owner = owner;
this.data = data;
this.G__17100 = G__17100;
this.state = state;
this.input_checker17098 = input_checker17098;
this.constructor17093 = constructor17093;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker17099 = output_checker17099;
this.meta17105 = meta17105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.select_dispensary.t17104.prototype.om$core$IDisplayName$ = true;

jade.views.select_dispensary.t17104.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select-dispensary";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

jade.views.select_dispensary.t17104.prototype.om$core$IRender$ = true;

jade.views.select_dispensary.t17104.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.select_dispensary.select_dispensary_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

jade.views.select_dispensary.t17104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function (_17106){
var self__ = this;
var _17106__$1 = this;
return self__.meta17105;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

jade.views.select_dispensary.t17104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function (_17106,meta17105__$1){
var self__ = this;
var _17106__$1 = this;
return (new jade.views.select_dispensary.t17104(self__.input_schema17097,self__.map17095,self__.validate__5937__auto__,self__.output_schema17096,self__.owner,self__.data,self__.G__17100,self__.state,self__.input_checker17098,self__.constructor17093,self__.opts,self__.ufv__,self__.output_checker17099,meta17105__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

jade.views.select_dispensary.t17104.cljs$lang$type = true;

jade.views.select_dispensary.t17104.cljs$lang$ctorStr = "jade.views.select-dispensary/t17104";

jade.views.select_dispensary.t17104.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.select-dispensary/t17104");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

jade.views.select_dispensary.__GT_t17104 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099){
return (function __GT_t17104(input_schema17097__$1,map17095__$1,validate__5937__auto____$1,output_schema17096__$1,owner__$1,data__$1,G__17100__$1,state__$1,input_checker17098__$1,constructor17093__$1,opts__$1,ufv____$1,output_checker17099__$1,meta17105){
return (new jade.views.select_dispensary.t17104(input_schema17097__$1,map17095__$1,validate__5937__auto____$1,output_schema17096__$1,owner__$1,data__$1,G__17100__$1,state__$1,input_checker17098__$1,constructor17093__$1,opts__$1,ufv____$1,output_checker17099__$1,meta17105));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
;

}

return (new jade.views.select_dispensary.t17104(input_schema17097,map17095,validate__5937__auto__,output_schema17096,owner,data,G__17100,state,input_checker17098,constructor17093,opts,ufv__,output_checker17099,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17114 = output_checker17099.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17114)){
var error__5939__auto___17115 = temp__4388__auto___17114;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17093","constructor17093",-585547621,null),cljs.core.pr_str.call(null,error__5939__auto___17115)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17096,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17115], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17096,input_schema17097,input_checker17098,output_checker17099))
,schema.core.make_fn_schema.call(null,output_schema17096,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17097], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.select_dispensary.select_dispensary = ((function (component_fnk__7745__auto___17110){
return (function() { 
var select_dispensary__delegate = function (data__7746__auto__,owner17092,p__17107){
var vec__17109 = p__17107;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17109,(0),null);
return component_fnk__7745__auto___17110.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17092),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17092,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var select_dispensary = function (data__7746__auto__,owner17092,var_args){
var p__17107 = null;
if (arguments.length > 2) {
  p__17107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return select_dispensary__delegate.call(this,data__7746__auto__,owner17092,p__17107);};
select_dispensary.cljs$lang$maxFixedArity = 2;
select_dispensary.cljs$lang$applyTo = (function (arglist__17116){
var data__7746__auto__ = cljs.core.first(arglist__17116);
arglist__17116 = cljs.core.next(arglist__17116);
var owner17092 = cljs.core.first(arglist__17116);
var p__17107 = cljs.core.rest(arglist__17116);
return select_dispensary__delegate(data__7746__auto__,owner17092,p__17107);
});
select_dispensary.cljs$core$IFn$_invoke$arity$variadic = select_dispensary__delegate;
return select_dispensary;
})()
;})(component_fnk__7745__auto___17110))
;

jade.views.select_dispensary.__GT_select_dispensary = (function() {
var __GT_select_dispensary = null;
var __GT_select_dispensary__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.select_dispensary.select_dispensary,cursor__7714__auto__);
});
var __GT_select_dispensary__2 = (function (cursor__7714__auto__,m17094){
return om.core.build.call(null,jade.views.select_dispensary.select_dispensary,cursor__7714__auto__,m17094);
});
__GT_select_dispensary = function(cursor__7714__auto__,m17094){
switch(arguments.length){
case 1:
return __GT_select_dispensary__1.call(this,cursor__7714__auto__);
case 2:
return __GT_select_dispensary__2.call(this,cursor__7714__auto__,m17094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_dispensary.cljs$core$IFn$_invoke$arity$1 = __GT_select_dispensary__1;
__GT_select_dispensary.cljs$core$IFn$_invoke$arity$2 = __GT_select_dispensary__2;
return __GT_select_dispensary;
})()
;

//# sourceMappingURL=select_dispensary.js.map?rel=1545283548227