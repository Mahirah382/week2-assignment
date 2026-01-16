const thumbnailContainer = document.querySelector('.thumbnails')

const images = [
    { scr: 'https://images.unsplash.com/photo-1768310512589-5925669f1784?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'an image of a historic japanese pagoda',
    },

    { scr: 'https://images.unsplash.com/photo-1768215592110-6283f76ac552?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'an image of a train and canyons in a desert',
    },

    { scr: 'https://images.unsplash.com/photo-1558271736-cd043ef2e855?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'an image of venice buildings and streets',
    },

    { scr: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'an image of architecture in rome, italy',
    },
]

function createThumbnails() {
    images.forEach(function(image){
        const imageElement = document.createElement('img')

        imageElement.src = image.src
        imageElement.alt = image.alt

        thumbnailContainer.append(imageElement)
    })
}
