

const pujaForm = document.getElementById("pujaForm");

pujaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("🙏 धन्यवाद! तुमची पूजा बुकिंग विनंती प्राप्त झाली आहे. आम्ही लवकरच संपर्क करू.");

    pujaForm.reset();
});
