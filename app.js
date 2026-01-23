const thumbnailContainer = document.querySelector('.thumbnails')
const bigDisplay = document.getElementById('bigDisplay')

const images = [
    { src: 'https://images.unsplash.com/photo-1760236970108-eedb7add75d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'a historic japanese pagoda',
    },

    { src: 'https://images.unsplash.com/photo-1768215592110-6283f76ac552?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'a train and canyons in a desert',
    },

    { src: 'https://images.unsplash.com/photo-1558271736-cd043ef2e855?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'venice buildings and streets',
    },

    { src: 'https://images.unsplash.com/photo-1574864745093-5566c5be5855?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'pyraminds in Giza, Egypt',
    },
]

function createThumbnails() {
    images.forEach(function(image,i){
        const imageElement = document.createElement('img')

        imageElement.src = image.src
        imageElement.alt = image.alt

        imageElement.classList.add("thumbnail")
        if (i === 0) {
          imageElement.classList.add("active")
          createBigImage(image)
        }

        imageElement.addEventListener('click', function () {
          createBigImage(imageElement, image)
        })

        thumbnailContainer.append(imageElement)
    })
}

createThumbnails()

function createBigImage(image) {
  bigDisplay.innerHTML = ''
  const bigImage= document.createElement('img');

  bigImage.src = image.src
  bigImage.alt = image.alt

  bigDisplay.append (bigImage)
}

document.addEventListener('keydown', function(event) {
  console.log(event)
  if (event.key === "ArrowRight") { 

     const current = document.querySelector('.thumbnail.active')
     const next = current.nextElementSibling || document.querySelector('.thumbnail')

     current.classList.remove('active')
     next.classList.add('active')

     bigDisplay.innerHTML = ''
     const bigImage = document.createElement('img')
     bigImage.src = next.src 
     bigDisplay.append(bigImage)

  return;
  }
})

