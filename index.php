<!DOCTYPE html>
<html lang="EN">
    <head data-version="<?php echo file_get_contents("version.php") ;?>">
        <title>HiveTasks</title>
        <meta charset="UTF-8">
        <meta name="description" content="Welcome to HiveTasks - Your favorite Tool for the Hive Blockchain.">
        <meta name="keywords" content="hive,tool,dashboard,statistics,blockchain">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link type="text/css" rel="stylesheet" href="/res/css/jquery-ui-1.12.1-base/jquery-ui.min.css">
        <link type="text/css" rel="stylesheet" href="/res/css/fonts.css">
        <link type="text/css" rel="stylesheet" href="/res/css/main.min.css?v=2396">
        <script src="/res/js/sw.libs.min.js" defer></script>
        <script src="/res/js/sw.out.min.js" defer></script>
        <script src="/res/js/pr.js" defer></script>
        <!-- Matomo -->
        <script>
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.hivetasks.com/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- End Matomo Code -->
    </head>
    <body class="responsive">
        <section id="pageContent" data-module="<?php
        echo isset($_GET['data-module']) ? $_GET['data-module'] : "main"
        ?>" data-account="<?php
                 echo isset($_GET['account']) ? $_GET['account'] : "{account}"
                 ?>" data-theme="" data-cfg="{cfg}" data-login="{login}" data-block_num="<?php
                 echo isset($_GET['block_num']) ? $_GET['block_num'] : "{block_num}"
                 ?>" data-trx_id="<?php
                 echo isset($_GET['trx_id']) ? $_GET['trx_id'] : "{trx_id}"
                 ?>" data-trx_index="<?php
                 echo isset($_GET['trx_index']) ? $_GET['trx_index'] : "{trx_index}"
                 ?>" data-virtual_op="<?php
                 echo isset($_GET['virtual_op']) ? $_GET['virtual_op'] : "{virtual_op}"
                 ?>" data-author="<?php
                 echo isset($_GET['author']) ? $_GET['author'] : "{author}"
                 ?>" data-permlink="<?php
                 echo isset($_GET['permlink']) ? $_GET['permlink'] : "{permlink}"
                 ?>"></section>
        <noscript id="pageNoScript">
        <h3>
            Please enable JavaScript to enter HiveTasks...
            <br><br>
            <a href="#">Try again</a>
        </h3>
        </noscript>

    </body>
</html>
