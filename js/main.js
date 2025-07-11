 AOS.init();
    emailjs.init('PPaKpoxN5C8GpIdqb');
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();
      emailjs.sendForm('service_m3gqi4s', 'template_m1b0ayr', this)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Pendaftaran Berhasil!',
            text: 'Kami telah menerima pendaftaran Anda.',
            confirmButtonColor: '#10B981',
            background: '#ECFDF5',
            color: '#065F46',
            iconColor: '#10B981'
          });
          this.reset();
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Mengirim!',
            text: 'Terjadi kesalahan: ' + error.text,
            confirmButtonColor: '#EF4444',
            background: '#FEF2F2',
            color: '#991B1B',
            iconColor: '#DC2626'
          });
        });
    });
