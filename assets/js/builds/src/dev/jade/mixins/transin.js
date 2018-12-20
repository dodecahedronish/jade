// Compiled by ClojureScript 0.0-2411
goog.provide('jade.mixins.transin');
goog.require('cljs.core');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.debug');
goog.require('goog.debug');
goog.require('jade.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om_tools.mixin');
cljs.core.enable_console_print_BANG_.call(null);
jade.mixins.transin.transin = (function transin(owner,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-transition-in","no-transition-in",820626142).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
return setTimeout((function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans","trans",-1318503851),new cljs.core.Keyword(null,"trans-in","trans-in",2057477780).cljs$core$IFn$_invoke$arity$1(state));
}),(8));
}
});
jade.mixins.transin.trans_in = {"componentDidMount": (function (){
var this18202 = this;
return ((function (this18202){
return (function (owner){
return jade.utils.hand_state.call(null,jade.mixins.transin.transin,owner);
});})(this18202))
.call(null,this18202);
})};

//# sourceMappingURL=transin.js.map?rel=1545283549557