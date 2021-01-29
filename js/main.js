
/* ---------- 関数 ---------- */
function keisan(start_t, end_t) {
  const wd = "2000/01/01";
  const startDate = new Date(`${wd} ${start_t}`);
  const endDate = new Date(`${wd} ${end_t}`);
  const elapseMs = endDate - startDate;
  return msToTimeString(elapseMs);
}

function msToTimeString(ms) {
    //1minute = 60000ms
    //1hour = 60minutes = 3600000ms
    const hour = Math.floor(ms / 3600000);
    const minute = Math.floor((ms - 3600000 * hour) / 60000);
    const hh = ("00" + hour).slice(-2);
    const mm = ("00" + minute).slice(-2);
    return `${hh}:${mm}`;
}

function keisan_add(start_t, end_t) {
  const wd = "2000/01/01";
  const startDate = new Date(`${wd} ${start_t}`);
  const endDate = new Date(`${wd} ${end_t}`);
  const elapseMs = endDate - startDate;
  return msToTimeString(elapseMs);
}


/* ---------- ボタン ---------- */

$(function() {
  $('#button_keisan').on('click', function(){
    var old_ki = $('#old_ki').val();
    var old_ji = $('#old_ji').val();
    var old_de = $('#old_de').val();
    var in_de = $('#in_de').val();

    // 起床～電車までの時間
    var ki2de = keisan(old_ki, old_de);
    // 自宅～電車までの時間
    var ji2de = keisan(old_ji, old_de);

    // 電車
    $('#new_de').text(in_de);
    // 自宅発
    $('#new_ji').text(keisan(ji2de, in_de));

    // 起床
    $('#new_ki').text(keisan(ki2de, in_de));


  });
});

/* Clear */
$(function() {
  $('#button_clear').on('click', function(){
    $('#old_ki').val("");
    $('#old_ji').val("");
    $('#old_de').val("");
    $('#in_de').val("");
  });
});
