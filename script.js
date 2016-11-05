function start() {
    document.getElementById('p_readyToStart').style.opacity = '0';
    document.getElementById('btn_start').style.opacity = '0';
    document.getElementById('btn_start').style.pointer = 'default';
    setTimeout(function () {
        document.getElementById('intro_screen').style.display = 'none';
        document.getElementById('frame_div').style.display = 'initial';
        setTimeout(function () {
            document.getElementById('frame_div').style.opacity = '1';
            valign();
        }, 5);
    }, 495);
    setTimeout(function(){//Start the video
        document.getElementById('video').play();
    }, 1000)
}

function valign(){
    video.style.marginTop = (frame.offsetHeight / 2 - 200)+'px';
}
function imageGet() {
  google.load('search', '1');

      var imageSearch;

      function addPaginationLinks() {

        // To paginate search results, use the cursor function.
        var cursor = imageSearch.cursor;
        var curPage = cursor.currentPageIndex; // check what page the app is on
        var pagesDiv = document.createElement('div');
        for (var i = 0; i < cursor.pages.length; i++) {
          var page = cursor.pages[i];
          if (curPage == i) {

          // If we are on the current page, then don't make a link.
            var label = document.createTextNode(' ' + page.label + ' ');
            pagesDiv.appendChild(label);
          } else {

            // Create links to other pages using gotoPage() on the searcher.
            var link = document.createElement('a');
            link.href="/image-search/v1/javascript:imageSearch.gotoPage("+i+');';
            link.innerHTML = page.label;
            link.style.marginRight = '2px';
            pagesDiv.appendChild(link);
          }
        }

        var contentDiv = document.getElementById('content');
        contentDiv.appendChild(pagesDiv);
      }

      function searchComplete() {

        // Check that we got results
        if (imageSearch.results && imageSearch.results.length > 0) {

          // Grab our content div, clear it.
          var contentDiv = document.getElementById('content');
          contentDiv.innerHTML = '';

          // Loop through our results, printing them to the page.
          var results = imageSearch.results;
          for (var i = 0; i < results.length; i++) {
            // For each result write it's title and image to the screen
            var result = results[i];
            var imgContainer = document.createElement('div');
            var title = document.createElement('div');

            // We use titleNoFormatting so that no HTML tags are left in the
            // title
            title.innerHTML = result.titleNoFormatting;
            var newImg = document.getElementById('img');

            // There is also a result.url property which has the escaped version
            newImg.src="/image-search/v1/result.tbUrl;"
            imgContainer.appendChild(title);

            // Put our title + image in the content
            contentDiv.appendChild(imgContainer);
          }

          // Now add links to additional pages of search results.
          addPaginationLinks(imageSearch);
        }
      }

      function OnLoad() {

        // Create an Image Search instance.
        imageSearch = new google.search.ImageSearch();

        // Set searchComplete as the callback function when a search is
        // complete.  The imageSearch object will have results in it.
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Find me a beautiful car.
        imageSearch.execute("Cute");

        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }
      google.setOnLoadCallback(OnLoad);
}

window.onresize = valign;
window.onload = valign;
