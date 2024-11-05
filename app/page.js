import Link from "next/link";
import NAV from "./nav";
export default function Home() {
  const imageContainer = document.querySelector('.image-container');
        const images = document.querySelectorAll('.image');
        const moveAmount = 30; 

        function handleMovement(e) {
            const { offsetWidth, offsetHeight } = imageContainer;
            const { clientX, clientY } = e;
            const { top, left } = imageContainer.getBoundingClientRect();
            const centerX = left + offsetWidth / 2;
            const centerY = top + offsetHeight / 2;

            const moveX = ((clientX - centerX) / offsetWidth) * moveAmount;
            const moveY = ((clientY - centerY) / offsetHeight) * moveAmount;
            images[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        imageContainer.addEventListener('mousemove', handleMovement);

        imageContainer.addEventListener('mouseleave', () => {
            images.forEach(image => {
                image.style.transform = `translate(0, 0)`;
            });
        });
  return (
    <>
        
    </>
  );
}
