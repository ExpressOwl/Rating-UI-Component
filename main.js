const stars = document.querySelectorAll('.star');
const emojiEl = document.querySelector('.emoji');
const statusEl = document.querySelector('.status');
const defaultRatingIndex = 0;

let currentRatingIndex = 0;

const ratings = [
  { emoji: "✨", status: "Rating"},
  { emoji: "😔", status: "Very Bad"},
  { emoji: "🙁", status: "Bad"},
  { emoji: "😁", status: "Good" },
  { emoji: "🤩", status: "Very Good"},
  { emoji: "🥰", status: "Excellent"}
];

const setRating = (index) => {
  stars.forEach(star => star.classList.remove("selected"));
  if(index > 0 && index <= stars.length){
    document.querySelector(`[data-rate="${index}"]`).classList.add('selected');
  }
  emojiEl.innerHTML = ratings[index].emoji;
  statusEl.innerHTML = ratings[index].status
}

const checkSelectedStar = (star) => {
  if(parseInt(star.getAttribute("data-rate")) === currentRatingIndex){
    return true;
  } else {
    return false;
  }
}

const resetRating = () => {
  currentRatingIndex = defaultRatingIndex;
  setRating(defaultRatingIndex);
}

stars.forEach((star) => {
  star.addEventListener('click', () => {
    if(checkSelectedStar(star)){
      resetRating();
      return;
    }
    const index = parseInt(star.getAttribute("data-rate"));
    currentRatingIndex = index;
    setRating(index);
  });

  star.addEventListener('mouseover', () => {
    const index = parseInt(star.getAttribute("data-rate"));
    setRating(index);
  });

  star.addEventListener('mouseout', () => {
    setRating(currentRatingIndex);
  });
})

document.addEventListener('DOMContentLoaded', () => {
  setRating(defaultRatingIndex);
})