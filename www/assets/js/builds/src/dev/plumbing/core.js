// Compiled by ClojureScript 0.0-2411
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__20887__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__20887 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20887__delegate.call(this,m,k,f,x1,x2,xs);};
G__20887.cljs$lang$maxFixedArity = 5;
G__20887.cljs$lang$applyTo = (function (arglist__20888){
var m = cljs.core.first(arglist__20888);
arglist__20888 = cljs.core.next(arglist__20888);
var k = cljs.core.first(arglist__20888);
arglist__20888 = cljs.core.next(arglist__20888);
var f = cljs.core.first(arglist__20888);
arglist__20888 = cljs.core.next(arglist__20888);
var x1 = cljs.core.first(arglist__20888);
arglist__20888 = cljs.core.next(arglist__20888);
var x2 = cljs.core.first(arglist__20888);
var xs = cljs.core.rest(arglist__20888);
return G__20887__delegate(m,k,f,x1,x2,xs);
});
G__20887.cljs$core$IFn$_invoke$arity$variadic = G__20887__delegate;
return G__20887;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20897_20903 = cljs.core.seq.call(null,m);
var chunk__20898_20904 = null;
var count__20899_20905 = (0);
var i__20900_20906 = (0);
while(true){
if((i__20900_20906 < count__20899_20905)){
var vec__20901_20907 = cljs.core._nth.call(null,chunk__20898_20904,i__20900_20906);
var k_20908 = cljs.core.nth.call(null,vec__20901_20907,(0),null);
var v_20909 = cljs.core.nth.call(null,vec__20901_20907,(1),null);
var m20896_20910 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20896_20910,k_20908,f.call(null,v_20909)));

var G__20911 = seq__20897_20903;
var G__20912 = chunk__20898_20904;
var G__20913 = count__20899_20905;
var G__20914 = (i__20900_20906 + (1));
seq__20897_20903 = G__20911;
chunk__20898_20904 = G__20912;
count__20899_20905 = G__20913;
i__20900_20906 = G__20914;
continue;
} else {
var temp__4388__auto___20915 = cljs.core.seq.call(null,seq__20897_20903);
if(temp__4388__auto___20915){
var seq__20897_20916__$1 = temp__4388__auto___20915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20897_20916__$1)){
var c__4404__auto___20917 = cljs.core.chunk_first.call(null,seq__20897_20916__$1);
var G__20918 = cljs.core.chunk_rest.call(null,seq__20897_20916__$1);
var G__20919 = c__4404__auto___20917;
var G__20920 = cljs.core.count.call(null,c__4404__auto___20917);
var G__20921 = (0);
seq__20897_20903 = G__20918;
chunk__20898_20904 = G__20919;
count__20899_20905 = G__20920;
i__20900_20906 = G__20921;
continue;
} else {
var vec__20902_20922 = cljs.core.first.call(null,seq__20897_20916__$1);
var k_20923 = cljs.core.nth.call(null,vec__20902_20922,(0),null);
var v_20924 = cljs.core.nth.call(null,vec__20902_20922,(1),null);
var m20896_20925 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20896_20925,k_20923,f.call(null,v_20924)));

var G__20926 = cljs.core.next.call(null,seq__20897_20916__$1);
var G__20927 = null;
var G__20928 = (0);
var G__20929 = (0);
seq__20897_20903 = G__20926;
chunk__20898_20904 = G__20927;
count__20899_20905 = G__20928;
i__20900_20906 = G__20929;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7438__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20938_20944 = cljs.core.seq.call(null,m);
var chunk__20939_20945 = null;
var count__20940_20946 = (0);
var i__20941_20947 = (0);
while(true){
if((i__20941_20947 < count__20940_20946)){
var vec__20942_20948 = cljs.core._nth.call(null,chunk__20939_20945,i__20941_20947);
var k_20949 = cljs.core.nth.call(null,vec__20942_20948,(0),null);
var v_20950 = cljs.core.nth.call(null,vec__20942_20948,(1),null);
var m20937_20951 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20937_20951,f.call(null,k_20949),v_20950));

var G__20952 = seq__20938_20944;
var G__20953 = chunk__20939_20945;
var G__20954 = count__20940_20946;
var G__20955 = (i__20941_20947 + (1));
seq__20938_20944 = G__20952;
chunk__20939_20945 = G__20953;
count__20940_20946 = G__20954;
i__20941_20947 = G__20955;
continue;
} else {
var temp__4388__auto___20956 = cljs.core.seq.call(null,seq__20938_20944);
if(temp__4388__auto___20956){
var seq__20938_20957__$1 = temp__4388__auto___20956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20938_20957__$1)){
var c__4404__auto___20958 = cljs.core.chunk_first.call(null,seq__20938_20957__$1);
var G__20959 = cljs.core.chunk_rest.call(null,seq__20938_20957__$1);
var G__20960 = c__4404__auto___20958;
var G__20961 = cljs.core.count.call(null,c__4404__auto___20958);
var G__20962 = (0);
seq__20938_20944 = G__20959;
chunk__20939_20945 = G__20960;
count__20940_20946 = G__20961;
i__20941_20947 = G__20962;
continue;
} else {
var vec__20943_20963 = cljs.core.first.call(null,seq__20938_20957__$1);
var k_20964 = cljs.core.nth.call(null,vec__20943_20963,(0),null);
var v_20965 = cljs.core.nth.call(null,vec__20943_20963,(1),null);
var m20937_20966 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20937_20966,f.call(null,k_20964),v_20965));

var G__20967 = cljs.core.next.call(null,seq__20938_20957__$1);
var G__20968 = null;
var G__20969 = (0);
var G__20970 = (0);
seq__20938_20944 = G__20967;
chunk__20939_20945 = G__20968;
count__20940_20946 = G__20969;
i__20941_20947 = G__20970;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7438__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__7438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__20977_20981 = cljs.core.seq.call(null,ks);
var chunk__20978_20982 = null;
var count__20979_20983 = (0);
var i__20980_20984 = (0);
while(true){
if((i__20980_20984 < count__20979_20983)){
var k_20985 = cljs.core._nth.call(null,chunk__20978_20982,i__20980_20984);
var m20976_20986 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20976_20986,k_20985,f.call(null,k_20985)));

var G__20987 = seq__20977_20981;
var G__20988 = chunk__20978_20982;
var G__20989 = count__20979_20983;
var G__20990 = (i__20980_20984 + (1));
seq__20977_20981 = G__20987;
chunk__20978_20982 = G__20988;
count__20979_20983 = G__20989;
i__20980_20984 = G__20990;
continue;
} else {
var temp__4388__auto___20991 = cljs.core.seq.call(null,seq__20977_20981);
if(temp__4388__auto___20991){
var seq__20977_20992__$1 = temp__4388__auto___20991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20977_20992__$1)){
var c__4404__auto___20993 = cljs.core.chunk_first.call(null,seq__20977_20992__$1);
var G__20994 = cljs.core.chunk_rest.call(null,seq__20977_20992__$1);
var G__20995 = c__4404__auto___20993;
var G__20996 = cljs.core.count.call(null,c__4404__auto___20993);
var G__20997 = (0);
seq__20977_20981 = G__20994;
chunk__20978_20982 = G__20995;
count__20979_20983 = G__20996;
i__20980_20984 = G__20997;
continue;
} else {
var k_20998 = cljs.core.first.call(null,seq__20977_20992__$1);
var m20976_20999 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m20976_20999,k_20998,f.call(null,k_20998)));

var G__21000 = cljs.core.next.call(null,seq__20977_20992__$1);
var G__21001 = null;
var G__21002 = (0);
var G__21003 = (0);
seq__20977_20981 = G__21000;
chunk__20978_20982 = G__21001;
count__20979_20983 = G__21002;
i__20980_20984 = G__21003;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7438__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__7438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21010_21014 = cljs.core.seq.call(null,vs);
var chunk__21011_21015 = null;
var count__21012_21016 = (0);
var i__21013_21017 = (0);
while(true){
if((i__21013_21017 < count__21012_21016)){
var v_21018 = cljs.core._nth.call(null,chunk__21011_21015,i__21013_21017);
var m21009_21019 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m21009_21019,f.call(null,v_21018),v_21018));

var G__21020 = seq__21010_21014;
var G__21021 = chunk__21011_21015;
var G__21022 = count__21012_21016;
var G__21023 = (i__21013_21017 + (1));
seq__21010_21014 = G__21020;
chunk__21011_21015 = G__21021;
count__21012_21016 = G__21022;
i__21013_21017 = G__21023;
continue;
} else {
var temp__4388__auto___21024 = cljs.core.seq.call(null,seq__21010_21014);
if(temp__4388__auto___21024){
var seq__21010_21025__$1 = temp__4388__auto___21024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21010_21025__$1)){
var c__4404__auto___21026 = cljs.core.chunk_first.call(null,seq__21010_21025__$1);
var G__21027 = cljs.core.chunk_rest.call(null,seq__21010_21025__$1);
var G__21028 = c__4404__auto___21026;
var G__21029 = cljs.core.count.call(null,c__4404__auto___21026);
var G__21030 = (0);
seq__21010_21014 = G__21027;
chunk__21011_21015 = G__21028;
count__21012_21016 = G__21029;
i__21013_21017 = G__21030;
continue;
} else {
var v_21031 = cljs.core.first.call(null,seq__21010_21025__$1);
var m21009_21032 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m21009_21032,f.call(null,v_21031),v_21031));

var G__21033 = cljs.core.next.call(null,seq__21010_21025__$1);
var G__21034 = null;
var G__21035 = (0);
var G__21036 = (0);
seq__21010_21014 = G__21033;
chunk__21011_21015 = G__21034;
count__21012_21016 = G__21035;
i__21013_21017 = G__21036;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7438__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__21037){
var vec__21039 = p__21037;
var k = cljs.core.nth.call(null,vec__21039,(0),null);
var ks = cljs.core.nthnext.call(null,vec__21039,(1));
if(cljs.core.truth_(m)){
var temp__4386__auto__ = (function (){var and__3610__auto__ = ks;
if(and__3610__auto__){
return dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(temp__4386__auto__)){
var res = temp__4386__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__7438__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21048_21054 = cljs.core.seq.call(null,x);
var chunk__21049_21055 = null;
var count__21050_21056 = (0);
var i__21051_21057 = (0);
while(true){
if((i__21051_21057 < count__21050_21056)){
var vec__21052_21058 = cljs.core._nth.call(null,chunk__21049_21055,i__21051_21057);
var k_21059 = cljs.core.nth.call(null,vec__21052_21058,(0),null);
var v_21060 = cljs.core.nth.call(null,vec__21052_21058,(1),null);
var m21047_21061 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m21047_21061,((typeof k_21059 === 'string')?cljs.core.keyword.call(null,k_21059):k_21059),keywordize_map.call(null,v_21060)));

var G__21062 = seq__21048_21054;
var G__21063 = chunk__21049_21055;
var G__21064 = count__21050_21056;
var G__21065 = (i__21051_21057 + (1));
seq__21048_21054 = G__21062;
chunk__21049_21055 = G__21063;
count__21050_21056 = G__21064;
i__21051_21057 = G__21065;
continue;
} else {
var temp__4388__auto___21066 = cljs.core.seq.call(null,seq__21048_21054);
if(temp__4388__auto___21066){
var seq__21048_21067__$1 = temp__4388__auto___21066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21048_21067__$1)){
var c__4404__auto___21068 = cljs.core.chunk_first.call(null,seq__21048_21067__$1);
var G__21069 = cljs.core.chunk_rest.call(null,seq__21048_21067__$1);
var G__21070 = c__4404__auto___21068;
var G__21071 = cljs.core.count.call(null,c__4404__auto___21068);
var G__21072 = (0);
seq__21048_21054 = G__21069;
chunk__21049_21055 = G__21070;
count__21050_21056 = G__21071;
i__21051_21057 = G__21072;
continue;
} else {
var vec__21053_21073 = cljs.core.first.call(null,seq__21048_21067__$1);
var k_21074 = cljs.core.nth.call(null,vec__21053_21073,(0),null);
var v_21075 = cljs.core.nth.call(null,vec__21053_21073,(1),null);
var m21047_21076 = cljs.core.deref.call(null,m_atom__7438__auto__);
cljs.core.reset_BANG_.call(null,m_atom__7438__auto__,cljs.core.assoc_BANG_.call(null,m21047_21076,((typeof k_21074 === 'string')?cljs.core.keyword.call(null,k_21074):k_21074),keywordize_map.call(null,v_21075)));

var G__21077 = cljs.core.next.call(null,seq__21048_21067__$1);
var G__21078 = null;
var G__21079 = (0);
var G__21080 = (0);
seq__21048_21054 = G__21077;
chunk__21049_21055 = G__21078;
count__21050_21056 = G__21079;
i__21051_21057 = G__21080;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7438__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4386__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4386__auto__)){
var pair__7507__auto__ = temp__4386__auto__;
return cljs.core.val.call(null,pair__7507__auto__);
} else {
var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));
throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__21081 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__21082 = cljs.core.next.call(null,ks);
m = G__21081;
ks = G__21082;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3622__auto__ = m;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4373__auto__ = (function iter__21091(s__21092){
return (new cljs.core.LazySeq(null,(function (){
var s__21092__$1 = s__21092;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__21092__$1);
if(temp__4388__auto__){
var s__21092__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21092__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__21092__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__21094 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__21093 = (0);
while(true){
if((i__21093 < size__4372__auto__)){
var vec__21097 = cljs.core._nth.call(null,c__4371__auto__,i__21093);
var k = cljs.core.nth.call(null,vec__21097,(0),null);
var v = cljs.core.nth.call(null,vec__21097,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__21094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21099 = (i__21093 + (1));
i__21093 = G__21099;
continue;
} else {
var G__21100 = (i__21093 + (1));
i__21093 = G__21100;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21094),iter__21091.call(null,cljs.core.chunk_rest.call(null,s__21092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21094),null);
}
} else {
var vec__21098 = cljs.core.first.call(null,s__21092__$2);
var k = cljs.core.nth.call(null,vec__21098,(0),null);
var v = cljs.core.nth.call(null,vec__21098,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21091.call(null,cljs.core.rest.call(null,s__21092__$2)));
} else {
var G__21101 = cljs.core.rest.call(null,s__21092__$2);
s__21092__$1 = G__21101;
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
return iter__4373__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__21102){
var m = cljs.core.first(arglist__21102);
var kvs = cljs.core.rest(arglist__21102);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__21103){
var m = cljs.core.first(arglist__21103);
arglist__21103 = cljs.core.next(arglist__21103);
var key_seq = cljs.core.first(arglist__21103);
arglist__21103 = cljs.core.next(arglist__21103);
var f = cljs.core.first(arglist__21103);
var args = cljs.core.rest(arglist__21103);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4388__auto__ = cljs.core.next.call(null,s);
if(temp__4388__auto__){
var n = temp__4388__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4388__auto__ = cljs.core.seq.call(null,xs);
if(temp__4388__auto__){
var xs__$1 = temp__4388__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4373__auto__ = ((function (s){
return (function iter__21108(s__21109){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__21109__$1 = s__21109;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__21109__$1);
if(temp__4388__auto__){
var s__21109__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21109__$2)){
var c__4371__auto__ = cljs.core.chunk_first.call(null,s__21109__$2);
var size__4372__auto__ = cljs.core.count.call(null,c__4371__auto__);
var b__21111 = cljs.core.chunk_buffer.call(null,size__4372__auto__);
if((function (){var i__21110 = (0);
while(true){
if((i__21110 < size__4372__auto__)){
var x = cljs.core._nth.call(null,c__4371__auto__,i__21110);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__21111,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__21112 = (i__21110 + (1));
i__21110 = G__21112;
continue;
} else {
var G__21113 = (i__21110 + (1));
i__21110 = G__21113;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21111),iter__21108.call(null,cljs.core.chunk_rest.call(null,s__21109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21111),null);
}
} else {
var x = cljs.core.first.call(null,s__21109__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__21108.call(null,cljs.core.rest.call(null,s__21109__$2)));
} else {
var G__21114 = cljs.core.rest.call(null,s__21109__$2);
s__21109__$1 = G__21114;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4373__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__21115){
var colls = cljs.core.seq(arglist__21115);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__21116__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__21117 = conj_when.call(null,coll,x);
var G__21118 = cljs.core.first.call(null,xs);
var G__21119 = cljs.core.next.call(null,xs);
coll = G__21117;
x = G__21118;
xs = G__21119;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__21116 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21116__delegate.call(this,coll,x,xs);};
G__21116.cljs$lang$maxFixedArity = 2;
G__21116.cljs$lang$applyTo = (function (arglist__21120){
var coll = cljs.core.first(arglist__21120);
arglist__21120 = cljs.core.next(arglist__21120);
var x = cljs.core.first(arglist__21120);
var xs = cljs.core.rest(arglist__21120);
return G__21116__delegate(coll,x,xs);
});
G__21116.cljs$core$IFn$_invoke$arity$variadic = G__21116__delegate;
return G__21116;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__21122__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__21121_SHARP_){
return cljs.core.apply.call(null,f,p1__21121_SHARP_,args);
}));
};
var G__21122 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21122__delegate.call(this,a,f,args);};
G__21122.cljs$lang$maxFixedArity = 2;
G__21122.cljs$lang$applyTo = (function (arglist__21123){
var a = cljs.core.first(arglist__21123);
arglist__21123 = cljs.core.next(arglist__21123);
var f = cljs.core.first(arglist__21123);
var args = cljs.core.rest(arglist__21123);
return G__21122__delegate(a,f,args);
});
G__21122.cljs$core$IFn$_invoke$arity$variadic = G__21122__delegate;
return G__21122;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__21124__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__21124 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21124__delegate.call(this,f,arg,args);};
G__21124.cljs$lang$maxFixedArity = 2;
G__21124.cljs$lang$applyTo = (function (arglist__21125){
var f = cljs.core.first(arglist__21125);
arglist__21125 = cljs.core.next(arglist__21125);
var arg = cljs.core.first(arglist__21125);
var args = cljs.core.rest(arglist__21125);
return G__21124__delegate(f,arg,args);
});
G__21124.cljs$core$IFn$_invoke$arity$variadic = G__21124__delegate;
return G__21124;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map?rel=1545283557474