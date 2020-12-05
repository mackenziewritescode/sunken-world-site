# Personal Web Dev Portfolio

This is the code for my personal portfolio, which you can find [here](https://www.sunkenworld.com/).

Since you came all the way here, why not have a quick look at some of the code?

This site was written with React and uses a couple libraries to make things easier: useIntersection from [react-use](https://github.com/streamich/react-use) and the inimitable [GSAP](https://greensock.com/gsap/). useIntersection was used to eliminate the need for several useIntersect components using React's useEffect() hook and JavaScript's IntersectionObserver(), which is a little tedious. Meanwhile, GSAP was used to animate each component based on their intersection reference points.

This project would have been quite a bit easier if I had wanted each element to only animate once, as most sites with animated elements do. Since I wanted to make something a bit more complex, however, I gave myself the challenge of animating the elements both when they come into view, as well as when the leave view of the reader. That in itself is fairly simple, but a difficulty arose: 
