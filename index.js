$('#AD').hover(
    function(){
        $('#AA').hide();
        $('#RC').hide();
        $('#ADAA').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'530px'});
        $('#ADRC').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'795px'});
        $('#ADtitle').css({'visibility':'hidden'});
        $('#hoveredAD').css({'visibility':'visible'});
}, function() {
    $('#AA').show();
    $('#RC').show();
    $('#ADAA').css({'visibility':'hidden'});
    $('#ADRC').css({'visibility':'hidden'});
    $('#ADtitle').css({'visibility':'visible'});
    $('#hoveredAD').css({'visibility':'hidden'});
});

$('#RTD').hover(
    function(){
        $('#AA').hide();
        $('#DM').hide();
        $('#RTDAA').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'0px '});
        $('#RTDDM').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'795px'});
        $('#RTDtitle').css({'visibility':'hidden'});
        $('#hoveredRTD').css({'visibility':'visible'});
}, function() {
    $('#AA').show();
    $('#DM').show();
    $('#RTDAA').css({'visibility':'hidden'});
    $('#RTDDM').css({'visibility':'hidden'});
    $('#RTDtitle').css({'visibility':'visible'});
    $('#hoveredRTD').css({'visibility':'hidden'});
});

$('#GC').hover(
    function(){
        $('#AA').hide();
        $('#RC').hide();
        $('#GCAA').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'0px '});
        $('#GCRC').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'265px'});
        $('#GCtitle').css({'visibility':'hidden'});
        $('#hoveredGC').css({'visibility':'visible'});
}, function() {
    $('#AA').show();
    $('#RC').show();
    $('#GCAA').css({'visibility':'hidden'});
    $('#GCRC').css({'visibility':'hidden'});
    $('#GCtitle').css({'visibility':'visible'});
    $('#hoveredGC').css({'visibility':'hidden'});
});

$('#AA').hover(
    function(){
        $('#GC').hide();
        $('#DM').hide();
        $('#AAGC').css({'visibility':'visible', 'position':'absolute', 'margin-top':'280px', 'margin-left':'0px '});
        $('#AADM').css({'visibility':'visible', 'position':'absolute', 'margin-top': '280px', 'margin-left':'265px'});
        $('#AAtitle').css({'visibility':'hidden'});
        $('#hoveredAA').css({'visibility':'visible'});
}, function() {
    $('#GC').show();
    $('#DM').show();
    $('#AAGC').css({'visibility':'hidden'});
    $('#AADM').css({'visibility':'hidden'});
    $('#AAtitle').css({'visibility':'visible'});
    $('#hoveredAA').css({'visibility':'hidden'});
});

$('#RC').hover(
    function(){
        $('#FS').hide();
        $('#RCFS').css({'visibility':'visible', 'position':'absolute', 'margin-top':'545px', 'margin-left':'530px'});
        $('#RCtitle').css({'visibility':'hidden'});
        $('#hoveredRC').css({'visibility':'visible'});
}, function() {
    $('#FS').show();
    $('#RCFS').css({'visibility':'hidden'});
    $('#RCtitle').css({'visibility':'visible'});
    $('#hoveredRC').css({'visibility':'hidden'});
});

$('#UFI').hover(
    function(){
        $('#FS').hide();
        $('#UFIFS').css({'visibility':'visible', 'position':'absolute', 'margin-top':'545px', 'margin-left':'0px'});
        $('#UFItitle').css({'visibility':'hidden'});
        $('#hoveredUFI').css({'visibility':'visible'});
}, function() {
    $('#FS').show();
    $('#UFIFS').css({'visibility':'hidden'});
    $('#UFItitle').css({'visibility':'visible'});
    $('#hoveredUFI').css({'visibility':'hidden'});
});

$('#DM').hover(
    function(){
        $('#FS').hide();
        $('#DMFS').css({'visibility':'visible', 'position':'absolute', 'margin-top':'545px', 'margin-left':'265px'});
        $('#DMtitle').css({'visibility':'hidden'});
        $('#hoveredDM').css({'visibility':'visible'});
}, function() {
    $('#FS').show();
    $('#DMFS').css({'visibility':'hidden'});
    $('#DMtitle').css({'visibility':'visible'});
    $('#hoveredDM').css({'visibility':'hidden'});
});

$('#FS').hover(
    function(){
        $('#DM').hide();
        $('#FSDM').css({'visibility':'visible', 'position':'absolute', 'margin-top':'545px', 'margin-left':'265px '});
        $('#FStitle').css({'visibility':'hidden'});
        $('#hoveredFS').css({'visibility':'visible'});
}, function() {
    $('#DM').show();
    $('#FSDM').css({'visibility':'hidden'});
    $('#FStitle').css({'visibility':'visible'});
    $('#hoveredFS').css({'visibility':'hidden'});
});