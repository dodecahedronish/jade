// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.termsconditions');
goog.require('cljs.core');
goog.require('jade.components.header');
goog.require('jade.components.footer');
goog.require('jade.components.image_view');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.config');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('jade.components.footer');
goog.require('om_tools.core');
goog.require('jade.components.image_view');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___16883 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16867 = schema.core.Any;
var input_schema16868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16866","map16866",-1358929828,null))], null);
var input_checker16869 = schema.core.checker.call(null,input_schema16868);
var output_checker16870 = schema.core.checker.call(null,output_schema16867);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function constructor16864(G__16871){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16871], null);
var temp__4388__auto___16885 = input_checker16869.call(null,args__5938__auto___16884);
if(cljs.core.truth_(temp__4388__auto___16885)){
var error__5939__auto___16886 = temp__4388__auto___16885;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16864","constructor16864",-1511026278,null),cljs.core.pr_str.call(null,error__5939__auto___16886)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16868,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16884,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16886], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16866 = G__16871;
while(true){
if(cljs.core.map_QMARK_.call(null,map16866)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16866)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16866,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16866,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16866,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16866,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.termsconditions.t16876 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.termsconditions.t16876 = (function (validate__5937__auto__,owner,data,output_schema16867,output_checker16870,input_checker16869,state,G__16871,constructor16864,map16866,opts,ufv__,input_schema16868,meta16877){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_schema16867 = output_schema16867;
this.output_checker16870 = output_checker16870;
this.input_checker16869 = input_checker16869;
this.state = state;
this.G__16871 = G__16871;
this.constructor16864 = constructor16864;
this.map16866 = map16866;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema16868 = input_schema16868;
this.meta16877 = meta16877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.termsconditions.t16876.prototype.om$core$IDisplayName$ = true;

jade.views.termsconditions.t16876.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function (_){
var self__ = this;
var ___$1 = this;
return "local-dispensary";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

jade.views.termsconditions.t16876.prototype.om$core$IRender$ = true;

jade.views.termsconditions.t16876.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__16879 = self__.data;
var place = cljs.core.nth.call(null,vec__16879,(0),null);
var address = cljs.core.nth.call(null,vec__16879,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"className": "flex-start"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.section,{"style": {}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"fontSize": "33.33px"}, "className": "gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[place],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"fontSize": "15px"}, "className": "base-color bert"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[address],null))))],null))))],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

jade.views.termsconditions.t16876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function (_16878){
var self__ = this;
var _16878__$1 = this;
return self__.meta16877;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

jade.views.termsconditions.t16876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function (_16878,meta16877__$1){
var self__ = this;
var _16878__$1 = this;
return (new jade.views.termsconditions.t16876(self__.validate__5937__auto__,self__.owner,self__.data,self__.output_schema16867,self__.output_checker16870,self__.input_checker16869,self__.state,self__.G__16871,self__.constructor16864,self__.map16866,self__.opts,self__.ufv__,self__.input_schema16868,meta16877__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

jade.views.termsconditions.t16876.cljs$lang$type = true;

jade.views.termsconditions.t16876.cljs$lang$ctorStr = "jade.views.termsconditions/t16876";

jade.views.termsconditions.t16876.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.termsconditions/t16876");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

jade.views.termsconditions.__GT_t16876 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870){
return (function __GT_t16876(validate__5937__auto____$1,owner__$1,data__$1,output_schema16867__$1,output_checker16870__$1,input_checker16869__$1,state__$1,G__16871__$1,constructor16864__$1,map16866__$1,opts__$1,ufv____$1,input_schema16868__$1,meta16877){
return (new jade.views.termsconditions.t16876(validate__5937__auto____$1,owner__$1,data__$1,output_schema16867__$1,output_checker16870__$1,input_checker16869__$1,state__$1,G__16871__$1,constructor16864__$1,map16866__$1,opts__$1,ufv____$1,input_schema16868__$1,meta16877));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
;

}

return (new jade.views.termsconditions.t16876(validate__5937__auto__,owner,data,output_schema16867,output_checker16870,input_checker16869,state,G__16871,constructor16864,map16866,opts,ufv__,input_schema16868,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16887 = output_checker16870.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16887)){
var error__5939__auto___16888 = temp__4388__auto___16887;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16864","constructor16864",-1511026278,null),cljs.core.pr_str.call(null,error__5939__auto___16888)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16867,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16888], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16867,input_schema16868,input_checker16869,output_checker16870))
,schema.core.make_fn_schema.call(null,output_schema16867,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16868], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.termsconditions.local_dispensary = ((function (component_fnk__7745__auto___16883){
return (function() { 
var local_dispensary__delegate = function (data__7746__auto__,owner16863,p__16880){
var vec__16882 = p__16880;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16882,(0),null);
return component_fnk__7745__auto___16883.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16863),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16863,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var local_dispensary = function (data__7746__auto__,owner16863,var_args){
var p__16880 = null;
if (arguments.length > 2) {
  p__16880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return local_dispensary__delegate.call(this,data__7746__auto__,owner16863,p__16880);};
local_dispensary.cljs$lang$maxFixedArity = 2;
local_dispensary.cljs$lang$applyTo = (function (arglist__16889){
var data__7746__auto__ = cljs.core.first(arglist__16889);
arglist__16889 = cljs.core.next(arglist__16889);
var owner16863 = cljs.core.first(arglist__16889);
var p__16880 = cljs.core.rest(arglist__16889);
return local_dispensary__delegate(data__7746__auto__,owner16863,p__16880);
});
local_dispensary.cljs$core$IFn$_invoke$arity$variadic = local_dispensary__delegate;
return local_dispensary;
})()
;})(component_fnk__7745__auto___16883))
;

jade.views.termsconditions.__GT_local_dispensary = (function() {
var __GT_local_dispensary = null;
var __GT_local_dispensary__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.termsconditions.local_dispensary,cursor__7714__auto__);
});
var __GT_local_dispensary__2 = (function (cursor__7714__auto__,m16865){
return om.core.build.call(null,jade.views.termsconditions.local_dispensary,cursor__7714__auto__,m16865);
});
__GT_local_dispensary = function(cursor__7714__auto__,m16865){
switch(arguments.length){
case 1:
return __GT_local_dispensary__1.call(this,cursor__7714__auto__);
case 2:
return __GT_local_dispensary__2.call(this,cursor__7714__auto__,m16865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_local_dispensary.cljs$core$IFn$_invoke$arity$1 = __GT_local_dispensary__1;
__GT_local_dispensary.cljs$core$IFn$_invoke$arity$2 = __GT_local_dispensary__2;
return __GT_local_dispensary;
})()
;

var component_fnk__7745__auto___16908 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16894 = schema.core.Any;
var input_schema16895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16893","map16893",-909627467,null))], null);
var input_checker16896 = schema.core.checker.call(null,input_schema16895);
var output_checker16897 = schema.core.checker.call(null,output_schema16894);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function constructor16891(G__16898){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16898], null);
var temp__4388__auto___16910 = input_checker16896.call(null,args__5938__auto___16909);
if(cljs.core.truth_(temp__4388__auto___16910)){
var error__5939__auto___16911 = temp__4388__auto___16910;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16891","constructor16891",2065846590,null),cljs.core.pr_str.call(null,error__5939__auto___16911)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16895,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16909,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16911], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16893 = G__16898;
while(true){
if(cljs.core.map_QMARK_.call(null,map16893)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16893)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16893,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16893,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16893,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16893,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.termsconditions.t16902 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.termsconditions.t16902 = (function (output_checker16897,validate__5937__auto__,owner,input_checker16896,data,input_schema16895,state,map16893,output_schema16894,opts,ufv__,constructor16891,G__16898,meta16903){
this.output_checker16897 = output_checker16897;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.input_checker16896 = input_checker16896;
this.data = data;
this.input_schema16895 = input_schema16895;
this.state = state;
this.map16893 = map16893;
this.output_schema16894 = output_schema16894;
this.opts = opts;
this.ufv__ = ufv__;
this.constructor16891 = constructor16891;
this.G__16898 = G__16898;
this.meta16903 = meta16903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.termsconditions.t16902.prototype.om$core$IDisplayName$ = true;

jade.views.termsconditions.t16902.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (_){
var self__ = this;
var ___$1 = this;
return "termsconditions*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

jade.views.termsconditions.t16902.prototype.om$core$IRender$ = true;

jade.views.termsconditions.t16902.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"state","state",-1988618099)],[self__.opts,cljs.core.deref.call(null,self__.state)]);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%", "height": "100%"}, "className": "flex column terms"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),"TERMS & CONDITIONS",new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"chevron-left"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "88%", "height": "76%", "overflowY": "scroll", "left": "6%", "top": "4%", "position": "absolute", "marginTop": "8%"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"fontSize": "1.6rem"}, "className": "gothic"},"DESIGNATION OF PRIMARY CAREGIVER"),React.DOM.div({"style": {"fontSize": "1.5rem"}, "className": "base-color bert"},"(California Health & Safety Code 11362.5)"),React.DOM.p(null,"I hereby certify that I suffer from cancer, anorexia, AIDS, chronic pain, spasticity, glaucoma, arthritis, migraine, or other serious illness and I have obtained a recommendation or approval from a licensed physician to use medical marijuana (cannabis) in treating my illness. (A copy of my recommendation or approval is attached hereto)."),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["I hereby designate",cljs.core.map.call(null,((function (p_opts,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (data__$1){
return jade.views.termsconditions.__GT_local_dispensary.call(null,data__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-start"], null)], null));
});})(p_opts,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
,cljs.core.repeat.call(null,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exhale Medical Center"," 980 N La Cinega Blvd #102 West Hollywyood, CA 90069"], null)))],null)))),React.DOM.p(null,"as my \u201CPrimary Caregiver,\u201D in accordance with Health & Safety Code 11362.5(d) and 11362.5(e), which read as follows:"),React.DOM.p(null,"(d) Section 11357, relating to the possession of marijuana, and Section 11358, relating to the cultivation of marijuana, shall not apply to a patient, or to a patients primary caregiver, who possesses or cultivates marijuana for the personal medical purposes of the patient upon the written or oral recommendation or approval of a physician."),React.DOM.p(null,"(e) For the purpose of this section, \u201Cprimary caregiver\u201D means the individual/collective designated by the person exempted under this act who has consistently assumed responsibility for the housing, health, or safety of that person.\nI agree that I will consistently rely on the above-named person as the primary source of my medical marijuana as a matter of my personal health and safety. This designation shall remain in effect for a period of one year."),React.DOM.p(null,"NOTICE TO LAW ENFORCEMENT: Pursuant to the Constitution of the State of California, Amendment III, Sec. 3.5(c), state law enforcement officials have \u201Cno power ... to refuse to enforce a statute on the basis that federal law or federal regulations prohibit the enforcement of such statute.\u201D It is therefore your legal duty and responsibility to respect and obey this agreement per the above-cited legislation, and to leave the individuals and gardens herein described unmolested and unreported to federal authorities. Failure to follow state law may result in legal action being taken against you. Thank you for your understanding and compliance. ")],null)))),jade.components.footer.__GT_footer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"copy","copy",-1077617309),"ACCEPT",new cljs.core.Keyword(null,"c-height","c-height",557519589),(15),new cljs.core.Keyword(null,"height","height",1025178622),(45)], null),p_opts)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

jade.views.termsconditions.t16902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (_16904){
var self__ = this;
var _16904__$1 = this;
return self__.meta16903;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

jade.views.termsconditions.t16902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (_16904,meta16903__$1){
var self__ = this;
var _16904__$1 = this;
return (new jade.views.termsconditions.t16902(self__.output_checker16897,self__.validate__5937__auto__,self__.owner,self__.input_checker16896,self__.data,self__.input_schema16895,self__.state,self__.map16893,self__.output_schema16894,self__.opts,self__.ufv__,self__.constructor16891,self__.G__16898,meta16903__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

jade.views.termsconditions.t16902.cljs$lang$type = true;

jade.views.termsconditions.t16902.cljs$lang$ctorStr = "jade.views.termsconditions/t16902";

jade.views.termsconditions.t16902.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.termsconditions/t16902");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

jade.views.termsconditions.__GT_t16902 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897){
return (function __GT_t16902(output_checker16897__$1,validate__5937__auto____$1,owner__$1,input_checker16896__$1,data__$1,input_schema16895__$1,state__$1,map16893__$1,output_schema16894__$1,opts__$1,ufv____$1,constructor16891__$1,G__16898__$1,meta16903){
return (new jade.views.termsconditions.t16902(output_checker16897__$1,validate__5937__auto____$1,owner__$1,input_checker16896__$1,data__$1,input_schema16895__$1,state__$1,map16893__$1,output_schema16894__$1,opts__$1,ufv____$1,constructor16891__$1,G__16898__$1,meta16903));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
;

}

return (new jade.views.termsconditions.t16902(output_checker16897,validate__5937__auto__,owner,input_checker16896,data,input_schema16895,state,map16893,output_schema16894,opts,ufv__,constructor16891,G__16898,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16912 = output_checker16897.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16912)){
var error__5939__auto___16913 = temp__4388__auto___16912;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16891","constructor16891",2065846590,null),cljs.core.pr_str.call(null,error__5939__auto___16913)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16894,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16913], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16894,input_schema16895,input_checker16896,output_checker16897))
,schema.core.make_fn_schema.call(null,output_schema16894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16895], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.termsconditions.termsconditions_STAR_ = ((function (component_fnk__7745__auto___16908){
return (function() { 
var termsconditions_STAR___delegate = function (data__7746__auto__,owner16890,p__16905){
var vec__16907 = p__16905;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16907,(0),null);
return component_fnk__7745__auto___16908.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16890),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16890,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var termsconditions_STAR_ = function (data__7746__auto__,owner16890,var_args){
var p__16905 = null;
if (arguments.length > 2) {
  p__16905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return termsconditions_STAR___delegate.call(this,data__7746__auto__,owner16890,p__16905);};
termsconditions_STAR_.cljs$lang$maxFixedArity = 2;
termsconditions_STAR_.cljs$lang$applyTo = (function (arglist__16914){
var data__7746__auto__ = cljs.core.first(arglist__16914);
arglist__16914 = cljs.core.next(arglist__16914);
var owner16890 = cljs.core.first(arglist__16914);
var p__16905 = cljs.core.rest(arglist__16914);
return termsconditions_STAR___delegate(data__7746__auto__,owner16890,p__16905);
});
termsconditions_STAR_.cljs$core$IFn$_invoke$arity$variadic = termsconditions_STAR___delegate;
return termsconditions_STAR_;
})()
;})(component_fnk__7745__auto___16908))
;

jade.views.termsconditions.__GT_termsconditions_STAR_ = (function() {
var __GT_termsconditions_STAR_ = null;
var __GT_termsconditions_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.termsconditions.termsconditions_STAR_,cursor__7714__auto__);
});
var __GT_termsconditions_STAR___2 = (function (cursor__7714__auto__,m16892){
return om.core.build.call(null,jade.views.termsconditions.termsconditions_STAR_,cursor__7714__auto__,m16892);
});
__GT_termsconditions_STAR_ = function(cursor__7714__auto__,m16892){
switch(arguments.length){
case 1:
return __GT_termsconditions_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_termsconditions_STAR___2.call(this,cursor__7714__auto__,m16892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_termsconditions_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_termsconditions_STAR___1;
__GT_termsconditions_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_termsconditions_STAR___2;
return __GT_termsconditions_STAR_;
})()
;

var component_fnk__7745__auto___16933 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16919 = schema.core.Any;
var input_schema16920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16918","map16918",-1464680942,null))], null);
var input_checker16921 = schema.core.checker.call(null,input_schema16920);
var output_checker16922 = schema.core.checker.call(null,output_schema16919);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function constructor16916(G__16923){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16923], null);
var temp__4388__auto___16935 = input_checker16921.call(null,args__5938__auto___16934);
if(cljs.core.truth_(temp__4388__auto___16935)){
var error__5939__auto___16936 = temp__4388__auto___16935;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16916","constructor16916",262330935,null),cljs.core.pr_str.call(null,error__5939__auto___16936)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16920,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16934,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16936], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16918 = G__16923;
while(true){
if(cljs.core.map_QMARK_.call(null,map16918)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16918)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16918,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16918,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16918,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16918,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.termsconditions.t16927 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.termsconditions.t16927 = (function (validate__5937__auto__,owner,output_schema16919,data,input_checker16921,G__16923,map16918,input_schema16920,state,output_checker16922,constructor16916,opts,ufv__,meta16928){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.output_schema16919 = output_schema16919;
this.data = data;
this.input_checker16921 = input_checker16921;
this.G__16923 = G__16923;
this.map16918 = map16918;
this.input_schema16920 = input_schema16920;
this.state = state;
this.output_checker16922 = output_checker16922;
this.constructor16916 = constructor16916;
this.opts = opts;
this.ufv__ = ufv__;
this.meta16928 = meta16928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.termsconditions.t16927.prototype.om$core$IDisplayName$ = true;

jade.views.termsconditions.t16927.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function (_){
var self__ = this;
var ___$1 = this;
return "termsconditions";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

jade.views.termsconditions.t16927.prototype.om$core$IRender$ = true;

jade.views.termsconditions.t16927.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.termsconditions.termsconditions_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

jade.views.termsconditions.t16927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function (_16929){
var self__ = this;
var _16929__$1 = this;
return self__.meta16928;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

jade.views.termsconditions.t16927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function (_16929,meta16928__$1){
var self__ = this;
var _16929__$1 = this;
return (new jade.views.termsconditions.t16927(self__.validate__5937__auto__,self__.owner,self__.output_schema16919,self__.data,self__.input_checker16921,self__.G__16923,self__.map16918,self__.input_schema16920,self__.state,self__.output_checker16922,self__.constructor16916,self__.opts,self__.ufv__,meta16928__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

jade.views.termsconditions.t16927.cljs$lang$type = true;

jade.views.termsconditions.t16927.cljs$lang$ctorStr = "jade.views.termsconditions/t16927";

jade.views.termsconditions.t16927.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.termsconditions/t16927");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

jade.views.termsconditions.__GT_t16927 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922){
return (function __GT_t16927(validate__5937__auto____$1,owner__$1,output_schema16919__$1,data__$1,input_checker16921__$1,G__16923__$1,map16918__$1,input_schema16920__$1,state__$1,output_checker16922__$1,constructor16916__$1,opts__$1,ufv____$1,meta16928){
return (new jade.views.termsconditions.t16927(validate__5937__auto____$1,owner__$1,output_schema16919__$1,data__$1,input_checker16921__$1,G__16923__$1,map16918__$1,input_schema16920__$1,state__$1,output_checker16922__$1,constructor16916__$1,opts__$1,ufv____$1,meta16928));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
;

}

return (new jade.views.termsconditions.t16927(validate__5937__auto__,owner,output_schema16919,data,input_checker16921,G__16923,map16918,input_schema16920,state,output_checker16922,constructor16916,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16937 = output_checker16922.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16937)){
var error__5939__auto___16938 = temp__4388__auto___16937;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16916","constructor16916",262330935,null),cljs.core.pr_str.call(null,error__5939__auto___16938)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16919,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16938], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16919,input_schema16920,input_checker16921,output_checker16922))
,schema.core.make_fn_schema.call(null,output_schema16919,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16920], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.termsconditions.termsconditions = ((function (component_fnk__7745__auto___16933){
return (function() { 
var termsconditions__delegate = function (data__7746__auto__,owner16915,p__16930){
var vec__16932 = p__16930;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16932,(0),null);
return component_fnk__7745__auto___16933.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16915),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16915,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var termsconditions = function (data__7746__auto__,owner16915,var_args){
var p__16930 = null;
if (arguments.length > 2) {
  p__16930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return termsconditions__delegate.call(this,data__7746__auto__,owner16915,p__16930);};
termsconditions.cljs$lang$maxFixedArity = 2;
termsconditions.cljs$lang$applyTo = (function (arglist__16939){
var data__7746__auto__ = cljs.core.first(arglist__16939);
arglist__16939 = cljs.core.next(arglist__16939);
var owner16915 = cljs.core.first(arglist__16939);
var p__16930 = cljs.core.rest(arglist__16939);
return termsconditions__delegate(data__7746__auto__,owner16915,p__16930);
});
termsconditions.cljs$core$IFn$_invoke$arity$variadic = termsconditions__delegate;
return termsconditions;
})()
;})(component_fnk__7745__auto___16933))
;

jade.views.termsconditions.__GT_termsconditions = (function() {
var __GT_termsconditions = null;
var __GT_termsconditions__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.termsconditions.termsconditions,cursor__7714__auto__);
});
var __GT_termsconditions__2 = (function (cursor__7714__auto__,m16917){
return om.core.build.call(null,jade.views.termsconditions.termsconditions,cursor__7714__auto__,m16917);
});
__GT_termsconditions = function(cursor__7714__auto__,m16917){
switch(arguments.length){
case 1:
return __GT_termsconditions__1.call(this,cursor__7714__auto__);
case 2:
return __GT_termsconditions__2.call(this,cursor__7714__auto__,m16917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_termsconditions.cljs$core$IFn$_invoke$arity$1 = __GT_termsconditions__1;
__GT_termsconditions.cljs$core$IFn$_invoke$arity$2 = __GT_termsconditions__2;
return __GT_termsconditions;
})()
;

//# sourceMappingURL=termsconditions.js.map?rel=1545283547852