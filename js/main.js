//comment here testing
$(document).ready(function () {
  console.log("ready!");
});

$(document).ready(function () {
  console.log("zebra tooltip working");
  new $.Zebra_Tooltips($(".zebra_tooltips"), {
    max_width: 300,
    max_height: 200,
    //position: "right",
  });
});

$(".my-news-ticker").AcmeTicker({
  controls: {
    prev: $(".acme-news-ticker-prev"),
    toggle: $(".acme-news-ticker-pause"),
    next: $(".acme-news-ticker-next"),
  },
});

$(".my-news-ticker").AcmeTicker({
  type: "horizontal",
});
