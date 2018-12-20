// Compiled by ClojureScript 0.0-2411
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5967__5968__auto__){
var G__20315 = p1__5967__5968__auto__;
if(G__20315){
var bit__4298__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4298__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__20315.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__20315.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20315);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20315);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20316_SHARP_){
return (cljs.core.val.call(null,p1__20316_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__20318 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__20318,(0),null);
var v = cljs.core.nth.call(null,vec__20318,(1),null);
var p = vec__20318;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___20324 = schema.utils.use_fn_validation;
var output_schema20319_20325 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema20320_20326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker20321_20327 = schema.core.checker.call(null,input_schema20320_20326);
var output_checker20322_20328 = schema.core.checker.call(null,output_schema20319_20325);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20324,output_schema20319_20325,input_schema20320_20326,input_checker20321_20327,output_checker20322_20328){
return (function unwrap_schema_form_key(G__20323){
var validate__5937__auto__ = ufv___20324.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20323], null);
var temp__4388__auto___20330 = input_checker20321_20327.call(null,args__5938__auto___20329);
if(cljs.core.truth_(temp__4388__auto___20330)){
var error__5939__auto___20331 = temp__4388__auto___20330;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5939__auto___20331)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20320_20326,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20329,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20331], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var k = G__20323;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20332 = output_checker20322_20328.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20332)){
var error__5939__auto___20333 = temp__4388__auto___20332;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5939__auto___20333)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20319_20325,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20333], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20324,output_schema20319_20325,input_schema20320_20326,input_checker20321_20327,output_checker20322_20328))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20319_20325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20320_20326], null)));
var ufv___20339 = schema.utils.use_fn_validation;
var output_schema20334_20340 = schema.core.Any;
var input_schema20335_20341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker20336_20342 = schema.core.checker.call(null,input_schema20335_20341);
var output_checker20337_20343 = schema.core.checker.call(null,output_schema20334_20340);
/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20339,output_schema20334_20340,input_schema20335_20341,input_checker20336_20342,output_checker20337_20343){
return (function explicit_schema_key_map(G__20338){
var validate__5937__auto__ = ufv___20339.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20338], null);
var temp__4388__auto___20345 = input_checker20336_20342.call(null,args__5938__auto___20344);
if(cljs.core.truth_(temp__4388__auto___20345)){
var error__5939__auto___20346 = temp__4388__auto___20345;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5939__auto___20346)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20335_20341,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20344,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20346], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var s = G__20338;
while(true){

new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20347 = output_checker20337_20343.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20347)){
var error__5939__auto___20348 = temp__4388__auto___20347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5939__auto___20348)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20334_20340,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20348], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20339,output_schema20334_20340,input_schema20335_20341,input_checker20336_20342,output_checker20337_20343))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20334_20340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20335_20341], null)));
var ufv___20354 = schema.utils.use_fn_validation;
var output_schema20349_20355 = schema.core.Any;
var input_schema20350_20356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker20351_20357 = schema.core.checker.call(null,input_schema20350_20356);
var output_checker20352_20358 = schema.core.checker.call(null,output_schema20349_20355);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20354,output_schema20349_20355,input_schema20350_20356,input_checker20351_20357,output_checker20352_20358){
return (function split_schema_keys(G__20353){
var validate__5937__auto__ = ufv___20354.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20353], null);
var temp__4388__auto___20360 = input_checker20351_20357.call(null,args__5938__auto___20359);
if(cljs.core.truth_(temp__4388__auto___20360)){
var error__5939__auto___20361 = temp__4388__auto___20360;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5939__auto___20361)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20350_20356,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20359,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20361], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var s = G__20353;
while(true){

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);

return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20362 = output_checker20352_20358.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20362)){
var error__5939__auto___20363 = temp__4388__auto___20362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5939__auto___20363)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20349_20355,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20363], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20354,output_schema20349_20355,input_schema20350_20356,input_checker20351_20357,output_checker20352_20358))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20349_20355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20350_20356], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20367){
var vec__20368 = p__20367;
var k = cljs.core.nth.call(null,vec__20368,(0),null);
var v = cljs.core.nth.call(null,vec__20368,(1),null);
var pk = key_project.call(null,k);
var temp__4386__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4386__auto__)){
var vec__20369 = temp__4386__auto__;
var ok = cljs.core.nth.call(null,vec__20369,(0),null);
var ov = cljs.core.nth.call(null,vec__20369,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__20370){
var key_project = cljs.core.first(arglist__20370);
arglist__20370 = cljs.core.next(arglist__20370);
var key_combine = cljs.core.first(arglist__20370);
arglist__20370 = cljs.core.next(arglist__20370);
var val_combine = cljs.core.first(arglist__20370);
var maps = cljs.core.rest(arglist__20370);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20378 = schema.utils.use_fn_validation;
var output_schema20372_20379 = plumbing.fnk.schema.InputSchema;
var input_schema20373_20380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker20374_20381 = schema.core.checker.call(null,input_schema20373_20380);
var output_checker20375_20382 = schema.core.checker.call(null,output_schema20372_20379);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382){
return (function union_input_schemata(G__20376,G__20377){
var validate__5937__auto__ = ufv___20378.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20376,G__20377], null);
var temp__4388__auto___20384 = input_checker20374_20381.call(null,args__5938__auto___20383);
if(cljs.core.truth_(temp__4388__auto___20384)){
var error__5939__auto___20385 = temp__4388__auto___20384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5939__auto___20385)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20373_20380,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20383,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20385], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var i1 = G__20376;
var i2 = G__20377;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382){
return (function (p1__20371_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__20371_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__20371_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382))
,((function (validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382))
,((function (validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5937__auto__,ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20386 = output_checker20375_20382.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20386)){
var error__5939__auto___20387 = temp__4388__auto___20386;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5939__auto___20387)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20372_20379,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20387], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20378,output_schema20372_20379,input_schema20373_20380,input_checker20374_20381,output_checker20375_20382))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20372_20379,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20373_20380], null)));
var ufv___20393 = schema.utils.use_fn_validation;
var output_schema20388_20394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema20389_20395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker20390_20396 = schema.core.checker.call(null,input_schema20389_20395);
var output_checker20391_20397 = schema.core.checker.call(null,output_schema20388_20394);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20393,output_schema20388_20394,input_schema20389_20395,input_checker20390_20396,output_checker20391_20397){
return (function required_toplevel_keys(G__20392){
var validate__5937__auto__ = ufv___20393.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20392], null);
var temp__4388__auto___20399 = input_checker20390_20396.call(null,args__5938__auto___20398);
if(cljs.core.truth_(temp__4388__auto___20399)){
var error__5939__auto___20400 = temp__4388__auto___20399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5939__auto___20400)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20389_20395,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20398,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20400], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var input_schema = G__20392;
while(true){
return cljs.core.keep.call(null,((function (validate__5937__auto__,ufv___20393,output_schema20388_20394,input_schema20389_20395,input_checker20390_20396,output_checker20391_20397){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__5937__auto__,ufv___20393,output_schema20388_20394,input_schema20389_20395,input_checker20390_20396,output_checker20391_20397))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20401 = output_checker20391_20397.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20401)){
var error__5939__auto___20402 = temp__4388__auto___20401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5939__auto___20402)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20388_20394,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20402], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20393,output_schema20388_20394,input_schema20389_20395,input_checker20390_20396,output_checker20391_20397))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20388_20394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20389_20395], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4373__auto__ = (function iter__20411(s__20412){
return (new cljs.core.LazySeq(null,(function (){
var s__20412__$1 = s__20412;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__20412__$1);
if(temp__4388__auto__){
var s__20412__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20412__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__20412__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__20414 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__20413 = (0);
while(true){
if((i__20413 < size__4372__auto__)){
var vec__20417 = cljs.core._nth.call(null,c__4371__auto__,i__20413);
var k = cljs.core.nth.call(null,vec__20417,(0),null);
var v = cljs.core.nth.call(null,vec__20417,(1),null);
cljs.core.chunk_append.call(null,b__20414,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__20419 = (i__20413 + (1));
i__20413 = G__20419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20414),iter__20411.call(null,cljs.core.chunk_rest.call(null,s__20412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20414),null);
}
} else {
var vec__20418 = cljs.core.first.call(null,s__20412__$2);
var k = cljs.core.nth.call(null,vec__20418,(0),null);
var v = cljs.core.nth.call(null,vec__20418,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20411.call(null,cljs.core.rest.call(null,s__20412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4373__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4373__auto__ = (function iter__20428(s__20429){
return (new cljs.core.LazySeq(null,(function (){
var s__20429__$1 = s__20429;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__20429__$1);
if(temp__4388__auto__){
var s__20429__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20429__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__20429__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__20431 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__20430 = (0);
while(true){
if((i__20430 < size__4372__auto__)){
var vec__20434 = cljs.core._nth.call(null,c__4371__auto__,i__20430);
var k = cljs.core.nth.call(null,vec__20434,(0),null);
var v = cljs.core.nth.call(null,vec__20434,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__20431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__20436 = (i__20430 + (1));
i__20430 = G__20436;
continue;
} else {
var G__20437 = (i__20430 + (1));
i__20430 = G__20437;
continue;
}
} else {
var G__20438 = (i__20430 + (1));
i__20430 = G__20438;
continue;
}
} else {
var G__20439 = (i__20430 + (1));
i__20430 = G__20439;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20431),iter__20428.call(null,cljs.core.chunk_rest.call(null,s__20429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20431),null);
}
} else {
var vec__20435 = cljs.core.first.call(null,s__20429__$2);
var k = cljs.core.nth.call(null,vec__20435,(0),null);
var v = cljs.core.nth.call(null,vec__20435,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20428.call(null,cljs.core.rest.call(null,s__20429__$2)));
} else {
var G__20440 = cljs.core.rest.call(null,s__20429__$2);
s__20429__$1 = G__20440;
continue;
}
} else {
var G__20441 = cljs.core.rest.call(null,s__20429__$2);
s__20429__$1 = G__20441;
continue;
}
} else {
var G__20442 = cljs.core.rest.call(null,s__20429__$2);
s__20429__$1 = G__20442;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4373__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___20465 = schema.utils.use_fn_validation;
var output_schema20443_20466 = schema.core.Any;
var input_schema20444_20467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker20445_20468 = schema.core.checker.call(null,input_schema20444_20467);
var output_checker20446_20469 = schema.core.checker.call(null,output_schema20443_20466);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20465,output_schema20443_20466,input_schema20444_20467,input_checker20445_20468,output_checker20446_20469){
return (function compose_schemata(G__20447,G__20448){
var validate__5937__auto__ = true;
if(validate__5937__auto__){
var args__5938__auto___20470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20447,G__20448], null);
var temp__4388__auto___20471 = input_checker20445_20468.call(null,args__5938__auto___20470);
if(cljs.core.truth_(temp__4388__auto___20471)){
var error__5939__auto___20472 = temp__4388__auto___20471;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5939__auto___20472)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20444_20467,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20470,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20472], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var G__20459 = G__20447;
var vec__20461 = G__20459;
var i2 = cljs.core.nth.call(null,vec__20461,(0),null);
var o2 = cljs.core.nth.call(null,vec__20461,(1),null);
var G__20460 = G__20448;
var vec__20462 = G__20460;
var i1 = cljs.core.nth.call(null,vec__20462,(0),null);
var o1 = cljs.core.nth.call(null,vec__20462,(1),null);
var G__20459__$1 = G__20459;
var G__20460__$1 = G__20460;
while(true){
var vec__20463 = G__20459__$1;
var i2__$1 = cljs.core.nth.call(null,vec__20463,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__20463,(1),null);
var vec__20464 = G__20460__$1;
var i1__$1 = cljs.core.nth.call(null,vec__20464,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__20464,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__5937__auto__){
var temp__4388__auto___20473 = output_checker20446_20469.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20473)){
var error__5939__auto___20474 = temp__4388__auto___20473;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5939__auto___20474)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20443_20466,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20474], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20465,output_schema20443_20466,input_schema20444_20467,input_checker20445_20468,output_checker20446_20469))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20443_20466,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20444_20467], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___20553 = schema.utils.use_fn_validation;
var output_schema20475_20554 = schema.core.Any;
var input_schema20476_20555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker20477_20556 = schema.core.checker.call(null,input_schema20476_20555);
var output_checker20478_20557 = schema.core.checker.call(null,output_schema20475_20554);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function split_schema(G__20479,G__20480){
var validate__5937__auto__ = ufv___20553.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20479,G__20480], null);
var temp__4388__auto___20559 = input_checker20477_20556.call(null,args__5938__auto___20558);
if(cljs.core.truth_(temp__4388__auto___20559)){
var error__5939__auto___20560 = temp__4388__auto___20559;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5939__auto___20560)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20476_20555,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20558,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20560], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var s = G__20479;
var ks = G__20480;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4373__auto__ = ((function (ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function iter__20517(s__20518){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function (){
var s__20518__$1 = s__20518;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__20518__$1);
if(temp__4388__auto__){
var s__20518__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20518__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__20518__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__20520 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__20519 = (0);
while(true){
if((i__20519 < size__4372__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4371__auto__,i__20519);
cljs.core.chunk_append.call(null,b__20520,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4373__auto__ = ((function (i__20519,in_QMARK_,c__4371__auto__,size__4372__auto__,b__20520,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function iter__20537(s__20538){
return (new cljs.core.LazySeq(null,((function (i__20519,in_QMARK_,c__4371__auto__,size__4372__auto__,b__20520,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function (){
var s__20538__$1 = s__20538;
while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__20538__$1);
if(temp__4388__auto____$1){
var s__20538__$2 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20538__$2)){
var c__4371__auto____$1 = cljs.core.chunk_first.call(null,s__20538__$2);
var size__4372__auto____$1 = cljs.core.count.call(null,c__4371__auto____$1);
var b__20540 = cljs.core.chunk_buffer.call(null,size__4372__auto____$1);
if((function (){var i__20539 = (0);
while(true){
if((i__20539 < size__4372__auto____$1)){
var vec__20543 = cljs.core._nth.call(null,c__4371__auto____$1,i__20539);
var k = cljs.core.nth.call(null,vec__20543,(0),null);
var v = cljs.core.nth.call(null,vec__20543,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__20540,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20561 = (i__20539 + (1));
i__20539 = G__20561;
continue;
} else {
var G__20562 = (i__20539 + (1));
i__20539 = G__20562;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20540),iter__20537.call(null,cljs.core.chunk_rest.call(null,s__20538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20540),null);
}
} else {
var vec__20544 = cljs.core.first.call(null,s__20538__$2);
var k = cljs.core.nth.call(null,vec__20544,(0),null);
var v = cljs.core.nth.call(null,vec__20544,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20537.call(null,cljs.core.rest.call(null,s__20538__$2)));
} else {
var G__20563 = cljs.core.rest.call(null,s__20538__$2);
s__20538__$1 = G__20563;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20519,in_QMARK_,c__4371__auto__,size__4372__auto__,b__20520,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
,null,null));
});})(i__20519,in_QMARK_,c__4371__auto__,size__4372__auto__,b__20520,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
;
return iter__4373__auto__.call(null,s);
})()));

var G__20564 = (i__20519 + (1));
i__20519 = G__20564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20520),iter__20517.call(null,cljs.core.chunk_rest.call(null,s__20518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20520),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__20518__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4373__auto__ = ((function (in_QMARK_,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function iter__20545(s__20546){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557){
return (function (){
var s__20546__$1 = s__20546;
while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__20546__$1);
if(temp__4388__auto____$1){
var s__20546__$2 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20546__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__20546__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__20548 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__20547 = (0);
while(true){
if((i__20547 < size__4372__auto__)){
var vec__20551 = cljs.core._nth.call(null,c__4371__auto__,i__20547);
var k = cljs.core.nth.call(null,vec__20551,(0),null);
var v = cljs.core.nth.call(null,vec__20551,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__20548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20565 = (i__20547 + (1));
i__20547 = G__20565;
continue;
} else {
var G__20566 = (i__20547 + (1));
i__20547 = G__20566;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20548),iter__20545.call(null,cljs.core.chunk_rest.call(null,s__20546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20548),null);
}
} else {
var vec__20552 = cljs.core.first.call(null,s__20546__$2);
var k = cljs.core.nth.call(null,vec__20552,(0),null);
var v = cljs.core.nth.call(null,vec__20552,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20545.call(null,cljs.core.rest.call(null,s__20546__$2)));
} else {
var G__20567 = cljs.core.rest.call(null,s__20546__$2);
s__20546__$1 = G__20567;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
,null,null));
});})(in_QMARK_,s__20518__$2,temp__4388__auto__,ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
;
return iter__4373__auto__.call(null,s);
})()),iter__20517.call(null,cljs.core.rest.call(null,s__20518__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
,null,null));
});})(ks__$1,validate__5937__auto__,ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
;
return iter__4373__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20568 = output_checker20478_20557.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20568)){
var error__5939__auto___20569 = temp__4388__auto___20568;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5939__auto___20569)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20475_20554,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20569], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20553,output_schema20475_20554,input_schema20476_20555,input_checker20477_20556,output_checker20478_20557))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20475_20554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20476_20555], null)));
var ufv___20600 = schema.utils.use_fn_validation;
var output_schema20570_20601 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema20571_20602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker20572_20603 = schema.core.checker.call(null,input_schema20571_20602);
var output_checker20573_20604 = schema.core.checker.call(null,output_schema20570_20601);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20600,output_schema20570_20601,input_schema20571_20602,input_checker20572_20603,output_checker20573_20604){
return (function sequence_schemata(G__20574,G__20575){
var validate__5937__auto__ = ufv___20600.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___20605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20574,G__20575], null);
var temp__4388__auto___20606 = input_checker20572_20603.call(null,args__5938__auto___20605);
if(cljs.core.truth_(temp__4388__auto___20606)){
var error__5939__auto___20607 = temp__4388__auto___20606;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5939__auto___20607)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20571_20602,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___20605,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20607], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var G__20591 = G__20574;
var vec__20593 = G__20591;
var i1 = cljs.core.nth.call(null,vec__20593,(0),null);
var o1 = cljs.core.nth.call(null,vec__20593,(1),null);
var G__20592 = G__20575;
var vec__20594 = G__20592;
var k = cljs.core.nth.call(null,vec__20594,(0),null);
var vec__20595 = cljs.core.nth.call(null,vec__20594,(1),null);
var i2 = cljs.core.nth.call(null,vec__20595,(0),null);
var o2 = cljs.core.nth.call(null,vec__20595,(1),null);
var G__20591__$1 = G__20591;
var G__20592__$1 = G__20592;
while(true){
var vec__20596 = G__20591__$1;
var i1__$1 = cljs.core.nth.call(null,vec__20596,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__20596,(1),null);
var vec__20597 = G__20592__$1;
var k__$1 = cljs.core.nth.call(null,vec__20597,(0),null);
var vec__20598 = cljs.core.nth.call(null,vec__20597,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__20598,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__20598,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__20599 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__20599,(0),null);
var unused = cljs.core.nth.call(null,vec__20599,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___20608 = output_checker20573_20604.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___20608)){
var error__5939__auto___20609 = temp__4388__auto___20608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5939__auto___20609)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20570_20601,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___20609], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv___20600,output_schema20570_20601,input_schema20571_20602,input_checker20572_20603,output_checker20573_20604))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20570_20601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20571_20602], null)));

//# sourceMappingURL=schema.js.map?rel=1545283556291