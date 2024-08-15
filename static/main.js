var windowWidth = $(window).width();
layer.config({
  extend: 'kzhomepage/style.css', //加载扩展样式
  skin: 'layer-ext-kzhomepage'
});

// Nav buttons
$('.kz-nav-btn').on('click', function() {
  let btn = $(this);
  let type = btn.data('window') // pop current newtab
  let content = btn.data('href')
  switch (type) {
    case 'pop':
      let title = btn.data('title')
      let shadeClose = btn.data('shade') === 'true' ? false : true
      let anim = btn.data('anim') ? btn.data('anim')*1 : 4
      let area_w = btn.data('area-w') ? btn.data('area-w') : '80%'
      let area_h = btn.data('area-h') ? btn.data('area-h') : '90%'
      layer.open({
          type: 2,
          title: title,
          shadeClose: shadeClose,
          anim:anim,
          closeBtn: 2,
          isOutAnim: false,
          area: [area_w, area_h],
          content: content
      });
      break;
    case 'current':
      window.location = content
      break;
    case 'newtab':
      window.open('_blank').location = content
      break;
  }
});

console.log(
    "\n" +
      " %c KZHomePage v1.2.0-Modified by XiaozhiSans" +
      " %c https://xsawa.dev.tc/XiaozhiSans/ \n" +
      "\n",
    "color: #fff; background: #fd79a8; padding: 5px 0;",
    "background: #fff; padding: 5px 0;"
);

fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=f')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.title = hitokoto.innerText = data.hitokoto
    }).catch(console.error)
