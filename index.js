document.addEventListener('DOMContentLoaded', function() {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    
    // Function to open the envelope
    function openEnvelope() {
        envelope.classList.add('opened');
        setTimeout(() => {
            letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
            letter.style.overflowY = 'auto';
            openBtn.style.display = 'none'; // Hide open button when envelope is opened
        }, 500);
    }
    
    // Function to close the envelope
    function closeEnvelope() {
        envelope.classList.remove('opened');
        letter.style.overflowY = 'hidden';
        setTimeout(() => {
            envelopeWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
            openBtn.style.display = 'block'; // Show open button when envelope is closed
        }, 300);
    }
    
    // Add click event to the open button
    openBtn.addEventListener('click', openEnvelope);
    
    // Add click event to the close button
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        closeEnvelope();
    });
    
    // Keep the envelope wrapper click functionality as well
    envelopeWrapper.addEventListener('click', function() {
        if (!envelope.classList.contains('opened')) {
            openEnvelope();
        }
    });
    
    // Add some subtle movement to the envelope on mouse move
    document.addEventListener('mousemove', function(e) {
        if (!envelope.classList.contains('opened')) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            envelope.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1)`;
        }
    });
    
    // Reset transform on mouse leave
    document.addEventListener('mouseleave', function() {
        if (!envelope.classList.contains('opened')) {
            envelope.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        }
    });
    
    // Prevent click events on the letter from closing the envelope
    letter.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
