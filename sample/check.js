var get = function(id) { return document.getElementById(id); }

var example1 = example1 || {};
example1.handleFileSelect = function(evt) {
  var files = evt.target.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  get('file_list').innerHTML = '<ul>' + output.join('') + '</ul>';
}
get('files1').addEventListener('change', example1.handleFileSelect, false);

var example2 = example2 || {};
example2.onDragOver = function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

example2.onDragFileDrop = function(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  get('file_list2').innerHTML = '<ul>' + output.join('') + '</ul>';
}

// Setup the dnd listeners.
get('drop_zone').addEventListener('dragover', example2.onDragOver, false);
get('drop_zone').addEventListener('drop', example2.onDragFileDrop, false);


var example3 = example3 || {};
example3.handleFileSelect = function(evt) {
  var files = evt.target.files; // FileList object.

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Need a closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        get('thumbnails').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}
get('files3').addEventListener('change', example3.handleFileSelect, false);

var example4 = example4 || {};
example4.readBlob = function(opt_startByte, opt_stopByte) {
  var files = get('file4').files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var start = parseInt(opt_startByte) || 0;
  var stop = parseInt(opt_stopByte) || file.size - 1;

  var reader = new FileReader();

  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      get('byte_content').textContent = evt.target.result;
      get('byte_range').textContent = ['Read bytes: ', start + 1, ' - ', stop + 1,
                                       ' of ', file.size, ' byte file'].join('');
    }
  };
  reader.readAsBinaryString(file.slice(start, stop + 1));
};
document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
  if (evt.target.tagName.toLowerCase() == 'button') {
    var startByte = evt.target.getAttribute('data-startbyte');
    var stopByte = evt.target.getAttribute('data-endbyte');
    example4.readBlob(startByte, stopByte);
  }
}, false);

function Example5(id) {
  var reader_;
  var progress_ = document.querySelector('.percent');
  var self = this;

  this.abortRead = function() {
    reader_.abort();
  };

  this.errorHandler = function(evt) {
    switch(evt.target.error.code) {
      case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
      case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
      case evt.target.error.ABORT_ERR:
        break; // noop
      default:
        alert('An error occurred reading this file.');
    };
  };

  this.updateProgress = function(evt) {
    // evt is a ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress_.style.width = percentLoaded + '%';
        progress_.textContent = percentLoaded + '%';
      }
    }
  };

  this.handleFileSelect = function(evt) {
    // Reset progress indicator on new file selection.
    progress_.style.width = '0%';
    progress_.textContent = '0%';

    reader_ = new FileReader();
    reader_.onerror = self.errorHandler;
    reader_.onprogress = self.updateProgress;
    reader_.onabort = function(e) {
      alert('File read cancelled');
    };
    reader_.onloadstart = function(e) {
      get('progress_bar').className = 'loading';
    };
    reader_.onload = function(e) {
      // Ensure that the progress bar displays 100% at the end.
      progress_.style.width = '100%';
      progress_.textContent = '100%';
      setTimeout("get('progress_bar').className='';", 2000);
    }

    // Read in the image file as binary string.
    reader_.readAsBinaryString(evt.target.files[0]);
  };

  get(id).addEventListener('change', self.handleFileSelect, false);
};
var example5 = new Example5('file5');


      var disqus_shortname = 'html5rocks';
      var disqus_identifier = 'http://www.html5rocks.com/tutorials/file/dndfiles/';
      var disqus_url = 'http://www.html5rocks.com/tutorials/file/dndfiles/';
      var disqus_developer = 0;

      var disqus_config = function () {
        var funky_language_code_mapping = {
          'de': 'de_inf',
          'es': 'es_ES',
          'pt': 'pt_EU',
          'sr': 'sr_CYRL',
          'sv': 'sv_SE',
          'zh': 'zh_HANT'
        };
        this.language = funky_language_code_mapping['en'] ||
                        'en';

        this.callbacks.onReady = [ function () {
                                      try {
                                        ga('send', 'event', 'View comments');
                                      } catch(err){}
                                   } ];
        this.callbacks.onNewComment = [ function (comment) {
                                          try {
                                            ga('send', 'event', 'Commented');
                                          } catch(err){}
                                        } ];
      };

      window.addEventListener('load', function(e) {

        var c = document.createElement('script');
        c.type = 'text/javascript';
        c.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
        c.async = true;

        var s = document.getElementsByTagName('script')[0], sp = s.parentNode;
        sp.insertBefore(c, s);

        if (window.location.hash === '#disqus_thread')
          loadComments();

      }, false);

      var disqus_loaded = false;
      function loadComments() {

        if (disqus_loaded)
          return;

        disqus_loaded = true;

        ga('send', 'event', 'Interactions', 'Comments', 'Comments Loaded');

        var s = document.getElementsByTagName('script')[0], sp = s.parentNode;
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;

        var disqusContainer = document.getElementById('disqus');
        disqusContainer.classList.add('active');

        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        sp.insertBefore(dsq, s);
      }

      function outgoing(url) {
        try {
          ga('send', 'event', 'Outbound Links' , url);
        } catch(err){}
      }
      // Open external links (also that don't have a target defined) in a new tab.
      var externLinks = document.querySelectorAll('article.tutorial a[href^="http"]:not([target])');
      for(var i = 0, a; a = externLinks[i]; ++i) {
        a.target = '_blank';
        a.addEventListener('click', new Function('outgoing(' + '"' + a.href.replace(/.*?:\/\//g, "") + '"' + ');'));
      }

      var loadCommentsButtons = document.querySelectorAll('.load-comments');
      for(var l = 0; l < loadCommentsButtons.length; l++)
        loadCommentsButtons[l].addEventListener('click', loadComments);

    window.isCompatible = function() {
      
  return !!(window.File) && !!(window.FileReader) && !!(window.FileList) && !!(window.Blob);

    };

    if (isCompatible() === false) {
      document.getElementById('notcompatible').className = '';
    }

    function _prettyPrint() {
      if (typeof customPrettyPrintLanguage != 'undefined') {
        customPrettyPrintLanguage();
      }
      prettyPrint();
    }

  (function() {

    // Kill feedburner and marketing tracking arguments, but let them register
    // before we do it.
    setTimeout(function() {
      if (/^\?utm_/.test(document.location.search) &&
          window.history.replaceState) {
        window.history.replaceState(
            {}, '', document.location.href.replace(/\?utm_.*/, ''));
      }
    }, 2000);

    var siteHeader = document.getElementById('siteheader');
    var navToggle = document.getElementById('navtoggle');
    var siteNav = document.getElementById('sitenav');

    function toggle(target, forceActive) {

      if (typeof toc !== 'undefined') {
        // Switch off whichever one is not the
        // current target
        if (target === toc)
          siteNav.classList.remove('active');
        else
          toc.classList.remove('active');
      }

      // Toggle if no force parameter is set
      if (typeof forceActive === 'undefined') {
        target.classList.toggle('active');
      } else {
        if (forceActive)
          target.classList.add('active');
        else
          target.classList.remove('active');
      }

      // now find out what the set state ended up being
      var isActive = target.classList.contains('active');

      if (isActive)
        siteHeader.classList.add('expanded');
      else
        siteHeader.classList.remove('expanded');

    }

    navToggle.addEventListener('click', function(e) {
      toggle(siteNav);
      e.preventDefault();
    });

    

    var tocToggle = document.getElementById('toctoggle');
    var toc = document.getElementById('toc');
    var articleMeta = document.getElementById('article-meta');
    var articleContent = document.getElementById('article-content');
    var articleMetaHeight = 0;
    var articleMetaMaxY = 0;
    var articleMetaMinY = 0;
    var articleContentPadding = 200;

    var tocLinks = document.querySelectorAll('.toc a');
    for (var t = 0; t < tocLinks.length; t++)
      tocLinks[t].addEventListener('click', onTocLinkClick);

    tocToggle.addEventListener('click', function(e) {
      toggle(toc);
      e.preventDefault();
    });

    toc.addEventListener('click', function(e) {
      if (e.target !== siteNav)
        toggle(toc, false);
    });

    function onTocLinkClick() {
      ga('send', 'event', 'Interactions', 'TOC', 'TOC Clicked');
    }

    function setMinScrollYFromMetaY() {
      var scrollPosition = window.scrollY;

      var articleMetaBounds = articleMeta.getBoundingClientRect();
      var articleMetaTop = Math.max(352,
          articleMetaBounds.top - 20 + scrollPosition);

      articleMetaHeight = articleMetaBounds.bottom - articleMetaBounds.top;
      articleMetaMinY = articleMetaTop;
    }

    function setMaxScrollYFromContentHeight() {

      var scrollPosition = window.scrollY;

      var articleContentBounds = articleContent.getBoundingClientRect();
      var articleContentTop = articleContentBounds.top + scrollPosition;
      var articleContentHeight = articleContentBounds.bottom - articleContentBounds.top;

      articleMetaMaxY = articleContentTop +
          articleContentHeight -
          articleMetaHeight -
          articleContentPadding;

    }

    function onScroll(e) {

      if (window.scrollY >= articleMetaMinY) {

        articleMeta.classList.add('sticky');

        var articleMetaTop = 22 - Math.max(0, window.scrollY - articleMetaMaxY);
        articleMeta.style.top = articleMetaTop + 'px';

      } else {
        articleMeta.classList.remove('sticky');
        articleMeta.style.top = 'auto';
      }
    }

    if (articleMeta.getBoundingClientRect) {
      setMinScrollYFromMetaY();
      setMaxScrollYFromContentHeight();
      document.addEventListener('scroll', onScroll);
      window.addEventListener('load', setMaxScrollYFromContentHeight, false);
    }

    
  })();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-15028909-1', 'auto');
  ga('create', 'UA-49880327-4', 'auto', {'name': 'html5rocks'});

  ga('send', 'pageview');
  ga('html5rocks.send', 'pageview');

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB3LRF');
  var files = get('file4').files;
