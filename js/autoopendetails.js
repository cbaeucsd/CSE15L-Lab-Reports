function MakeArrayOfAllPrefixes(str){
  //console.log("MakeArrayOfAllPrefixes("+str+")");
  var prefixes = [];
  for (var i=1; i<=str.length; i++){
prefixes.push(str.substr(0,i));
  }
  console.log("MakeArrayOfAllPrefixes("+str+") -> returns [" + prefixes + "]");
  return prefixes;
}

function SetOpenAttrForIdsAndPrefixes(ids, openAttrBool){
  $('details').attr('open',false); // close all others first
  console.log("SetOpenAttrForIds([" +ids+"], "+openAttrBool+")");
  for (idindex in ids) {
var id = ids[idindex];
if (id != ""){
  var prefixes = MakeArrayOfAllPrefixes(id);
  for (prefixidx in prefixes) {
    var prefix = prefixes[prefixidx];
    if(openAttrBool==true) { operationstr="Opening"; } else { operationstr="Closing"};
    console.log(operationstr+" <details id='#"+prefix+"'> with $('#"+prefix+").attr('open',"+openAttrBool+");");
    $('#'+prefix).attr('open',openAttrBool);
  }
}
  }
}

function SetOpenAttrForIdsAndPrefixesFromLocationHash(){
  var hashes = $(location).attr('hash').split('#'); 
  SetOpenAttrForIdsAndPrefixes(hashes, true); 
}

$(document).ready(function(){
  SetOpenAttrForIdsAndPrefixesFromLocationHash();

  if ("onhashchange" in window) {// does the browser support the hashchange event?
  window.onhashchange = function () {
     SetOpenAttrForIdsAndPrefixesFromLocationHash();
  }
  }
});
