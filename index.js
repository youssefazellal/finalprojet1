document.getElementById('submitBtn').addEventListener('click', function() {
    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const input3 = document.getElementById('input3').value.trim();
  
    if (input1 === '') {
      document.getElementById('error1').classList.remove('hidden');
    } else {
      document.getElementById('error1').classList.add('hidden');
    }
  
    if (input2 === '') {
      document.getElementById('error2').classList.remove('hidden');
    } else {
      document.getElementById('error2').classList.add('hidden');
    }
  
    if (input3 === '') {
      document.getElementById('error3').classList.remove('hidden');
    } else {
      document.getElementById('error3').classList.add('hidden');
    }
  });

  
  const imageContainer = document.getElementById('imageContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const images = [
  'https://i.postimg.cc/QCgTFJQv/luxury-classic-modern-bedroom-suite-hotel-1.png',
  'https://i.postimg.cc/B6pCy3yj/luxury-classic-modern-bedroom-suite-hotel-1-copy.png',
  'https://i.postimg.cc/8cnmpHTD/luxury-classic-modern-bedroom-suite-hotel-2-copy.png',
];

function updateImage() {
  imageContainer.querySelector('img').src = images[currentIndex];
}

prevBtn.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
