import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      showHideAnimationType: 'none',
      pswpModule: () => import('photoswipe'),
    });

    // lightbox.on('loadComplete', ({ content, slide }) => {
    //   console.log(content);
    //   // let img = content.element;
    //   content.height = 200;
    //   content.width = 200;
    //   content.data.height = 200;
    //   content.data.width = 200;
    //   content.data.h = 200;
    //   content.data.w = 200;
    // });

    // lightbox.on('loadComplete', function(index, item) {
      
    //   var linkEl = item.el.children[0];
    //   var img = item.container.children[0];
    //   if (!linkEl.getAttribute('data-size')) {
    //     linkEl.setAttribute('data-size', img.naturalWidth + 'x' + img.naturalHeight);
    //     item.w = img.naturalWidth;
    //     item.h = img.naturalHeight;
    //     lightbox.invalidateCurrItems();
    //     lightbox.updateSize(true);
    //   }
    // });

    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el, pswp) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
              }
            }
            el.innerHTML = captionHTML || '';
          });
        }
      });
    });
    

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={image.description} src={image.thumbnailURL} className={index == 0 ? "w-full h-full object-center object-cover" : "hidden"} />
        </a>
      ))}
    </div>
  );
}
