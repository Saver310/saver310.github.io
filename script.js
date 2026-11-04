const images = ["head1.png","head2.png","head3.png","head4.png"];
document.addEventListener('DOMContentLoaded', _ => {
  const randImageIndex = ~~(Math.random() * images.length);
  document.getElementById('lil_fella').src = images[randImageIndex];
});
