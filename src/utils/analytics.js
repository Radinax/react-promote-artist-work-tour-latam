export const trackAnalytics = (
  information, component, position = 0, type, content,
) => {
  const code = {
    ecommerce: {},
  };

  const data = [];
  let elements = [];
  const isCarousel = information && information.length > 0;

  if (information) {
    if (!Array.isArray(information)) {
      elements.push(information);
    } else { elements = information; }

    if (elements.length > 0) {
      elements.map((elem, i) => {
        const trackData = {
          name: elem.title || elem.image_title,
          category: elem.type || component,
          list: component,
        };

        if (isCarousel && position) {
          trackData.position = position + i;
        } else {
          trackData.position = position ? position + 1 : i + 1;
        }

        if (elem.channel) trackData.brand = elem.channel.name;
        if (elem.main_category) trackData.dimension2 = elem.main_category;
        if (elem.categories && elem.categories[0]) trackData.dimension3 = elem.categories[0].name;
        if (elem.categories && elem.categories[1]) trackData.dimension3 += ` ${elem.categories[1].name}`;
        if (elem.channel && elem.channel.codes && (elem.channel.codes.length > 0)) {
          const keys = elem.channel.codes.map(key => Object.keys(key));
          trackData.dimension5 = keys.join(' ');
        }
        if (elem.show) trackData.dimension4 = elem.show;
        if (elem.type) trackData.dimension6 = elem.type;
        if (elem.episode) trackData.dimension7 = elem.episode;
        if (elem.season) trackData.dimension8 = elem.season;
        if (elem.video_type || elem.videoType) {
          trackData.dimension9 = elem.video_type || elem.videoType;
        }
        if (elem.video_id) trackData.dimension10 = elem.video_id;
        if (elem.preview_image && elem.preview_image.image_file) {
          trackData.id = elem.preview_image.image_file;
        }
        if (elem.title) trackData.dimension17 = elem.title;
        if (elem.label) trackData.dimension18 = elem.label;

        return data.push(trackData);
      });

      if (type === 'click') {
        code.event = 'productClick';
        code.label = content;
        code.ecommerce.click = {
          actionField: {
            list: component,
          },
          products: data,
        };
      } else if (type === 'details') {
        code.event = 'product-details';
        code.ecommerce.detail = {
          products: data,
        };
      } else {
        code.event = 'product-list-impressions';
        code.ecommerce.impressions = data;
      }

      if (typeof dataLayer === 'object') {
      // eslint-disable-next-line no-undef
        dataLayer.push(code);
      }
    }
  }
};

export const trackSimpleEvent = (
  category, action, label,
) => {
  const code = {
    event: 'ga_event',
    category,
    action,
    label,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackSponsor = (
  sponsor, component, position, type,
) => {
  const code = {
    ecommerce: {},
  };

  const dataSponsor = [{
    id: sponsor.id,
    name: sponsor.name,
    creative: component,
    position: position + 1,
  }];

  if (type === 'click') {
    code.event = 'promo-click';
    code.ecommerce.promoClick = {
      promotions: dataSponsor,
    };
  } else {
    code.event = 'promo-view';
    code.ecommerce.promoView = {
      promotions: dataSponsor,
    };
  }

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackVirtualPage = (title) => {
  const code = {
    event: 'ga_event_virtualpage',
    title,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackVideo = (
  video, status,
) => {
  const code = {
    event: 'ga_event_video',
    category: 'Video',
    action: status,
    label: video.title || video,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackYouTube = (
  status,
) => {
  const code = {
    event: 'Livestream (YouTube)',
    category: 'Video',
    action: 'Livestream (YouTube)',
    label: status,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackGallery = (
  action, label,
) => {
  const code = {
    event: 'ga_event_gallery',
    category: 'Gallery',
    action,
    label,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const trackContent = (
  contentId,
) => {
  const code = {
    event: 'ga_event_content',
    contentId,
  };

  if (typeof dataLayer === 'object') {
    // eslint-disable-next-line no-undef
    dataLayer.push(code);
  }
};

export const componentsNames = {
  mainBanner: {
    component: 'Main Banner',
  },
  opening: {
    component: 'Opening',
  },
  videoClips: {
    component: 'Videos',
  },
  episodes: {
    component: 'Episodes',
  },
  galleries: {
    component: 'Galleries',
  },
  gallery: {
    component: 'Gallery',
  },
  related: {
    component: 'Related Content',
  },
  highlighted: {
    component: 'Highlighted',
  },
  recommended: {
    component: 'Recommended',
  },
  entertaiment: {
    component: 'Real Entertaiment',
  },
  lifestyle: {
    component: 'Lifestyle',
  },
  kids: {
    component: 'Discovery Kids Play',
  },
  popular: {
    component: 'Popular',
  },
  recent: {
    component: 'Recent',
  },
  programs: {
    component: 'Programs',
  },
  search: {
    component: 'Search Results',
  },
  videoPremier: {
    component: 'Video Premier',
  },
  videoClip: {
    component: 'Video Clip',
  },
  videoRelated: {
    component: 'Related Videos',
  },
  slider: {
    component: 'Slider',
  },
  bannerSlider: {
    component: 'Banner Slider',
  },
};

export const trackClevertap = (video, action, options = {}) => {
  let videoData = options;
  if (video) {
    videoData = {
      ...videoData,
      network: (video.channel && video.channel.name) || '',
      mainCategory: video.main_category,
      showTitle: video.show,
      EpisodeTitle: video.title,
      numEpisode: video.episode,
      season: video.season,
      playlistname: '',
      duration: video.duration,
    };
  }

  clevertap.event.push(action, videoData);//eslint-disable-line
};
