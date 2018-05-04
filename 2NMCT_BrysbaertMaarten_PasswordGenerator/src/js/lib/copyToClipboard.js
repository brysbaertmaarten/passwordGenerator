(function(){
    "use strict";

    let copyToClipboard = {
        copy : copy
    };

    function copy(DocumentObject) {
        DocumentObject.select();
        document.execCommand('Copy',false,null)
    }

    window.copyToClipboard = copyToClipboard;

})();