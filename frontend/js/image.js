function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
        alert('Image must be under 5MB.');
        e.target.value = '';
        return;
    }

    const ocr = document.getElementById('ocr-text');

    if (ocr) {
        ocr.value = '';
        ocr.placeholder = 'Click Analyze to extract text from the image.';
    }

    const reader = new FileReader();

    reader.onload = ev => {
        const thumb = document.getElementById('img-thumb');

        thumb.src = ev.target.result;
        thumb.classList.remove('hidden');

        document.getElementById('img-placeholder').classList.add('hidden');
        document.getElementById('img-name').textContent = file.name;
        document.getElementById('img-name').classList.remove('hidden');
        document.getElementById('img-preview').classList.remove('hidden');
    };

    reader.readAsDataURL(file);
}

function removeImage() {
    document.getElementById('img-preview').classList.add('hidden');
    document.getElementById('img-upload').value = '';

    const thumb = document.getElementById('img-thumb');
    thumb.removeAttribute('src');
    thumb.classList.add('hidden');

    const nameEl = document.getElementById('img-name');
    nameEl.textContent = '';
    nameEl.classList.add('hidden');

    document.getElementById('img-placeholder').classList.remove('hidden');

    const ocr = document.getElementById('ocr-text');

    if (ocr) {
        ocr.value = '';
        ocr.placeholder = 'Extracted text will appear here after OCR.';
    }
}